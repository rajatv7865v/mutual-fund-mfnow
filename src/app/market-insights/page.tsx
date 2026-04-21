import Image from "next/image";
import Link from "next/link";

type MarketItem = {
  key: string;
  title: string;
  symbol: string;
  type: "index" | "fx" | "commodity" | "yield" | "crypto";
};

type MarketQuote = {
  symbol: string;
  name: string;
  price: number;
  previousClose: number;
  change: number;
  changePercent: number;
  open: number | null;
  dayHigh: number | null;
  dayLow: number | null;
  fiftyTwoWeekHigh: number | null;
  fiftyTwoWeekLow: number | null;
  volume: number | null;
  marketTime: number | null;
  currency: string;
  exchangeName: string;
};

type MutualFundItem = {
  key: string;
  schemeCode: string;
  label: string;
};

type MutualFundQuote = {
  schemeName: string;
  nav: number;
  previousNav: number;
  navDate: string;
  oneDayChangePct: number;
  oneWeekChangePct: number | null;
  oneMonthChangePct: number | null;
  oneYearChangePct: number | null;
};

type YahooQuoteResponse = {
  quoteResponse?: {
    result?: Array<{
      symbol?: string;
      shortName?: string;
      longName?: string;
      regularMarketPrice?: number;
      regularMarketPreviousClose?: number;
      regularMarketChange?: number;
      regularMarketChangePercent?: number;
      regularMarketOpen?: number;
      regularMarketDayHigh?: number;
      regularMarketDayLow?: number;
      fiftyTwoWeekHigh?: number;
      fiftyTwoWeekLow?: number;
      regularMarketVolume?: number;
      regularMarketTime?: number;
      currency?: string;
      fullExchangeName?: string;
    }>;
  };
};

type MfApiResponse = {
  meta?: {
    scheme_name?: string;
  };
  data?: Array<{
    date?: string;
    nav?: string;
  }>;
};

const MARKET_ITEMS: MarketItem[] = [
  { key: "nifty50", title: "NIFTY 50", symbol: "^NSEI", type: "index" },
  { key: "sensex", title: "SENSEX", symbol: "^BSESN", type: "index" },
  { key: "bankNifty", title: "BANK NIFTY", symbol: "^NSEBANK", type: "index" },
  { key: "usdInr", title: "USD/INR", symbol: "INR=X", type: "fx" },
  { key: "gold", title: "Gold Futures", symbol: "GC=F", type: "commodity" },
  { key: "crude", title: "Crude Oil", symbol: "CL=F", type: "commodity" },
];

const MACRO_ITEMS: MarketItem[] = [
  { key: "vix", title: "India VIX", symbol: "^INDIAVIX", type: "index" },
  { key: "us10y", title: "US 10Y Yield", symbol: "^TNX", type: "yield" },
  { key: "dow", title: "Dow Jones", symbol: "^DJI", type: "index" },
  { key: "nasdaq", title: "NASDAQ", symbol: "^IXIC", type: "index" },
  { key: "silver", title: "Silver Futures", symbol: "SI=F", type: "commodity" },
  { key: "bitcoin", title: "Bitcoin", symbol: "BTC-USD", type: "crypto" },
];

const MUTUAL_FUND_ITEMS: MutualFundItem[] = [
  {
    key: "iciciElss",
    schemeCode: "100354",
    label: "ICICI Prudential ELSS Tax Saver - Growth",
  },
  {
    key: "quantElss",
    schemeCode: "100175",
    label: "quant ELSS Tax Saver - Growth",
  },
  {
    key: "franklinLargeCap",
    schemeCode: "100471",
    label: "Franklin India Large Cap - Growth",
  },
  {
    key: "utiLargeCap",
    schemeCode: "100382",
    label: "UTI Large Cap - Growth",
  },
  {
    key: "licFlexiCap",
    schemeCode: "100313",
    label: "LIC MF Flexi Cap - Growth",
  },
  {
    key: "franklinNifty50",
    schemeCode: "100484",
    label: "Franklin Nifty 50 Index - Growth",
  },
];

const compactNumberFormat = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 2,
});

