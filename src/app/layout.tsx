import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Habbit - Habit Tracker | Stick to Your Goals",
  description:
    "Habbit helps you build lasting habits with smart scheduling, beautiful analytics, streaks, and a friends system to keep you accountable. Available on iPhone and iPad.",
  keywords: [
    "habit tracker",
    "habit app",
    "iOS habit tracker",
    "daily habits",
    "streak tracker",
    "goal tracker",
    "habbit",
  ],
  authors: [{ name: "Habbit" }],
  creator: "Habbit",
  publisher: "Habbit",
  metadataBase: new URL("https://get-habbit.com"),
  openGraph: {
    title: "Habbit - Habit Tracker | Stick to Your Goals",
    description:
      "Build lasting habits with smart scheduling, streaks, analytics, and friends. The habit tracker designed for iPhone.",
    url: "https://get-habbit.com",
    siteName: "Habbit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Habbit - Habit Tracker | Stick to Your Goals",
    description:
      "Build lasting habits with smart scheduling, streaks, analytics, and friends.",
  },
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
