import type { Metadata } from "next";
import "./globals.css";
import "../styles.css";

export const metadata: Metadata = {
  title: "Hemsworth Town Council | Hemsworth, Fitzwilliam & Kinsley",
  description:
    "Council services, local facilities, public notices, councillor information and official documents for Hemsworth, Fitzwilliam and Kinsley.",
  applicationName: "Hemsworth Town Council",
  openGraph: {
    title: "Hemsworth Town Council",
    description:
      "Information and links for Hemsworth Town Council, serving Hemsworth, Fitzwilliam and Kinsley.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <meta name="theme-color" content="#0b132b" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
