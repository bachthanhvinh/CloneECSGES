import React from "react";
import { fieldData } from "../../../apis/data";

const FieldOfActivity: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
        {fieldData.map((item, index) => {
          return (
            <>
              <article
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8 md:gap-12 lg:gap-16`}
              >
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-wide text-gray-900 uppercase">
                    {item.title}
                  </h3>

                  <p className="text-base md:text-lg font-semibold text-gray-800">
                    {item.desc}
                  </p>

                  <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                    {item.descSub}
                  </p>

                  <div className="pt-2">
                    <button className="bg-[#f26522] text-white font-medium text-sm px-6 py-2.5 rounded-full shadow-sm hover:bg-[#d85415] transition-colors">
                      Xem thêm
                    </button>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="overflow-hidden rounded-sm shadow-sm aspect-4/3 w-full">
                    <img
                      src={item.image}
                      alt="HƯỚNG NGHIỆP"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </article>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default FieldOfActivity;