const compactAmountFormat = new Intl.NumberFormat("en-IN", {
  notation: "compact",
  maximumFractionDigits: 2,
});

const percentFormat = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const navFormat = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function toPercent(current: number, past: number) {
  if (past === 0) {
    return 0;
  }
  return ((current - past) / past) * 100;
}

function toneClass(value: number | null) {
  if (value === null || value === 0) {
    return "text-zinc-500";
  }
  return value > 0 ? "text-emerald-700" : "text-rose-600";
}

function signedPercent(value: number | null) {
  if (value === null) {
    return "--";
  }
  const prefix = value > 0 ? "+" : "";
  return `${prefix}${percentFormat.format(value)}%`;
}

function macroIcon(type: MarketItem["type"]) {
  if (type === "index") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
        <path d="M4 19h16" />
        <path d="M6 15l4-4 3 2 5-6" />
      </svg>
    );
  }
  if (type === "yield") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
        <path d="M12 3v18" />
        <path d="M7 8l5-5 5 5" />
      </svg>
    );
  }
  if (type === "crypto") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
        <circle cx="12" cy="12" r="8" />
        <path d="M9 9h4a2 2 0 010 4H9z" />
        <path d="M9 13h4.5a2 2 0 010 4H9z" />
      </svg>
    );
  }
  if (type === "fx") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
      <path d="M4 16l5-5 4 4 7-7" />
      <path d="M14 8h6v6" />
    </svg>
  );
}

function formatPrice(value: number, currency: string, type: MarketItem["type"]) {
  if (type === "index") {
    return compactNumberFormat.format(value);
  }

  if (type === "yield") {
    return `${percentFormat.format(value)}%`;
  }

  if (type === "fx") {
    return percentFormat.format(value);
  }

  if (type === "crypto") {
    if (currency === "USD") {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(value);
    }
    return compactNumberFormat.format(value);
  }

  if (currency === "INR") {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(value);
  }

  if (currency === "USD") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(value);
  }

  return `${compactNumberFormat.format(value)} ${currency}`;
}

async function fetchMarketQuotes(symbols: string[]): Promise<Record<string, MarketQuote>> {
  const endpoint = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${encodeURIComponent(
    symbols.join(","),
  )}`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        accept: "application/json",
        "user-agent": "Mozilla/5.0",
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return {};
    }

    const json = (await response.json()) as YahooQuoteResponse;
    const quotes = json.quoteResponse?.result ?? [];
    const mapped: Record<string, MarketQuote> = {};

    for (const row of quotes) {
      const symbol = row.symbol;
      const price = row.regularMarketPrice;
      const previousClose = row.regularMarketPreviousClose;

      if (
        typeof symbol !== "string" ||
        typeof price !== "number" ||
        typeof previousClose !== "number"
      ) {
        continue;
      }

      const change =
        typeof row.regularMarketChange === "number"
          ? row.regularMarketChange
          : price - previousClose;
      const changePercent =
        typeof row.regularMarketChangePercent === "number"
          ? row.regularMarketChangePercent
          : toPercent(price, previousClose);

      mapped[symbol] = {
        symbol,
        name: row.longName ?? row.shortName ?? symbol,
        price,
        previousClose,
        change,
        changePercent,
        open: typeof row.regularMarketOpen === "number" ? row.regularMarketOpen : null,
        dayHigh: typeof row.regularMarketDayHigh === "number" ? row.regularMarketDayHigh : null,
        dayLow: typeof row.regularMarketDayLow === "number" ? row.regularMarketDayLow : null,
        fiftyTwoWeekHigh:
          typeof row.fiftyTwoWeekHigh === "number" ? row.fiftyTwoWeekHigh : null,
        fiftyTwoWeekLow:
          typeof row.fiftyTwoWeekLow === "number" ? row.fiftyTwoWeekLow : null,
        volume:
          typeof row.regularMarketVolume === "number" ? row.regularMarketVolume : null,
        marketTime: typeof row.regularMarketTime === "number" ? row.regularMarketTime : null,
        currency: row.currency ?? "INR",
        exchangeName: row.fullExchangeName ?? "Market feed",
      };
    }

    return mapped;
  } catch {
    return {};
  }
}

async function fetchMutualFundQuote(schemeCode: string): Promise<MutualFundQuote | null> {
  const endpoint = `https://api.mfapi.in/mf/${encodeURIComponent(schemeCode)}`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        accept: "application/json",
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return null;
    }

    const json = (await response.json()) as MfApiResponse;
    const points = (json.data ?? [])
      .map((point) => ({
        date: point.date ?? "",
        nav: point.nav ? Number(point.nav) : Number.NaN,
      }))
      .filter((point) => point.date && Number.isFinite(point.nav));

    const latest = points[0];
    const previous = points[1];
    if (!latest || !previous) {
      return null;
    }

    const weeklyPoint = points[5] ?? null;
    const monthlyPoint = points[21] ?? null;
    const yearlyPoint = points[252] ?? null;

    return {
      schemeName: json.meta?.scheme_name ?? `Scheme ${schemeCode}`,
      nav: latest.nav,
      previousNav: previous.nav,
      navDate: latest.date,
      oneDayChangePct: toPercent(latest.nav, previous.nav),
      oneWeekChangePct: weeklyPoint ? toPercent(latest.nav, weeklyPoint.nav) : null,
      oneMonthChangePct: monthlyPoint ? toPercent(latest.nav, monthlyPoint.nav) : null,
      oneYearChangePct: yearlyPoint ? toPercent(latest.nav, yearlyPoint.nav) : null,
    };
  } catch {
    return null;
  }
}

