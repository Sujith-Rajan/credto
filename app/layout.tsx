import type { Metadata } from "next";
import {  Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import getCurrentUser from "./actions/getCurrentUser";

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

  const currentUser =  await getCurrentUser()
 
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar currentUser={currentUser}/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
