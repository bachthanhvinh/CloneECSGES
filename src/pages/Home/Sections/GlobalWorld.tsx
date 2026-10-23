const GlobalWorld = () => {
  return (
    <>
      <section className="w-full pt-36 pb-24">
        <div className="max-w-7xl mx-auto lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="">
            <div className=" gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
              <span className="text-black f">ECSGES</span>
              <span className="w-10 h-0.5 bg-[#E95327] inline-block"></span>
            </div>
            <h2 className="text-8xl lg:text-[50px] font-medium leading-tight py-6  ">
              <span className="text-black flex">VƯƠN RA THẾ GIỚI</span>
              <span className="text-orange-500 max-w-99 block ">
                VỚI HỆ SINH THÁI GIÁO DỤC KẾT NỐI
              </span>
            </h2>
            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed ">
              <p className="text-justify">
                Trong một thế giới không ngừng kết nối, giáo dục không thể phát
                triển trong những giới hạn đơn lẻ. ECSGES mở rộng mạng lưới hợp
                tác với nhà trường, doanh nghiệp, tổ chức giáo dục và các đối
                tác trong nước, quốc tế; kết nối tri thức, nguồn lực và cơ hội
                để đưa giáo dục Việt Nam đến gần hơn với những chuẩn mực toàn
                cầu.
              </p>
              <p className="text-justify">
                Từ nền tảng giáo dục và nguồn nhân lực Việt Nam, ECSGES hướng
                tới xây dựng một hệ sinh thái giáo dục có khả năng kết nối rộng
                hơn, hợp tác sâu hơn và tạo ra những giá trị có sức lan tỏa vượt
                qua biên giới
              </p>
              <button className="mt-7 rounded-full px-3 py-2 bg-orange-500 text-white ">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
          <div className="relative w-full max-w-125 mx-auto flex justify-center items-center">
            <span className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[75%] h-[70%] border rounded-full border-orange-500"></span>
            <span className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[95%] h-[85%] border rounded-full border-orange-200"></span>

            <img
              src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/earth.svg?ver=1783562053"
              alt="Earth Background"
              className="w-full h-auto object-contain z-10"
            />

            <img
              src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/map-pin-center.svg?ver=1783562053"
              alt="Map Pin"
              className="z-11 absolute top-[48%] left-[58%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 transition-transform hover:scale-125 duration-300"
            />
            <img
              src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/hero-mark.svg?ver=1783562053"
              alt=""
              className="z-11 absolute top-[47.5%] left-[58.1%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-4 md:h-4 transition-transform hover:scale-125 duration-300"
            />

            <img
              src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/map-pin.svg?ver=1783562053"
              alt="Map Pin Europe"
              className=" z-11 absolute top-[35%] left-[38%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 opacity-80"
            />

            <img
              src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/map-pin.svg?ver=1783562053"
              alt="Map Pin Australia"
              className=" z-11 absolute top-[68%] left-[72%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 opacity-80"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default GlobalWorld;
