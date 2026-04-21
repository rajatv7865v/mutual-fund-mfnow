"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactUsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.55, ease: "easeOut" },
  } as const;

  return (
    <div className="min-h-screen bg-[#f2f9f6]">
      <header className="sticky top-0 z-20 border-b border-[#cfe5dc] bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#01573c] to-[#01432f] text-lg font-semibold text-white shadow-md shadow-[#01573c]/20">
              MF
            </span>
            <span className="rounded-md bg-[#01573c] px-2 py-1 text-xs font-semibold tracking-wide text-white">
              Grow
            </span>
            <span className="text-xl font-semibold tracking-tight text-zinc-900">
              MFGrow
            </span>
          </Link>
          <div className="hidden items-center rounded-full border border-[#d7e9e2] bg-white/80 p-1 text-sm font-medium text-zinc-600 shadow-sm lg:flex">
            <Link
              href="/"
              className="rounded-full px-4 py-2 transition-colors hover:bg-[#e8f4ef] hover:text-[#01573c]"
            >
              Home
            </Link>
            <Link
              href="/market-insights"
              className="rounded-full px-4 py-2 transition-colors hover:bg-[#e8f4ef] hover:text-[#01573c]"
            >
              Market Insights
            </Link>
            <Link
              href="/about-us"
              className="rounded-full px-4 py-2 transition-colors hover:bg-[#e8f4ef] hover:text-[#01573c]"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="rounded-full bg-[#e8f4ef] px-4 py-2 text-[#01573c]"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/market-insights"
              className="rounded-lg border border-[#b8d9cc] px-4 py-2 text-sm font-medium text-[#01573c] transition-colors hover:bg-[#e8f4ef]"
            >
              Market Insights
            </Link>
            <Link
              href="/"
              className="rounded-lg bg-gradient-to-r from-[#01573c] to-[#01432f] px-4 py-2 text-sm font-medium text-white shadow-md shadow-[#01573c]/20 transition-all hover:from-[#014d35] hover:to-[#013827] md:px-5"
            >
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <motion.section
          className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            className="rounded-3xl border border-[#d7e9e2] bg-white/90 p-8 shadow-xl shadow-[#01573c]/10 sm:p-10"
            {...fadeInUp}
          >
            <span className="inline-flex items-center rounded-full border border-[#b8d9cc] bg-[#e8f4ef] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#01573c]">
              Contact Us
            </span>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Premium support for every stage of your investing journey
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
              Whether you need help with onboarding, SIP setup, portfolio reviews, or account security, our investment support team is here to help.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <motion.div
                className="rounded-2xl border border-[#d7e9e2] bg-[#f8fcfa] p-4"
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v4l2.5 2.5" />
                  </svg>
                </span>
                <p className="text-xs text-zinc-500">Average Response</p>
                <p className="mt-1 text-lg font-semibold text-[#01573c]">&lt; 4 Hours</p>
              </motion.div>
              <motion.div
                className="rounded-2xl border border-[#d7e9e2] bg-[#f8fcfa] p-4"
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                    <path d="M4 16l5-5 4 4 7-7" />
                    <path d="M14 8h6v6" />
                  </svg>
                </span>
                <p className="text-xs text-zinc-500">Investor Rating</p>
                <p className="mt-1 text-lg font-semibold text-[#01573c]">4.9 / 5</p>
              </motion.div>
              <motion.div
                className="rounded-2xl border border-[#d7e9e2] bg-[#f8fcfa] p-4"
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </svg>
                </span>
                <p className="text-xs text-zinc-500">Support Coverage</p>
                <p className="mt-1 text-lg font-semibold text-[#01573c]">6 Days / Week</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative min-h-[320px] overflow-hidden rounded-3xl border border-[#d7e9e2] shadow-xl shadow-[#01573c]/20"
            {...fadeInUp}
            whileHover={{ y: -4 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1600&q=80"
              alt="Investor reviewing mutual fund portfolio analytics"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012d20]/80 via-[#012d20]/35 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#cce8dc]">
                Dedicated Wealth Desk
              </p>
              <p className="mt-2 text-xl font-semibold leading-tight">
                Personal assistance for SIP planning, portfolio guidance, and account support.
              </p>
            </div>
          </motion.div>
        </motion.section>

        <motion.section className="mt-8 grid gap-4 md:grid-cols-3" {...fadeInUp}>
          <motion.article
            className="rounded-2xl border border-[#d7e9e2] bg-white p-5 shadow-sm shadow-[#01573c]/10"
            whileHover={{ y: -5, boxShadow: "0 14px 30px rgba(1, 87, 60, 0.14)" }}
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                <path d="M5 7h14v10H5z" />
                <path d="M8 11h8" />
              </svg>
            </span>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Investor Helpline
            </p>
            <p className="mt-3 text-lg font-semibold text-zinc-900">+91 9999916509</p>
            <p className="mt-1 text-sm text-zinc-600">Mon-Sat, 9:00 AM to 7:00 PM</p>
          </motion.article>
          <motion.article
            className="rounded-2xl border border-[#d7e9e2] bg-white p-5 shadow-sm shadow-[#01573c]/10"
            whileHover={{ y: -5, boxShadow: "0 14px 30px rgba(1, 87, 60, 0.14)" }}
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                <path d="M4 7l8 6 8-6" />
                <rect x="4" y="7" width="16" height="10" rx="2" />
              </svg>
            </span>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Email Support
            </p>
            <p className="mt-3 text-lg font-semibold text-zinc-900">care@mfnow.com</p>
            <p className="mt-1 text-sm text-zinc-600">Response within 4 business hours</p>
          </motion.article>
          <motion.article
            className="rounded-2xl border border-[#d7e9e2] bg-white p-5 shadow-sm shadow-[#01573c]/10"
            whileHover={{ y: -5, boxShadow: "0 14px 30px rgba(1, 87, 60, 0.14)" }}
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 20c1.5-4 4.5-6 7-6s5.5 2 7 6" />
              </svg>
            </span>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Advisor Desk
            </p>
            <p className="mt-3 text-lg font-semibold text-zinc-900">Book a 1:1 call</p>
            <p className="mt-1 text-sm text-zinc-600">
              Goal planning and portfolio consultation
            </p>
          </motion.article>
        </motion.section>

        <motion.section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]" {...fadeInUp}>
          <motion.div
            className="rounded-3xl border border-[#d7e9e2] bg-white p-7 shadow-lg shadow-[#01573c]/10 sm:p-8"
            whileHover={{ y: -2 }}
          >
            <h2 className="text-2xl font-semibold text-zinc-900">Send us a message</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Share your query and our team will connect with you shortly.
            </p>

            <form className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-zinc-700">
                Full Name
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-[#b8d9cc] bg-white px-4 py-2.5 text-sm text-zinc-800 outline-none transition focus:border-[#01573c] focus:ring-2 focus:ring-[#01573c]/20"
                />
              </label>
              <label className="block text-sm font-medium text-zinc-700">
                Mobile Number
                <input
                  type="tel"
                  placeholder="+91 9999916509"
                  className="mt-2 w-full rounded-xl border border-[#b8d9cc] bg-white px-4 py-2.5 text-sm text-zinc-800 outline-none transition focus:border-[#01573c] focus:ring-2 focus:ring-[#01573c]/20"
                />
              </label>
              <label className="block text-sm font-medium text-zinc-700">
                Email Address
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-[#b8d9cc] bg-white px-4 py-2.5 text-sm text-zinc-800 outline-none transition focus:border-[#01573c] focus:ring-2 focus:ring-[#01573c]/20"
                />
              </label>
              <label className="block text-sm font-medium text-zinc-700">
                Topic
                <select className="mt-2 w-full rounded-xl border border-[#b8d9cc] bg-white px-4 py-2.5 text-sm text-zinc-800 outline-none transition focus:border-[#01573c] focus:ring-2 focus:ring-[#01573c]/20">
                  <option>Investment Guidance</option>
                  <option>SIP Support</option>
                  <option>KYC / Account Help</option>
                  <option>Technical Issue</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-zinc-700 sm:col-span-2">
                Message
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="mt-2 w-full rounded-xl border border-[#b8d9cc] bg-white px-4 py-2.5 text-sm text-zinc-800 outline-none transition focus:border-[#01573c] focus:ring-2 focus:ring-[#01573c]/20"
                />
              </label>
              <div className="sm:col-span-2">
                <button
                  type="button"
                  className="rounded-xl bg-gradient-to-r from-[#01573c] to-[#01432f] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#01573c]/20 transition-all hover:from-[#014d35] hover:to-[#013827]"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              className="rounded-3xl border border-[#d7e9e2] bg-white p-6 shadow-sm shadow-[#01573c]/10"
              whileHover={{ y: -4 }}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <path d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Head Office
              </p>
              <p className="mt-3 text-base font-semibold text-zinc-900">MFNOW</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                608, 6th Floor, Naurang House, K G Marg
                <br />
                New Delhi 110001
              </p>
            </motion.div>

            <motion.div
              className="rounded-3xl border border-[#d7e9e2] bg-gradient-to-b from-white to-[#eef7f2] p-6 shadow-sm shadow-[#01573c]/10"
              whileHover={{ y: -4 }}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <path d="M4 16l5-5 4 4 7-7" />
                  <path d="M14 8h6v6" />
                </svg>
              </span>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Service Promise
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>Dedicated support for all investor queries</li>
                <li>Secure and compliant communication channels</li>
                <li>Fast turnaround for urgent account issues</li>
              </ul>
            </motion.div>

            <motion.div
              className="rounded-3xl border border-[#d7e9e2] bg-white p-6 shadow-sm shadow-[#01573c]/10"
              whileHover={{ y: -4 }}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <path d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7l8-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Compliance
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                SEBI Registered Mutual Fund Distributor.
                <br />
                ARN: 123456 | CIN: U67190MH2020PTC123456
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
