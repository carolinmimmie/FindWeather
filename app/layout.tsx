import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App",
  description: "Whater app using the api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
