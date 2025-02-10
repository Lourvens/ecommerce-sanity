import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Shop | Discover the Best Products Online",
  description:
    "Explore a wide range of products at the best prices. Secure checkout, fast shipping, and exclusive deals await you!",
  keywords:
    "online shopping, best deals, e-commerce, buy online, fast shipping, secure checkout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body>
          <main className="mb-10 min-h-screen">
            <Header />
            {children}
            <Footer />
          </main>
          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
