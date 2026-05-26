import type { Metadata, Viewport } from "next";
import "./globals.css";

import TopBar from "@/components/common/Topbar";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "BIS Certification, CRS Registration, WPC Approval, TEC, LMPC, FMCS and regulatory compliance consultancy in India.",
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A2540",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <TopBar />
        <Header />
        <main className="grow bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
