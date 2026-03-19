import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Habbit",
  description:
    "Habbit's Privacy Policy. Learn how we handle your data, what we collect, and how we keep your information secure.",
};

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mt-4">Privacy Policy</h1>
          <p className="text-gray-500 mt-2">
            Effective date: <time dateTime="2025-03-01">March 1, 2025</time>
          </p>
        </div>

        {/* Intro */}
        <div className="prose-habbit">
          <p>
            Habbit (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
            committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you use our iOS application, Habbit — Habit Tracker (the
            &quot;App&quot;), and our website at{" "}
            <a href="https://get-habbit.com">get-habbit.com</a> (the
            &quot;Site&quot;).
          </p>
          <p>
            Please read this policy carefully. By using the App or Site, you
            agree to the practices described here. If you do not agree with the
            terms of this policy, please do not access or use the App.
          </p>

          {/* 1 */}
          <h2>1. Information We Collect</h2>
          <p>
            We are committed to minimal data collection. Here is a precise
            breakdown of what data is processed when you use Habbit:
          </p>

          <h3>a) iCloud Data (Apple-managed)</h3>
          <p>
            Habbit uses Apple iCloud (specifically CloudKit) to sync your habit
            data — including your habit names, schedules, completion records,
            and streak counts — across your Apple devices. This data is stored
            in your personal iCloud account and is governed entirely by{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple&apos;s Privacy Policy
            </a>
            . We do not have access to, nor do we store, this data on our own
            servers.
          </p>

          <h3>b) HealthKit Data (on-device only)</h3>
          <p>
            If you grant permission, Habbit reads health metrics from Apple
            HealthKit — including step count, active calories burned, and
            distance walked or run. This data is used solely within the App to
            auto-complete HealthKit-linked habits.{" "}
            <strong>HealthKit data is never transmitted to our servers</strong>,
            never shared with third parties, and never used for advertising or
            any purpose beyond the in-app functionality you enabled.
          </p>

          <h3>c) Subscription &amp; Purchase Data (RevenueCat)</h3>
          <p>
            We use RevenueCat to manage in-app subscriptions (Habbit Pro).
            RevenueCat processes anonymous purchase receipts from the Apple App
            Store in order to verify your subscription status. RevenueCat
            assigns anonymous user identifiers and does not receive your name,
            email address, or other personally identifiable information from us.
            You can review RevenueCat&apos;s privacy practices at{" "}
            <a
              href="https://www.revenuecat.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              revenuecat.com/privacy
            </a>
            .
          </p>

          <h3>d) Analytics Data (PostHog)</h3>
          <p>
            We use PostHog to collect anonymous, aggregated usage analytics.
            This helps us understand how the App is used so we can improve it.
            The data collected includes:
          </p>
          <ul>
            <li>Anonymous device and session identifiers</li>
            <li>App version and iOS version</li>
            <li>Feature interaction events (e.g., &quot;habit completed&quot;, &quot;timer started&quot;)</li>
            <li>General geographic region (country-level only)</li>
          </ul>
          <p>
            We do not collect your name, email, or any information that directly
            identifies you. PostHog data is used exclusively for product
            improvement purposes. You can review PostHog&apos;s privacy
            practices at{" "}
            <a
              href="https://posthog.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              posthog.com/privacy
            </a>
            .
          </p>

          <h3>e) Contact &amp; Support Communications</h3>
          <p>
            If you contact us via email (info@get-habbit.com) or through the
            support form on our website, we will receive your email address and
            the contents of your message. We use this information solely to
            respond to your inquiry and provide support.
          </p>

          {/* 2 */}
          <h2>2. Information We Do NOT Collect</h2>
          <p>To be explicit, Habbit does NOT:</p>
          <ul>
            <li>Require account creation or email registration</li>
            <li>Collect your name or email address through the App</li>
            <li>Transmit HealthKit data to any server</li>
            <li>Use advertising SDKs or sell data to advertisers</li>
            <li>Track your location</li>
            <li>Access your contacts, camera, or microphone (except as explicitly triggered by you for features)</li>
            <li>Share personal data with third parties for marketing purposes</li>
          </ul>

          {/* 3 */}
          <h2>3. How We Use Your Information</h2>
          <p>The limited information we process is used for the following purposes:</p>
          <ul>
            <li>
              <strong>App functionality:</strong> Syncing your habits and
              progress across devices via iCloud.
            </li>
            <li>
              <strong>Subscription management:</strong> Verifying your Habbit
              Pro subscription status via RevenueCat.
            </li>
            <li>
              <strong>Product improvement:</strong> Understanding how the App is
              used through anonymous PostHog analytics.
            </li>
            <li>
              <strong>Customer support:</strong> Responding to inquiries
              submitted via email or the support form.
            </li>
          </ul>

          {/* 4 */}
          <h2>4. Data Storage and Security</h2>
          <p>
            Your habit data is stored in your personal Apple iCloud account and
            is protected by Apple&apos;s industry-leading security and
            encryption standards. We do not operate any Habbit-specific
            backend servers that store personal habit data.
          </p>
          <p>
            Anonymous analytics data processed by PostHog and subscription data
            processed by RevenueCat are stored on their respective secure
            cloud infrastructure with appropriate technical and organisational
            safeguards.
          </p>
          <p>
            While no method of transmission or electronic storage is 100%
            secure, we take commercially reasonable measures to protect
            information against loss, theft, and misuse.
          </p>

          {/* 5 */}
          <h2>5. Third-Party Services</h2>
          <p>
            Habbit integrates with the following third-party services. Each
            operates under its own privacy policy:
          </p>
          <ul>
            <li>
              <strong>Apple iCloud / CloudKit</strong> —{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                apple.com/legal/privacy
              </a>
            </li>
            <li>
              <strong>Apple HealthKit</strong> — governed by Apple&apos;s
              privacy framework; data never leaves your device via Habbit
            </li>
            <li>
              <strong>RevenueCat</strong> (subscription management) —{" "}
              <a
                href="https://www.revenuecat.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                revenuecat.com/privacy
              </a>
            </li>
            <li>
              <strong>PostHog</strong> (anonymous analytics) —{" "}
              <a
                href="https://posthog.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                posthog.com/privacy
              </a>
            </li>
          </ul>
          <p>
            We do not integrate with any advertising networks, data brokers, or
            social media tracking SDKs.
          </p>

          {/* 6 */}
          <h2>6. Children&apos;s Privacy</h2>
          <p>
            Habbit is not directed to children under the age of 13 (or the
            applicable minimum age in your jurisdiction). We do not knowingly
            collect personal information from children. If you believe a child
            has provided us with personal information, please contact us at{" "}
            <a href="mailto:info@get-habbit.com">info@get-habbit.com</a>{" "}
            and we will promptly delete such information.
          </p>

          {/* 7 */}
          <h2>7. Your Rights and Choices</h2>
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information:
          </p>
          <ul>
            <li>
              <strong>Access &amp; portability:</strong> You can view all your
              habit data within the App. Since it is stored in your iCloud
              account, you can export or delete it via your Apple ID settings.
            </li>
            <li>
              <strong>Deletion:</strong> Deleting the App and clearing your
              iCloud data via Apple&apos;s settings will remove your habit data.
              To request deletion of any data held by RevenueCat or PostHog on
              our behalf, contact us at{" "}
              <a href="mailto:info@get-habbit.com">info@get-habbit.com</a>
              .
            </li>
            <li>
              <strong>Analytics opt-out:</strong> You can limit ad tracking via
              iOS Settings → Privacy → Tracking, which also affects our
              analytics identifiers.
            </li>
            <li>
              <strong>HealthKit permissions:</strong> You can revoke HealthKit
              access at any time via iOS Settings → Privacy → Health.
            </li>
          </ul>

          {/* 8 */}
          <h2>8. International Transfers</h2>
          <p>
            Anonymous analytics data processed by PostHog may be stored on
            servers located outside your country of residence. We ensure
            appropriate safeguards are in place in accordance with applicable
            data protection law.
          </p>

          {/* 9 */}
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we
            will revise the &quot;Effective date&quot; at the top of this page.
            For significant changes, we will provide additional notice within
            the App or via our website. Your continued use of the App after
            changes constitutes your acceptance of the updated policy.
          </p>

          {/* 10 */}
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us:
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
          <p>
            We aim to respond to all privacy-related inquiries within 30 days.
          </p>
        </div>
      </div>
    </div>
  );
}
