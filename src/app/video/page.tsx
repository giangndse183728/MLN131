export default function VideoPage() {
  const videos = [
    {
        id: 'mTTmW2PHjAY',
        title: 'Phát huy dân chủ để xây dựng nhà nước pháp quyền XHCN - PLO',
      },
      {
        id: '_9WYajDY6Kw',
        title: 'Dân chủ Xã hội Chủ nghĩa và nhà nước pháp quyền Xã hội Chủ nghĩa ở Việt Nam',
      },
      {
        id: 'FPhWGO94meU',
        title: 'Ôn tập nhanh - Chương 4 CNXHKH',
      },
    {
      id: 'DEbg4zRr8YY',
      title: 'Dân chủ XHCN và Nhà nước pháp quyền XHCN ở Việt Nam',
    },
    {
      id: 'jfldSSWzfAg',
      title: 'Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam',
    },
    {
      id: '4PpXzZ2gnNk',
      title: 'Dân chủ XHCN và Nhà nước XHCN',
    },
 
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbfaf7] via-white to-[#faf7f4] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="font-primary text-3xl md:text-4xl text-black mb-2 tracking-tight">Dân chủ XHCN và Nhà nước pháp quyền XHCN ở Việt Nam</h1>
          <div className="mx-auto h-0.5 w-24 bg-red-900" />
          <p className="font-sub text-black/70 mt-3">Tổng hợp video tư liệu theo chủ đề</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div key={v.id} className="bg-white/90 backdrop-blur-md border border-black rounded-none p-0">
              <div className="h-1 w-full bg-red-900" />
              <div className="relative w-full pt-[56.25%] overflow-hidden rounded-none">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="px-3 py-3 border-t border-black/80">
                <div className="text-sm font-sub text-black/80 line-clamp-2">
                {v.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


