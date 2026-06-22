'use client';

import React, { useEffect, useState } from "react";
import { Sparkles, Send, CheckCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const [demoPhase, setDemoPhase] = useState(0); 

  useEffect(() => {
    const t1 = setTimeout(() => setDemoPhase(1), 1100);
    const t2 = setTimeout(() => setDemoPhase(2), 2600);
    const t3 = setTimeout(() => setDemoPhase(3), 5200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <section className="py-16 md:py-20 border-b border-neutral-100">
      <div className="max-w-[1140px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-left">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-600 mb-4">
            Trợ lý AI chăm sóc khách hàng · Support copilot
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1] mb-5">
            Bạn trả lời điều quan trọng.<br />Chimori lo phần lặp lại.
          </h1>
          <p className="text-[18px] md:text-[19px] leading-relaxed text-neutral-500 mb-8 max-w-[580px]">
            Trợ lý AI đồng hành cùng bạn và đội ngũ — gợi ý câu trả lời trong 0,4 giây và tự xử lý những câu hỏi lặp đi lặp lại, suốt 24/7. Không thay thế con người, chỉ gánh bớt việc nhàm chán.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a href="#demo" className="h-12 px-6 rounded-md bg-blue-600 text-white font-semibold flex items-center shadow-sm hover:bg-blue-700 transition-colors">
              Đặt lịch demo
            </a>
            <a href="#cach-hoat-dong" className="h-12 px-5 rounded-md border border-neutral-200 text-neutral-700 bg-white font-semibold flex items-center shadow-xs hover:bg-neutral-50 transition-colors">
              Xem cách hoạt động
            </a>
          </div>
          <div className="flex items-center gap-3 flex-wrap text-sm text-neutral-400">
            <span><strong className="text-neutral-900">2.400+</strong> đội ngũ</span><span>·</span>
            <span><strong className="text-neutral-900">12 triệu+</strong> tin nhắn</span><span>·</span>
            <span><strong className="text-neutral-900">4,9★</strong> (380 đánh giá)</span>
          </div>
        </div>

        <div className="lg:col-span-5 bg-neutral-50 border border-neutral-200/80 rounded-xl p-5 shadow-sm">
          <div className="flex gap-2 mb-4">
            <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">FB</span>
            <span className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">ZL</span>
            <span className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">WA</span>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-4 shadow-2xs">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-neutral-900 text-sm">Trần Mỹ Linh</span>
              {demoPhase >= 3 ? (
                <Badge className="bg-emerald-50 text-emerald-700 shadow-none hover:bg-emerald-50 gap-1 rounded-full border-none px-2.5 py-0.5 font-medium text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Đã giải quyết
                </Badge>
              ) : (
                <Badge className="bg-amber-50 text-amber-700 shadow-none hover:bg-amber-50 gap-1 rounded-full border-none px-2.5 py-0.5 font-medium text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> Chờ trả lời
                </Badge>
              )}
            </div>
            <div className="inline-block bg-neutral-100 border border-neutral-200 rounded-2xl rounded-bl-xs px-3.5 py-2 text-[15px] text-neutral-900 text-left">
              Shop còn size 39 không ạ?
            </div>
            <div className="flex items-center gap-1 text-[12px] font-semibold text-blue-600 mt-4 mb-2.5">
              <Sparkles className="w-3.5 h-3.5 fill-blue-100" /> Chimori gợi ý
            </div>

            {demoPhase === 1 && (
              <div className="inline-flex gap-1.5 items-center bg-blue-50/70 border border-blue-100 rounded-2xl px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}

            {demoPhase >= 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3 text-[15px] leading-relaxed text-neutral-900 text-left">
                  Dạ còn ạ! Size 39 vừa về sáng nay. Em giữ một đôi cho mình nhé?
                </div>
                <div className="mt-3 flex justify-end">
                  {demoPhase === 2 ? (
                    <button className="inline-flex items-center gap-1.5 bg-blue-600 text-white rounded-md px-3.5 py-1.5 text-sm font-semibold hover:bg-blue-700 transition-colors shadow-xs">
                      Dùng câu trả lời <Send className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold text-sm">
                      <CheckCheck className="w-4 h-4" /> Đã gửi tự động
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}