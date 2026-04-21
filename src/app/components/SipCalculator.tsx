"use client";

import { useMemo, useState } from "react";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [years, setYears] = useState(10);

  const { investedAmount, estimatedReturns, maturityValue } = useMemo(() => {
    const totalMonths = Math.max(1, years * 12);
    const monthlyRate = annualReturn / 12 / 100;
    const invested = monthlyInvestment * totalMonths;

    const futureValue =
      monthlyRate === 0
        ? invested
        : monthlyInvestment *
          (((1 + monthlyRate) ** totalMonths - 1) / monthlyRate) *
          (1 + monthlyRate);

    return {
      investedAmount: invested,
      estimatedReturns: Math.max(0, futureValue - invested),
      maturityValue: futureValue,
    };
  }, [monthlyInvestment, annualReturn, years]);

  return (
    <section id="sip-calculator" className="mx-auto w-full max-w-7xl px-6 pb-6 lg:px-10">
      <div className="rounded-3xl border border-[#d7e9e2] bg-white/85 p-7 shadow-lg shadow-[#01573c]/10 sm:p-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-[#b8d9cc] bg-[#e8f4ef] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#01573c]">
            SIP Calculator
          </span>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            Estimate your SIP growth in seconds
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
            Adjust investment amount, expected return, and duration to get an instant estimate of your mutual fund corpus.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-2xl border border-[#d7e9e2] bg-[#f5faf8] p-5 sm:p-6">
            <label className="block text-sm font-medium text-zinc-700">
              Monthly Investment (INR)
              <input
                type="number"
                min={500}
                step={500}
                value={monthlyInvestment}
                onChange={(event) =>
                  setMonthlyInvestment(Math.max(500, Number(event.target.value) || 0))
                }
                className="mt-2 w-full rounded-xl border border-[#b8d9cc] bg-white px-4 py-2.5 text-sm text-zinc-800 outline-none transition focus:border-[#01573c] focus:ring-2 focus:ring-[#01573c]/20"
              />
            </label>

            <label className="mt-5 block text-sm font-medium text-zinc-700">
              Expected Annual Return (%)
              <input
                type="number"
                min={1}
                max={30}
                step={0.1}
                value={annualReturn}
                onChange={(event) =>
                  setAnnualReturn(
                    Math.min(30, Math.max(1, Number(event.target.value) || 0)),
                  )
                }
                className="mt-2 w-full rounded-xl border border-[#b8d9cc] bg-white px-4 py-2.5 text-sm text-zinc-800 outline-none transition focus:border-[#01573c] focus:ring-2 focus:ring-[#01573c]/20"
              />
            </label>

            <label className="mt-5 block text-sm font-medium text-zinc-700">
              Investment Period (Years)
              <input
                type="number"
                min={1}
                max={40}
                step={1}
                value={years}
                onChange={(event) =>
                  setYears(Math.min(40, Math.max(1, Number(event.target.value) || 0)))
                }
                className="mt-2 w-full rounded-xl border border-[#b8d9cc] bg-white px-4 py-2.5 text-sm text-zinc-800 outline-none transition focus:border-[#01573c] focus:ring-2 focus:ring-[#01573c]/20"
              />
            </label>
          </div>

          <div className="rounded-2xl border border-[#d7e9e2] bg-white p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Estimated Results
            </p>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-[#d7e9e2] bg-[#f9fcfb] p-4">
                <p className="text-xs text-zinc-500">Invested Amount</p>
                <p className="mt-1 text-xl font-semibold text-zinc-900">
                  {currencyFormatter.format(investedAmount)}
                </p>
              </div>
              <div className="rounded-xl border border-[#d7e9e2] bg-[#f9fcfb] p-4">
                <p className="text-xs text-zinc-500">Estimated Returns</p>
                <p className="mt-1 text-xl font-semibold text-[#01573c]">
                  {currencyFormatter.format(estimatedReturns)}
                </p>
              </div>
              <div className="rounded-xl border border-[#c6ded4] bg-[#e8f4ef] p-4">
                <p className="text-xs text-zinc-600">Maturity Value</p>
                <p className="mt-1 text-2xl font-semibold text-[#01573c]">
                  {currencyFormatter.format(maturityValue)}
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-zinc-500">
              These values are indicative and assume a constant return rate. Actual returns may vary based on market performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
