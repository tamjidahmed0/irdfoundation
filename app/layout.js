import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  ProviderClient  from "@/provider/provider";
import localFont from 'next/font/local'


const me_quran = localFont({ src: './font/me_quran.ttf', variable:'--font-quran' })


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${me_quran.variable} antialiased`}
      >
        <ProviderClient>
        {children}
        </ProviderClient>
      
      </body>
    </html>
  );
}
