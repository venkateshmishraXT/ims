"use client";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import React, { createContext, useEffect, useState } from "react";
import API_BASE_URL from "@/config/api";
import CMS_API_BASE_URL from "@/config/cms";
export const context = createContext(null);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<any>();
  useEffect(() => {
    fetch(`${API_BASE_URL}/content`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      });
  }, []);
  //new CMS api call
  // const url = 'https://52.204.255.29/o/headless-delivery/v1.0/structured-contents/34300?fields=contentFields';
  // const authkey = 'dXNlckBsaWZlcmF5LmNvbTpOZXd1c2VyQDEwMA==';
  // useEffect(() => {
  //     fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         authorization: 'Basic ' + authkey,
  //         'x-csrf-token': '9fd4qhxq',
  //       }
  //     }).then(response => response.json())
  //       .then(json => {
  //           setData(json.data)
  //           console.log('cms data ====' + json.data);
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       });
  // }, [])
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
