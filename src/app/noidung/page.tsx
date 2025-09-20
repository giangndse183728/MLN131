'use client';

import Link from 'next/link';
import { 
  ClientAnimatedSection,
  MotionDiv,
  MotionH2,
  MotionP,
  containerVariants,
  FadeUp,
} from '../../components/animation/AnimatedWrapper';
import CardSwap, { Card } from '../../components/CardSwap';
import FlowingMenu from '../../components/FlowingMenu';

// Custom CSS to fix CardSwap layout and FlowingMenu styling
const cardSwapStyles = `
  .card-swap-wrapper .card-swap-container {
    position: relative !important;
    bottom: auto !important;
    right: auto !important;
    transform: none !important;
    transform-origin: center center !important;
    width: auto !important;
    height: auto !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  
  .card-swap-wrapper .card-swap-container .card {
    border: none !important;
    background: transparent !important;
  }

  /* FlowingMenu custom styling */

  
  .menu__item {
    border-bottom: 2px solid #dc2626;
  }
  
  .menu__item:last-child {
    border-bottom: none;
  }
  
  .menu__item-link {
    color: black !important;
    font-size: 1.5rem !important;
    font-weight: 600 !important;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  }
  
  .menu__item-link:hover {
    color: #dc2626 !important;
  }
  
  .marquee {
    background: #dc2626 !important;
  }
  
  .marquee span {
    color: white !important;
    font-weight: 600 !important;
  }
`;


const topics = [
  {
    id: 1,
    title: "Dân chủ xã hội chủ nghĩa ở Việt Nam",
    subtitle: "Bản chất chế độ ta, vừa mục tiêu vừa động lực phát triển",
    description: "Dân chủ xã hội chủ nghĩa là bản chất của chế độ ta, vừa là mục tiêu vừa là động lực phát triển của cách mạng Việt Nam. Đây là nền dân chủ của đại đa số nhân dân lao động, được thực hiện dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.",
    features: [
      "Quyền lực thuộc về nhân dân",
      "Dân chủ trực tiếp và dân chủ đại diện",
      "Sự lãnh đạo của Đảng Cộng sản Việt Nam",
      "Đoàn kết toàn dân tộc"
    ],
    color: "from-red-900 to-red-700",
    link: "/noidung/dan-chu-xa-hoi-chu-nghia"
  },
  {
    id: 2,
    title: "Nhà nước pháp quyền XHCN Việt Nam",
    subtitle: "Quản lý xã hội bằng pháp luật, đề cao Hiến pháp",
    description: "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là nhà nước của nhân dân, do nhân dân, vì nhân dân, được tổ chức và hoạt động theo Hiến pháp và pháp luật, dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.",
    features: [
      "Quản lý xã hội bằng pháp luật",
      "Đề cao Hiến pháp và pháp luật",
      "Bảo đảm quyền lực thuộc về nhân dân",
      "Công bằng và bình đẳng trước pháp luật"
    ],
    color: "from-red-800 to-red-600",
    link: "/noidung/nha-nuoc-phap-quyen-xhcn"
  },
  {
    id: 3,
    title: "Phát huy dân chủ, xây dựng Nhà nước pháp quyền XHCN hiện nay",
    subtitle: "Tiếp tục hoàn thiện pháp luật, cải cách bộ máy",
    description: "Phát huy dân chủ và xây dựng Nhà nước pháp quyền xã hội chủ nghĩa là nhiệm vụ quan trọng trong giai đoạn hiện nay, nhằm tiếp tục hoàn thiện hệ thống pháp luật, cải cách bộ máy nhà nước và phát huy quyền làm chủ của nhân dân.",
    features: [
      "Hoàn thiện hệ thống pháp luật",
      "Cải cách bộ máy nhà nước",
      "Phát huy quyền làm chủ của nhân dân",
      "Xây dựng Chính phủ số"
    ],
    color: "from-red-700 to-red-500",
    link: "/noidung/phat-huy-dan-chu-xay-dung-nha-nuoc-phap-quyen"
  }
];

