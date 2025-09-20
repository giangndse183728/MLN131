import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-white/80 backdrop-blur-md text-black pt-16 pb-8 relative border-t-2 border-black overflow-hidden">
      {/* Bottom red accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-900/80"></div>
      
      {/* Glassmorphism decorative elements */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-16 w-80 h-80 bg-black/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-red-900/5 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Magazine Style Header */}
        <div className="text-center mb-12 pb-12 border-b border-black/20">
          <h2 className="font-primary text-3xl tracking-wider uppercase mb-4">
            <span className="text-black">VIỆT</span>
            <span className="text-red-900">NAM</span>
          </h2>
          <p className="font-serif italic text-lg max-w-xl mx-auto text-black/70 backdrop-blur-sm bg-white/30 p-4">
            &ldquo;Dân chủ không chỉ là một hình thức chính quyền, mà là một cách sống, một cách tư duy và một cách hành động.&rdquo;
          </p>
          <div className="mt-4 flex justify-center items-center">
            <div className="w-6 h-[1px] bg-red-900"></div>
            <p className="mx-3 text-sm font-sub">TƯ TƯỞNG HỒ CHÍ MINH</p>
            <div className="w-6 h-[1px] bg-red-900"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12 mb-16 border-b border-black/20 pb-16">
          {/* About Section */}
          <div className="md:col-span-5 space-y-6 backdrop-blur-sm bg-white/40 p-6">
            <div className="heading-clean">
              <h3 className="text-lg font-sub text-black uppercase tracking-widest relative inline-block">
                Về Chúng Tôi
                <span className="absolute -top-2 -right-2 text-red-900 text-[10px]">®</span>
              </h3>
              <div className="w-12 h-[1px] bg-red-900 mt-2"></div>
            </div>
            <p className="text-black/80 text-sm leading-relaxed font-serif">
              Nền tảng giáo dục về dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa ở Việt Nam. Khám phá các khái niệm chính trị, hệ thống pháp luật và thực tiễn dân chủ.
            </p>
          </div>
          
          {/* Topics Section */}
          <div className="md:col-span-4 backdrop-blur-sm bg-white/20 p-4">
            <div className="heading-clean">
              <h4 className="text-sm uppercase tracking-wide font-sub font-bold text-black">Chủ Đề Chính</h4>
              <div className="w-6 h-[1px] bg-red-900 mt-2"></div>
            </div>
            <div className="space-y-3 mt-6">
              {[
                { name: "Dân chủ xã hội chủ nghĩa", path: "/dan-chu-xa-hoi-chu-nghia" },
                { name: "Nhà nước pháp quyền XHCN", path: "/nha-nuoc-phap-quyen-xhcn" },
                { name: "Phát huy dân chủ", path: "/phat-huy-dan-chu-xay-dung-nha-nuoc-phap-quyen" }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="block text-black/70 hover:text-red-900 transition-colors duration-200 text-sm font-serif"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Vietnamese Flag Section */}
          <div className="md:col-span-3 flex justify-center items-center backdrop-blur-sm bg-white/20 p-4">
            <div className="text-center">
              <Image
                src="/vn.png"
                alt="Vietnamese Flag"
                width={200}
                height={160}
                className="mx-auto mb-2"
              />
              <p className="text-xs font-sub uppercase tracking-widest text-black/70">
                Việt Nam
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="relative backdrop-blur-sm bg-white/30 p-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-black/60">
            <div className="mb-4 md:mb-0 font-serif">
              © {new Date().getFullYear()} VIỆT NAM. Tất cả quyền được bảo lưu.
            </div>
            <div className="flex space-x-6 items-center">
              <span className="font-sub text-xs tracking-widest uppercase flex items-center">
                <span className="w-3 h-[1px] bg-red-900 mr-2"></span>
                Dân Chủ Xã Hội Chủ Nghĩa
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;