"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const keyMetrics = [
  { label: "Registered Investors", value: "2.5L+", note: "Active across India" },
  { label: "Monthly SIP Volume", value: "1.8M+", note: "Transactions every month" },
  { label: "Assets Tracked", value: "₹4,200 Cr", note: "Across goals and portfolios" },
  { label: "Avg. Support TAT", value: "< 4 Hours", note: "Dedicated investor support" },
];

const yearlyProgress = [
  { year: "2022", investors: "0.7L", sipBook: "₹52 Cr", retention: "88%" },
  { year: "2023", investors: "1.3L", sipBook: "₹95 Cr", retention: "90%" },
  { year: "2024", investors: "1.9L", sipBook: "₹136 Cr", retention: "92%" },
  { year: "2025", investors: "2.5L+", sipBook: "₹182 Cr", retention: "94%" },
];

const platformHighlights = [
  {
    title: "Research-Led Recommendations",
    description: "Fund selections based on consistency, risk-adjusted returns, and category behavior.",
  },
  {
    title: "Transparent Investor Experience",
    description: "Clear visibility into NAV changes, SIP tracking, portfolio contribution, and performance.",
  },
  {
    title: "Human Advisory + Digital Tools",
    description: "Combine smart automation with advisor guidance for long-term wealth discipline.",
  },
];

function metricIcon(label: string) {
  if (label.includes("Investors")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
        <circle cx="8" cy="9" r="3" />
        <circle cx="16" cy="8" r="2.5" />
        <path d="M3 19c1-3 3.5-5 6-5s5 2 6 5" />
      </svg>
    );
  }
  if (label.includes("SIP")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 12h10" />
        <path d="M12 8v8" />
      </svg>
    );
  }
  if (label.includes("Assets")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
        <path d="M4 16l5-5 4 4 7-7" />
        <path d="M14 8h6v6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 2.5" />
    </svg>
  );
}

