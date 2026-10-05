
import { GiStairsGoal } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaHandsHolding } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import type { ReactNode } from "react";


// ==================== SLIDER ====================

export type Slide = {
  id: number;
  img: string;
  caption: string;
};

export const slidesData: Slide[] = [
  {
    id: 1,
    img: "https://ecs.edu.vn/wp-content/uploads/2026/08/hero-banner.jpg",
    caption: "Caption Text 1",
  },
  {
    id: 2,
    img: "https://ecs.edu.vn/wp-content/uploads/2026/08/Anh-web-1.jpg",
    caption: "Caption Two 2",
  },
];



export type Category = {
  id: number;
  title: string;
  icon: ReactNode;
  image: string;
  description: string;
};

export const categories: Category[] = [
  {
    id: 1,
    title: "HƯỚNG NGHIỆP",
    icon: <GiStairsGoal />,
    image:
      "https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/he-sinh-thai/huong-nghiep.jpg?ver=1784972611",
    description:
      "ECSGES đồng hành cùng học sinh, sinh viên trên hành trình khám phá bản thân, định hình mục tiêu nghề nghiệp và lựa chọn lộ trình học tập phù hợp. Thông qua các chương trình tư vấn, trải nghiệm thực tế và cập nhật xu hướng thị trường lao động, chúng tôi giúp người học xây dựng nền tảng vững chắc để phát triển trong môi trường làm việc hiện đại và hội nhập.",
  },

  {
    id: 2,
    title: "TUYỂN SINH",
    icon: <RiCustomerService2Fill />,
    image:
      "https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/he-sinh-thai/tuyen-sinh.jpg?ver=1784972611",
    description:
      "Với mạng lưới đối tác giáo dục đa dạng và hệ thống tư vấn chuyên nghiệp, ECSGES triển khai các giải pháp tuyển sinh linh hoạt, đáp ứng nhu cầu học tập ở nhiều cấp độ và lĩnh vực khác nhau. Chúng tôi hướng tới việc mở rộng cơ hội tiếp cận giáo dục chất lượng cho mọi đối tượng người học.",
  },

  {
    id: 3,
    title: "ĐÀO TẠO",
    icon: <FaHandsHolding />,
    image:
      "https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/he-sinh-thai/dao-tao.jpg?ver=1784972611",
    description:
      "ECSGES phát triển các chương trình đào tạo đa dạng theo định hướng ứng dụng, kết hợp giữa kiến thức chuyên môn, kỹ năng thực tiễn và yêu cầu của thị trường lao động. Chúng tôi chú trọng xây dựng môi trường học tập hiện đại, linh hoạt và phù hợp với xu hướng phát triển của thời đại số.",
  },

  {
    id: 4,
    title: "VIỆC LÀM",
    icon: <MdOutlineWorkOutline />,
    image:
      "https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/he-sinh-thai/viec-lam.jpg?ver=1784972611",
    description:
      "Là cầu nối giữa người lao động và doanh nghiệp, ECSGES cung cấp các giải pháp việc làm trong nước và quốc tế, góp phần nâng cao chất lượng nguồn nhân lực và thúc đẩy phát triển nghề nghiệp bền vững. Chúng tôi đồng hành cùng người lao động từ quá trình định hướng, đào tạo đến tìm kiếm cơ hội việc làm phù hợp.",
  },

  {
    id: 5,
    title: "TRUYỀN THÔNG",
    icon: <TbSpeakerphone />,
    image:
      "https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/he-sinh-thai/truyen-thong.png?ver=1784972611",
    description:
      "ECSGES cung cấp các giải pháp truyền thông toàn diện cho lĩnh vực giáo dục, góp phần nâng cao hình ảnh thương hiệu, tăng cường kết nối với người học và mở rộng sức ảnh hưởng tới cộng đồng. Chúng tôi kết hợp giữa truyền thông hiện đại và tổ chức sự kiện để tạo nên những chiến dịch hiệu quả và bền vững.",
  },
];