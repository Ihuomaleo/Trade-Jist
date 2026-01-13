import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-profit flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold">Terms of Service</h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground text-lg">
              Last updated: January 13, 2026
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Trade Journal, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                Trade Journal is a web-based application designed to help forex traders log, analyze, and improve their trading performance. The service includes features for trade logging, performance analytics, and journaling capabilities.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                To access Trade Journal, you must create an account using email/password authentication or through Google Sign-In. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
                <li>Providing accurate and complete registration information</li>
              </ul>
            </section>

            <section className="space-y-4 bg-card/50 p-6 rounded-xl border border-border">
              <h2 className="text-2xl font-semibold text-foreground">Google API Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Trade Journal uses Google APIs to provide authentication services. By using Google Sign-In, you also agree to Google's Terms of Service.
              </p>
              <p className="text-foreground leading-relaxed font-medium">
                Trade Journal's use and transfer of information received from Google APIs to any other app will adhere to the{' '}
                <a 
                  href="https://developers.google.com/terms/api-services-user-data-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Use the service for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the service</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Upload malicious code or content</li>
                <li>Impersonate any person or entity</li>
                <li>Use the service to transmit spam or unsolicited communications</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Your Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                You retain ownership of all trading data and content you submit to Trade Journal. By using our service, you grant us a limited license to store and display your data solely for the purpose of providing the service to you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information or trading data to third parties. Please refer to our{' '}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                {' '}for detailed information about how we handle your data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Trade Journal is not a financial advisor.</strong> The service is provided for informational and journaling purposes only. We do not provide investment advice, trading recommendations, or financial guidance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trading forex and other financial instruments involves substantial risk of loss and is not suitable for all investors. Past performance recorded in Trade Journal is not indicative of future results.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Trade Journal shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses resulting from:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Your use or inability to use the service</li>
                <li>Any unauthorized access to your data</li>
                <li>Any trading decisions made based on information in the service</li>
                <li>Any interruption or cessation of the service</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to maintain high availability of Trade Journal but do not guarantee uninterrupted access. We may modify, suspend, or discontinue any aspect of the service at any time without prior notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to terminate or suspend your account at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You may terminate your account at any time through the Settings page. Upon termination, your right to use the service will immediately cease.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on this page. Your continued use of the service after such changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us through the application's support channels.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2026 Trade Journal. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
