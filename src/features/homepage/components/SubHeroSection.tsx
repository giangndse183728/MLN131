import Link from 'next/link';
import {
  ClientAnimatedSection,
  MotionDiv,
  MotionH2,
  MotionP,
  containerVariants,
  decorativeVariants,
  FadeUp,
  Marquee,
  AnimatedText
} from '../../../components/animation/AnimatedWrapper';
import { Button } from '../../../components/ui/button';
import { ContinueExploring } from '../../../components/ui/footer-section';


const SubHeroSection = () => {
  return (
    <ClientAnimatedSection className="w-full bg-white/50 pb-5 px-4 border-b relative overflow-hidden">
      <MotionDiv
        className="absolute -top-20 -left-20 w-90 h-90 bg-[var(--dark-red)]/50 rounded-full blur-3xl"
        variants={decorativeVariants}
        initial="hidden"
        animate="visible"
      />
      <MotionDiv
        className="absolute -bottom-40 -right-20 w-96 h-96 bg-[var(--dark-red)]/40 rounded-full blur-3xl"
        variants={decorativeVariants}
        initial="hidden"
        animate="visible" 
        transition={{ delay: 0.2 }}
      />

      <MotionDiv
        className="container mx-auto relative z-10 px-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-2 border-black backdrop-blur-md">

          {/* Left column */}
          <FadeUp className="md:col-span-8 relative bg-[#f8f8f8]/80 border-r-2 border-black min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden backdrop-blur-sm">

            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              playsInline
              muted
              style={{ objectFit: 'cover' }}
            >
              <source src="/banner.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <MotionDiv
              className="absolute top-0 left-0 border-b border-r border-black w-16 h-16 backdrop-blur-sm bg-white/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <MotionDiv
                className="absolute top-6 left-6 border border-black w-16 h-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
              <MotionDiv
                className="absolute top-[24px] left-[24px] h-[1px] bg-black z-50"
                initial={{ width: 0 }}
                animate={{ width: 180 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
              <MotionDiv
                className="absolute top-[24px] left-[24px] w-[1px] bg-black z-50"
                initial={{ height: 0 }}
                animate={{ height: 120 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              />
            </MotionDiv>

            <FadeUp delay={0.4} className="absolute top-6 right-6 flex flex-col items-end z-20">
              <span className="font-primary text-xs text-white bg-black/50 backdrop-blur-sm px-3 py-1">VIỆT NAM</span>
            </FadeUp>

            <FadeUp delay={0.6} className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-black/50 p-6 border-t border-white/20">
              <MotionH2
                className="font-primary text-3xl md:text-4xl text-white mb-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                DÂN CHỦ XÃ HỘI CHỦ NGHĨA
              </MotionH2>
              <MotionDiv
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="h-[1px] w-12 bg-white mr-3"></div>
                <p className="font-serif italic text-white/90">Bản chất chế độ ta, vừa mục tiêu vừa động lực phát triển</p>
              </MotionDiv>
            </FadeUp>
          </FadeUp>

          <div className="md:col-span-4 flex flex-col">
            {/* Top section */}
            <FadeUp delay={0.2} className="p-6 border-b-2 border-black backdrop-blur-md bg-white/80 relative">
              <div className="absolute top-0 right-0 w-10 h-10 border-l border-b border-black"></div>

              <div className="flex items-center mb-4">
                <div className="w-8 h-[1px] bg-red-900 mr-3"></div>
                <h3 className="font-sub text-xs text-black/80 uppercase tracking-widest">Giới thiệu ngắn gọn</h3>
              </div>

              <MotionH2
                className="font-serif text-2xl md:text-3xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Nhà nước pháp quyền <span className="text-red-900">XHCN</span>
              </MotionH2>
              <MotionP
                className="font-serif text-black/70 mb-2 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                {"Quản lý xã hội bằng pháp luật, đề cao Hiến pháp, bảo đảm quyền lực thuộc về Nhân dân."}
              </MotionP>

           
            </FadeUp>

            {/* Middle section */}
            <FadeUp delay={0.3} className="p-6 border-b-2 border-black bg-transparent relative overflow-hidden">
              <MotionDiv
                className="absolute -right-8 -bottom-8 w-40 h-40 bg-[var(--dark-red)]/20 rounded-full blur-xl"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />

             
              <div className="text-center relative z-10 p-4">
                <AnimatedText
                  as="h3"
                  className="font-primary text-2xl md:text-3xl text-[var(--dark-red)] mb-4"
                  shadowIntensity={0.6}
                >
                  Ý NGHĨA HIỆN NAY
                </AnimatedText>

                <p className="font-sub text-sm uppercase tracking-widest mb-4">Phát triển và hoàn thiện</p>
                <div className="h-[1px] w-16 bg-black/30 mx-auto mb-4"></div>
                <p className="font-serif italic text-black/70 mb-6">
                  Tiếp tục hoàn thiện pháp luật, cải cách bộ máy, phát huy quyền làm chủ, xây dựng Chính phủ số.
                </p>
                  <Button
                    variant="double"
                    className="font-sub text-sm uppercase tracking-widest"
                    asChild
                    size={'lg'}
                  >
                    <a href="/video">Tìm hiểu thêm</a>
                  </Button>
              </div>
            </FadeUp>

            {/* Bottom section */}
            <FadeUp delay={0.2} className="p-6 flex-1 flex flex-col justify-center backdrop-blur-md bg-white/70 relative">
              <div className="absolute bottom-0 right-0 w-8 h-8 border-t border-l border-black/60"></div>

              <div className="mb-6">
                <h4 className="font-sub text-xs uppercase tracking-widest ">Chủ đề chính</h4>
                <div className="h-[1px] w-12 bg-[var(--dark-red)]"></div>
              </div>

              {/* Political Topics */}
              <div className="space-y-4">
                <div className="border-l-2 border-[var(--dark-red)] pl-4">
                  <h5 className="font-sub text-sm font-semibold mb-1">Dân chủ xã hội chủ nghĩa</h5>
                  <p className="font-serif text-xs text-black/70">Bản chất chế độ ta, vừa mục tiêu vừa động lực phát triển</p>
                </div>
                <div className="border-l-2 border-[var(--dark-red)] pl-4">
                  <h5 className="font-sub text-sm font-semibold mb-1">Nhà nước pháp quyền XHCN</h5>
                  <p className="font-serif text-xs text-black/70">Quản lý xã hội bằng pháp luật, đề cao Hiến pháp</p>
                </div>
                <div className="border-l-2 border-[var(--dark-red)] pl-4">
                  <h5 className="font-sub text-sm font-semibold mb-1">Phát huy dân chủ</h5>
                  <p className="font-serif text-xs text-black/70">Xây dựng Nhà nước pháp quyền XHCN hiện nay</p>
                </div>
              </div>

              <FadeUp delay={0.7}>
                <Link href="/nha-nuoc-phap-quyen-xhcn" className="mt-6 inline-flex items-center self-start group">
                  <span className="font-sub text-sm uppercase mr-2">Xem tất cả chủ đề</span>
                  <MotionDiv
                    className="text-[var(--dark-red)]"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 3, duration: 1 }}
                  >→</MotionDiv>
                </Link>
              </FadeUp>
            </FadeUp>
          </div>
        </div>

  
      </MotionDiv>
        <FadeUp delay={0.5}>
          <div className="my-6 py-1 bg-black/10 backdrop-blur-sm">
            <Marquee text="Dân Chủ • Pháp Quyền • Xã Hội Chủ Nghĩa • Nhân Dân • Hiến Pháp • Phát Triển • Công Bằng • Bình Đẳng •" />
          </div>
        </FadeUp>

        <ContinueExploring issueNumber={25} delay={0.6} />
    </ClientAnimatedSection>
  );
};

export default SubHeroSection;