import { ABOUT_SECTIONS } from "../../../routes/paths";

const ImpressiveNumbers = () => {
  // Mảng chứa danh sách các con số ấn tượng
  const statsData = [
    {
      id: 1,
      icon: "https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/last-section/1.svg?ver=1783562053",
      number: "20+",
      label: "Năm thành lập và phát triển",
    },
    {
      id: 2,
      icon: "https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/last-section/2.svg?ver=1783562053",
      number: "5",
      label: "Lĩnh vực hoạt động",
    },
    {
      id: 3,
      icon: "https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/last-section/3.svg?ver=1783562053",
      number: "20+",
      label: "Văn phòng toàn quốc",
    },
    {
      id: 4,
      icon: "https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/last-section/4.svg?ver=1783562053",
      number: "235.000+",
      label: "HSSV được tư vấn",
    },
    {
      id: 5,
      icon: "https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/last-section/5.svg?ver=1783562053",
      number: "20.000+",
      label: "Sinh viên được đào tạo",
    },
    {
      id: 6,
      icon: "https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/last-section/6.svg?ver=1783562053",
      number: "50+",
      label: "Trường học được tư vấn",
    },
    {
      id: 7,
      icon: "https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/last-section/7.svg?ver=1783562053",
      number: "2.000+",
      label: "Đối tác",
    },
    {
      id: 8,
      icon: "https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/last-section/8.svg?ver=1783562053",
      number: "200+",
      label: "Tiến sĩ, Thạc sĩ, CBNV",
    },
  ];

  return (
    <section
      id={ABOUT_SECTIONS.NUMBERS}
      className="w-full bg-white py-16 px-4 md:px-8 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] uppercase tracking-wide">
            NHỮNG CON SỐ ẤN TƯỢNG
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group"
            >
              <div className="h-14 w-14 mb-3 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23f26522'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M13 10V3L4 14h7v7l9-11h-7z'/></svg>";
                  }}
                />
              </div>

              <span className="text-3xl md:text-4xl font-extrabold text-[#f26522] mb-2">
                {item.number}
              </span>

              <p className="text-gray-700 text-sm md:text-base font-normal max-w-45 leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpressiveNumbers;
