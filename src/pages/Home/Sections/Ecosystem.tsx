import { useState } from "react";

import { categories } from "../../../apis/data";

const Ecosystem = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCategory = categories[activeIndex];

  return (
    <section className="w-full bg-[#f5f5f5] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-4xl font-normal leading-tight text-black md:text-5xl">
          HỆ SINH THÁI
        </h2>

        <h3 className="mt-1 text-4xl font-medium uppercase leading-tight text-[#f15a29] md:text-5xl">
          KẾT NỐI ĐA LĨNH VỰC
        </h3>

        <p className="mx-auto mt-8 max-w-4xl text-base italic leading-8 text-gray-700 md:text-lg">
          Mỗi lĩnh vực hoạt động của ECSGES là một mắt xích quan trọng, cùng
          đồng hành với người học trên hành trình học tập, rèn luyện và lập
          nghiệp.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-5">
          {categories.map((category, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={category.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative flex h-28.75 flex-col items-center justify-center border-r border-gray-200 transition ${
                  isActive
                    ? "bg-[#f15a29] text-white"
                    : "bg-white text-gray-400 hover:text-[#f15a29]"
                }`}
              >
                <span
                  className={`mb-3 text-3xl ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                >
                  {category.icon}
                </span>

                <span className="text-sm font-semibold md:text-base">
                  {category.title}
                </span>

                {isActive && (
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-[50%]
                      -translate-x-1/2
                      border-l-10
                      border-r-10
                      border-t-10
                      border-l-transparent
                      border-r-transparent
                      border-t-[#f15a29]
                    "
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-6">
        <div className="grid overflow-hidden bg-white md:grid-cols-2">
          <div className="h-87.5 md:h-107.5">
            <img
              src={activeCategory.image}
              alt={activeCategory.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center p-8 md:p-12 lg:p-14">
            <div>
              <h4 className="text-2xl font-normal text-[#f15a29] md:text-3xl">
                {activeCategory.title}
              </h4>

              <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
                {activeCategory.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
