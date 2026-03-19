import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = 2025;

  return (
    <footer className="bg-[#F3F4F6] border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 group w-fit"
              aria-label="Habbit home"
            >
              <div className="w-8 h-8 rounded-[10px] overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/logo.webp"
                  alt="Habbit logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-bold text-gray-900 tracking-tight">
                Habbit
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Build habits that stick. Track your daily goals, stay consistent,
              and reach your full potential.
            </p>
            <p className="text-xs text-gray-400">
              Available on iPhone &amp; iPad
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Legal
            </h3>
            <nav className="space-y-2" aria-label="Footer legal links">
              <Link
                href="/privacy"
                className="block text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Support
            </h3>
            <nav className="space-y-2" aria-label="Footer support links">
              <Link
                href="/support"
                className="block text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                Help &amp; FAQ
              </Link>
              <a
                href="mailto:info@get-habbit.com"
                className="block text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                info@get-habbit.com
              </a>
            </nav>
            <div className="pt-1">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            &copy; {currentYear} Habbit. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Made with care for iPhone users everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
