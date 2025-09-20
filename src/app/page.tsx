import HeroSection from "@/features/homepage/components/HeroSection";
import { generateSEOMetadata } from "@/lib/seo";
import SubHeroSection from "@/features/homepage/components/SubHeroSection";
;


export const metadata = generateSEOMetadata({
  title: "Việt Nam | Dân Chủ Xã Hội Chủ Nghĩa và Nhà Nước Xã Hội Chủ Nghĩa",
  description: "Nền tảng giáo dục về dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa ở Việt Nam. Khám phá các khái niệm chính trị, hệ thống pháp luật và thực tiễn dân chủ.",
  keywords: ["dân chủ xã hội chủ nghĩa", "nhà nước xã hội chủ nghĩa", "chính trị việt nam", "pháp luật việt nam"],
  image: {
    url: "/vn.png",
    width: 1200,
    height: 630,
    alt: "Dân Chủ Xã Hội Chủ Nghĩa Việt Nam"
  }
});

export default function Homepage() {
  return (
    <div className="flex flex-col ">
      <main>
        <HeroSection/>
        <SubHeroSection/>
      </main>
    </div>
  );
}
