'use client';

import React, { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 border-b ${
      scrolled 
        ? "bg-white/90 backdrop-blur-md border-black/10 shadow-sm" 
        : "bg-transparent border-transparent"
    }`}>
      <div className="max-w-[1140px] mx-auto h-17 px-6 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center">
          <span className="font-bold text-xl tracking-tight text-neutral-900">Chimori<span className="text-blue-600">.ai</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-6 flex-1 ml-4">
          {["Tính năng", "Cách hoạt động", "Con người + AI", "Khách hàng", "FAQ"].map((text, idx) => {
            const hrefs = ["#tinh-nang", "#cach-hoat-dong", "#con-nguoi-ai", "#khach-hang", "#faq"];
            return (
              <a key={idx} href={hrefs[idx]} className="text-[15px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
                {text}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-5">
          <a href="tel:19001234" className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-neutral-900 whitespace-nowrap">
            <Phone className="w-4 h-4" /> 1900 1234
          </a>
          <a href="#demo" className="h-9 px-4 rounded-md bg-neutral-900 text-white font-medium text-sm flex items-center shadow-sm hover:bg-neutral-800 transition-colors">
            Đặt lịch demo
          </a>
        </div>
      </div>
    </header>
  );
}