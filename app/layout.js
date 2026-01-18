// app/layout.jsx
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./globals.css";

import localFont from "next/font/local";

const hauora = localFont({
  src: "../public/Hauora/Hauora-Medium.woff2",
  variable: "--font-sans",
});

const actayWideBold = localFont({
  src: "../public/Actay-wide/ActayWide-Bold.otf",
  variable: "--font-serif",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${hauora.variable} ${actayWideBold.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
