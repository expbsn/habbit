"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Mail, MessageCircle, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "How do I restore my habits after reinstalling the app?",
    answer: (
      <p>
        Habbit uses iCloud to automatically sync and back up all your habits.
        When you reinstall the app and sign in with the same Apple ID, your
        habits, streaks, and history will restore automatically — no manual
        backup needed. Make sure iCloud is enabled for Habbit in{" "}
        <strong>Settings → [Your Name] → iCloud</strong> and that you have an
        active internet connection when you first open the app.
      </p>
    ),
  },
  {
    question: "How does iCloud sync work across my devices?",
    answer: (
      <p>
        Habbit uses Apple CloudKit to keep your data in sync across all your
        Apple devices signed in with the same Apple ID. Changes you make on one
        device will appear on your other devices within seconds, as long as both
        are connected to the internet and have iCloud enabled. You don&apos;t
        need to do anything — it all happens automatically in the background.
      </p>
    ),
  },
  {
    question: "How do I cancel my Habbit Pro subscription?",
    answer: (
      <div>
        <p>To cancel your Habbit Pro subscription:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1 text-gray-600">
          <li>Open the Settings app on your iPhone or iPad</li>
          <li>Tap your name at the top, then tap Subscriptions</li>
          <li>Find &quot;Habbit&quot; in the list and tap it</li>
          <li>Tap Cancel Subscription and confirm</li>
        </ol>
        <p className="mt-2">
          You can also manage subscriptions directly in the App Store. Your Pro
          access will continue until the end of the current billing period. You
          will not be charged again after cancellation.
        </p>
      </div>
    ),
  },
  {
    question: "How do I connect HealthKit to track steps and calories?",
    answer: (
      <p>
        To enable HealthKit integration, go to <strong>Settings</strong> within
        Habbit and tap <strong>Connect Apple Health</strong>. You&apos;ll be
        prompted to grant permission for the specific health data types you want
        to auto-track (such as steps, active calories, and distance). Once
        connected, habits linked to HealthKit metrics will be automatically
        completed when you hit your daily target. You can revoke access at any
        time via{" "}
        <strong>iPhone Settings → Privacy &amp; Security → Health → Habbit</strong>.
      </p>
    ),
  },
  {
    question: "Why aren't my habit notifications working?",
    answer: (
      <div>
        <p>If you&apos;re not receiving reminders, please check:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
          <li>
            <strong>App notifications enabled:</strong> Go to iPhone Settings →
            Notifications → Habbit and make sure Allow Notifications is on.
          </li>
          <li>
            <strong>Focus / Do Not Disturb:</strong> Check that your active
            Focus mode allows Habbit notifications.
          </li>
          <li>
            <strong>Notification set on habit:</strong> Open the habit in Habbit
            and confirm a reminder time is configured.
          </li>
          <li>
            <strong>Background App Refresh:</strong> Enable it for Habbit in
            Settings → General → Background App Refresh.
          </li>
        </ul>
        <p className="mt-2">
          If the issue persists, try deleting and re-setting the reminder on
          your habit.
        </p>
      </div>
    ),
  },
  {
    question: "How do I add friends and see their progress?",
    answer: (
      <p>
        The Friends feature is available with Habbit Pro. To add a friend, tap
        the <strong>Friends</strong> tab at the bottom of the app, then tap{" "}
        <strong>Add Friend</strong>. You can invite friends by sharing your
        unique Habbit link or searching by their username. Once they accept,
        you&apos;ll be able to see their habit completion streaks and send
        motivational nudges. Friends cannot see the specific names of your
        habits — only your overall completion rate and streak counts.
      </p>
    ),
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-2xl bg-white border border-gray-200 overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
          >
            <span className="text-sm font-medium text-gray-900">
              {faq.question}
            </span>
            <ChevronDown
              size={18}
              className={cn(
                "text-gray-400 shrink-0 transition-transform duration-200",
                openIndex === i && "rotate-180"
              )}
              aria-hidden="true"
            />
          </button>
          <div
            id={`faq-answer-${i}`}
            className={cn(
              "overflow-hidden transition-all duration-300",
              openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed [&_p]:mb-2 [&_strong]:text-gray-800">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

type FormStatus = "idle" | "sending" | "success" | "error";

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Habbit Support] ${form.subject === "billing" ? "Billing" : form.subject === "bug" ? "Bug Report" : form.subject === "feature" ? "Feature Request" : "General Inquiry"}: ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:info@get-habbit.com?subject=${subject}&body=${body}`;
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 rounded-full bg-[#34C759]/15 border border-[#34C759]/30 flex items-center justify-center mx-auto mb-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#34C759"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Message sent!
        </h3>
        <p className="text-sm text-gray-500">
          Your email client should have opened. We&apos;ll get back to you
          within 1–2 business days.
        </p>
        <button
          className="mt-6 text-sm text-gray-600 hover:text-gray-900 hover:underline"
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", subject: "general", message: "" });
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition-all text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition-all text-sm"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition-all text-sm"
        >
          <option value="general">General question</option>
          <option value="bug">Bug report</option>
          <option value="billing">Billing / subscription</option>
          <option value="feature">Feature request</option>
          <option value="privacy">Privacy inquiry</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your issue or question in as much detail as possible..."
          className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition-all text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-50 transition-all duration-200"
      >
        <Mail size={16} aria-hidden="true" />
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      <p className="text-xs text-center text-gray-400">
        This will open your email client. We aim to respond within 1–2 business
        days.
      </p>
    </form>
  );
}

export default function SupportPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-gray-900 mb-6 inline-flex items-center gap-1 transition-colors"
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 tracking-tight">
            How can we help?
          </h1>
          <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto">
            Find answers to common questions, or get in touch with our support
            team.
          </p>
        </div>

        {/* Quick links */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {[
            {
              icon: <BookOpen size={20} />,
              title: "FAQ",
              desc: "Common questions answered",
              href: "#faq",
            },
            {
              icon: <Mail size={20} />,
              title: "Email Support",
              desc: "info@get-habbit.com",
              href: "mailto:info@get-habbit.com",
            },
            {
              icon: <MessageCircle size={20} />,
              title: "Contact Form",
              desc: "Send us a message below",
              href: "#contact",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center text-gray-700 group-hover:scale-110 transition-transform shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-heading" className="mb-20">
          <div className="mb-8">
            <h2
              id="faq-heading"
              className="text-2xl font-bold text-gray-900 mb-2"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm">
              Can&apos;t find what you&apos;re looking for? Scroll down to
              contact us.
            </p>
          </div>
          <FAQAccordion />
        </section>

        {/* Contact form */}
        <section id="contact" aria-labelledby="contact-heading">
          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
            <div className="mb-8">
              <h2
                id="contact-heading"
                className="text-2xl font-bold text-gray-900 mb-2"
              >
                Get in touch
              </h2>
              <p className="text-gray-500 text-sm">
                Still need help? Send us a message and we&apos;ll get back to
                you within 1–2 business days.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                You can also email us directly at{" "}
                <a
                  href="mailto:info@get-habbit.com"
                  className="text-gray-700 hover:underline font-medium"
                >
                  info@get-habbit.com
                </a>
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Privacy note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            We take your privacy seriously. Read our{" "}
            <Link href="/privacy" className="text-gray-600 hover:underline">
              Privacy Policy
            </Link>{" "}
            to learn how we handle your data.
          </p>
        </div>
      </div>
    </div>
  );
}
