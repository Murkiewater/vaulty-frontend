import "./globals.css";
import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModelProvider from "@/providers/model-provider";
import ToastProvider from "@/providers/toast-provider";

import type { Metadata } from "next";


const font = Urbanist({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${font.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ModelProvider/>
        <ToastProvider/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
