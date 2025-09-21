'use client';

import Dialog from './dialog';

interface MuseumObjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  objectName: string;
}

const objectInfo: { 
    [key: string]: { 
      title: string; 
      description: string; 
      image?: string; 
      relation?: string; // Liên hệ với bài học Dân chủ XHCN & Nhà nước XHCN
    } 
  } = {
    bacho: {
      title: "Bác Hồ",
      description: "Chủ tịch Hồ Chí Minh – lãnh tụ vĩ đại của cách mạng Việt Nam, người đã khai sáng con đường độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaFEAnGdVscTQw-VupM2zvDNRHSMl69X6sw&s",
      relation: "Tư tưởng Hồ Chí Minh là nền tảng lý luận, kim chỉ nam cho việc xây dựng dân chủ xã hội chủ nghĩa và Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam."
    },
    aonau: {
      title: "Áo Ka-ki Nâu",
      description: "Chiếc áo ka-ki nâu giản dị gắn liền với hình ảnh Bác Hồ – biểu tượng của tinh thần cần kiệm, giản dị và ý chí kiên định vì sự nghiệp xã hội chủ nghĩa.",
      image: "https://capnuoctrungan.vn/Images/Uploadimages/13_1(1).jpg",
      relation: "Hình ảnh chiếc áo thể hiện phong cách lãnh đạo gần gũi, vì dân phục vụ, đúng với bản chất Nhà nước XHCN là Nhà nước của dân, do dân, vì dân."
    },
    tuyenngon: {
      title: "Tuyên Ngôn Độc Lập",
      description: "Văn kiện lịch sử do Chủ tịch Hồ Chí Minh đọc ngày 2/9/1945 tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa, mở ra kỷ nguyên độc lập dân tộc và tiến lên chủ nghĩa xã hội.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4zIjwMnN0p_Hfmr7PRnik6DZz-0IQ12Mfvg&s",
      relation: "Khẳng định quyền dân tộc tự quyết – cơ sở pháp lý, chính trị để xây dựng Nhà nước dân chủ nhân dân, tiến tới Nhà nước pháp quyền XHCN."
    },
    aodai: {
      title: "Áo Dài",
      description: "Áo dài – biểu tượng văn hóa truyền thống của dân tộc Việt Nam, đồng thời phản ánh bản sắc dân tộc trong công cuộc xây dựng xã hội chủ nghĩa.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjI_4V2S2QuvFmstxT2lbsFnycnKIeXyqhQ&s",
      relation: "Thể hiện bản sắc văn hóa dân tộc – yếu tố quan trọng để xây dựng nền dân chủ XHCN mang tính dân tộc và nhân văn."
    },
    anh3: {
      title: "Trống Đồng – Trống Chiêng",
      description: "Trống đồng và trống chiêng là di sản văn hóa truyền thống, thể hiện tinh thần đoàn kết cộng đồng – nền tảng để xây dựng xã hội chủ nghĩa Việt Nam.",
      image: "https://vcdn1-dulich.vnecdn.net/2021/04/19/trongdongngoclu-2851-1618820026.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=ewiiHrtqp4G-TX3YzDgAdw",
      relation: "Biểu tượng cho sự cố kết cộng đồng – nguyên tắc đoàn kết toàn dân trong dân chủ XHCN."
    },
    Cone: {
      title: "Nón Lá",
      description: "Nón lá – vật dụng gắn bó với đời sống lao động của người dân, mang đậm dấu ấn văn hóa Việt Nam trong thời kỳ kháng chiến và xây dựng xã hội chủ nghĩa.",
      image: "https://baotanglichsu.vn/DataFiles/News/Tintuc_cgs_vn_20167318h25m47s.jpg",
      relation: "Gắn liền với đời sống người lao động – đối tượng trung tâm của dân chủ xã hội chủ nghĩa."
    },
    anh1: {
      title: "Tranh Cổ Động 1950",
      description: "Tranh cổ động do Ty Thông tin tỉnh Tuyên Quang phát hành năm 1950, kêu gọi thanh niên hăng hái tòng quân để thực hiện nhiệm vụ tổng phản công – góp phần vào sự nghiệp kháng chiến kiến quốc và tiến lên chủ nghĩa xã hội.",
      image: "https://tuyengiao.hungyen.dcs.vn/images/userfiles/images/tin-tuc/17(4).jpg",
      relation: "Minh chứng cho tinh thần nhân dân tham gia vào sự nghiệp cách mạng – biểu hiện sinh động của dân chủ cách mạng và Nhà nước của dân."
    },
    anh2: {
      title: "Phiếu Cấp Thị Cơ Động 1981",
      description: "Tư liệu về phiếu cấp thị cơ động năm 1981 – minh chứng cho thời kỳ bao cấp trong nền kinh tế xã hội chủ nghĩa ở Việt Nam.",
      image: "https://baokhanhhoa.vn/file/e7837c02857c8ca30185a8c39b582c03/102023/ghep_20231020181937.jpg",
      relation: "Thể hiện chính sách quản lý kinh tế của Nhà nước XHCN trong giai đoạn khó khăn, nhằm đảm bảo phân phối công bằng cho nhân dân."
    },
    CoffeeTable: {
      title: "Ẩm Thực Việt",
      description: "Những món ăn quen thuộc như bánh mì, thịt kho tàu, bánh trung thu… phản ánh đời sống văn hóa phong phú của nhân dân trong thời kỳ xây dựng xã hội chủ nghĩa.",
      image: "https://static.tuoitre.vn/tto/i/s626/2017/06/11/7e6c8e28.jpg",
      relation: "Ẩm thực dân gian phản ánh đời sống vật chất – tinh thần của nhân dân, cho thấy mục tiêu dân chủ XHCN là nâng cao đời sống nhân dân."
    }
  };
  
  

export default function MuseumObjectDialog({ isOpen, onClose, objectName }: MuseumObjectDialogProps) {
  const info = objectInfo[objectName] || {
    title: objectName,
    description: "Thông tin về đối tượng này đang được cập nhật."
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title={info.title}>
      <div className="space-y-4">
        {info.image && (
          <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img 
              src={info.image} 
              alt={info.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-gray-500">Hình ảnh: ${info.title}</span></div>`;
                }
              }}
            />
          </div>
        )}
        <p className="text-gray-700 leading-relaxed">
          {info.description}
        </p>
        
        {info.relation && (
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Liên hệ với bài học:</h4>
            <p className="text-blue-700 leading-relaxed text-sm">
              {info.relation}
            </p>
          </div>
        )}
      </div>
    </Dialog>
  );
}
