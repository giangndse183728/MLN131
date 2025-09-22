export default function MusicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbfaf7] via-white to-[#faf7f4] py-18">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="font-primary text-3xl md:text-4xl text-black mb-2 tracking-tight">Nhân Dân Là Gốc</h1>
          <div className="mx-auto h-0.5 w-24 bg-red-900" />
          <p className="font-sub text-black/70 mt-3 text-sm">Bài hát do AI tạo — Chủ đề: Dân chủ XHCN và Nhà nước pháp quyền XHCN</p>
        </div>

        <div className="bg-black/10 backdrop-blur-md border border-black rounded-none p-6 md:p-8">
          <div className="prose prose-sm max-w-none">
            <h2 className="font-primary text-xl text-black mb-3">Lyrics</h2>
            <div className="h-0.5 w-16 bg-red-900 mb-6" />

            <section className="mb-6">
              <h3 className="font-sub uppercase tracking-widest text-[12px] text-red-900 mb-2">Điệp khúc (Chorus)</h3>
              <p className="font-serif text-black/80 whitespace-pre-line">
                {`Nhân dân là gốc, dân chủ sáng ngời,
Tổ quốc vững bước, chung sức muôn đời.
Tự do – hạnh phúc, công bằng – văn minh,
Việt Nam ta vững bước, đi lên cùng thời gian!`}
              </p>
            </section>

            <div className="my-4 h-px w-full bg-black/20" />

            <section className="mb-6">
              <h3 className="font-sub uppercase tracking-widest text-[12px] text-red-900 mb-2">Đoạn 1</h3>
              <p className="font-serif text-black/80 whitespace-pre-line">
                {`Từ mùa Thu Cách mạng năm bốn lăm,
Nhân dân vùng lên giành lấy giang san.
Độc lập, tự do, ta dựng xây đất nước,
Dân làm chủ, muôn trái tim chan hòa.`}
              </p>
            </section>

            <div className="my-4 h-px w-full bg-black/20" />

            <section className="mb-6">
              <h3 className="font-sub uppercase tracking-widest text-[12px] text-red-900 mb-2">Đoạn 2</h3>
              <p className="font-serif text-black/80 whitespace-pre-line">
                {`Đảng soi đường, “lấy dân làm gốc”,
Đại hội sáu, đổi mới sáng ngời.
Ý Đảng lòng dân hòa chung sức mạnh,
Dân chủ, kỷ cương, dựng nước muôn đời.`}
              </p>
            </section>

            <div className="my-4 h-px w-full bg-black/20" />

            <section className="mb-6">
              <h3 className="font-sub uppercase tracking-widest text-[12px] text-red-900 mb-2">Điệp khúc (Lặp lại)</h3>
              <p className="font-serif text-black/80 whitespace-pre-line">
                {`Nhân dân là gốc, dân chủ sáng ngời,
Tổ quốc vững bước, chung sức muôn đời.
Tự do – hạnh phúc, công bằng – văn minh,
Việt Nam ta vững bước, đi lên cùng thời gian!`}
              </p>
            </section>

            <div className="my-4 h-px w-full bg-black/20" />

            <section className="mb-6">
              <h3 className="font-sub uppercase tracking-widest text-[12px] text-red-900 mb-2">Bridge (Cao trào)</h3>
              <p className="font-serif text-black/80 whitespace-pre-line">
                {`Một nhà nước, pháp quyền của dân,
Do dân, vì dân, muôn đời bền vững.
Dân giàu, nước mạnh, ấm no hạnh phúc,
Khát vọng Việt Nam, tỏa sáng năm châu!`}
              </p>
            </section>

            <div className="my-4 h-px w-full bg-black/20" />

            <section>
              <h3 className="font-sub uppercase tracking-widest text-[12px] text-red-900 mb-2">Kết (Outro)</h3>
              <p className="font-serif text-black/80 whitespace-pre-line">
                {`Nhân dân là gốc, niềm tin sáng soi,
Xây dựng đất nước, rạng rỡ mai sau.
Dân chủ xã hội chủ nghĩa – mục tiêu,
Việt Nam tươi đẹp, vững bước ngàn năm!`}
              </p>
            </section>
          </div>

          <div className="mt-6 text-[12px] font-sub text-black/60">
            Nguồn: Bài hát được tạo bằng AI. Trình phát nhạc nằm ở góc trái dưới cùng màn hình.
          </div>
        </div>
      </div>
    </div>
  );
}


