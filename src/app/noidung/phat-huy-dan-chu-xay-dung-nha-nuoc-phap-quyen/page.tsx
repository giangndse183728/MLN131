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
  title: 'Phát Huy Dân Chủ, Xây Dựng Nhà Nước Pháp Quyền XHCN | Hiện Nay',
  description: 'Tìm hiểu về phát huy dân chủ và xây dựng nhà nước pháp quyền XHCN hiện nay - tiếp tục hoàn thiện pháp luật, cải cách bộ máy.',
  keywords: ['phát huy dân chủ', 'xây dựng nhà nước pháp quyền', 'cải cách bộ máy', 'chính phủ số'],
};

const sections = [
  {
    title: "Nhiệm vụ Phát huy Dân chủ",
    content: "Phát huy dân chủ và xây dựng Nhà nước pháp quyền xã hội chủ nghĩa là nhiệm vụ quan trọng trong giai đoạn hiện nay, nhằm tiếp tục hoàn thiện hệ thống pháp luật, cải cách bộ máy nhà nước và phát huy quyền làm chủ của nhân dân.",
    points: [
      "Tiếp tục hoàn thiện hệ thống pháp luật",
      "Cải cách bộ máy nhà nước",
      "Phát huy quyền làm chủ của nhân dân",
      "Xây dựng Chính phủ số"
    ]
  },
  {
    title: "Hoàn thiện Hệ thống Pháp luật",
    content: "Việc hoàn thiện hệ thống pháp luật là một trong những nhiệm vụ quan trọng trong quá trình xây dựng nhà nước pháp quyền xã hội chủ nghĩa.",
    points: [
      "Xây dựng và hoàn thiện hệ thống pháp luật đồng bộ",
      "Đảm bảo tính thống nhất và nhất quán của pháp luật",
      "Nâng cao chất lượng và hiệu quả thực thi pháp luật",
      "Tăng cường giáo dục pháp luật cho nhân dân"
    ]
  },
  {
    title: "Cải cách Bộ máy Nhà nước",
    content: "Cải cách bộ máy nhà nước là một trong những nhiệm vụ quan trọng trong quá trình xây dựng nhà nước pháp quyền xã hội chủ nghĩa.",
    points: [
      "Tinh gọn bộ máy, nâng cao hiệu quả hoạt động",
      "Đổi mới phương thức quản lý nhà nước",
      "Tăng cường tính minh bạch và trách nhiệm",
      "Ứng dụng công nghệ thông tin trong quản lý"
    ]
  },
  {
    title: "Xây dựng Chính phủ Số",
    content: "Xây dựng Chính phủ số là một trong những nhiệm vụ quan trọng trong quá trình hiện đại hóa quản lý nhà nước.",
    points: [
      "Số hóa các dịch vụ công",
      "Xây dựng hạ tầng công nghệ thông tin",
      "Đào tạo nguồn nhân lực công nghệ",
      "Bảo đảm an toàn, an ninh thông tin"
    ]
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
        <FadeUp className="text-center mb-16">
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
