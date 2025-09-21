'use client';

import Link from 'next/link';

export default function GamePage() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto  py-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-center min-h-[80vh]">
          
          {/* Left Side - Content */}
          <div className="space-y-6 lg:col-span-4 px-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-red-900">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight font-primary">
                Bảo Tàng Ảo
              </h1>
               <h2 className="text-2xl lg:text-3xl font-semibold text-red-900 font-sub mb-5">
                 Khám Phá Lịch Sử Việt Nam
               </h2>
            </div>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Khám phá những hiện vật lịch sử quan trọng gắn liền với sự nghiệp xây dựng chủ nghĩa xã hội ở Việt Nam.
              </p>
              
              <p>
                Tìm hiểu về quá trình hình thành và phát triển của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam.
              </p>
            </div>
            
            <div className="pt-4">
              <Link 
                href="/baotang"
                 className="inline-flex items-center px-8 py-4 bg-red-900 text-white text-lg font-semibold rounded-lg hover:bg-red-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg 
                  className="w-6 h-6 mr-3" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
                Khám Phá Bảo Tàng
              </Link>
            </div>
            </div>
          </div>
          
          {/* Right Side - Sketchfab Embed */}
          <div className="w-full lg:col-span-6 overflow-hidden ">
          <div className="sketchfab-embed-wrapper">
              <iframe
                title="Sketchfab Model"
                src="https://sketchfab.com/models/617be5181a35411cbbfefa536af7e87f/embed?autospin=0&autostart=1&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&dnt=1"
                width="850"
                height="600"
                loading="lazy"
                allow="accelerometer; gyroscope; autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
                style={{ border: "none" }}
                className="my-frame"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
