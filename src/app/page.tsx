import type { Metadata } from "next";
import Image from "next/image";
import {
  Calendar,
  Timer,
  TrendingUp,
  BookOpen,
  Users,
  Heart,
  Check,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Habbit - Habit Tracker | Stick to Your Goals",
  description:
    "Habbit helps you build lasting habits with smart scheduling, beautiful analytics, streaks, and a friends system to keep you accountable. Available on iPhone and iPad.",
};

// ── iPhone Screenshot ─────────────────────────────────────────────────────────

function IPhoneScreenshot() {
  return (
    <div className="relative flex items-center justify-center">
      <Image
        src="/iphone_home.webp"
        alt="Habbit app home screen"
        width={300}
        height={620}
        className="animate-float drop-shadow-2xl"
        style={{ maxWidth: "300px", width: "100%", height: "auto" }}
        sizes="300px"
        priority
      />
    </div>
  );
}

// ── Feature Card ─────────────────────────────────────────────────────────────

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#374151]/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="w-11 h-11 rounded-xl bg-[#374151]/10 border border-[#374151]/15 flex items-center justify-center mb-4 text-[#374151] group-hover:scale-110 transition-transform duration-200">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-gray-900 mb-1.5">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}

// ── AppStore Button ──────────────────────────────────────────────────────────

