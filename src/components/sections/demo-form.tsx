'use client';

import React, { useState } from "react";
import { Phone, Mail, Clock, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CHANNEL_OPTIONS } from "@/constants/landing-data";

export function DemoForm() {
  const [form, setForm] = useState({ name: "", email: "", channel: "", msg: "" });
  const [err, setErr] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!form.name.trim()) errors.name = "Vui lòng nhập tên của bạn.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errors.email = "Nhập email công việc hợp lệ.";
    if (!form.channel) errors.channel = "Hãy chọn một kênh.";

    setErr(errors);
    if (Object.keys(errors).length === 0) {
      setSent(true);
    }
  };

  const firstName = form.name.trim().split(" ").pop() || "bạn";

  return (
    <section id="demo" className="py-20 bg-neutral-50 border-y border-neutral-200/60 text-left">
      <div className="max-w-[1140px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-600 mb-3">Đặt lịch demo</span>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Xem Chimori chạy trên kênh của bạn</h2>
          <p className="text-neutral-500 text-[17px] leading-relaxed mt-4">
            Buổi xem nhanh 20 phút trên chính những cuộc trò chuyện thật của bạn. Không slide, không ràng buộc.
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3 text-neutral-700">
              <Phone className="w-4.5 h-4.5 text-blue-600" />
              <a href="tel:19001234" className="hover:underline font-medium">1900 1234</a>
            </li>
            <li className="flex items-center gap-3 text-neutral-700">
              <Mail className="w-4.5 h-4.5 text-blue-600" />
              <a href="mailto:hello@chimori.ai" className="hover:underline font-medium">hello@chimori.ai</a>
            </li>
            <li className="flex items-center gap-3 text-neutral-700">
              <Clock className="w-4.5 h-4.5 text-blue-600" />
              <span className="text-neutral-600">Thứ 2–6 · 8:00–18:00 (giờ VN)</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-6 bg-white border border-neutral-200 rounded-xl p-7 shadow-xs">
          {sent ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100 shadow-2xs">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Đã nhận yêu cầu</h3>
              <p className="text-neutral-500 mb-6">Cảm ơn {firstName}. Chuyên viên sẽ liên hệ với bạn trong vòng một ngày làm việc.</p>
              <button 
                onClick={() => { setSent(false); setForm({ name: "", email: "", channel: "", msg: "" }); }} 
                className="h-10 px-5 rounded-md border border-neutral-200 text-sm font-semibold hover:bg-neutral-50 transition-colors"
              >
                Gửi yêu cầu khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-neutral-500 mb-1.5 block">Họ và tên</label>
                <Input 
                  value={form.name} 
                  onChange={(e) => setForm({ ...form, name: e.target.value })} 
                  placeholder="Trần Mỹ Linh" 
                  className="h-10 text-sm border-neutral-200"
                />
                {err.name && <p className="text-xs text-red-500 mt-1">{err.name}</p>}
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-500 mb-1.5 block">Email công việc</label>
                <Input 
                  type="email" 
                  value={form.email} 
                  onChange={(e) => setForm({ ...form, email: e.target.value })} 
                  placeholder="ban@congty.com" 
                  className="h-10 text-sm border-neutral-200"
                />
                {err.email && <p className="text-xs text-red-500 mt-1">{err.email}</p>}
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-500 mb-1.5 block">Kênh bận rộn nhất</label>
                <Select value={form.channel} onValueChange={(val) => setForm({ ...form, channel: val })}>
                  <SelectTrigger className="h-10 text-sm border-neutral-200">
                    <SelectValue placeholder="Chọn một kênh" />
                  </SelectTrigger>
                  <SelectContent>
                    {CHANNEL_OPTIONS.map((ch, i) => (
                      <SelectItem key={i} value={ch.toLowerCase()}>{ch}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {err.channel && <p className="text-xs text-red-500 mt-1">{err.channel}</p>}
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-500 mb-1.5 block">Bạn muốn cho chúng tôi biết điều gì?</label>
                <Textarea 
                  value={form.msg} 
                  onChange={(e) => setForm({ ...form, msg: e.target.value })} 
                  placeholder="Quy mô đội, công cụ đang dùng…" 
                  className="text-sm border-neutral-200 min-h-[90px]"
                />
              </div>

              <button type="submit" className="w-full h-11 rounded-md bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-xs">
                Gửi yêu cầu demo
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}