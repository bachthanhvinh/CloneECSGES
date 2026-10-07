import { ABOUT_SECTIONS } from "../../../routes/paths";

const CoreValues = () => {
  return (
    <section
      id={ABOUT_SECTIONS.VALUES}
      className="relative w-full py-16 bg-[#f26522] my-10 text-white overflow-hidden selection:bg-none scroll-mt-22"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider pb-10">
          GIÁ TRỊ CỐT LÕI
        </h2>
      </div>

      <div className="relative mx-auto w-full max-w-[900px] h-[450px] flex justify-center">
        <div className="absolute bottom-0 w-full max-w-[700px] h-[350px] pointer-events-none">
          <img
            src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/list.svg?ver=1786445772"
            alt="Core Values Chart"
            className="w-full h-full object-contain"
          />

          <img
            className="absolute left-[0.5%] bottom-[3%] w-[29%]"
            src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/bg/bg-tam.svg?ver=1785394575"
            alt="Tâm"
          />

          <img
            className="absolute left-[8.5%] bottom-[10%] w-[12%]"
            src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/tam.svg?ver=1784274735"
            alt=""
          />
          <img
            className="absolute left-[11%] bottom-[32.3%] w-[30%]"
            src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/bg/bg-ben.svg?ver=1785394575"
            alt="Bền"
          />
          <img
            className="absolute left-[22%] bottom-[50.3%] w-[12%]"
            src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/ben.svg?ver=1784274735"
            alt=""
          />
          <img
            className="absolute left-[36%] bottom-[47%] w-[27.5%]"
            src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/bg/bg-hop.svg?ver=1785394575"
            alt="Hợp"
          />
          <img
            className="absolute left-[42%] bottom-[63%] w-[16%]"
            src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/hop.svg?ver=1784274735"
            alt=""
          />
          <img
            className="absolute right-[11%] bottom-[32%] w-[30%]"
            src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/bg/bg-tri.svg?ver=1785394575"
            alt="Trí"
          />
          <img
            className="absolute right-[22%] bottom-[47%] w-[13%]"
            src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/tri.svg?ver=1784274735"
            alt=""
          />
          <img
            className="absolute right-[0.5%] bottom-[3%] w-[29%]"
            src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/bg/bg-sang.svg?ver=1785394575"
            alt="Sáng"
          />
          <img
            className="absolute right-[7%] bottom-[11%] w-[12%]"
            src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/sang.svg?ver=1784274735"
            alt=""
          />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/arrow/arrow-tam.svg?ver=1785394575"
            alt=""
            className="absolute left-[3%] bottom-16.25 w-[10%] "
          />
          <img
            src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/arrow/arrow-ben.svg?ver=1785394575"
            alt=""
            className="absolute left-[18%] bottom-[58%] w-[11%]"
          />
          <img
            src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/arrow/arrow-hop.svg?ver=1785394575"
            alt=""
            className="absolute left-[46.5%] bottom-[340px] w-[8%]"
          />
          <img
            src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/arrow/arrow-tri.svg?ver=1785394575"
            alt=""
            className="absolute right-[18%] bottom-[250px] w-[12%]"
          />
          <img
            src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/ve-ecs/arrow/arrow-sang.svg?ver=1785394575"
            alt=""
            className="absolute right-[4%] bottom-[60px] w-[10%]"
          />
        </div>

        <div className="absolute -left-[20%] bottom-[130px] w-[200px] text-center">
          <h3 className="text-3xl font-extrabold mb-1">TÂM</h3>
          <p className="text-sm font-medium leading-tight">
            Tận tâm, tâm lực, tâm hợp
          </p>
        </div>

        <div className="absolute left-[0%] bottom-[350px] w-[200px] text-center">
          <h3 className="text-3xl font-extrabold mb-1">BỀN</h3>
          <p className="text-sm font-medium leading-tight">
            Bền vững, bền bỉ, bền chặt
          </p>
        </div>

        <div className="absolute -top-[30px] left-[50%] -translate-x-1/2 w-[220px] text-center">
          <h3 className="text-3xl font-extrabold mb-1">HỢP</h3>
          <p className="text-sm font-medium leading-tight">
            Hợp lực, hợp nhất, hợp tác
          </p>
        </div>

        <div className="absolute right-[0%] bottom-[350px] w-[200px] text-center">
          <h3 className="text-3xl font-extrabold mb-1">TRÍ</h3>
          <p className="text-sm font-medium leading-tight">
            Trí thức, trí tuệ, trí lực
          </p>
        </div>

        <div className="absolute right-[-18%] bottom-[120px] w-[200px] text-center">
          <h3 className="text-3xl font-extrabold mb-1">SÁNG</h3>
          <p className="text-sm font-medium leading-tight">
            Sáng tạo, sáng suốt, sáng rạng
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
