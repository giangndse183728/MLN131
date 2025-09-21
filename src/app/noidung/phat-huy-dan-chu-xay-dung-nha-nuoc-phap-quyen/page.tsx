"use client";

import Link from 'next/link';
import {
  ClientAnimatedSection,
  MotionDiv,
  MotionH2,
  MotionP,
  containerVariants,
  FadeUp,
} from '../../../components/animation/AnimatedWrapper';
import ScrollStack, { ScrollStackItem } from '../../../components/ScrollStack';

const keyPoints = [
  {
    title: "Thể chế kinh tế thị trường định hướng XHCN",
    content: "Xây dựng hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa tạo ra cơ sở kinh tế vững chắc cho xây dựng dân chủ xã hội chủ nghĩa."
  },
  {
    title: "Đảng Cộng sản Việt Nam trong sạch, vững mạnh",
    content: "Xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh với tư cách điều kiện tiên quyết để xây dựng nền dân chủ xã hội chủ nghĩa Việt Nam."
  },
  {
    title: "Nhà nước pháp quyền XHCN vững mạnh",
    content: "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa vững mạnh với tư cách điều kiện để thực thi dân chủ xã hội chủ nghĩa."
  },
  {

    title: "Tổ chức chính trị - xã hội",
    content: "Nâng cao vai trò của các tổ chức chính trị - xã hội trong xây dựng nền dân chủ xã hội chủ nghĩa."
  },
  {
    title: "Hệ thống giám sát, phản biện xã hội",
    content: "Xây dựng và từng bước hoàn thiện các hệ thống giám sát, phản biện xã hội để phát huy quyền làm chủ của nhân dân."
  }
];

export default function PhatHuyDanChuXayDungNhaNuocPhapQuyenPage() {
  return (
    <ClientAnimatedSection className="min-h-screen bg-gradient-to-br from-[#f8f7f3] to-white py-16">
      <MotionDiv
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <FadeUp className="text-center mb-10">
          <MotionH2 className="font-metal text-4xl md:text-5xl text-black mb-6">
            <span className="text-black">PHÁT HUY DÂN CHỦ</span>
            <span className="text-red-900"> XÂY DỰNG NHÀ NƯỚC PHÁP QUYỀN</span>
          </MotionH2>
          <MotionP className="font-serif text-lg text-black/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Tiếp tục hoàn thiện pháp luật, cải cách bộ máy
          </MotionP>

          {/* Breadcrumb */}
          <div className="flex justify-center items-center space-x-2 text-sm">
            <Link href="/" className="text-red-900 hover:text-red-800 transition-colors">
              Trang chủ
            </Link>
            <span className="text-black/40">/</span>
            <Link href="/noidung" className="text-red-900 hover:text-red-800 transition-colors">
              Nội dung
            </Link>
            <span className="text-black/40">/</span>
            <span className="text-black/60">Phát huy dân chủ</span>
          </div>
        </FadeUp>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <FadeUp delay={0.2}>
            <MotionDiv className="mb-12 bg-white/80 backdrop-blur-md border border-black/10 rounded-lg p-8 shadow-lg">
              <MotionH2 className="font-gothic text-2xl font-bold text-black mb-6">
                3.1 Phát huy dân chủ xã hội chủ nghĩa ở Việt Nam hiện nay
              </MotionH2>

              <MotionP className="font-serif text-black/70 mb-10 leading-relaxed">
                Phát huy dân chủ xã hội chủ nghĩa ở Việt Nam hiện nay là nhiệm vụ quan trọng, đòi hỏi sự phối hợp toàn diện của các yếu tố kinh tế, chính trị, pháp lý và xã hội để xây dựng nền dân chủ thực sự của nhân dân, do nhân dân và vì nhân dân.
              </MotionP>
            </MotionDiv>
          </FadeUp>

          {/* ScrollStack for Key Points */}
          <FadeUp delay={0.4}>
            <ScrollStack
              className="h-screen"
              itemDistance={30}
              itemScale={0.05}
              itemStackDistance={40}
              stackPosition="20%"
              scaleEndPosition="10%"
              rotationAmount={2}
              blurAmount={0.5}
              useWindowScroll={true}
            >
              {keyPoints.map((point, index) => (
                <ScrollStackItem key={index} itemClassName="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                      <span className="text-red-700 font-bold text-2xl">{index + 1}</span>
                    </div>
                    <h3 className="font-gothic text-2xl font-bold text-red-700 mb-4">
                      {point.title}
                    </h3>
                    {/* <h4 className="font-sans text-lg font-semibold text-gray-800 mb-4">
                      {point.subtitle}
                    </h4> */}
                    <p className="font-serif text-gray-700 leading-relaxed">
                      {point.content}
                    </p>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </FadeUp>
        </div>

        {/* Navigation */}
        <FadeUp delay={0.8} className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-md border border-black/10 rounded-lg p-8">
            <MotionH2 className="font-gothic text-xl font-bold text-black mb-6">
              Khám phá thêm
            </MotionH2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/noidung/dan-chu-xa-hoi-chu-nghia"
                className="px-6 py-3 bg-red-900 text-white font-gothic text-sm uppercase tracking-widest hover:bg-red-800 transition-colors duration-200"
              >
                Dân chủ XHCN
              </Link>
              <Link
                href="/noidung/nha-nuoc-phap-quyen-xhcn"
                className="px-6 py-3 border-2 border-red-900 text-red-900 font-gothic text-sm uppercase tracking-widest hover:bg-red-900 hover:text-white transition-colors duration-200"
              >
                Nhà nước pháp quyền XHCN
              </Link>
              <Link
                href="/noidung"
                className="px-6 py-3 border-2 border-black text-black font-gothic text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-200"
              >
                Về trang chủ
              </Link>
            </div>
          </div>
        </FadeUp>
      </MotionDiv>
    </ClientAnimatedSection>
  );
}
