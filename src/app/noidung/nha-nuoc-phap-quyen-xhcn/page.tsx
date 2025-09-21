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

interface Subsection {
  title: string;
  points: string[];
}

interface Feature {
  number: string;
  title: string;
  description: string;
}

interface Section {
  title: string;
  content: string;
  subsections?: Subsection[];
  features?: Feature[];
  points?: string[];
}

export const metadata: Metadata = {
  title: 'Nhà Nước Pháp Quyền XHCN Việt Nam | Hệ Thống Pháp Luật',
  description: 'Tìm hiểu về nhà nước pháp quyền xã hội chủ nghĩa Việt Nam - quản lý xã hội bằng pháp luật, đề cao Hiến pháp.',
  keywords: ['nhà nước pháp quyền', 'hiến pháp việt nam', 'pháp luật việt nam', 'quản lý xã hội'],
};

const sections: Section[] = [
  {
    title: "2.1. Quan niệm về nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam",
    content: "Quan niệm về nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam được hình thành và phát triển qua các giai đoạn lịch sử, từ quan niệm chung đến cách hiểu hiện nay và chủ trương của Đảng.",
    subsections: [
      {
        title: "Theo quan niệm chung",
        points: [
          "Nhà nước pháp quyền là nhà nước thượng tôn pháp luật",
          "Hướng tới những vấn đề về phúc lợi cho mọi người",
          "Tạo điều kiện cho cá nhân được tự do, bình đẳng, phát huy hết năng lực của chính mình",
          "Các cơ quan của nhà nước được phân quyền rõ ràng và được mọi người chấp nhận trên nguyên tắc bình đẳng của các thế lực, giai cấp và tầng lớp trong xã hội"
        ]
      },
      {
        title: "Cách hiểu hiện nay",
        points: [
          "Là nhà nước mà ở đó, tất cả mọi công dân đều được giáo dục pháp luật và phải hiểu biết pháp luật, tuân thủ pháp luật, pháp luật phải đảm bảo tính nghiêm minh",
          "Trong hoạt động của các cơ quan nhà nước, phải có sự kiểm soát lẫn nhau, tất cả vì mục tiêu phục vụ nhân dân"
        ]
      },
      {
        title: "Chủ trương của Đảng",
        points: [
          "Xây dựng Nhà nước pháp quyền Việt Nam của dân, do dân, vì dân",
          "Nhà nước quản lý xã hội bằng pháp luật, mọi cơ quan, tổ chức, cán bộ, công chức, mọi công dân có nghĩa vụ chấp hành Hiến pháp và pháp luật",
          "Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan nhà nước trong việc thực hiện các quyền lập pháp, hành pháp, tư pháp"
        ]
      }
    ]
  },
  {
    title: "2.2. Đặc điểm của nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam",
    content: "Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam có những đặc điểm riêng biệt, phản ánh bản chất dân chủ và tính ưu việt của chế độ xã hội chủ nghĩa.",
    features: [
      {
        number: "Thứ nhất",
        title: "Nhà nước do nhân dân lao động làm chủ",
        description: "Xây dựng Nhà nước do nhân dân lao động làm chủ, đó là nhà nước của dân, do dân, vì dân."
      },
      {
        number: "Thứ hai",
        title: "Hoạt động dựa trên Hiến pháp và pháp luật",
        description: "Nhà nước và tổ chức được hoạt động dựa trên cơ sở của Hiến pháp và pháp luật. Trong tất cả các hoạt động của xã hội, pháp luật được đặt ở vị trí tối thượng để điều chỉnh các quan hệ xã hội."
      },
      {
        number: "Thứ ba",
        title: "Quyền lực nhà nước thống nhất",
        description: "Quyền lực nhà nước là thống nhất, có sự phân công rõ ràng, có cơ chế phối hợp nhịp nhàng và kiểm soát giữa các cơ quan: lập pháp, hành pháp và tư pháp."
      }
    ]
  },

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
            <span className="text-black font-primary">NHÀ NƯỚC PHÁP QUYỀN</span>
            <span className="text-red-900 font-primary"> XHCN</span>
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
            <div key={index} className="mb-12">
              {/* Section Title with Scroll Animation */}
              <FadeUp delay={0} once={true}>
                <MotionDiv className="mb-8">
                  <MotionH2 className="font-gothic text-2xl font-bold text-[#81181a] mb-6 text-center">
                    {section.title}
                  </MotionH2>
                </MotionDiv>
              </FadeUp>

              {/* Section Content with Scroll Animation */}
              <FadeUp delay={0.2} once={true}>
                <MotionDiv className="bg-white/80 backdrop-blur-md border border-black/10 rounded-lg p-8 shadow-lg">
                  <MotionP className="font-serif text-black/70 mb-6 leading-relaxed">
                    {section.content}
                  </MotionP>

                  {/* Render features if they exist */}
                  {section.features ? (
                    <div className="space-y-6">
                      {section.features.map((feature, featureIndex) => (
                        <FadeUp key={featureIndex} delay={featureIndex * 0.15} once={true}>
                          <div className="bg-gradient-to-br from-blue-50 via-white to-red-50 p-8 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-300" style={{ borderColor: '#81181a' }}>
                            <div className="flex items-start space-x-4">
                              {/* Number Badge */}
                              <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-red-700 rounded-full flex items-center justify-center shadow-lg">
                                  <span className="text-white font-bold text-sm">
                                    {featureIndex + 1}
                                  </span>
                                </div>
                              </div>

                              {/* Content */}
                              <div className="flex-1">
                                <div className="mb-3">
                                  <MotionH2 className="font-gothic text-lg font-bold" style={{ color: '#81181a' }}>
                                    {feature.title}
                                  </MotionH2>
                                </div>
                                <MotionP className="font-serif text-black/80 leading-relaxed text-base">
                                  {feature.description}
                                </MotionP>
                              </div>
                            </div>
                          </div>
                        </FadeUp>
                      ))}
                    </div>
                  ) : section.subsections ? (
                    <div className="space-y-8">
                      {section.subsections.map((subsection, subIndex) => (
                        <FadeUp key={subIndex} delay={subIndex * 0.1} once={true}>
                          <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-lg border-l-4 border-red-900">
                            <MotionH2 className="font-gothic text-lg font-semibold text-red-900 mb-4">
                              {subsection.title}
                            </MotionH2>
                            <div className="space-y-3">
                              {subsection.points.map((point, pointIndex) => (
                                <div key={pointIndex} className="flex items-start">
                                  <div className="w-2 h-2 bg-red-900 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                  <span className="font-serif text-black/70">{point}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </FadeUp>
                      ))}
                    </div>
                  ) : section.points ? (
                    /* Render regular points if no subsections or features */
                    <div className="space-y-4">
                      {section.points.map((point, pointIndex) => (
                        <FadeUp key={pointIndex} delay={pointIndex * 0.1} once={true}>
                          <div className="flex items-start">
                            <div className="w-2 h-2 bg-red-900 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="font-serif text-black/70">{point}</span>
                          </div>
                        </FadeUp>
                      ))}
                    </div>
                  ) : null}
                </MotionDiv>
              </FadeUp>
            </div>
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
