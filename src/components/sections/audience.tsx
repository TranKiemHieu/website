'use client';

import React, { useState } from "react";
import { Check, Users, Moon } from "lucide-react";

export function Audience() {
  const [tab, setTab] = useState<"business" | "personal">("business");

  const audData = tab === "business" 
    ? {
        title: "Cho đội ngũ chăm sóc khách hàng",
        lead: "Một hộp thư chung, định tuyến thông minh và báo cáo theo thời gian thực — để cả team không ai bỏ sót và quản lý nhìn được mọi thứ.",
        bullets: [
          "Hộp thư chung cho cả nhóm, phân công theo từng người",
          "Định tuyến hội thoại theo kênh và chủ đề",
          "Báo cáo CSAT, thời gian phản hồi, tỉ lệ AI tự xử lý",
          "Huấn luyện AI theo giọng thương hiệu của bạn",
        ],
        hlIcon: Users,
        hlText: "“Cả team nhìn chung một hộp thư — không ai trả lời trùng, không ai bỏ sót.”",
      }
    : {
        title: "Cho cá nhân, freelancer & shop nhỏ",
        lead: "Một mình lo hết mọi tin nhắn? Chimori trực thay bạn ngoài giờ và trả lời ngay những câu quen thuộc.",
        bullets: [
          "Tự trả lời câu hỏi quen thuộc ngoài giờ",
          "Mẫu câu trả lời nhanh chỉ với một chạm",
          "Không bỏ sót tin nhắn từ bất kỳ kênh nào",
          "Cài đặt trong 10 phút, không cần kỹ thuật",
        ],
        hlIcon: Moon,
        hlText: "“Mình ngủ, Chimori vẫn trả lời khách. Sáng dậy không còn 40 tin chưa đọc.”",
      };

  const HlIconComponent = audData.hlIcon;

  return (
    <section className="py-20 bg-neutral-50 border-y border-neutral-200/60 text-left">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-[560px]">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-600 mb-3">Phù hợp với bạn</span>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Cá nhân hay cả đội ngũ, đều dùng được</h2>
          </div>
          <div className="flex gap-2 bg-neutral-200/50 p-1 rounded-full border border-neutral-200">
            <button 
              onClick={() => setTab("business")} 
              className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${tab === "business" ? "bg-blue-600 text-white shadow-xs" : "text-neutral-600 hover:text-neutral-900"}`}
            >
              Doanh nghiệp
            </button>
            <button 
              onClick={() => setTab("personal")} 
              className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${tab === "personal" ? "bg-blue-600 text-white shadow-xs" : "text-neutral-600 hover:text-neutral-900"}`}
            >
              Cá nhân & shop nhỏ
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 bg-white border border-neutral-200/80 rounded-xl p-8 shadow-2xs">
            <h3 className="text-2xl font-bold text-neutral-900 mb-3">{audData.title}</h3>
            <p className="text-neutral-500 mb-6 leading-relaxed">{audData.lead}</p>
            <ul className="space-y-3.5">
              {audData.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-700">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-[16px]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 bg-blue-600 border border-blue-700 rounded-xl p-8 flex flex-col justify-center text-white shadow-xs">
            <HlIconComponent className="w-8 h-8 text-blue-200 mb-4" />
            <p className="text-xl font-medium leading-relaxed text-blue-50/90 pretty">{audData.hlText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}