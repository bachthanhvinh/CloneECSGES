const AccompanyorDevelop = () => {
  return (
    <section className="relative min-h-215 w-full overflow-hidden bg-[#F26522] text-white">
      <div className="absolute left-0 bottom-[28%]   z-50 bg-[#481802] h-77.5 w-full opacity-10">
        {" "}
      </div>
      <div className="relative z-10 mx-auto flex min-h-215 max-w-360 items-center px-8">
        <div className="w-[55%]">
          <h2 className="text-[55px] font-medium uppercase leading-[1.15]">
            Đồng hành cùng những
            <br />
            hành trình phát triển
          </h2>

          <p className="text-justify mt-8 max-w-153 text-[23px] leading-[1.7]">
            Mỗi hành trình phát triển đều bắt đầu từ một lựa chọn đúng. ECSGES
            đồng hành cùng người học từ nhận diện năng lực và định hướng tương
            lai, đến lựa chọn môi trường học tập, phát triển kiến thức và kỹ
            năng, kết nối cơ hội việc làm và từng bước hội nhập với thị trường
            lao động.
          </p>
        </div>
      </div>

      <div className="absolute right-0 top-0 h-[36%] w-[19.5%]">
        <img
          src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/journey-1.png?ver=1784695339"
          alt="Hành trình 1"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute right-[19.5%] top-[36%] h-[36%] w-[16%]">
        <img
          src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/journey-2.png?ver=1783562053"
          alt="Hành trình 2"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 right-[35.5%] h-[28%] w-[17%]">
        <img
          src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/journey-4.png?ver=1783562053"
          alt="Hành trình 4"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 right-0 h-[28%] w-[19.5%]">
        <img
          src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/journey-3.png?ver=1784695339"
          alt="Hành trình 3"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default AccompanyorDevelop;
