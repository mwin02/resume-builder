import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/lib/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy Resume",
  description:
    "Build your next resume and customize it for each job opputurnity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
