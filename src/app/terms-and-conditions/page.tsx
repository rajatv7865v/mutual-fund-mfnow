import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#eef5f1]">
      <main className="mx-auto w-full px-4 py-10 sm:px-6 lg:py-14">
        <div className="mx-auto mb-5 flex w-full max-w-[820px] items-center justify-between">
          <Link
            href="/"
            className="rounded-lg border border-[#b8d9cc] bg-white px-4 py-2 text-sm font-medium text-[#01573c] transition-colors hover:bg-[#e8f4ef]"
          >
            Back to Home
          </Link>
        </div>

        <article className="mx-auto w-full max-w-[820px] min-h-[1120px] border border-[#d7e9e2] bg-white px-8 py-10 shadow-[0_24px_60px_rgba(1,87,60,0.12)] sm:px-12">
          <header className="border-b border-[#e2eee8] pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#01573c]">
              MFNOW Legal
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">
              Terms & Conditions
            </h1>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              By using MFNOW services, you agree to these terms governing access, usage, content,
              and service limitations.
            </p>
          </header>

          <section className="mt-8 space-y-6 text-sm leading-7 text-zinc-700">
            <div>
              <h2 className="text-base font-semibold text-zinc-900">1. Scope of Services</h2>
              <p className="mt-2">
                MFNOW provides informational tools, market insights, calculators, and investor
                support for mutual fund related planning.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-zinc-900">2. Investment Disclaimer</h2>
              <p className="mt-2">
                Mutual fund investments are subject to market risks. Historical performance or
                analytical outputs do not guarantee future returns.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-zinc-900">3. User Responsibility</h2>
              <p className="mt-2">
                Users are responsible for independent decision-making and should evaluate suitability
                before acting on any platform content.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-zinc-900">4. Content and Availability</h2>
              <p className="mt-2">
                Data feeds, calculations, and page content may change over time. MFNOW may update,
                modify, or discontinue features without prior notice.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-zinc-900">5. Limitation of Liability</h2>
              <p className="mt-2">
                MFNOW is not liable for investment losses, market volatility impact, or outcomes
                resulting from user decisions.
              </p>
            </div>
          </section>

          <footer className="mt-10 border-t border-[#e2eee8] pt-5 text-xs text-zinc-500">
            <p>Contact: care@mfnow.com | +91 9999916509</p>
            <p className="mt-1">
              Address: 608, 6th Floor, Naurang House, K G Marg, New Delhi 110001
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
