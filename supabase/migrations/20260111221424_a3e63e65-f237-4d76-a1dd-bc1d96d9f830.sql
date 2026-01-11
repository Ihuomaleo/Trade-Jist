-- Add UPDATE policy for custom_currency_pairs for completeness
CREATE POLICY "Users can update their own custom pairs"
ON public.custom_currency_pairs
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);