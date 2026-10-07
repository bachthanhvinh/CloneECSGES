import { ABOUT_SECTIONS } from "../../../routes/paths";

const JournaryDevolop = () => {
  return (
    <section
      id={ABOUT_SECTIONS.JOURNEY}
      className="relative w-full py-20 scroll-mt-24"
    >
      <div className="mx-auto mb-25 max-w-7xl text-center">
        <h1 className="text-5xl font-medium text-[#252525]">
          HÀNH TRÌNH PHÁT TRIỂN
        </h1>

        <p className="mx-auto mt-7 text-[19px] max-w-180 text-base/8 font-medium text-[#434242]">
          Từ những bước đi đầu tiên đến hệ sinh thái giáo dục đa lĩnh vực hôm
          nay, mỗi giai đoạn phát triển của ECSGES đều gắn liền với khát vọng
          nâng cao chất lượng giáo dục, mở rộng cơ hội học tập và phát triển
          nguồn nhân lực cho cộng đồng.
        </p>
      </div>

      <div className="relative mx-auto w-full  overflow-hidden">
        <img
          className="block w-full"
          src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/ve-ecs-journey-stairs.png?ver=1783562053"
          alt="Hành trình phát triển ECSGES"
        />

        <div
          className="
            absolute
            left-[10%]
            top-[25%]
            w-[28%]
            max-w-120
            text-justify
          "
        >
          <h2 className="text-[clamp(28px,3vw,50px)] font-bold leading-none text-[#f15a29]">
            2018 - 2025
          </h2>

          <h3 className="mt-3 text-[clamp(18px,1.7vw,28px)] font-medium leading-tight text-[#232222]">
            PHÁT TRIỂN NỘI LỰC VÀ KIỆN TOÀN TỔ CHỨC
          </h3>

          <p className="mt-3 text-[clamp(14px,1.2vw,20px)] leading-8 text-[#747373]">
            Năm 2019, đổi tên thành Công ty cổ phần hỗ trợ và phát triển chọn
            nghề khởi nghiệp ECS Global. Mở rộng các pháp nhân. Ứng dụng công
            nghệ và kiện toàn tổ chức.
          </p>
        </div>

        <div
          className="
            absolute
            right-[6%]
            top-[13%]
            w-[27%]
            max-w-120
            text-justify
          "
        >
          <h2 className="text-[clamp(28px,3vw,50px)] font-bold leading-none text-[#f15a29] text-end">
            2026
          </h2>

          <h3 className="mt-3 text-[clamp(18px,1.7vw,28px)] font-medium leading-tight text-[#232222] text-end">
            PHÁT TRIỂN BỀN VỮNG
          </h3>

          <p className="mt-3 text-[clamp(14px,1.2vw,20px)] leading-8 text-[#747373]">
            Năm 2026, đổi tên thành Công ty cổ phần hỗ trợ và phát triển ECSGES,
            phát triển hệ thống chuỗi văn phòng.
          </p>
        </div>

        <div
          className="
            absolute
            right-[6%]
            top-[50%]
            w-[27%]
            max-w-120
            text-justify
          "
        >
          <h2 className="text-[clamp(28px,3vw,50px)] font-bold leading-none text-[#f15a29] text-end">
            2008 - 2018
          </h2>

          <h3 className="mt-3 text-[clamp(18px,1.7vw,28px)] font-medium leading-tight text-[#232222] text-end">
            MỞ RỘNG SỨ MỆNH GIÁO DỤC
          </h3>

          <p className="mt-3 text-[clamp(14px,1.2vw,20px)] leading-8 text-[#747373]">
            Năm 2008, đổi tên thành công ty cổ phần truyền thông BTS Việt Nam.
            Chuyển đổi sang các lĩnh vực hướng nghiệp, tuyển sinh và đào tạo.
          </p>
        </div>

        <div
          className="
            absolute
            left-[10%]
            top-[63%]
            w-[28%]
            max-w-120
            text-justify
          "
        >
          <h2 className="text-[clamp(28px,3vw,50px)] font-bold leading-none text-[#f15a29]">
            2004 - 2007
          </h2>

          <h3 className="mt-3 text-[clamp(18px,1.7vw,28px)] font-medium leading-tight text-[#232222]">
            ĐẶT NỀN MÓNG
          </h3>

          <p className="mt-3 text-[clamp(14px,1.2vw,20px)] leading-8 text-[#747373]">
            Tiền thân là công ty cổ phần HSC hoạt động trong lĩnh vực công nghệ
            thông tin và thiết bị máy tính. Triển khai các giải pháp quản lý đào
            tạo cho trung tâm tin học. Xây dựng nền tảng quản trị và định hướng
            phát triển trong lĩnh vực giáo dục.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JournaryDevolop;
