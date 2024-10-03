"use client";

import { useEffect } from "react";


import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });

    (function (c: { [key: string]: any }, l: Document, a: string, r: string, i: string, t: HTMLScriptElement | null, y: HTMLElement | null) {
      c[a] = c[a] || function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
      t = l.createElement(r) as HTMLScriptElement;
      t.async = true;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0] as HTMLElement;
      y.parentNode?.insertBefore(t, y);
    })(window as any, document, "clarity", "script", "o8mq4vhre8", null, null);
  }, []);

 

  return (
    <>
      <main className="relative flex grow flex-col">{children}</main>     
      <Footer />

    </>
  );
}
