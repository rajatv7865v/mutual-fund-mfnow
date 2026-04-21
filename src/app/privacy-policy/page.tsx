import Link from "next/link";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              This policy explains how MFNOW collects, uses, stores, and protects your information
              while offering mutual fund related services and investor support.
            </p>
          </header>

          <section className="mt-8 space-y-6 text-sm leading-7 text-zinc-700">
            <div>
              <h2 className="text-base font-semibold text-zinc-900">1. Information We Collect</h2>
              <p className="mt-2">
                We may collect personal information including your name, phone number, email,
                communication history, and any details submitted through contact forms.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-zinc-900">2. Purpose of Data Use</h2>
              <p className="mt-2">
                Information is used to provide support, respond to requests, improve platform
                experience, and fulfill regulatory and compliance obligations.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-zinc-900">3. Data Protection</h2>
              <p className="mt-2">
                MFNOW follows reasonable administrative and technical safeguards to protect data
                against unauthorized access, misuse, or disclosure.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-zinc-900">4. Data Sharing</h2>
              <p className="mt-2">
                We do not sell personal data. Information may be shared only with authorized
                service partners or regulators where required under law.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-zinc-900">5. User Rights</h2>
              <p className="mt-2">
                You may request updates or corrections to your submitted information by contacting
                our support team.
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
