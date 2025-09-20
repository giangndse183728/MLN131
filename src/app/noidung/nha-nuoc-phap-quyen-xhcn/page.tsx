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
  title: 'Nhà Nước Pháp Quyền XHCN Việt Nam | Hệ Thống Pháp Luật',
  description: 'Tìm hiểu về nhà nước pháp quyền xã hội chủ nghĩa Việt Nam - quản lý xã hội bằng pháp luật, đề cao Hiến pháp.',
  keywords: ['nhà nước pháp quyền', 'hiến pháp việt nam', 'pháp luật việt nam', 'quản lý xã hội'],
};

const sections = [
  {
    title: "Khái niệm Nhà nước Pháp quyền XHCN",
    content: "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là nhà nước của nhân dân, do nhân dân, vì nhân dân, được tổ chức và hoạt động theo Hiến pháp và pháp luật, dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.",
    points: [
      "Nhà nước của nhân dân, do nhân dân, vì nhân dân",
      "Được tổ chức và hoạt động theo Hiến pháp và pháp luật",
      "Dưới sự lãnh đạo của Đảng Cộng sản Việt Nam",
      "Đảm bảo quyền lực thuộc về nhân dân"
    ]
  },
  {
    title: "Đặc điểm của Nhà nước Pháp quyền XHCN",
    content: "Nhà nước pháp quyền xã hội chủ nghĩa có những đặc điểm riêng biệt, phù hợp với điều kiện lịch sử và hoàn cảnh cụ thể của Việt Nam.",
    points: [
      "Quản lý xã hội bằng pháp luật",
      "Đề cao Hiến pháp và pháp luật",
      "Bảo đảm quyền lực thuộc về nhân dân",
      "Công bằng và bình đẳng trước pháp luật"
    ]
  },
  {
    title: "Vai trò và Chức năng",
    content: "Nhà nước pháp quyền xã hội chủ nghĩa có vai trò quan trọng trong việc quản lý xã hội, đảm bảo trật tự pháp luật và bảo vệ quyền lợi của nhân dân.",
    points: [
      "Quản lý xã hội bằng pháp luật",
      "Bảo vệ quyền và lợi ích hợp pháp của công dân",
      "Đảm bảo trật tự, an toàn xã hội",
      "Thúc đẩy phát triển kinh tế - xã hội"
    ]
  }
];

export default function NhaNuocPhapQuyenXHCNPage() {
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
            <span className="text-black">NHÀ NƯỚC PHÁP QUYỀN</span>
            <span className="text-red-900"> XHCN</span>
          </MotionH2>
          <MotionP className="font-serif text-lg text-black/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Quản lý xã hội bằng pháp luật, đề cao Hiến pháp
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
            <span className="text-black/60">Nhà nước pháp quyền XHCN</span>
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
                href="/noidung/dan-chu-xa-hoi-chu-nghia"
                className="px-6 py-3 bg-red-900 text-white font-gothic text-sm uppercase tracking-widest hover:bg-red-800 transition-colors duration-200"
              >
                Dân chủ XHCN
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
