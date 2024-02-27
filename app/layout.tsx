
import type { Metadata } from "next";
import {  Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import getCurrentUser from "./actions/getCurrentUser";
import PersistProvider from "./redux/Provider";
import ToastProvider from "./lib/ToastProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";

interface Session {
  user: {
    name: string;
    email: string;
    image?: string;
  } | null;
  expires: string;
}


const font = Nunito ({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Credto-Demo",
  description: "Credto-Demo for machine test",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  const session = await getServerSession(authOptions) as Session
 
  return (
    <html lang="en">
      <body className={font.className}>
      <PersistProvider>
        <ToastProvider/>
        <Navbar image={session?.user?.image}/>
        {children}
        <Footer/>
        </PersistProvider>
        </body>
    </html>
  );
}
