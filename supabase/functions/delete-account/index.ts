import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Verify authorization
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Missing authorization header' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Create Supabase client with user's JWT
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

    // User client for verification
    const supabaseUser = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } }
    })

    // Verify the user
    const { data: { user }, error: userError } = await supabaseUser.auth.getUser()
    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: 'Invalid or expired token' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const userId = user.id

    // Admin client for deletion operations
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false }
    })

    // Delete user's avatar from storage
    const { data: avatarFiles } = await supabaseAdmin.storage
      .from('avatars')
      .list(userId)
    
    if (avatarFiles && avatarFiles.length > 0) {
      const filePaths = avatarFiles.map(file => `${userId}/${file.name}`)
      await supabaseAdmin.storage.from('avatars').remove(filePaths)
    }

    // Delete user's trade screenshots from storage
    const { data: screenshotFiles } = await supabaseAdmin.storage
      .from('trade-screenshots')
      .list(userId)
    
    if (screenshotFiles && screenshotFiles.length > 0) {
      const filePaths = screenshotFiles.map(file => `${userId}/${file.name}`)
      await supabaseAdmin.storage.from('trade-screenshots').remove(filePaths)
    }

    // Delete user's trades
    const { error: tradesError } = await supabaseAdmin
      .from('trades')
      .delete()
      .eq('user_id', userId)
    
    if (tradesError) {
      console.error('Error deleting trades:', tradesError)
    }

    // Delete user's custom currency pairs
    const { error: pairsError } = await supabaseAdmin
      .from('custom_currency_pairs')
      .delete()
      .eq('user_id', userId)
    
    if (pairsError) {
      console.error('Error deleting custom pairs:', pairsError)
    }

    // Delete user's profile
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .delete()
      .eq('user_id', userId)
    
    if (profileError) {
      console.error('Error deleting profile:', profileError)
    }

    // Delete the user account
    const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(userId)
    
    if (deleteError) {
      console.error('Error deleting user:', deleteError)
      return new Response(
        JSON.stringify({ error: 'Failed to delete account' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Account deleted successfully' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
