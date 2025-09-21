import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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

const timelineEvents = [
  {
    year: "Cách mạng tháng 8/1945",
    concept: "Dân chủ nhân dân",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    year: "Năm 1976",
    concept: "Làm chủ tập thể XHCN",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    year: "Đại hội VI của Đảng (1986)",
    concept: "Lấy dân làm gốc; Cách mạng là sự nghiệp của quần chúng...",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    year: "Qua các đại hội không ngừng đổi mới hoàn thiện",
    concept: "Do nhân dân làm chủ → dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
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
          <MotionH2 className="font-sans text-4xl md:text-5xl text-black mb-6">
            <span className="text-black font-primary">DÂN CHỦ XÃ HỘI</span>
            <span className="text-red-900 font-primary"> CHỦ NGHĨA</span>
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

        {/* Timeline Section */}
        <FadeUp delay={0.2} className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg">
            <MotionH2 className="font-sans text-[1.75rem] font-bold text-gray-800 mb-8 text-center">
              Sự ra đời, phát triển của nền dân chủ xã hội chủ nghĩa ở Việt Nam
            </MotionH2>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <FadeUp key={index} delay={0.3 + index * 0.1}>
                    <div className="relative flex items-start group">
                      {/* Timeline dot with image */}
                      <div className="w-12 h-12 rounded-full border-2 border-red-600 bg-white z-10 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        <Image
                          src="/vn.png"
                          alt="Cờ Việt Nam"
                          width={24}
                          height={16}
                          className="rounded-full"
                        />
                      </div>

                      {/* Content */}
                      <div className="ml-6 flex-1">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 group-hover:bg-gray-100">
                          <div className="font-sans font-bold text-lg text-red-700 mb-3">
                            {event.year}
                          </div>
                          <div className="text-gray-700 font-serif text-base leading-relaxed">
                            {event.concept}
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Party Quote Section */}
        <FadeUp delay={0.4} className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-center space-x-6">
              {/* Left box - Party affirmation */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex-shrink-0 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-center">
                  <div className="mb-4">
                    <Image
                      src="/vn.png"
                      alt="Cờ Việt Nam"
                      width={40}
                      height={26}
                      className="mx-auto"
                    />
                  </div>
                  <div className="text-red-700 font-bold text-lg leading-tight">
                    <div>Đảng</div>
                    <div>ta</div>
                    <div>khẳng</div>
                    <div>định</div>
                  </div>
                </div>
              </div>

              {/* Right box - Quote */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex-1 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-gray-800 italic text-base leading-relaxed">
                  <div className="text-xl text-gray-600 mb-3 font-bold">"</div>
                  <div className="pl-4">
                    Dân chủ xã hội chủ nghĩa là bản chất của chế độ ta, vừa là mục tiêu, vừa là động lực của sự phát triển đất nước. Xây dựng và từng bước hoàn thiện nền dân chủ xã hội chủ nghĩa, bảo đảm dân chủ được thực hiện trong thực tế cuộc sống ở mỗi cấp, trên tất cả các lĩnh vực. Dân chủ gắn liền với kỷ luật, kỷ cương và phải được thể chế hóa bằng pháp luật, được pháp luật bảo đảm...
                  </div>
                  <div className="text-xl text-gray-600 mt-3 font-bold text-right">"</div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Characteristics Section */}
        <FadeUp delay={0.5} className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-center space-x-6">
              {/* Left box - Party affirmation */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex-shrink-0 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-center">
                  <div className="mb-4">
                    <Image
                      src="/vn.png"
                      alt="Cờ Việt Nam"
                      width={40}
                      height={26}
                      className="mx-auto"
                    />
                  </div>
                  <div className="text-red-700 font-bold text-lg leading-tight">
                    <div>Đảng</div>
                    <div>ta</div>
                    <div>khẳng</div>
                    <div>định</div>
                  </div>
                </div>
              </div>

              {/* Right box - Characteristics */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex-1 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-gray-800 italic text-base leading-relaxed">
                  <span className="text-gray-800">Một trong những đặc trưng của chủ nghĩa xã hội Việt Nam là </span>
                  <span className="text-red-700 font-bold text-lg">do nhân dân làm chủ</span>
                  <span className="text-gray-800">.</span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Goals Section */}
        <FadeUp delay={0.6} className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-center space-x-6">
              {/* Left box - Party affirmation */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex-shrink-0 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-center">
                  <div className="mb-4">
                    <Image
                      src="/vn.png"
                      alt="Cờ Việt Nam"
                      width={40}
                      height={26}
                      className="mx-auto"
                    />
                  </div>
                  <div className="text-red-700 font-bold text-lg leading-tight">
                    <div>Đảng</div>
                    <div>ta</div>
                    <div>khẳng</div>
                    <div>định</div>
                  </div>
                </div>
              </div>

              {/* Right box - Goals */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex-1 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-gray-800 italic text-base leading-relaxed">
                  <span className="text-gray-800">Mục tiêu tổng quát của cách mạng Việt Nam là </span>
                  <span className="text-red-700 font-bold text-lg">dân giàu, nước mạnh, dân chủ, công bằng, văn minh</span>
                  <span className="text-gray-800">.</span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Trích dẫn Hồ Chí Minh Section */}
        <FadeUp delay={0.7} className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg">
            <MotionH2 className="font-sans text-[1.75rem] font-bold text-gray-800 mb-8 text-center">
              Bản chất của nền dân chủ xã hội chủ nghĩa ở Việt Nam
            </MotionH2>

            <div className="flex items-center justify-center space-x-6">
              {/* Left box - Hồ Chí Minh */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex-shrink-0 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-center">
                  <div className="mb-4">
                    <Image
                      src="/vn.png"
                      alt="Cờ Việt Nam"
                      width={40}
                      height={26}
                      className="mx-auto"
                    />
                  </div>
                  <div className="text-red-700 font-sans font-bold text-lg leading-tight">
                    <div>Hồ Chí Minh</div>
                    <div>khẳng định</div>
                  </div>
                </div>
              </div>

              {/* Right box - Quote */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex-1 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-gray-800 font-serif text-base leading-relaxed">
                  <div className="text-xl text-gray-600 mb-3 font-bold">"</div>
                  <div className="pl-4">
                    <div className="font-sans font-bold text-lg text-gray-900 mb-4">NƯỚC TA LÀ NƯỚC DÂN CHỦ.</div>
                    <div className="space-y-2">
                      <p>Bao nhiêu lợi ích đều là <span className="text-red-700 font-bold">vì dân</span></p>
                      <p>Bao nhiêu quyền hạn đều là <span className="text-red-700 font-bold">của dân</span></p>
                      <p>Công cuộc đổi mới xây dựng là trách nhiệm <span className="text-red-700 font-bold">của dân</span></p>
                      <p>Sự nghiệp kháng chiến, kiến quốc là công việc <span className="text-red-700 font-bold">của dân</span></p>
                      <p>Chính quyền từ xã đến Chính phủ Trung ương <span className="text-red-700 font-bold">do dân</span> cử ra</p>
                      <p>Đoàn thể từ Trung ương đến xã <span className="text-red-700 font-bold">do dân</span> tổ chức nên</p>
                      <p>Nói tóm lại quyền lực và lực lượng đều <span className="text-red-700 font-bold">ở dân</span>".</p>
                    </div>
                  </div>
                  <div className="text-xl text-gray-600 mt-3 font-bold text-right">"</div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Bản chất Dân chủ XHCN - 5 đặc điểm */}
        <FadeUp delay={0.8} className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-center space-x-6">
              {/* Left box - Đặc điểm */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex-shrink-0 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-center">
                  <div className="mb-4">
                    <Image
                      src="/vn.png"
                      alt="Cờ Việt Nam"
                      width={40}
                      height={26}
                      className="mx-auto"
                    />
                  </div>
                  <div className="text-red-700 font-sans font-bold text-lg leading-tight">
                    <div>5 đặc điểm</div>
                    <div>của dân chủ</div>
                    <div>XHCN</div>
                  </div>
                </div>
              </div>

              {/* Right box - 5 đặc điểm */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex-1 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 font-serif text-base leading-relaxed">
                      Dân chủ là <span className="text-red-700 font-bold">mục tiêu</span> của chế độ XHCN
                      (<span className="text-red-700 font-bold">dân giàu, nước mạnh, dân chủ, công bằng, văn minh</span>).
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 font-serif text-base leading-relaxed">
                      Dân chủ là <span className="text-red-700 font-bold">bản chất</span> của chế độ XHCN
                      (do nhân dân làm chủ, quyền lực thuộc về nhân dân).
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 font-serif text-base leading-relaxed">
                      Dân chủ là <span className="text-red-700 font-bold">động lực</span> để xây dựng CNXH
                      (phát huy sức mạnh của nhân dân, của dân tộc).
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 font-serif text-base leading-relaxed">
                      Dân chủ gắn với pháp luật (gắn liền với <span className="text-red-700 font-bold">kỷ luật, kỷ cương</span>).
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 font-serif text-base leading-relaxed">
                      Dân chủ phải được thực hiện <span className="text-red-700 font-bold">trong đời sống thực tiễn</span> ở tất cả các cấp, mọi lĩnh vực.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Cơ chế thực hiện dân chủ Section */}
        <FadeUp delay={0.9} className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg">
            <MotionH2 className="font-sans text-[1.75rem] font-bold text-gray-800 mb-8 text-center">
              Cơ chế thực hiện dân chủ
            </MotionH2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Gián tiếp */}
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                  <span className="text-red-700 font-sans font-bold text-lg">Gián tiếp</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700 font-serif text-base leading-relaxed">
                        Dân trực tiếp bầu ra tổ chức đại diện cho mình.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700 font-serif text-base leading-relaxed">
                        Tổ chức ấy đại diện cho nhân dân, thực hiện quyền làm chủ cho nhân dân.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700 font-serif text-base leading-relaxed">
                        Nhân dân bầu ra Quốc hội là cơ quan quyền lực nhà nước cao nhất hoạt động theo nhiệm kỳ 5 năm.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trực tiếp */}
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                  <span className="text-red-700 font-sans font-bold text-lg">Trực tiếp</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700 font-serif text-base leading-relaxed">
                        Các quyền được thông tin về hoạt động của nhà nước;
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700 font-serif text-base leading-relaxed">
                        Được bàn bạc về công việc của nhà nước và cộng đồng dân cư;
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700 font-serif text-base leading-relaxed">
                        Được bàn đến những quyết định về dân chủ cơ sở;
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700 font-serif text-base leading-relaxed">
                        Kiểm tra giám sát các hoạt động của cơ quan nhà nước từ Trung ương cho đến cơ sở.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Thiết chế thực hiện dân chủ Section */}
        <FadeUp delay={1.0} className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg">
            <MotionH2 className="font-sans text-[1.75rem] font-bold text-gray-800 mb-8 text-center">
              Thiết chế thực hiện dân chủ
            </MotionH2>

            {/* Central content with icon */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
                <Image
                  src="/vn.png"
                  alt="Cờ Việt Nam"
                  width={50}
                  height={33}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-red-700 font-sans font-bold text-xl mb-4">Thiết chế thực hiện dân chủ</h3>
            </div>

            {/* Three column layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Column 1 - Nhà nước */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">🏛️</span>
                  </div>
                  <h4 className="text-blue-800 font-sans font-bold text-lg">Nhà nước</h4>
                </div>
                <p className="text-blue-700 font-serif text-sm leading-relaxed text-center">
                  Thông qua nhà nước và cả hệ thống chính trị
                </p>
              </div>

              {/* Column 2 - Đảng lãnh đạo */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">⭐</span>
                  </div>
                  <h4 className="text-red-800 font-sans font-bold text-lg">Đảng lãnh đạo</h4>
                </div>
                <p className="text-red-700 font-serif text-sm leading-relaxed text-center">
                  Do Đảng cộng sản Việt Nam lãnh đạo (Thực hiện nhất nguyên chính trị)
                </p>
              </div>

              {/* Column 3 - Yêu cầu */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">🎯</span>
                  </div>
                  <h4 className="text-green-800 font-sans font-bold text-lg">Yêu cầu</h4>
                </div>
                <p className="text-green-700 font-serif text-sm leading-relaxed text-center">
                  Củng cố, hoàn thiện điều kiện đảm bảo quyền làm chủ của nhân dân
                </p>
              </div>
            </div>

            {/* Bottom explanation */}
            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="text-center">
                <p className="text-gray-700 font-serif text-base leading-relaxed">
                  Trong quá trình xây dựng chủ nghĩa xã hội ở nước ta, một yêu cầu tất yếu là không ngừng củng cố, hoàn thiện những điều kiện đảm bảo quyền làm chủ của nhân dân và chăm lo đời sống vật chất, tinh thần của nhân dân.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Navigation */}
        <FadeUp delay={1.1} className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-md border border-black/10 rounded-lg p-8">
            <MotionH2 className="font-sans text-xl font-bold text-black mb-6">
              Khám phá thêm
            </MotionH2>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/noidung/nha-nuoc-phap-quyen-xhcn"
                className="px-6 py-3 bg-red-900 text-white font-sans text-sm uppercase tracking-widest hover:bg-red-800 transition-colors duration-200"
              >
                Nhà nước pháp quyền XHCN
              </Link>
              <Link
                href="/noidung/phat-huy-dan-chu-xay-dung-nha-nuoc-phap-quyen"
                className="px-6 py-3 border-2 border-red-900 text-red-900 font-sans text-sm uppercase tracking-widest hover:bg-red-900 hover:text-white transition-colors duration-200"
              >
                Phát huy dân chủ
              </Link>
              <Link
                href="/noidung"
                className="px-6 py-3 border-2 border-black text-black font-sans text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-200"
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
