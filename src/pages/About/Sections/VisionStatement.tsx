import { ABOUT_SECTIONS } from "../../../routes/paths";

const VisionStatement = () => {
  return (
    <section
      id={ABOUT_SECTIONS.VISION}
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto space-y-16 lg:space-y-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 uppercase">
              TẦM NHÌN
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Trở thành một tổ chức hàng đầu cung cấp sản phẩm, dịch vụ và giải
              pháp trong lĩnh vực hướng nghiệp, tuyển sinh, đào tạo, việc làm,
              truyền thông. ECSGES sẽ là doanh nghiệp đáng tin cậy và chuyên
              nghiệp trong cung cấp nguồn nhân lực chất lượng quốc tế.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/tam-nhin.png?ver=1785146807"
                alt="Tầm nhìn"
                className="w-full h-auto max-h-87.5 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div
          id={ABOUT_SECTIONS.MISSION}
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 scroll-mt-24"
        >
          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/su-menh.png?ver=1785146807"
                alt="Sứ mệnh"
                className="w-full h-auto max-h-87.5 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 uppercase">
              SỨ MỆNH
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Với sứ mệnh nâng tầm nguồn nhân lực Việt Nam, chúng tôi cam kết
              không ngừng nỗ lực xây dựng những sản phẩm, dịch vụ, giải pháp, có
              tính thực tiễn, sáng tạo, chuyên nghiệp và giá trị nhất đáp ứng
              nhu cầu phát triển nguồn nhân lực chất lượng cho xã hội.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionStatement;