function AppStoreButton({
  size = "default",
  variant = "primary",
}: {
  size?: "default" | "large";
  variant?: "primary" | "outline";
}) {
  const base =
    "inline-flex items-center gap-2.5 font-semibold rounded-xl transition-all duration-200 select-none";
  const sizeClasses =
    size === "large" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm";
  const variantClasses =
    variant === "primary"
      ? "bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl"
      : "bg-transparent text-gray-700 border border-[#E5E7EB] hover:bg-[#374151]/5 hover:border-[#374151]/40";

  return (
    <a
      href="#"
      className={`${base} ${sizeClasses} ${variantClasses}`}
      aria-label="Download Habbit on the App Store (coming soon)"
    >
      <svg
        width={size === "large" ? "20" : "18"}
        height={size === "large" ? "20" : "18"}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <span>Download on the App Store</span>
    </a>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const features = [
    {
      icon: <Calendar size={22} />,
      title: "Smart Scheduling",
      description:
        "Set habits for daily, weekly, or fully custom schedules. Habbit adapts to your lifestyle, not the other way around.",
    },
    {
      icon: <Timer size={22} />,
      title: "Timer Habits",
      description:
        "Built-in countdown timers with Live Activities on your Lock Screen — stay focused without unlocking your phone.",
    },
    {
      icon: <TrendingUp size={22} />,
      title: "Streaks & Analytics",
      description:
        "Visualise your consistency with beautiful charts and streaks that reward every day you show up.",
    },
    {
      icon: <BookOpen size={22} />,
      title: "Weekly Wraps",
      description:
        "Receive a personalised Sunday summary of your week — see what worked and where to improve.",
    },
    {
      icon: <Users size={22} />,
      title: "Friends",
      description:
        "Follow friends, see their progress, and send motivational nudges to keep each other on track.",
    },
    {
      icon: <Heart size={22} />,
      title: "HealthKit",
      description:
        "Automatically log steps, calories, and distance from Apple Health. Your data stays on your device.",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-gray-900 overflow-x-hidden">
      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center pt-16"
        aria-labelledby="hero-heading"
      >
        {/* Subtle background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute top-0 right-0 w-[700px] h-[600px] opacity-[0.06]"
            style={{
              background:
                "radial-gradient(ellipse at top right, #374151 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            {/* Text */}
            <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-gray-400" />
                Coming soon to the App Store
              </div>

              <h1
                id="hero-heading"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.08]"
              >
                Build habits
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #374151 0%, #6B7280 60%, #9CA3AF 100%)",
                  }}
                >
                  that stick.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Habbit makes it easy to track your daily habits, stay
                consistent, and reach your goals — with beautiful analytics and
                friends to keep you accountable.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start pt-2">
                <AppStoreButton size="large" variant="primary" />
                <a
                  href="#features"
                  className="px-7 py-3.5 text-base font-semibold rounded-xl text-gray-600 hover:text-gray-900 border border-[#E5E7EB] hover:border-[#374151]/30 hover:bg-[#374151]/5 transition-all duration-200"
                >
                  Learn more
                </a>
              </div>

              {/* Sub-note */}
              <p className="text-sm text-gray-400 pt-1">
                Free to download &middot; No account required &middot; iOS 16+
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center order-1 lg:order-2">
              <IPhoneScreenshot />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section
        id="features"
        className="py-24 lg:py-32 relative bg-[#F3F4F6]"
        aria-labelledby="features-heading"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#374151] uppercase tracking-widest mb-3">
              Everything you need
            </p>
            <h2
              id="features-heading"
              className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight"
            >
              Built for consistency.
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Every feature in Habbit is designed to reduce friction and help
              you show up every day.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>

          {/* Extra callout */}
          <div className="mt-8 p-6 rounded-2xl bg-white border border-[#E5E7EB] flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#374151]/10 flex items-center justify-center text-[#374151] shrink-0">
              <Shield size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                iCloud sync &amp; dark mode
              </h3>
              <p className="text-sm text-gray-500">
                Your habits sync seamlessly across all your Apple devices via
                iCloud. No account needed — and dark mode is fully supported.
              </p>
            </div>
            <AppStoreButton size="default" variant="outline" />
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section
        id="pricing"
        className="py-24 lg:py-32 bg-[#FFFFFF]"
        aria-labelledby="pricing-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#374151] uppercase tracking-widest mb-3">
              Simple pricing
            </p>
            <h2
              id="pricing-heading"
              className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight"
            >
              Start free. Go further
              <br />
              with Pro.
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Try Habbit for free, then unlock everything with a 3-day free
              trial of Habbit Pro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Free card */}
            <div className="relative p-7 rounded-2xl bg-white border border-[#E5E7EB] flex flex-col">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Free</h3>
                <p className="text-gray-500 text-sm">
                  Everything you need to get started.
                </p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-400 ml-1.5 text-sm">forever</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Up to 6 habits",
                  "All features included",
                  "iCloud sync",
                  "Dark mode",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={16} className="text-gray-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <AppStoreButton size="default" variant="outline" />
            </div>

            {/* Pro card */}
            <div className="relative p-7 rounded-2xl flex flex-col border-2 border-gray-900 bg-gray-50">
              {/* Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="px-3.5 py-1 text-xs font-bold rounded-full bg-gray-900 text-white uppercase tracking-wide">
                  Most Popular
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Habbit Pro
                </h3>
                <p className="text-gray-500 text-sm">
                  No limits.
                </p>
              </div>

              <div className="mb-1">
                <span className="text-4xl font-bold text-gray-900">$4.99</span>
                <span className="text-gray-400 ml-1.5 text-sm">/ month</span>
              </div>
              <p className="text-sm text-gray-500 font-medium mb-6">
                or $29.99/year — save 50% &middot; 3-day free trial
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Unlimited habits",
                  "All features included",
                  "iCloud sync",
                  "Dark mode",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={16} className="text-gray-700 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200"
              >
                Start 3-day free trial
              </a>
              <p className="text-center text-xs text-gray-400 mt-3">
                No payment until trial ends. Cancel anytime.
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            Subscription managed through Apple. Cancel anytime in your iPhone
            Settings.
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="py-24 lg:py-32 bg-[#F3F4F6]"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-5"
          >
            Ready to build better
            <br />
            habits?
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto">
            Download Habbit for free and start your journey today. Your future
            self will thank you.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <AppStoreButton size="large" variant="primary" />
          </div>
          <p className="mt-5 text-sm text-gray-400">
            Free to download &middot; No account required &middot; iOS 16+
          </p>
        </div>
      </section>
    </div>
  );
}
