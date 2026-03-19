import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Habbit",
  description:
    "Get help with Habbit — Habit Tracker. Browse our FAQ or contact our support team.",
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
