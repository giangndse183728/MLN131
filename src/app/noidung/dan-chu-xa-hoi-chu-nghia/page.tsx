import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ClientAnimatedSection,
  MotionDiv,
  MotionH2,
  MotionP,
  containerVariants,
  FadeUp,
} from '../../../components/animation/AnimatedWrapper';

export const metadata: Metadata = {
  title: 'Dân Chủ Xã Hội Chủ Nghĩa ở Việt Nam | Nền Tảng Chính Trị',
  description: 'Tìm hiểu về dân chủ xã hội chủ nghĩa ở Việt Nam - bản chất chế độ ta, vừa mục tiêu vừa động lực phát triển.',
  keywords: ['dân chủ xã hội chủ nghĩa', 'chính trị việt nam', 'đảng cộng sản việt nam', 'quyền lực nhân dân'],
};

const sections = [
  {
    title: "Bản chất của Dân chủ Xã hội Chủ nghĩa",
    content: "Dân chủ xã hội chủ nghĩa là bản chất của chế độ ta, vừa là mục tiêu vừa là động lực phát triển của cách mạng Việt Nam. Đây là nền dân chủ của đại đa số nhân dân lao động, được thực hiện dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.",
    points: [
      "Dân chủ của đại đa số nhân dân lao động",
      "Được thực hiện dưới sự lãnh đạo của Đảng Cộng sản Việt Nam",
      "Vừa là mục tiêu vừa là động lực phát triển",
      "Gắn liền với độc lập dân tộc và chủ nghĩa xã hội"
    ]
  },
  {
    title: "Đặc điểm của Dân chủ Xã hội Chủ nghĩa",
    content: "Dân chủ xã hội chủ nghĩa có những đặc điểm riêng biệt, phù hợp với điều kiện lịch sử và hoàn cảnh cụ thể của Việt Nam.",
    points: [
      "Quyền lực thuộc về nhân dân",
      "Dân chủ trực tiếp và dân chủ đại diện",
      "Sự lãnh đạo của Đảng Cộng sản Việt Nam",
      "Đoàn kết toàn dân tộc"
    ]
  },
  {
    title: "Ý nghĩa và Vai trò",
    content: "Dân chủ xã hội chủ nghĩa có ý nghĩa quan trọng trong việc xây dựng và phát triển đất nước, đảm bảo quyền lợi của nhân dân.",
    points: [
      "Đảm bảo quyền lợi của nhân dân",
      "Tạo động lực phát triển kinh tế - xã hội",
      "Xây dựng xã hội công bằng, dân chủ, văn minh",
      "Bảo vệ độc lập, chủ quyền và toàn vẹn lãnh thổ"
    ]
  }
];

export default function DanChuXaHoiChuNghiaPage() {
  return (
    <ClientAnimatedSection className="min-h-screen bg-gradient-to-br from-[#f8f7f3] to-white py-16">
      <MotionDiv
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <FadeUp className="text-center mb-16">
          <MotionH2 className="font-metal text-4xl md:text-5xl text-black mb-6">
            <span className="text-black">DÂN CHỦ XÃ HỘI</span>
            <span className="text-red-900"> CHỦ NGHĨA</span>
          </MotionH2>
          <MotionP className="font-serif text-lg text-black/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Bản chất chế độ ta, vừa mục tiêu vừa động lực phát triển
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
            <span className="text-black/60">Dân chủ XHCN</span>
          </div>
        </FadeUp>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <FadeUp key={index} delay={index * 0.2}>
              <MotionDiv className="mb-12 bg-white/80 backdrop-blur-md border border-black/10 rounded-lg p-8 shadow-lg">
                <MotionH2 className="font-gothic text-2xl font-bold text-black mb-6">
                  {section.title}
                </MotionH2>
                
                <MotionP className="font-serif text-black/70 mb-6 leading-relaxed">
                  {section.content}
                </MotionP>

                <div className="space-y-4">
                  {section.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-red-900 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="font-serif text-black/70">{point}</span>
                    </div>
                  ))}
                </div>
              </MotionDiv>
            </FadeUp>
          ))}
        </div>

        {/* Navigation */}
        <FadeUp delay={0.8} className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-md border border-black/10 rounded-lg p-8">
            <MotionH2 className="font-gothic text-xl font-bold text-black mb-6">
              Khám phá thêm
            </MotionH2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/noidung/nha-nuoc-phap-quyen-xhcn"
                className="px-6 py-3 bg-red-900 text-white font-gothic text-sm uppercase tracking-widest hover:bg-red-800 transition-colors duration-200"
              >
                Nhà nước pháp quyền XHCN
              </Link>
              <Link
                href="/noidung/phat-huy-dan-chu-xay-dung-nha-nuoc-phap-quyen"
                className="px-6 py-3 border-2 border-red-900 text-red-900 font-gothic text-sm uppercase tracking-widest hover:bg-red-900 hover:text-white transition-colors duration-200"
              >
                Phát huy dân chủ
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