export default function AboutUsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, ease: "easeOut" },
  } as const;

  return (
    <div className="min-h-screen bg-[#f2f9f6]">
      <header className="sticky top-0 z-20 border-b border-[#cfe5dc] bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/mfnow.png"
              alt="MFNOW logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl bg-white object-contain p-1 shadow-md shadow-[#01573c]/20"
              priority
            />
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
              href="/sip-calculator"
              className="rounded-full px-4 py-2 transition-colors hover:bg-[#e8f4ef] hover:text-[#01573c]"
            >
              SIP Calculator
            </Link>
            <Link
              href="/market-insights"
              className="rounded-full px-4 py-2 transition-colors hover:bg-[#e8f4ef] hover:text-[#01573c]"
            >
              Market Insights
            </Link>
            <Link
              href="/about-us"
              className="rounded-full bg-[#e8f4ef] px-4 py-2 text-[#01573c]"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="rounded-full px-4 py-2 transition-colors hover:bg-[#e8f4ef] hover:text-[#01573c]"
            >
              Contact Us
            </Link>
          </div>
          <Link
            href="/contact-us"
            className="rounded-lg bg-gradient-to-r from-[#01573c] to-[#01432f] px-4 py-2 text-sm font-medium text-white shadow-md shadow-[#01573c]/20 transition-all hover:from-[#014d35] hover:to-[#013827] md:px-5"
          >
            Contact Team
          </Link>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <motion.section
          className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="rounded-3xl border border-[#d7e9e2] bg-white/90 p-8 shadow-xl shadow-[#01573c]/10 sm:p-10"
            {...fadeInUp}
          >
            <span className="inline-flex items-center rounded-full border border-[#b8d9cc] bg-[#e8f4ef] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#01573c]">
              About MFGrow
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Building disciplined wealth journeys for modern investors
            </h1>
            <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
              MFGrow is a mutual fund-first platform designed to simplify long-term investing.
              We combine research, calculators, and live analytics so investors can make better
              decisions with confidence and transparency.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {keyMetrics.slice(0, 2).map((metric) => (
                <motion.div
                  key={metric.label}
                  className="rounded-2xl border border-[#d7e9e2] bg-[#f8fcfa] p-4"
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                >
                  <p className="text-xs text-zinc-500">{metric.label}</p>
                  <p className="mt-1 text-xl font-semibold text-[#01573c]">{metric.value}</p>
                  <p className="mt-1 text-xs text-zinc-500">{metric.note}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative min-h-[320px] overflow-hidden rounded-3xl border border-[#d7e9e2] shadow-xl shadow-[#01573c]/20"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1600&q=80"
              alt="Financial planning and mutual fund analysis dashboard"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012d20]/85 via-[#012d20]/35 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#cce8dc]">
                Investor-first platform
              </p>
              <p className="mt-2 text-xl font-semibold leading-tight">
                Trusted by lakhs of investors for SIP execution, tracking, and portfolio
                insights.
              </p>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          {...fadeInUp}
        >
          {keyMetrics.map((metric) => (
            <motion.article
              key={metric.label}
              className="rounded-2xl border border-[#d7e9e2] bg-white p-5 shadow-sm shadow-[#01573c]/10"
              whileHover={{ y: -5, boxShadow: "0 14px 30px rgba(1, 87, 60, 0.14)" }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                {metricIcon(metric.label)}
              </span>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-zinc-900">{metric.value}</p>
              <p className="mt-1 text-sm text-zinc-600">{metric.note}</p>
            </motion.article>
          ))}
        </motion.section>

        <motion.section
          className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
          {...fadeInUp}
        >
          <div className="rounded-3xl border border-[#d7e9e2] bg-gradient-to-br from-white via-[#f8fcfa] to-[#edf7f2] p-7 shadow-lg shadow-[#01573c]/10 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              What makes MFGrow premium
            </h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600 sm:text-base">
              Built for long-term investors who want both institutional-grade analytics and simple execution.
            </p>
            <div className="mt-6 space-y-3">
              {platformHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#d7e9e2] bg-white p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-none stroke-current stroke-2"
                      >
                        <path d="M5 12l4 4 10-10" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-zinc-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <motion.div
              className="group relative overflow-hidden rounded-3xl border border-[#d7e9e2] shadow-lg shadow-[#01573c]/15"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1400&q=80"
                alt="Team reviewing investment strategy charts"
                width={1100}
                height={620}
                className="h-[180px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#012d20]/70 to-transparent" />
              <p className="absolute bottom-3 left-4 text-sm font-semibold text-white">
                Research and strategy meetings
              </p>
            </motion.div>
            <motion.div
              className="group relative overflow-hidden rounded-3xl border border-[#d7e9e2] shadow-lg shadow-[#01573c]/15"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
                alt="Investor advisory session with portfolio documents"
                width={1100}
                height={620}
                className="h-[180px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#012d20]/70 to-transparent" />
              <p className="absolute bottom-3 left-4 text-sm font-semibold text-white">
                Investor advisory and support
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="mt-8 rounded-3xl border border-[#d7e9e2] bg-white/90 p-7 shadow-lg shadow-[#01573c]/10 sm:p-10"
          {...fadeInUp}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            Growth Snapshot
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Key business and investor growth data over the last four years.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {yearlyProgress.map((row, index) => (
              <motion.article
                key={row.year}
                className="rounded-2xl border border-[#d7e9e2] bg-gradient-to-b from-white to-[#f7fcfa] p-5 shadow-sm shadow-[#01573c]/10"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                whileHover={{ y: -4, boxShadow: "0 14px 28px rgba(1, 87, 60, 0.12)" }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Year
                  </p>
                  <span className="rounded-full bg-[#e8f4ef] px-3 py-1 text-xs font-semibold text-[#01573c]">
                    {row.year}
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-[#e2eee8] bg-white px-3 py-2">
                    <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                      Registered Investors
                    </p>
                    <p className="mt-1 text-sm font-semibold text-zinc-900">{row.investors}</p>
                  </div>
                  <div className="rounded-xl border border-[#e2eee8] bg-white px-3 py-2">
                    <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                      Monthly SIP Book
                    </p>
                    <p className="mt-1 text-sm font-semibold text-zinc-900">{row.sipBook}</p>
                  </div>
                  <div className="rounded-xl border border-[#cce4d9] bg-[#eff8f3] px-3 py-2">
                    <p className="text-[11px] uppercase tracking-wide text-zinc-600">
                      Investor Retention
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#01573c]">{row.retention}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
