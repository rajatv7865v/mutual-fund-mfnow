"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SipCalculator from "../components/SipCalculator";

const sipSteps = [
  {
    step: "01",
    title: "Define Your Goal",
    description:
      "Set a target like retirement, child education, or home purchase and choose your time horizon.",
  },
  {
    step: "02",
    title: "Choose Fund Category",
    description:
      "Select equity, debt, or hybrid funds based on risk profile and expected return range.",
  },
  {
    step: "03",
    title: "Start Monthly SIP",
    description:
      "Automate a monthly investment amount and increase annually with your income growth.",
  },
  {
    step: "04",
    title: "Track and Rebalance",
    description:
      "Review every 6-12 months and rebalance only when goals, risk, or market conditions change.",
  },
];

export default function SipCalculatorPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.55, ease: "easeOut" },
  } as const;

  return (
    <div className="min-h-screen bg-[#f2f9f6]">
       <header className="sticky top-0 z-20 border-b border-[#cfe5dc] bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-28 w-full max-w-7xl items-center justify-between gap-4 px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/mfnow.png"
              alt="MFNOW logo"
                  width={240}
                  height={200}
              className=" w-[200px] rounded-xl bg-white object-cover p-1 "
              priority
            />
            
          </Link>

          <div className="hidden items-center rounded-full border border-[#d7e9e2] bg-white/80 p-1 text-sm font-medium text-zinc-600 shadow-sm lg:flex">
            <a className="rounded-full px-4 py-2 transition-colors hover:bg-[#e8f4ef] hover:text-[#01573c]" href="/">
              Mutual Funds
            </a>
            <a
              className="rounded-full px-4 py-2 transition-colors hover:bg-[#e8f4ef] hover:text-[#01573c]"
              href="/sip-calculator"
            >
              SIP Calculator
            </a>
            <Link
              className="rounded-full px-4 py-2 transition-colors hover:bg-[#e8f4ef] hover:text-[#01573c]"
              href="/market-insights"
            >
              Market Insights
            </Link>
            <Link
              className="rounded-full px-4 py-2 transition-colors hover:bg-[#e8f4ef] hover:text-[#01573c]"
              href="/about-us"
            >
              About Us
            </Link>
            <Link
              className="rounded-full px-4 py-2 transition-colors hover:bg-[#e8f4ef] hover:text-[#01573c]"
              href="/contact-us"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center rounded-full border border-[#cfe5dc] bg-[#e8f4ef] px-3 py-2 text-xs font-medium text-[#01573c] xl:flex">
              Live NAV tracking
            </div>
            <button className="rounded-lg bg-gradient-to-r from-[#01573c] to-[#01432f] px-4 py-2 text-sm font-medium text-white shadow-md shadow-[#01573c]/20 transition-all hover:from-[#014d35] hover:to-[#013827]">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <motion.section
          className="mb-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="rounded-3xl border border-[#d7e9e2] bg-white/90 p-7 shadow-lg shadow-[#01573c]/10 sm:p-10"
            {...fadeInUp}
          >
            <span className="inline-flex items-center rounded-full border border-[#b8d9cc] bg-[#e8f4ef] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#01573c]">
              SIP Wealth Planner
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Build wealth the disciplined way with SIP
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
              Start small, stay consistent, and let compounding do the heavy lifting. Use this premium SIP page to learn the process step by step and calculate your projected corpus.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#d7e9e2] bg-[#f8fcfa] p-4">
                <p className="text-xs text-zinc-500">Disciplined Investing</p>
                <p className="mt-1 text-lg font-semibold text-[#01573c]">Monthly Auto SIP</p>
              </div>
              <div className="rounded-2xl border border-[#d7e9e2] bg-[#f8fcfa] p-4">
                <p className="text-xs text-zinc-500">Compounding Horizon</p>
                <p className="mt-1 text-lg font-semibold text-[#01573c]">Long-Term Growth</p>
              </div>
              <div className="rounded-2xl border border-[#d7e9e2] bg-[#f8fcfa] p-4">
                <p className="text-xs text-zinc-500">Review Rhythm</p>
                <p className="mt-1 text-lg font-semibold text-[#01573c]">6-12 Months</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative min-h-[320px] overflow-hidden rounded-3xl border border-[#d7e9e2] shadow-xl shadow-[#01573c]/20"
            {...fadeInUp}
            whileHover={{ y: -4 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1638913662252-70efce1e60a7?auto=format&fit=crop&w=1600&q=80"
              alt="Person planning SIP investments on laptop with charts"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012d20]/85 via-[#012d20]/35 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#cce8dc]">
                Smart SIP Journey
              </p>
              <p className="mt-2 text-xl font-semibold leading-tight">
                Invest consistently, reduce market timing stress, and build long-term wealth.
              </p>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-8 rounded-3xl border border-[#d7e9e2] bg-white/90 p-7 shadow-lg shadow-[#01573c]/10 sm:p-10"
          {...fadeInUp}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            SIP in 4 simple steps
          </h2>
          <p className="mt-2 text-sm leading-7 text-zinc-600 sm:text-base">
            Follow this structure to keep your investing process clear, measurable, and goal-aligned.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {sipSteps.map((item, index) => (
              <motion.article
                key={item.step}
                className="rounded-2xl border border-[#d7e9e2] bg-[#f8fcfa] p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 14px 30px rgba(1, 87, 60, 0.14)" }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#01573c]">
                  Step {item.step}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.div {...fadeInUp}>
          <SipCalculator />
        </motion.div>
      </main>
    </div>
  );
}
