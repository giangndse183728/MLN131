
"use client"
import Link from 'next/link';
import Carousel, { type CarouselItem } from '../../../components/Carousel';
import {
  ClientAnimatedSection,
  MotionDiv,
  MotionH2,
  MotionP,
  containerVariants,
  FadeUp,
} from '../../../components/animation/AnimatedWrapper';

const keyPointsCarousel: CarouselItem[] = [
  {
    id: 1,
    title: "Thể chế kinh tế thị trường định hướng XHCN",
    description: "Xây dựng hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa tạo ra cơ sở kinh tế vững chắc cho xây dựng dân chủ xã hội chủ nghĩa.",
    icon: <span className="carousel-icon">1</span>
  },
  {
    id: 2,
    title: "Đảng Cộng sản Việt Nam trong sạch, vững mạnh",
    description: "Xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh với tư cách điều kiện tiên quyết để xây dựng nền dân chủ xã hội chủ nghĩa Việt Nam.",
    icon: <span className="carousel-icon">2</span>
  },
  {
    id: 3,
    title: "Nhà nước pháp quyền XHCN vững mạnh",
    description: "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa vững mạnh với tư cách điều kiện để thực thi dân chủ xã hội chủ nghĩa.",
    icon: <span className="carousel-icon">3</span>
  },
  {
    id: 4,
    title: "Tổ chức chính trị - xã hội",
    description: "Nâng cao vai trò của các tổ chức chính trị - xã hội trong xây dựng nền dân chủ xã hội chủ nghĩa.",
    icon: <span className="carousel-icon">4</span>
  },
  {
    id: 5,
    title: "Hệ thống giám sát, phản biện xã hội",
    description: "Xây dựng và từng bước hoàn thiện các hệ thống giám sát, phản biện xã hội để phát huy quyền làm chủ của nhân dân.",
    icon: <span className="carousel-icon">5</span>
  }
];

const section32Carousel: CarouselItem[] = [
  {
    id: 1,
    title: "Xây dựng Nhà nước pháp quyền XHCN dưới sự lãnh đạo của Đảng",
    description: "Khẳng định vai trò lãnh đạo của Đảng Cộng sản Việt Nam trong mọi lĩnh vực của đời sống chính trị – xã hội.",
    icon: <span className="carousel-icon">1</span>
  },
  {
    id: 2,
    title: "Cải cách thể chế và phương thức hoạt động của Nhà nước",
    description: "CĐẩy mạnh cải cách hành chính, tinh gọn bộ máy, nâng cao hiệu lực, hiệu quả quản lý.",
    icon: <span className="carousel-icon">2</span>
  },
  {
    id: 3,
    title: "Xây dựng đội ngũ cán bộ, công chức trong sạch, có năng lực",
    description: "Tập trung đào tạo, bồi dưỡng cán bộ có bản lĩnh chính trị vững vàng, đạo đức trong sáng.",
    icon: <span className="carousel-icon">3</span>
  },
  {
    id: 4,
    title: "Kiên quyết, kiên trì phòng ngừa và xử lý tham nhũng, lãng phí.",
    description: "Đấu tranh phòng, chống tham nhũng, lãng phí, thực hành tiết kiệm.",
    icon: <span className="carousel-icon">4</span>
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
            <span className="text-black font-primary">PHÁT HUY DÂN CHỦ</span><br />
            <span className="text-red-900 font-primary"> XÂY DỰNG NHÀ NƯỚC PHÁP QUYỀN</span>
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
        <div className="max-w-7xl mx-auto">
          {/* Section 3.1 and Carousel Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Left Column - Section 3.1 */}
            <FadeUp delay={0.2}>
              <MotionDiv className="bg-white/80 backdrop-blur-md border border-black/10 rounded-2xl p-6 shadow-lg mt-8 min-h-[320px]">
                <MotionH2 className="font-gothic text-2xl font-bold text-[#81181a] mb-6">
                  3.1 Phát huy dân chủ xã hội chủ nghĩa ở Việt Nam hiện nay
                </MotionH2>

                <MotionP className="font-serif text-black/70 mb-10 leading-relaxed">
                  Phát huy dân chủ xã hội chủ nghĩa ở Việt Nam hiện nay là nhiệm vụ quan trọng, đòi hỏi sự phối hợp toàn diện của các yếu tố kinh tế, chính trị, pháp lý và xã hội để xây dựng nền dân chủ thực sự của nhân dân, do nhân dân và vì nhân dân.
                </MotionP>
              </MotionDiv>
            </FadeUp>

            {/* Right Column - Carousel */}
            <div className="flex flex-col justify-center">
              <FadeUp delay={0.4}>
                <div className="sticky top-0">
                  <div className="text-center mb-6">
                  </div>
                  <div className="flex justify-center">
                    <div style={{
                      borderRadius: '24px',
                      overflow: 'hidden'
                    }}>
                      <Carousel
                        items={keyPointsCarousel}
                        baseWidth={550}
                        autoplay={true}
                        autoplayDelay={4000}
                        pauseOnHover={true}
                        loop={true}
                      />
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Section 3.2 and Carousel Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Left Column - Section 3.2 */}
            <FadeUp delay={0.6}>
              <MotionDiv className="bg-white/80 backdrop-blur-md border border-black/10 rounded-2xl p-6 shadow-lg mt-8 min-h-[320px]">
                <MotionH2 className="font-gothic text-2xl font-bold text-[#81181a] mb-6">
                  3.2 Tiếp tục xây dựng và hoàn thiện Nhà nước pháp quyền xã hội chủ nghĩa
                </MotionH2>

                <MotionP className="font-serif text-black/70 mb-10 leading-relaxed">
                  Việc xây dựng và hoàn thiện Nhà nước pháp quyền xã hội chủ nghĩa là nhiệm vụ trọng tâm, đòi hỏi sự phối hợp chặt chẽ giữa các yếu tố chính trị, pháp lý và xã hội để đảm bảo quyền lực nhà nước thuộc về nhân dân.
                </MotionP>
              </MotionDiv>
            </FadeUp>

            {/* Right Column - Section 3.2 Carousel */}
            <div className="flex flex-col justify-center">
              <FadeUp delay={0.8}>
                <div className="sticky top-0">
                  <div className="text-center mb-6">
                  </div>
                  <div className="flex justify-center">
                    <div style={{
                      borderRadius: '24px',
                      overflow: 'hidden'
                    }}>
                      <Carousel
                        items={section32Carousel}
                        baseWidth={550}
                        autoplay={true}
                        autoplayDelay={4000}
                        pauseOnHover={true}
                        loop={true}
                      />
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <FadeUp delay={1.0} className="text-center mt-12">
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