import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Habbit",
  description:
    "Habbit's Terms of Service and End User License Agreement. Please read before using the app.",
};

export default function TermsPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:underline mb-6 inline-flex items-center gap-1"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M5 12l7 7M5 12l7-7" />
            </svg>
            Back to home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mt-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Also serves as the End User License Agreement (EULA)
          </p>
          <p className="text-gray-500 mt-1">
            Effective date: <time dateTime="2025-03-01">March 1, 2025</time>
          </p>
        </div>

        <div className="prose-habbit">
          <p>
            Please read these Terms of Service (&quot;Terms&quot;) carefully
            before downloading or using Habbit — Habit Tracker (the
            &quot;App&quot;) and the website at{" "}
            <a href="https://get-habbit.com">get-habbit.com</a> (the
            &quot;Site&quot;), operated by Habbit (&quot;we,&quot;
            &quot;our,&quot; or &quot;us&quot;).
          </p>
          <p>
            By downloading, installing, or using the App, you acknowledge that
            you have read, understood, and agree to be bound by these Terms and
            our{" "}
            <Link href="/privacy">Privacy Policy</Link>, which is incorporated
            herein by reference. If you do not agree, do not use the App.
          </p>

          {/* 1 */}
          <h2>1. Acceptance of Terms</h2>
          <p>
            These Terms constitute a legally binding agreement between you and
            Habbit. You must be at least 13 years of age (or the applicable
            minimum age in your country) to use the App. By using the App, you
            represent and warrant that you meet this age requirement and have
            the legal capacity to enter into these Terms.
          </p>

          {/* 2 */}
          <h2>2. Description of Service</h2>
          <p>
            Habbit is an iOS habit-tracking application that allows users to
            create, schedule, and track personal habits. The App includes
            features such as streak tracking, progress analytics, timer-based
            habits, HealthKit integration, iCloud sync, a friends system, and
            (for Pro subscribers) advanced analytics and weekly summaries.
          </p>
          <p>
            We reserve the right to modify, suspend, or discontinue any aspect
            of the App at any time, with or without notice, without liability to
            you.
          </p>

          {/* 3 */}
          <h2>3. License Grant</h2>
          <p>
            Subject to your compliance with these Terms, Habbit grants you a
            limited, non-exclusive, non-transferable, revocable license to
            download and use the App on Apple devices that you own or control,
            solely for your personal, non-commercial purposes.
          </p>
          <p>You may not:</p>
          <ul>
            <li>
              Copy, modify, or create derivative works based on the App or its
              content
            </li>
            <li>
              Reverse-engineer, decompile, or disassemble any portion of the
              App
            </li>
            <li>
              Rent, lease, sell, sublicense, or transfer your rights in the App
            </li>
            <li>
              Remove any proprietary notices or labels in or on the App
            </li>
            <li>
              Use the App in any way that violates applicable law or these Terms
            </li>
          </ul>

          {/* 4 */}
          <h2>4. Subscription Terms — Habbit Pro</h2>

          <h3>4.1 Subscription Plans</h3>
          <p>Habbit Pro is available as an auto-renewing subscription:</p>
          <ul>
            <li>
              <strong>Monthly:</strong> $4.99 USD per month
            </li>
            <li>
              <strong>Yearly:</strong> $29.99 USD per year (approximately $2.50
              per month — a saving of approximately 50% compared to the monthly
              plan)
            </li>
          </ul>
          <p>
            Prices may vary by country or region and are displayed in your local
            currency in the App Store at the time of purchase.
          </p>

          <h3>4.2 Free Trial</h3>
          <p>
            New Habbit Pro subscribers may receive a 3-day free trial. The free
            trial is available only to users who have not previously subscribed
            to Habbit Pro. At the end of the trial period, your subscription
            will automatically convert to a paid subscription unless you cancel
            before the trial ends.
          </p>

          <h3>4.3 Billing and Renewal</h3>
          <p>
            Subscriptions are billed through your Apple ID account via the Apple
            App Store. Your subscription will automatically renew at the end of
            each billing period unless you cancel at least 24 hours before the
            renewal date. Your Apple ID account will be charged within 24 hours
            prior to the end of the current period.
          </p>

          <h3>4.4 Cancellation</h3>
          <p>
            You may cancel your subscription at any time through your iPhone or
            iPad Settings:
          </p>
          <ul>
            <li>Go to Settings → [Your Name] → Subscriptions</li>
            <li>Select Habbit and choose Cancel Subscription</li>
          </ul>
          <p>
            Cancellation takes effect at the end of the current billing period.
            You will retain access to Pro features until that date. We do not
            offer refunds for partial subscription periods except where required
            by applicable law.
          </p>

          <h3>4.5 Free Tier Limitations</h3>
          <p>
            The free tier of Habbit allows you to create and track up to six (6)
            habits. Additional features, including unlimited habits, advanced
            analytics, weekly wraps, the friends feature, and HealthKit
            integration, require an active Habbit Pro subscription.
          </p>

          <h3>4.6 Price Changes</h3>
          <p>
            We reserve the right to change subscription prices at any time.
            Price changes will be communicated to you in advance and will apply
            at your next renewal date. Continued use of Habbit Pro after a price
            change constitutes your acceptance of the new pricing.
          </p>

          {/* 5 */}
          <h2>5. Apple App Store Terms</h2>
          <p>
            The App is distributed through the Apple App Store. The following
            terms apply with respect to Apple:
          </p>
          <ul>
            <li>
              These Terms are between you and Habbit only, not with Apple, Inc.
              (&quot;Apple&quot;). Apple is not responsible for the App or its
              content.
            </li>
            <li>
              Apple has no obligation to provide any maintenance or support for
              the App.
            </li>
            <li>
              In the event of any failure of the App to conform to any
              applicable warranty, you may notify Apple, and Apple will refund
              the purchase price for the App (if any) to you. To the maximum
              extent permitted by applicable law, Apple has no other warranty
              obligation with respect to the App.
            </li>
            <li>
              Apple is not responsible for addressing any claims by you or any
              third party relating to the App, including: (i) product liability
              claims; (ii) claims that the App fails to conform to any
              applicable legal or regulatory requirement; and (iii) claims
              arising under consumer protection or similar legislation.
            </li>
            <li>
              Apple and Apple&apos;s subsidiaries are third-party beneficiaries
              of these Terms, and upon your acceptance, Apple will have the
              right (and will be deemed to have accepted the right) to enforce
              these Terms against you as a third-party beneficiary.
            </li>
          </ul>

          {/* 6 */}
          <h2>6. User Content and Conduct</h2>
          <p>
            You are responsible for all content you create within the App,
            including habit names and messages sent to friends. By using the
            App, you agree not to:
          </p>
          <ul>
            <li>
              Use the App for any unlawful purpose or in violation of any
              applicable laws or regulations
            </li>
            <li>
              Harass, abuse, or harm other users through the friends or messaging
              features
            </li>
            <li>
              Attempt to gain unauthorised access to any systems or networks
              connected to the App
            </li>
            <li>
              Interfere with or disrupt the integrity or performance of the App
              or its related services
            </li>
          </ul>

          {/* 7 */}
          <h2>7. Intellectual Property</h2>
          <p>
            The App, including its original content, features, functionality,
            design, and all associated intellectual property rights, are and will
            remain the exclusive property of Habbit and its licensors. Our
            trademarks, trade dress, logos, and service marks may not be used in
            connection with any product or service without our prior written
            consent.
          </p>
          <p>
            Nothing in these Terms transfers any ownership of intellectual
            property to you.
          </p>

          {/* 8 */}
          <h2>8. Privacy</h2>
          <p>
            Your use of the App is also governed by our{" "}
            <Link href="/privacy">Privacy Policy</Link>, which describes how we
            collect and use information about you. By using the App, you consent
            to the practices described in our Privacy Policy.
          </p>

          {/* 9 */}
          <h2>9. Third-Party Services</h2>
          <p>
            The App integrates with third-party services including Apple iCloud,
            Apple HealthKit, RevenueCat, and PostHog. Your use of these services
            is subject to their respective terms and privacy policies. We are not
            responsible for the practices of these third parties.
          </p>

          {/* 10 */}
          <h2>10. Disclaimer of Warranties</h2>
          <p>
            THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot;
            WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
            BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
            FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p>
            We do not warrant that: (i) the App will be uninterrupted, timely,
            secure, or error-free; (ii) the results obtained from using the App
            will be accurate or reliable; or (iii) any errors in the App will be
            corrected. Some jurisdictions do not allow the exclusion of certain
            warranties, so some of the above exclusions may not apply to you.
          </p>

          {/* 11 */}
          <h2>11. Limitation of Liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
            HABBIT, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
            INCLUDING LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR
            IN CONNECTION WITH YOUR USE OF THE APP OR THESE TERMS.
          </p>
          <p>
            OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING UNDER THESE TERMS
            SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE THREE (3) MONTHS
            PRECEDING THE CLAIM.
          </p>
          <p>
            Some jurisdictions do not allow the limitation or exclusion of
            liability for incidental or consequential damages, so the above
            limitation may not apply to you.
          </p>

          {/* 12 */}
          <h2>12. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Habbit and its
            officers, directors, employees, and agents from and against any
            claims, liabilities, damages, judgments, awards, losses, costs,
            expenses, or fees (including reasonable legal fees) arising out of
            or relating to your violation of these Terms or your use of the App.
          </p>

          {/* 13 */}
          <h2>13. Termination</h2>
          <p>
            We may suspend or terminate your access to the App at any time, with
            or without cause or notice. Upon termination, your license to use
            the App ceases immediately. All provisions of these Terms that by
            their nature should survive termination shall survive.
          </p>
          <p>
            You may stop using the App at any time. If you have an active Habbit
            Pro subscription, you must cancel it separately through your Apple
            ID settings.
          </p>

          {/* 14 */}
          <h2>14. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            applicable law, without regard to its conflict of law provisions. Any
            disputes arising under these Terms shall be resolved through
            good-faith negotiation. If no resolution is reached, disputes shall
            be subject to the exclusive jurisdiction of the courts in your
            applicable jurisdiction.
          </p>

          {/* 15 */}
          <h2>15. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. When we
            make changes, we will update the &quot;Effective date&quot; at the
            top of this page. For material changes, we will provide notice within
            the App or via our website. Your continued use of the App after such
            changes constitutes your acceptance of the revised Terms.
          </p>

          {/* 16 */}
          <h2>16. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or
            invalid, that provision will be limited or eliminated to the minimum
            extent necessary, and the remaining provisions of these Terms will
            remain in full force and effect.
          </p>

          {/* 17 */}
          <h2>17. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@get-habbit.com">
                info@get-habbit.com
              </a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a href="https://get-habbit.com/support">
                get-habbit.com/support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