// FlowingMenu items data
const flowingMenuItems = [
  {
    link: "/noidung/dan-chu-xa-hoi-chu-nghia",
    text: "Dân chủ xã hội chủ nghĩa",
    image: "/vn.png"
  },
  {
    link: "/noidung/nha-nuoc-phap-quyen-xhcn", 
    text: "Nhà nước pháp quyền XHCN",
    image: "/vn.png"
  },
  {
    link: "/noidung/phat-huy-dan-chu-xay-dung-nha-nuoc-phap-quyen",
    text: "Phát huy dân chủ XHCN",
    image: "/vn.png"
  }
];

export default function NoiDungPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cardSwapStyles }} />
      <ClientAnimatedSection className="min-h-screen bg-gradient-to-br from-[#f8f7f3] to-white py-16">
      <MotionDiv
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content Layout - 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center min-h-screen">
          {/* Left Column - Header Content */}
          <FadeUp className="text-left px-16 pb-32">
            <MotionH2 className="font-metal text-4xl md:text-5xl text-black mb-6">
              <span className="text-black font-primary">NỘI DUNG</span>
              <span className="text-red-900 font-primary"> CHÍNH</span>
            </MotionH2>
            <MotionP className="font-serif text-lg text-black/70 leading-relaxed mb-8">
              Khám phá các chủ đề cốt lõi về dân chủ xã hội chủ nghĩa và nhà nước pháp quyền XHCN ở Việt Nam. 
              Tìm hiểu về bản chất, đặc điểm và ý nghĩa của hệ thống chính trị Việt Nam.
            </MotionP>
            
            {/* FlowingMenu */}
            <div className="h-96">
              <FlowingMenu items={flowingMenuItems} />
            </div>
          </FadeUp>

          {/* Right Column - CardSwap */}
          <FadeUp delay={0.3} className="hidden lg:block">
            <div className="card-swap-wrapper w-full h-full flex justify-center items-center">
              <CardSwap
                width={500}
                height={500}
                cardDistance={80}
                verticalDistance={100}
                delay={4000}
                skewAmount={8}
                easing="elastic"
                onCardClick={(idx) => {
                  window.location.href = topics[idx].link;
                }}
              >
              {topics.map((topic) => (
                <Card
                  key={topic.id}
                  customClass="bg-white/90 backdrop-blur-md border-2 border-red-900/20 shadow-xl cursor-pointer"
                >
                  <div className="h-full flex flex-col">
                    {/* Card Header */}
                    <div className={`h-2 bg-gradient-to-r ${topic.color}`}></div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Card Number */}
                      <div className="flex items-center mb-4">
                        <div className={`w-8 h-8 bg-gradient-to-r ${topic.color} text-white rounded-full flex items-center justify-center font-gothic text-sm font-bold mr-3`}>
                          {topic.id}
                        </div>
                        <div className="h-[1px] w-12 bg-red-900/30"></div>
                      </div>

                      {/* Card Title */}
                      <h2 className="font-gothic text-lg font-bold text-black mb-3 leading-tight">
                        {topic.title}
                      </h2>

                      {/* Card Subtitle */}
                      <p className="font-serif text-sm text-red-900 mb-4 italic">
                        {topic.subtitle}
                      </p>

                      {/* Card Description */}
                      <p className="font-serif text-sm text-black/70 mb-6 leading-relaxed flex-1">
                        {topic.description}
                      </p>

                      {/* Features List */}
                      <div className="mb-6">
                        <h4 className="font-gothic text-xs uppercase tracking-widest text-black/60 mb-3">
                          Đặc điểm chính
                        </h4>
                        <ul className="space-y-2">
                          {topic.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-red-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="font-serif text-xs text-black/70">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Card Footer */}
                      <div className="pt-4 border-t border-black/10 mt-auto">
                        <div className="inline-flex items-center text-red-900 hover:text-red-800 transition-colors duration-200">
                          <span className="font-gothic text-xs uppercase tracking-widest mr-2">
                            Tìm hiểu thêm
                          </span>
                          <span className="text-red-900">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              </CardSwap>
            </div>
          </FadeUp>
        </div>


      </MotionDiv>
    </ClientAnimatedSection>
    </>
  );
}
