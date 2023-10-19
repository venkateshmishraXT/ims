"use client";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import React, { createContext, useEffect, useState } from "react";
//import API_BASE_URL from "@/config/api";
import CMS_API_BASE from "@/config/cms";
export const context = createContext(null);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<any>();
  // useEffect(() => {
  //   fetch(`${API_BASE_URL}/content`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json.contentFields);
  //     });
  // }, []);
  //new CMS api call

  useEffect(() => {
    fetch(CMS_API_BASE.URL, {
      method: "GET",
      headers: CMS_API_BASE.headers,
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json.contentFields);
        console.log("cms data ====" + json.contentFields);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          <context.Provider value={data}>
            <Navbar />
            {children}
            <Footer />
          </context.Provider>
        </div>
      </body>
    </html>
  );
}
