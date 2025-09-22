import { Suspense } from 'react';
import HeroSectionClient from './HeroSectionClient';

const featuredItems = [
  {
    image: "/vn4.jpg",
    title: "DÂN CHỦ XÃ HỘI CHỦ NGHĨA",
    subtitle: "Quyền lực thuộc về nhân dân"
  },
  {
    image: "/vn2.jpg",
    title: "NHÀ NƯỚC XÃ HỘI CHỦ NGHĨA",
    subtitle: "Phục vụ lợi ích nhân dân"
  },
  {
    image: "/vn3.jpg",
    title: "PHÁP QUYỀN XÃ HỘI CHỦ NGHĨA",
    subtitle: "Công bằng và bình đẳng"
  }
];

const heroSEOContent = {
  heading: "Xã-hội chủ-nghĩa",
  description: "Phần III – Dân chủ XHCN và Nhà nước pháp quyền XHCN ở Việt Nam",
  links: [
    { text: "Khám phá", url: "/game" },
    { text: "Học tập", url: "/noidung" }
  ]
};

const HeroSection = () => {
  return (
    <>
      <div style={{ display: 'none' }} aria-hidden="true">
        <h1>{heroSEOContent.heading}</h1>
        <p>{heroSEOContent.description}</p>
        <ul>
          {featuredItems.map((item, index) => (
            <li key={index}>
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <Suspense fallback={<div className="w-full h-screen bg-[#f8f7f3]"></div>}>
        <HeroSectionClient 
          featuredItems={featuredItems} 
          heroSEOContent={heroSEOContent}
        />
      </Suspense>
    </>
  );
};

export default HeroSection;
