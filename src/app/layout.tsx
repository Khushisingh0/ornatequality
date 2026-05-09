import type { Metadata } from "next";
import "./globals.css";

// Import components
import TopBar from "@/components/common/Topbar";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export const metadata: Metadata = {
  title: "Ornate Quality Services",
  description: "Professional Certification & Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>

        {/*  TopBar */}
        <TopBar />

        {/*  Header */}
        <Header />

        {/*  Page Content */}
        <main className="grow bg-white">
          {children}
        </main>

        {/*  Footer */}
        <Footer />

      </body>
    </html>
  );
}