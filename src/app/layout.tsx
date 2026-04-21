import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MFNow - Mutual Fund Investment Advisor",
  description: "MFNow is a mutual fund investment advisor that helps you invest in mutual funds in a smarter way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contactNumber = "+919999916509";
  const whatsappLink = `https://wa.me/${contactNumber.replace("+", "")}`;

  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        {children}
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 md:bottom-6 md:right-6 md:flex-col">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path d="M19.11 4.89A9.94 9.94 0 0012.02 2C6.53 2 2.06 6.46 2.06 11.95c0 1.76.46 3.48 1.33 5L2 22l5.2-1.36a9.95 9.95 0 004.82 1.24h.01c5.49 0 9.96-4.47 9.96-9.96a9.9 9.9 0 00-2.88-7.03zM12.03 20.2h-.01a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.09.81.82-3.01-.2-.31a8.23 8.23 0 01-1.26-4.41c0-4.54 3.69-8.23 8.23-8.23a8.16 8.16 0 015.83 2.42 8.18 8.18 0 012.41 5.82c0 4.54-3.69 8.23-8.24 8.23zm4.51-6.14c-.25-.12-1.49-.74-1.72-.82-.23-.08-.4-.12-.57.12-.17.25-.65.82-.8.99-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.2-.73-.65-1.23-1.44-1.38-1.68-.14-.25-.02-.38.11-.51.12-.12.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.88-.2-.48-.41-.42-.57-.42h-.49c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.37 1 2.54c.12.17 1.73 2.64 4.19 3.7.58.25 1.04.4 1.39.52.59.19 1.13.16 1.56.1.47-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.14-1.2-.06-.1-.23-.16-.48-.28z" />
            </svg>
          </a>

          <a
            href={`tel:${contactNumber}`}
            aria-label="Call MFNOW support"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#01573c] text-white shadow-lg shadow-[#01573c]/30 transition-transform hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
              <path d="M6 3h4l2 5-2 2a14 14 0 006 6l2-2 5 2v4a2 2 0 01-2 2h-1C10 22 2 14 2 4V3a2 2 0 012-2z" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
