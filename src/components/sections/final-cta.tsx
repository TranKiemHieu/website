import React from "react";

export function FinalCta() {
  return (
    <section className="bg-blue-600 text-white py-14 text-left">
      <div className="max-w-[1140px] mx-auto px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight max-w-[580px]">
          Sẵn sàng thôi trả lời cùng một câu hỏi 100 lần mỗi ngày?
        </h2>
        <div className="flex items-center gap-4 flex-wrap">
          <a href="#demo" className="h-12 px-6 rounded-md bg-white text-blue-600 font-bold text-sm flex items-center shadow-sm hover:bg-blue-50 transition-colors">
            Đặt lịch demo
          </a>
          <a href="tel:19001234" className="font-semibold text-blue-100 hover:text-white transition-colors">
            hoặc gọi 1900 1234
          </a>
        </div>
      </div>
    </section>
  );
}