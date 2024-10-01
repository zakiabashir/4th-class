import type { Metadata } from "next";
//import localFont from "next/font/local";
//import "./globals.css";

import Header from "../components/header"
import Footer from "../components/footer"
import Navbar from "../../../component/Navbar";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{flex:"justify-center", backgroundColor:"#e7d8c9", color:"#0f4c5c", fontFamily:"verdana", fontSize:"18px"}}>  
      <div className="bg-gradient-to-r from-gray-400  to-purple-300 text-4xl font-extrabold  text-red-500 
      
      text-center h-20 flex justify-center items-center"><Header/></div>
      <div className="bg-gradient-to-r from-blue-300  to-red-300  text-center h-100 flex justify-center items-center">
 
        <div style={{ height:"500px", marginTop:"100px",  marginBottom:"100px"}}>
        {children}
        </div>
        </div>
        <div className="bg-gradient-to-r from-purple-300  to-gray-400  text-2xl font-extrabold text-red-500 text-center h-20 flex justify-center items-center"><Footer/></div>

        
      </body>
    </html>
  );
}