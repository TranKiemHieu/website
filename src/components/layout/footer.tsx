import React from "react";
import * as LucideIcons from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-16 text-left">
      <div className="max-w-[1140px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-neutral-800 pb-12">
        <div className="md:col-span-6 max-w-sm">
          <span className="font-bold text-xl tracking-tight text-white block mb-3">
            Chimori<span className="text-blue-500">.ai</span>
          </span>
          <p className="text-sm leading-relaxed mb-5">
            Trợ lý AI và hộp thư đa kênh cho đội ngũ chăm sóc khách hàng. Đồng hành, không thay thế.
          </p>
          <div className="flex gap-2.5">
            {["Github", "Linkedin", "Facebook"].map((icon, i) => {
              // @ts-ignore
              const IconComponent = LucideIcons[icon] || LucideIcons.Globe;
              return (
                <a key={i} href="#" className="w-9 h-9 border border-neutral-800 rounded-md flex items-center justify-center text-neutral-400 hover:bg-neutral-800 hover:text-white transition-all">
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Sản phẩm</h4>
          <div className="space-y-2 text-sm">
            <a href="#tinh-nang" className="block hover:text-white">Tính năng</a>
            <a href="#cach-hoat-dong" className="block hover:text-white">Cách hoạt động</a>
            <a href="#khach-hang" className="block hover:text-white">Khách hàng</a>
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Công ty</h4>
          <div className="space-y-2 text-sm">
            <a href="#" className="block hover:text-white">Về chúng tôi</a>
            <a href="#" className="block hover:text-white">Tuyển dụng</a>
            <a href="#demo" className="block hover:text-white">Liên hệ</a>
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Giờ làm việc</h4>
          <p className="text-sm">Thứ 2–6 · 8:00–18:00</p>
          <p className="text-sm mt-1">TP. Hồ Chí Minh</p>
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto px-6 pt-6 text-xs text-neutral-600">
        © 2026 Chimori AI. Bảo lưu mọi quyền.
      </div>
    </footer>
  );
}