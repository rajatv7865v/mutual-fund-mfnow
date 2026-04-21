import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f2f9f6]">
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

      <main className="mx-auto grid w-full max-w-7xl flex-1 gap-12 px-6 py-14 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-20">
        <section>
          <span className="inline-flex items-center rounded-full border border-[#b8d9cc] bg-[#e8f4ef] px-4 py-1 text-sm font-medium text-[#01573c]">
            Trusted by 1.2L+ investors
          </span>
          <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight text-zinc-900 lg:text-5xl">
            Grow your wealth with smarter mutual fund investing
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
            Start SIPs, discover top-performing funds, and track every goal in
            one beautiful dashboard with MFNow.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-xl bg-gradient-to-r from-[#01573c] to-[#01432f] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#01573c]/20 transition-all hover:from-[#014d35] hover:to-[#013827]">
              Start Investing
            </button>
            <button className="rounded-xl border border-[#b8d9cc] bg-white px-6 py-3 text-sm font-semibold text-[#01573c] transition-colors hover:bg-[#e8f4ef]">
              Explore Funds
            </button>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[#d7e9e2] bg-white p-4">
              <p className="text-xs text-zinc-500">Avg. Returns</p>
              <p className="mt-1 text-xl font-semibold text-[#01573c]">14.2%</p>
            </div>
            <div className="rounded-xl border border-[#d7e9e2] bg-white p-4">
              <p className="text-xs text-zinc-500">Active SIPs</p>
              <p className="mt-1 text-xl font-semibold text-[#01573c]">1.8M+</p>
            </div>
            <div className="rounded-xl border border-[#d7e9e2] bg-white p-4">
              <p className="text-xs text-zinc-500">Funds Listed</p>
              <p className="mt-1 text-xl font-semibold text-[#01573c]">2,500+</p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-[#d7e9e2] bg-white p-3 shadow-2xl shadow-[#01573c]/10">
            <Image
              src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=80"
              alt="Mutual fund investment analysis dashboard on laptop"
              width={900}
              height={1100}
              className="h-[440px] w-full rounded-2xl object-cover"
              priority
            />
            <div className="absolute left-8 top-8 rounded-xl bg-white/95 px-4 py-3 shadow-lg">
              <p className="text-xs text-zinc-500">Portfolio Value</p>
              <p className="text-lg font-semibold text-zinc-900">$124,800</p>
            </div>
            <div className="absolute bottom-8 right-8 rounded-xl bg-[#01573c] px-4 py-3 text-white shadow-lg shadow-[#01573c]/30">
              <p className="text-xs text-[#cce8dc]">Monthly SIP</p>
              <p className="text-lg font-semibold">$850</p>
            </div>
          </div>
        </section>
      </main>

      <section className="mx-auto w-full max-w-7xl px-6 pb-6 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-[#d7e9e2] bg-gradient-to-br from-white to-[#eef7f2] p-7 shadow-lg shadow-[#01573c]/10 sm:p-10">
            <span className="inline-flex items-center rounded-full border border-[#b8d9cc] bg-[#e8f4ef] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#01573c]">
              Premium Experience
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Everything you need to invest confidently
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
              Discover a modern mutual fund platform with smart tools, guided flows, and institutional-grade clarity for retail investors.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#d7e9e2] bg-white p-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                      <path d="M4 16l5-5 4 4 7-7" />
                      <path d="M14 8h6v6" />
                    </svg>
                  </span>
                  <p className="text-sm font-semibold text-zinc-900">Goal-Based Planning</p>
                </div>
                <p className="mt-2 text-xs leading-5 text-zinc-600">
                  Build SIPs mapped to specific financial milestones.
                </p>
              </div>
              <div className="rounded-2xl border border-[#d7e9e2] bg-white p-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M7 14l3-3 2 2 4-4" />
                    </svg>
                  </span>
                  <p className="text-sm font-semibold text-zinc-900">Live Analytics</p>
                </div>
                <p className="mt-2 text-xs leading-5 text-zinc-600">
                  Track markets and NAV data in near real-time.
                </p>
              </div>
              <div className="rounded-2xl border border-[#d7e9e2] bg-white p-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                      <path d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7l8-4z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <p className="text-sm font-semibold text-zinc-900">Secure Platform</p>
                </div>
                <p className="mt-2 text-xs leading-5 text-zinc-600">
                  SEBI-aligned process and investor-first safeguards.
                </p>
              </div>
              <div className="rounded-2xl border border-[#d7e9e2] bg-white p-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
                    </svg>
                  </span>
                  <p className="text-sm font-semibold text-zinc-900">Advisor Support</p>
                </div>
                <p className="mt-2 text-xs leading-5 text-zinc-600">
                  Human guidance whenever your strategy needs recalibration.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="group relative overflow-hidden rounded-3xl border border-[#d7e9e2] shadow-lg shadow-[#01573c]/15">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
                alt="Portfolio analytics dashboard with growth metrics"
                width={1200}
                height={780}
                className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#012d20]/80 via-[#012d20]/25 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#cce8dc]">
                  Analytics First
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Data-backed decisions before every SIP step.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl border border-[#d7e9e2] shadow-lg shadow-[#01573c]/15">
              <Image
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1400&q=80"
                alt="Investor discussing financial plan with advisor"
                width={1200}
                height={780}
                className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#012d20]/80 via-[#012d20]/20 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#cce8dc]">
                  Human + Digital
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Premium advisory support with modern investing tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-6 lg:px-10">
        <div className="overflow-hidden rounded-3xl border border-[#d7e9e2] bg-gradient-to-br from-white via-[#f8fcfa] to-[#edf7f2] p-7 shadow-xl shadow-[#01573c]/10 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#b8d9cc] bg-[#e8f4ef] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#01573c]">
                SIP Journey Stepper
              </span>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                Follow a simple step-by-step investing flow
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
                A premium guided path designed to keep investing simple, measurable, and disciplined from day one.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-[#d7e9e2] bg-white px-3 py-3">
                  <p className="text-zinc-500">Time to Start</p>
                  <p className="mt-1 font-semibold text-zinc-900">Under 10 mins</p>
                </div>
                <div className="rounded-xl border border-[#d7e9e2] bg-white px-3 py-3">
                  <p className="text-zinc-500">Review Frequency</p>
                  <p className="mt-1 font-semibold text-zinc-900">Every 6-12 months</p>
                </div>
                <div className="rounded-xl border border-[#d7e9e2] bg-white px-3 py-3">
                  <p className="text-zinc-500">Best Practice</p>
                  <p className="mt-1 font-semibold text-zinc-900">Annual SIP Step-up</p>
                </div>
                <div className="rounded-xl border border-[#d7e9e2] bg-white px-3 py-3">
                  <p className="text-zinc-500">Investor Goal</p>
                  <p className="mt-1 font-semibold text-zinc-900">Long-Term Wealth</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute bottom-6 left-6 top-6 hidden w-[3px] rounded-full bg-gradient-to-b from-[#d7e9e2] via-[#8ec8b2] to-[#01573c] md:block" />
              <div className="grid gap-4">
                <article className="group rounded-2xl border border-[#d7e9e2] bg-white/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#01573c]/10">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c] ring-4 ring-white">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                        <circle cx="12" cy="12" r="8" />
                        <path d="M12 8v4l2.5 2.5" />
                      </svg>
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-base font-semibold text-zinc-900">Define Goal</h3>
                        <span className="rounded-full bg-[#f3faf6] px-2 py-1 text-[11px] font-semibold text-[#01573c]">
                          Step 1
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">
                        Decide target amount and horizon before you choose any scheme.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="group rounded-2xl border border-[#d7e9e2] bg-white/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#01573c]/10">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c] ring-4 ring-white">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                        <path d="M4 16l4-4 3 3 7-7" />
                        <path d="M14 8h6v6" />
                      </svg>
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-base font-semibold text-zinc-900">Pick Fund Mix</h3>
                        <span className="rounded-full bg-[#f3faf6] px-2 py-1 text-[11px] font-semibold text-[#01573c]">
                          Step 2
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">
                        Balance equity, debt, and hybrid funds as per your risk appetite.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="group rounded-2xl border border-[#9fcfbe] bg-gradient-to-r from-[#edf8f3] to-[#e5f3ec] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#01573c]/15">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#01573c] text-white ring-4 ring-white animate-pulse">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                        <rect x="4" y="4" width="16" height="16" rx="3" />
                        <path d="M8 12h8M12 8v8" />
                      </svg>
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-base font-semibold text-zinc-900">Start SIP</h3>
                        <span className="rounded-full bg-white px-2 py-1 text-[11px] font-semibold text-[#01573c]">
                          Step 3
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">
                        Automate monthly SIP and enable annual step-up for compounding.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="group rounded-2xl border border-[#d7e9e2] bg-white/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#01573c]/10">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c] ring-4 ring-white">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                        <path d="M4 19h16" />
                        <path d="M7 15l3-3 3 2 4-5" />
                      </svg>
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-base font-semibold text-zinc-900">Review Progress</h3>
                        <span className="rounded-full bg-[#f3faf6] px-2 py-1 text-[11px] font-semibold text-[#01573c]">
                          Step 4
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">
                        Monitor outcomes every 6-12 months and rebalance only when needed.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-6 lg:px-10">
        <div className="overflow-hidden rounded-3xl border border-[#d7e9e2] bg-gradient-to-br from-white via-[#f8fcfa] to-[#edf7f2] p-7 shadow-xl shadow-[#01573c]/10 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#b8d9cc] bg-[#e8f4ef] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#01573c]">
                Mutual Fund Guide
              </span>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                Understand mutual funds before you invest
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
                Mutual funds pool money from many investors and allocate it across
                stocks, bonds, or other assets. They help you diversify, reduce
                stock-specific risk, and invest in a disciplined way through SIPs.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3 text-xs">
                <div className="rounded-xl border border-[#d7e9e2] bg-white px-3 py-3">
                  <p className="text-zinc-500">Risk Layer</p>
                  <p className="mt-1 font-semibold text-zinc-900">Low to High</p>
                </div>
                <div className="rounded-xl border border-[#d7e9e2] bg-white px-3 py-3">
                  <p className="text-zinc-500">Ideal Horizon</p>
                  <p className="mt-1 font-semibold text-zinc-900">3+ Years</p>
                </div>
                <div className="rounded-xl border border-[#d7e9e2] bg-white px-3 py-3">
                  <p className="text-zinc-500">Investment Mode</p>
                  <p className="mt-1 font-semibold text-zinc-900">SIP + Lumpsum</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-[#d7e9e2] shadow-lg shadow-[#01573c]/15">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80"
                alt="Financial analyst explaining mutual fund allocation strategy"
                width={1100}
                height={760}
                className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#012d20]/80 via-[#012d20]/25 to-transparent" />
              <div className="absolute bottom-0 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#cce8dc]">
                  Smart Allocation
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Balance growth and stability with category-wise allocation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-[#d7e9e2] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#01573c]/10">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <path d="M4 16l5-5 4 4 7-7" />
                  <path d="M14 8h6v6" />
                </svg>
              </span>
              <p className="text-sm font-semibold text-[#01573c]">Equity Funds</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Suitable for long-term wealth creation. Higher risk, but greater
                return potential over time.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7e9e2] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#01573c]/10">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <path d="M5 7h14v10H5z" />
                  <path d="M5 11h14" />
                </svg>
              </span>
              <p className="text-sm font-semibold text-[#01573c]">Debt Funds</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Focus on fixed-income instruments with relatively lower volatility
                than equity-oriented funds.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7e9e2] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#01573c]/10">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <path d="M4 12h16" />
                  <path d="M8 8h8" />
                  <path d="M8 16h8" />
                </svg>
              </span>
              <p className="text-sm font-semibold text-[#01573c]">Hybrid Funds</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Mix of equity and debt to balance growth and stability in one
                portfolio.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7e9e2] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#01573c]/10">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </span>
              <p className="text-sm font-semibold text-[#01573c]">SIP Options</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Choose monthly, quarterly, or step-up SIP plans based on income
                cycle and long-term goals.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 rounded-2xl border border-[#d7e9e2] bg-white p-5 md:grid-cols-[1.3fr_1fr]">
            <div>
              <h3 className="text-base font-semibold text-zinc-900">
                4-point checklist before you start SIP
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                <li>1. Define your goal and target duration.</li>
                <li>2. Match fund category to your risk tolerance.</li>
                <li>3. Compare expense ratio and long-term consistency.</li>
                <li>4. Stay invested and review once every 6-12 months.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#b8d9cc] bg-[#e8f4ef] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#01573c]">
                Quick Tip
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                Start with a small monthly SIP and increase it every year with
                your income. This simple habit can significantly improve long-term
                corpus growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-6 lg:px-10">
        <div className="rounded-3xl border border-[#d7e9e2] bg-white/90 p-7 shadow-lg shadow-[#01573c]/10 sm:p-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[#b8d9cc] bg-[#e8f4ef] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#01573c]">
              Why Choose MFNow
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              A complete platform for long-term wealth building
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
              From discovery to execution and review, MFNow helps you invest with confidence through simple tools and transparent insights.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-[#d7e9e2] bg-[#f8fcfa] p-5">
              <p className="text-sm font-semibold text-[#01573c]">Fund Discovery</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Compare categories, risk levels, and long-term consistency in one
                place.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7e9e2] bg-[#f8fcfa] p-5">
              <p className="text-sm font-semibold text-[#01573c]">Goal-Based SIPs</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Plan SIPs for goals like education, home, retirement, and wealth
                creation.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7e9e2] bg-[#f8fcfa] p-5">
              <p className="text-sm font-semibold text-[#01573c]">Live Insights</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Track market analytics and mutual fund NAV performance through live
                APIs.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7e9e2] bg-[#f8fcfa] p-5">
              <p className="text-sm font-semibold text-[#01573c]">Premium Support</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Get dedicated investor help for onboarding, transactions, and
                portfolio guidance.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 rounded-2xl border border-[#d7e9e2] bg-[#f6fbf8] p-5 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Step 1
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">Set your goal</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Step 2
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">
                Start SIP automatically
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Step 3
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">
                Review and rebalance periodically
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-6 lg:px-10">
        <div className="rounded-3xl border border-[#d7e9e2] bg-white/90 p-7 shadow-lg shadow-[#01573c]/10 sm:p-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[#b8d9cc] bg-[#e8f4ef] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#01573c]">
              Portfolio Analysis
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Chart-based insights to guide better investing decisions
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
              Review trend momentum, allocation mix, and month-wise growth before making your next SIP move.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
            <div className="rounded-2xl border border-[#d7e9e2] bg-[#f8fcfa] p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-zinc-900">Projected Portfolio Growth</p>
                <span className="rounded-full bg-[#e8f4ef] px-3 py-1 text-xs font-medium text-[#01573c]">
                  5Y Estimate
                </span>
              </div>
              <svg viewBox="0 0 640 260" className="mt-4 w-full">
                <defs>
                  <linearGradient id="growthStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1f7a5b" />
                    <stop offset="100%" stopColor="#01573c" />
                  </linearGradient>
                  <linearGradient id="growthFill" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(1,87,60,0.25)" />
                    <stop offset="100%" stopColor="rgba(1,87,60,0.02)" />
                  </linearGradient>
                </defs>
                <line x1="30" y1="220" x2="610" y2="220" stroke="#d7e9e2" strokeWidth="1.5" />
                <line x1="30" y1="165" x2="610" y2="165" stroke="#e4f1eb" strokeWidth="1" />
                <line x1="30" y1="110" x2="610" y2="110" stroke="#e4f1eb" strokeWidth="1" />
                <line x1="30" y1="55" x2="610" y2="55" stroke="#e4f1eb" strokeWidth="1" />
                <path
                  d="M30 205 C90 195, 120 175, 180 170 C250 164, 300 140, 360 126 C430 110, 490 86, 610 46 L610 220 L30 220 Z"
                  fill="url(#growthFill)"
                />
                <path
                  d="M30 205 C90 195, 120 175, 180 170 C250 164, 300 140, 360 126 C430 110, 490 86, 610 46"
                  fill="none"
                  stroke="url(#growthStroke)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="610" cy="46" r="7" fill="#01573c" />
                <text x="34" y="242" fill="#64748b" fontSize="12">
                  Year 1
                </text>
                <text x="300" y="242" fill="#64748b" fontSize="12">
                  Year 3
                </text>
                <text x="560" y="242" fill="#64748b" fontSize="12">
                  Year 5
                </text>
              </svg>
              <div className="mt-3 grid gap-3 text-xs sm:grid-cols-3">
                <div className="rounded-xl border border-[#d7e9e2] bg-white px-3 py-2">
                  <p className="text-zinc-500">Invested</p>
                  <p className="mt-1 font-semibold text-zinc-900">₹9.0L</p>
                </div>
                <div className="rounded-xl border border-[#d7e9e2] bg-white px-3 py-2">
                  <p className="text-zinc-500">Estimated Value</p>
                  <p className="mt-1 font-semibold text-zinc-900">₹14.8L</p>
                </div>
                <div className="rounded-xl border border-[#d7e9e2] bg-white px-3 py-2">
                  <p className="text-zinc-500">Projected Gain</p>
                  <p className="mt-1 font-semibold text-[#01573c]">+₹5.8L</p>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-2xl border border-[#d7e9e2] bg-[#f8fcfa] p-5">
                <p className="text-sm font-semibold text-zinc-900">Suggested Allocation Mix</p>
                <div className="mt-4 flex items-center gap-5">
                  <svg viewBox="0 0 42 42" className="h-24 w-24 -rotate-90">
                    <circle cx="21" cy="21" r="15.915" fill="none" stroke="#d7e9e2" strokeWidth="5" />
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="none"
                      stroke="#01573c"
                      strokeWidth="5"
                      strokeDasharray="58 42"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="none"
                      stroke="#2b8f6a"
                      strokeWidth="5"
                      strokeDasharray="26 74"
                      strokeDashoffset="-58"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="none"
                      stroke="#7dbfa5"
                      strokeWidth="5"
                      strokeDasharray="16 84"
                      strokeDashoffset="-84"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="space-y-2 text-xs">
                    <p className="text-zinc-700">
                      <span className="font-semibold text-[#01573c]">58%</span> Equity
                    </p>
                    <p className="text-zinc-700">
                      <span className="font-semibold text-[#2b8f6a]">26%</span> Debt
                    </p>
                    <p className="text-zinc-700">
                      <span className="font-semibold text-[#7dbfa5]">16%</span> Hybrid/Gold
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#d7e9e2] bg-[#f8fcfa] p-5">
                <p className="text-sm font-semibold text-zinc-900">Monthly SIP Trend</p>
                <div className="mt-4 flex h-24 items-end gap-2">
                  <div className="h-9 w-full rounded-t-md bg-[#b9ddd0]" />
                  <div className="h-11 w-full rounded-t-md bg-[#9dcfbb]" />
                  <div className="h-14 w-full rounded-t-md bg-[#7dbfa5]" />
                  <div className="h-16 w-full rounded-t-md bg-[#58a98b]" />
                  <div className="h-20 w-full rounded-t-md bg-[#2b8f6a]" />
                  <div className="h-24 w-full rounded-t-md bg-[#01573c]" />
                </div>
                <p className="mt-3 text-xs text-zinc-500">
                  Consistent SIP step-up has improved projected corpus by 18%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-6 lg:px-10">
        <div className="rounded-3xl border border-[#d7e9e2] bg-gradient-to-b from-white to-[#f5faf8] p-7 shadow-lg shadow-[#01573c]/10 sm:p-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[#b8d9cc] bg-[#e8f4ef] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#01573c]">
              Investor Confidence
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Premium experience backed by trust and research
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[#d7e9e2] bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Weekly Research Notes
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Curated analysis on sectors, valuation trends, and long-term fund opportunities.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7e9e2] bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Transparent Risk Profiling
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Goal-based risk buckets and suitability checks before every recommendation.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7e9e2] bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Dedicated Relationship Desk
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Personalized guidance for SIP setup, rebalancing, and long-term discipline.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-6 lg:px-10">
        <div className="rounded-3xl border border-[#d7e9e2] bg-white/90 p-7 shadow-lg shadow-[#01573c]/10 sm:p-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[#b8d9cc] bg-[#e8f4ef] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#01573c]">
              Investor Stories
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Real investing moments, visually explained
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
              Explore how disciplined SIP investing, market tracking, and goal reviews come together in a premium visual journey.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-[1.2fr_1fr]">
            <div className="group relative overflow-hidden rounded-2xl border border-[#d7e9e2]">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
                alt="Investor reviewing portfolio performance charts"
                width={1200}
                height={760}
                className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#012d20]/80 via-[#012d20]/20 to-transparent" />
              <div className="absolute bottom-0 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#cce8dc]">
                  Goal Review
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Track portfolio progress and optimize your SIP allocation periodically.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="group relative overflow-hidden rounded-2xl border border-[#d7e9e2]">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80"
                  alt="Financial planning meeting focused on SIP strategy"
                  width={900}
                  height={520}
                  className="h-[152px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012d20]/75 to-transparent" />
                <p className="absolute bottom-3 left-4 text-sm font-semibold text-white">
                  Monthly SIP planning
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-[#d7e9e2]">
                <Image
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional analyzing growth trends on financial dashboard"
                  width={900}
                  height={520}
                  className="h-[152px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012d20]/75 to-transparent" />
                <p className="absolute bottom-3 left-4 text-sm font-semibold text-white">
                  Long-term growth analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-10 border-t border-[#123d2f] bg-gradient-to-b from-[#05271d] via-[#031f17] to-[#021710] text-zinc-100">
        <div className="mx-auto w-full max-w-7xl px-6 pb-8 pt-12 lg:px-10">
          <div className="rounded-3xl border border-[#2f7f63]/45 bg-gradient-to-r from-[#0b4e38] via-[#07543a] to-[#04402e] p-7 shadow-2xl shadow-black/30 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b8dfd0]">
                  Start your journey
                </p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  Build long-term wealth with disciplined SIP investing.
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[#d2ebe1] sm:text-base">
                  Explore curated funds, set monthly goals, and track portfolio
                  growth in one place.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/sip-calculator"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#04402e] shadow-lg shadow-[#02281c]/20 transition-all hover:-translate-y-0.5 hover:bg-[#e8f4ef]"
                >
                  Start SIP
                </a>
                <a
                  href="/contact-us"
                  className="rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Talk to advisor
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1.8fr]">
            <div className="rounded-2xl border border-[#1f4f3e] bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Image
                  src="/mfnow.png"
                  alt="MFNOW logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-xl bg-white object-contain p-1 shadow-md shadow-[#0b5f43]/30"
                />
                <span className="text-xl font-semibold tracking-tight text-white">
                  MFNOW
                </span>
              </div>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[#c7ddd4]">
                Smart mutual fund investing for every goal, from first SIP to
                retirement planning.
              </p>
              <div className="mt-5 grid gap-3 text-xs">
                <div className="flex items-start gap-2 rounded-xl border border-[#275643] bg-[#082d21] px-3 py-2 text-[#d2e8df]">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0b4e38] text-[#96d4be]">
                    <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current stroke-2">
                      <path d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  <span>
                    608, 6th Floor, Naurang House, K G Marg, New Delhi 110001
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[#275643] bg-[#082d21] px-3 py-2 text-[#d2e8df]">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0b4e38] text-[#96d4be]">
                    <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current stroke-2">
                      <path d="M6 3h4l2 5-2 2a14 14 0 006 6l2-2 5 2v4a2 2 0 01-2 2h-1C10 22 2 14 2 4V3a2 2 0 012-2z" />
                    </svg>
                  </span>
                  <span>+91 9999916509</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[#275643] bg-[#082d21] px-3 py-2 text-[#d2e8df]">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0b4e38] text-[#96d4be]">
                    <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current stroke-2">
                      <path d="M4 7l8 6 8-6" />
                      <rect x="4" y="7" width="16" height="10" rx="2" />
                    </svg>
                  </span>
                  <span>amit@mfnow.com</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[#275643] bg-[#082d21] px-3 py-2 text-[#d2e8df]">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0b4e38] text-[#96d4be]">
                    <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current stroke-2">
                      <path d="M4 7l8 6 8-6" />
                      <rect x="4" y="7" width="16" height="10" rx="2" />
                    </svg>
                  </span>
                  <span>amit83kaushik@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 rounded-2xl border border-[#1f4f3e] bg-white/5 p-6 text-sm backdrop-blur-sm sm:grid-cols-2 xl:grid-cols-3">
              <Link
                href="/"
                className="flex items-center gap-2 rounded-xl border border-[#275643] bg-[#082d21] px-3 py-3 text-[#d0e5dc] transition-colors hover:bg-[#0b3a2a] hover:text-white"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0b4e38] text-[#96d4be]">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current stroke-2">
                    <path d="M3 11l9-8 9 8" />
                    <path d="M5 10v10h14V10" />
                  </svg>
                </span>
                Home
              </Link>
              <Link
                href="/sip-calculator"
                className="flex items-center gap-2 rounded-xl border border-[#275643] bg-[#082d21] px-3 py-3 text-[#d0e5dc] transition-colors hover:bg-[#0b3a2a] hover:text-white"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0b4e38] text-[#96d4be]">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current stroke-2">
                    <rect x="4" y="4" width="16" height="16" rx="3" />
                    <path d="M8 12h8M12 8v8" />
                  </svg>
                </span>
                SIP Calculator
              </Link>
              <Link
                href="/market-insights"
                className="flex items-center gap-2 rounded-xl border border-[#275643] bg-[#082d21] px-3 py-3 text-[#d0e5dc] transition-colors hover:bg-[#0b3a2a] hover:text-white"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0b4e38] text-[#96d4be]">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current stroke-2">
                    <path d="M4 16l5-5 4 4 7-7" />
                    <path d="M14 8h6v6" />
                  </svg>
                </span>
                Market Insights
              </Link>
              <Link
                href="/about-us"
                className="flex items-center gap-2 rounded-xl border border-[#275643] bg-[#082d21] px-3 py-3 text-[#d0e5dc] transition-colors hover:bg-[#0b3a2a] hover:text-white"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0b4e38] text-[#96d4be]">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current stroke-2">
                    <circle cx="12" cy="8" r="3" />
                    <path d="M5 20c1.5-4 4.5-6 7-6s5.5 2 7 6" />
                  </svg>
                </span>
                About Us
              </Link>
              <Link
                href="/contact-us"
                className="flex items-center gap-2 rounded-xl border border-[#275643] bg-[#082d21] px-3 py-3 text-[#d0e5dc] transition-colors hover:bg-[#0b3a2a] hover:text-white"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0b4e38] text-[#96d4be]">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current stroke-2">
                    <path d="M4 7l8 6 8-6" />
                    <rect x="4" y="7" width="16" height="10" rx="2" />
                  </svg>
                </span>
                Contact Us
              </Link>
              <Link
                href="/privacy-policy"
                className="flex items-center gap-2 rounded-xl border border-[#275643] bg-[#082d21] px-3 py-3 text-[#d0e5dc] transition-colors hover:bg-[#0b3a2a] hover:text-white"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0b4e38] text-[#96d4be]">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current stroke-2">
                    <path d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7l8-4z" />
                  </svg>
                </span>
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="flex items-center gap-2 rounded-xl border border-[#275643] bg-[#082d21] px-3 py-3 text-[#d0e5dc] transition-colors hover:bg-[#0b3a2a] hover:text-white"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0b4e38] text-[#96d4be]">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current stroke-2">
                    <path d="M7 4h10v16H7z" />
                    <path d="M9 8h6M9 12h6M9 16h4" />
                  </svg>
                </span>
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-[#1f4f3e] pt-6 text-xs text-[#9ec5b5] md:flex-row md:items-center md:justify-between">
            <p className="font-medium text-[#d2e8df]">
              © {new Date().getFullYear()} MFNOW. All rights reserved.
            </p>
            <p className="max-w-2xl leading-5 md:text-right">
              Mutual fund investments are subject to market risks. Read all
              scheme related documents carefully.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