export default async function MarketInsightsPage() {
  const allSymbols = [...MARKET_ITEMS, ...MACRO_ITEMS].map((item) => item.symbol);
  const marketQuotesBySymbol = await fetchMarketQuotes(allSymbols);
  const data = MARKET_ITEMS.map((item) => ({
    item,
    quote: marketQuotesBySymbol[item.symbol] ?? null,
  }));
  const macroData = MACRO_ITEMS.map((item) => ({
    item,
    quote: marketQuotesBySymbol[item.symbol] ?? null,
  }));

  const mutualFundData = await Promise.all(
    MUTUAL_FUND_ITEMS.map(async (item) => {
      const quote = await fetchMutualFundQuote(item.schemeCode);
      return { item, quote };
    }),
  );

  const availableMarket = data.filter(
    (entry): entry is { item: MarketItem; quote: MarketQuote } => entry.quote !== null,
  );
  const advancers = availableMarket.filter((entry) => entry.quote.change >= 0).length;
  const decliners = availableMarket.filter((entry) => entry.quote.change < 0).length;
  const averageMove =
    availableMarket.length === 0
      ? null
      : availableMarket.reduce((sum, entry) => sum + entry.quote.changePercent, 0) /
        availableMarket.length;
  const bestMover =
    availableMarket.length === 0
      ? null
      : [...availableMarket].sort((a, b) => b.quote.changePercent - a.quote.changePercent)[0];
  const topGainers = [...availableMarket]
    .sort((a, b) => b.quote.changePercent - a.quote.changePercent)
    .slice(0, 3);
  const topLosers = [...availableMarket]
    .sort((a, b) => a.quote.changePercent - b.quote.changePercent)
    .slice(0, 3);

  const availableMutualFunds = mutualFundData.filter(
    (entry): entry is { item: MutualFundItem; quote: MutualFundQuote } => entry.quote !== null,
  );
  const bestMonthlyMutualFund =
    availableMutualFunds.length === 0
      ? null
      : [...availableMutualFunds]
          .filter((entry) => entry.quote.oneMonthChangePct !== null)
          .sort(
            (a, b) =>
              (b.quote.oneMonthChangePct ?? Number.NEGATIVE_INFINITY) -
              (a.quote.oneMonthChangePct ?? Number.NEGATIVE_INFINITY),
          )[0] ?? null;

  const latestMarketTimestamp =
    availableMarket.length === 0
      ? null
      : Math.max(...availableMarket.map((entry) => entry.quote.marketTime ?? 0));
  const generatedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  const marketUpdatedAt =
    latestMarketTimestamp && latestMarketTimestamp > 0
      ? new Date(latestMarketTimestamp * 1000).toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "short",
        })
      : generatedAt;

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
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-[#d7e9e2] bg-white/90 p-7 shadow-lg shadow-[#01573c]/10 sm:p-10">
            <span className="inline-flex items-center rounded-full border border-[#b8d9cc] bg-[#e8f4ef] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#01573c]">
              Live Market Insights
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Real-time market analytics for smarter investing
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
              This dashboard combines live market quotes and mutual fund NAVs so you can track trend direction, movers, risk signals, and NAV performance from one place.
            </p>
            <p className="mt-2 text-xs font-medium text-zinc-500">
              Last updated: {marketUpdatedAt}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[#d7e9e2] bg-[#f8fcfa] px-3 py-3 text-xs">
                <p className="text-zinc-500">Feed Type</p>
                <p className="mt-1 font-semibold text-zinc-900">Live Quote + NAV</p>
              </div>
              <div className="rounded-xl border border-[#d7e9e2] bg-[#f8fcfa] px-3 py-3 text-xs">
                <p className="text-zinc-500">Refresh Window</p>
                <p className="mt-1 font-semibold text-zinc-900">Every 60 sec</p>
              </div>
              <div className="rounded-xl border border-[#d7e9e2] bg-[#f8fcfa] px-3 py-3 text-xs">
                <p className="text-zinc-500">Coverage</p>
                <p className="mt-1 font-semibold text-zinc-900">Market + Mutual Funds</p>
              </div>
            </div>
          </div>

          <div className="group relative min-h-[280px] overflow-hidden rounded-3xl border border-[#d7e9e2] shadow-xl shadow-[#01573c]/20">
            <Image
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80"
              alt="Live stock market screen with candlestick data"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012d20]/80 via-[#012d20]/30 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#cce8dc]">
                Live Market View
              </p>
              <p className="mt-2 text-lg font-semibold">
                Track momentum, volatility, and trend direction in one premium dashboard.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-2xl border border-[#d7e9e2] bg-white p-5 shadow-sm shadow-[#01573c]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#01573c]/12">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                <rect x="4" y="5" width="16" height="14" rx="2" />
                <path d="M8 14l2-2 2 2 4-4" />
              </svg>
            </span>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Live Assets Tracked
            </p>
            <p className="mt-3 text-3xl font-semibold text-zinc-900">{availableMarket.length}</p>
            <p className="mt-1 text-sm text-zinc-500">Across index, FX, and commodities</p>
          </article>
          <article className="rounded-2xl border border-[#d7e9e2] bg-white p-5 shadow-sm shadow-[#01573c]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#01573c]/12">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                <path d="M4 12h16" />
                <path d="M8 8l-4 4 4 4" />
                <path d="M16 8l4 4-4 4" />
              </svg>
            </span>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Advancers vs Decliners
            </p>
            <p className="mt-3 text-3xl font-semibold text-zinc-900">
              {advancers} / {decliners}
            </p>
            <p className="mt-1 text-sm text-zinc-500">Positive vs negative movers today</p>
          </article>
          <article className="rounded-2xl border border-[#d7e9e2] bg-white p-5 shadow-sm shadow-[#01573c]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#01573c]/12">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                <path d="M4 16l5-5 4 4 7-7" />
                <path d="M14 8h6v6" />
              </svg>
            </span>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Average Daily Move
            </p>
            <p className={`mt-3 text-3xl font-semibold ${toneClass(averageMove)}`}>
              {signedPercent(averageMove)}
            </p>
            <p className="mt-1 text-sm text-zinc-500">Mean move across tracked assets</p>
          </article>
          <article className="rounded-2xl border border-[#d7e9e2] bg-white p-5 shadow-sm shadow-[#01573c]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#01573c]/12">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                <path d="M4 20h16" />
                <path d="M8 16V8" />
                <path d="M12 16V4" />
                <path d="M16 16v-6" />
              </svg>
            </span>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Highest Mover
            </p>
            <p className="mt-3 text-base font-semibold text-zinc-900">
              {bestMover ? bestMover.item.title : "N/A"}
            </p>
            <p className={`mt-1 text-2xl font-semibold ${toneClass(bestMover?.quote.changePercent ?? null)}`}>
              {signedPercent(bestMover?.quote.changePercent ?? null)}
            </p>
          </article>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border border-[#d7e9e2] shadow-lg shadow-[#01573c]/15">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80"
              alt="Market analysts discussing global index performance"
              width={1000}
              height={620}
              className="h-[200px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012d20]/80 to-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-semibold text-white">
              Global Market Pulse
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-[#d7e9e2] shadow-lg shadow-[#01573c]/15">
            <Image
              src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1400&q=80"
              alt="Trader viewing commodities and forex data"
              width={1000}
              height={620}
              className="h-[200px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012d20]/80 to-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-semibold text-white">
              Commodities & Forex
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-[#d7e9e2] shadow-lg shadow-[#01573c]/15">
            <Image
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1400&q=80"
              alt="Digital chart data on a trading terminal"
              width={1000}
              height={620}
              className="h-[200px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012d20]/80 to-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-semibold text-white">
              Trend & Volatility Signals
            </p>
          </div>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#d7e9e2] bg-white p-5 shadow-sm shadow-[#01573c]/10">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Top Gainers
            </p>
            <div className="mt-4 space-y-3">
              {topGainers.length > 0 ? (
                topGainers.map((entry) => (
                  <div
                    key={`gainer-${entry.item.key}`}
                    className="flex items-center justify-between rounded-xl border border-[#e3efe9] bg-[#f8fcfa] px-3 py-2"
                  >
                    <p className="text-sm font-medium text-zinc-800">{entry.item.title}</p>
                    <p className="text-sm font-semibold text-emerald-700">
                      {signedPercent(entry.quote.changePercent)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-zinc-500">No live data available right now.</p>
              )}
            </div>
          </article>
          <article className="rounded-2xl border border-[#d7e9e2] bg-white p-5 shadow-sm shadow-[#01573c]/10">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Top Losers
            </p>
            <div className="mt-4 space-y-3">
              {topLosers.length > 0 ? (
                topLosers.map((entry) => (
                  <div
                    key={`loser-${entry.item.key}`}
                    className="flex items-center justify-between rounded-xl border border-[#e3efe9] bg-[#f8fcfa] px-3 py-2"
                  >
                    <p className="text-sm font-medium text-zinc-800">{entry.item.title}</p>
                    <p className="text-sm font-semibold text-rose-600">
                      {signedPercent(entry.quote.changePercent)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-zinc-500">No live data available right now.</p>
              )}
            </div>
          </article>
        </section>

        <section className="mt-8 overflow-hidden rounded-3xl border border-[#d7e9e2] bg-gradient-to-br from-white via-[#f8fcfa] to-[#eef8f3] p-7 shadow-xl shadow-[#01573c]/10 sm:p-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[#b8d9cc] bg-[#e8f4ef] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#01573c]">
              Global & Macro Signals
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Additional live cards across volatility, rates, global indices, and crypto
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
              Real-time quotes from the same live market feed to broaden your macro view before making SIP and allocation decisions.
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[#d7e9e2] bg-white px-3 py-3 text-xs">
              <p className="text-zinc-500">Signals Covered</p>
              <p className="mt-1 font-semibold text-zinc-900">Volatility, Yields, Crypto</p>
            </div>
            <div className="rounded-xl border border-[#d7e9e2] bg-white px-3 py-3 text-xs">
              <p className="text-zinc-500">Live Cards</p>
              <p className="mt-1 font-semibold text-zinc-900">{macroData.length} Macro Instruments</p>
            </div>
            <div className="rounded-xl border border-[#d7e9e2] bg-white px-3 py-3 text-xs">
              <p className="text-zinc-500">Use Case</p>
              <p className="mt-1 font-semibold text-zinc-900">Allocation + Risk Context</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {macroData.map(({ item, quote }) => {
              if (!quote) {
                return (
                  <article
                    key={item.key}
                    className="rounded-2xl border border-[#d7e9e2] bg-white p-5 shadow-sm shadow-[#01573c]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#01573c]/12"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                        {macroIcon(item.type)}
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        {item.type}
                      </p>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-zinc-900">{item.title}</h3>
                    <p className="mt-4 text-sm text-zinc-500">
                      Live quote is temporarily unavailable.
                    </p>
                  </article>
                );
              }

              return (
                <article
                  key={item.key}
                  className="rounded-2xl border border-[#d7e9e2] bg-white p-5 shadow-sm shadow-[#01573c]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#01573c]/12"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f4ef] text-[#01573c]">
                      {macroIcon(item.type)}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      {item.type}
                    </p>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-1 text-xs text-zinc-500">{quote.exchangeName}</p>
                  <p className="mt-4 text-3xl font-semibold text-zinc-900">
                    {formatPrice(quote.price, quote.currency, item.type)}
                  </p>
                  <p className={`mt-2 text-sm font-semibold ${toneClass(quote.changePercent)}`}>
                    {quote.change > 0 ? "+" : ""}
                    {compactNumberFormat.format(quote.change)} (
                    {quote.changePercent > 0 ? "+" : ""}
                    {percentFormat.format(quote.changePercent)}%)
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {data.map(({ item, quote }) => {
            if (!quote) {
              return (
                <article
                  key={item.key}
                  className="rounded-2xl border border-[#d7e9e2] bg-white p-5 shadow-sm shadow-[#01573c]/10"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    {item.type}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-zinc-900">{item.title}</h2>
                  <p className="mt-1 text-xs text-zinc-500">Source: Live market feed</p>
                  <p className="mt-5 text-sm text-zinc-500">
                    Live quote is temporarily unavailable. Please refresh in a moment.
                  </p>
                </article>
              );
            }

            const dayRangePct =
              quote.dayHigh !== null && quote.dayLow !== null && quote.dayHigh > quote.dayLow
                ? clamp(((quote.price - quote.dayLow) / (quote.dayHigh - quote.dayLow)) * 100, 0, 100)
                : null;
            const week52RangePct =
              quote.fiftyTwoWeekHigh !== null &&
              quote.fiftyTwoWeekLow !== null &&
              quote.fiftyTwoWeekHigh > quote.fiftyTwoWeekLow
                ? clamp(
                    ((quote.price - quote.fiftyTwoWeekLow) /
                      (quote.fiftyTwoWeekHigh - quote.fiftyTwoWeekLow)) *
                      100,
                    0,
                    100,
                  )
                : null;

            return (
              <article
                key={item.key}
                className="rounded-2xl border border-[#d7e9e2] bg-white p-5 shadow-sm shadow-[#01573c]/10"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {item.type}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-zinc-900">{item.title}</h2>
                <p className="mt-1 text-xs text-zinc-500">{quote.exchangeName}</p>
                <p className="mt-4 text-3xl font-semibold text-zinc-900">
                  {formatPrice(quote.price, quote.currency, item.type)}
                </p>
                <p className={`mt-2 text-sm font-semibold ${toneClass(quote.changePercent)}`}>
                  {quote.change > 0 ? "+" : ""}
                  {compactNumberFormat.format(quote.change)} (
                  {quote.changePercent > 0 ? "+" : ""}
                  {percentFormat.format(quote.changePercent)}%)
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl border border-[#d7e9e2] bg-[#f7fcfa] p-3">
                    <p className="text-zinc-500">Open</p>
                    <p className="mt-1 font-semibold text-zinc-800">
                      {quote.open !== null ? formatPrice(quote.open, quote.currency, item.type) : "N/A"}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#d7e9e2] bg-[#f7fcfa] p-3">
                    <p className="text-zinc-500">Volume</p>
                    <p className="mt-1 font-semibold text-zinc-800">
                      {quote.volume !== null ? compactAmountFormat.format(quote.volume) : "N/A"}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#d7e9e2] bg-[#f7fcfa] p-3">
                    <p className="text-zinc-500">Day High</p>
                    <p className="mt-1 font-semibold text-zinc-800">
                      {quote.dayHigh !== null
                        ? formatPrice(quote.dayHigh, quote.currency, item.type)
                        : "N/A"}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#d7e9e2] bg-[#f7fcfa] p-3">
                    <p className="text-zinc-500">Day Low</p>
                    <p className="mt-1 font-semibold text-zinc-800">
                      {quote.dayLow !== null
                        ? formatPrice(quote.dayLow, quote.currency, item.type)
                        : "N/A"}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-zinc-500">
                    Day Range Position
                  </p>
                  <div className="mt-2 h-2 rounded-full bg-[#e6f2ec]">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-[#01573c] to-[#1f7a5b]"
                      style={{ width: `${dayRangePct ?? 0}%` }}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-zinc-500">
                    52-Week Position
                  </p>
                  <div className="mt-2 h-2 rounded-full bg-[#e6f2ec]">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-[#01432f] to-[#2b8f6a]"
                      style={{ width: `${week52RangePct ?? 0}%` }}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="mt-10 rounded-3xl border border-[#d7e9e2] bg-white/90 p-7 shadow-lg shadow-[#01573c]/10 sm:p-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[#b8d9cc] bg-[#e8f4ef] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#01573c]">
              Live Mutual Fund NAV
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Latest NAV updates from mutual fund API
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
              NAV data below is fetched live from MFAPI. NAVs are usually published end-of-day, so this reflects the latest official update with performance analytics.
            </p>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#d7e9e2] bg-[#f8fcfa] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Funds Tracked
              </p>
              <p className="mt-2 text-2xl font-semibold text-zinc-900">
                {availableMutualFunds.length}
              </p>
            </div>
            <div className="rounded-2xl border border-[#d7e9e2] bg-[#f8fcfa] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Best 1-Month Performer
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-900">
                {bestMonthlyMutualFund ? bestMonthlyMutualFund.item.label : "N/A"}
              </p>
              <p
                className={`mt-1 text-lg font-semibold ${toneClass(
                  bestMonthlyMutualFund?.quote.oneMonthChangePct ?? null,
                )}`}
              >
                {signedPercent(bestMonthlyMutualFund?.quote.oneMonthChangePct ?? null)}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {mutualFundData.map(({ item, quote }) => {
              if (!quote) {
                return (
                  <article
                    key={item.key}
                    className="rounded-2xl border border-[#d7e9e2] bg-white p-5 shadow-sm shadow-[#01573c]/10"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      mutual fund
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-zinc-900">{item.label}</h3>
                    <p className="mt-4 text-sm text-zinc-500">
                      Latest NAV is temporarily unavailable.
                    </p>
                  </article>
                );
              }

              const navChange = quote.nav - quote.previousNav;
              return (
                <article
                  key={item.key}
                  className="rounded-2xl border border-[#d7e9e2] bg-white p-5 shadow-sm shadow-[#01573c]/10"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    mutual fund
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-zinc-900">
                    {quote.schemeName}
                  </h3>
                  <p className="mt-4 text-2xl font-semibold text-zinc-900">
                    {navFormat.format(quote.nav)}
                  </p>
                  <p className={`mt-2 text-sm font-semibold ${toneClass(quote.oneDayChangePct)}`}>
                    {navChange > 0 ? "+" : ""}
                    {percentFormat.format(navChange)} (
                    {quote.oneDayChangePct > 0 ? "+" : ""}
                    {percentFormat.format(quote.oneDayChangePct)}%)
                  </p>
                  <p className="mt-3 text-xs text-zinc-500">NAV Date: {quote.navDate}</p>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                    <div className="rounded-lg border border-[#d7e9e2] bg-[#f8fcfa] px-2 py-2 text-center">
                      <p className="text-zinc-500">1W</p>
                      <p className={`mt-1 font-semibold ${toneClass(quote.oneWeekChangePct)}`}>
                        {signedPercent(quote.oneWeekChangePct)}
                      </p>
                    </div>
                    <div className="rounded-lg border border-[#d7e9e2] bg-[#f8fcfa] px-2 py-2 text-center">
                      <p className="text-zinc-500">1M</p>
                      <p className={`mt-1 font-semibold ${toneClass(quote.oneMonthChangePct)}`}>
                        {signedPercent(quote.oneMonthChangePct)}
                      </p>
                    </div>
                    <div className="rounded-lg border border-[#d7e9e2] bg-[#f8fcfa] px-2 py-2 text-center">
                      <p className="text-zinc-500">1Y</p>
                      <p className={`mt-1 font-semibold ${toneClass(quote.oneYearChangePct)}`}>
                        {signedPercent(quote.oneYearChangePct)}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
