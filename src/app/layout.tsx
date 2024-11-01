import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import AuthProvider from "@/providers/AuthProvider";
import { getLocale } from "next-intl/server";
import IntlProvider from "@/providers/IntlProvider";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <IntlProvider>
          <AuthProvider>{children}</AuthProvider>
        </IntlProvider>
      </body>
    </html>
  );
}
