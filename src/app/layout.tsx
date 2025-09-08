import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: "Classa - Modern Education Platform",
  description: "Next-generation education platform for modern learning",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} font-sans antialiased scroll-smooth`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
