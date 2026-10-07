import React from "react";
import type { CardItem } from "../../../apis/data";

interface PersonProps {
  title: string;
  items: CardItem[];
  bgColor?: string;
  titleColor?: string;
}

const Person: React.FC<PersonProps> = ({
  title,
  items,
  bgColor = "bg-[#f26522]",
  titleColor = "text-white",
}) => {
  return (
    <section className={`w-full py-16 px-4 md:px-8 ${bgColor}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold uppercase tracking-wide ${titleColor}`}
          >
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-sm shadow-md transition-all duration-500 min-h-105 flex flex-col justify-between p-8 border-t-4 border-[#f26522] ${
                item.isHighlight
                  ? "bg-[#f26522] text-white"
                  : "bg-white text-[#111111]"
              }`}
            >
              <div
                className={`absolute inset-0 bg-[#f26522] transition-transform duration-500 ease-in-out pointer-events-none -z-0 ${
                  item.isHighlight
                    ? "translate-y-0"
                    : "-translate-y-full group-hover:translate-y-0"
                }`}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-20 flex-shrink-0 flex items-center justify-center rounded-4xl">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className={`w-full h-full object-contain transition-all duration-300 ${
                        item.isHighlight
                          ? "brightness-0 invert"
                          : "group-hover:brightness-0 group-hover:invert"
                      }`}
                    />
                  </div>
                  <div
                    className={`flex-1 h-px transition-colors duration-500 ${
                      item.isHighlight
                        ? "bg-white/40"
                        : "bg-gray-300 group-hover:bg-white/40"
                    }`}
                  />
                </div>

                <h3
                  className={`text-2xl font-bold uppercase mb-6 transition-colors duration-500 ${
                    item.isHighlight
                      ? "text-white"
                      : "text-[#f26522] group-hover:text-white"
                  }`}
                >
                  {item.title}
                </h3>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    item.isHighlight ? "block" : "hidden group-hover:block"
                  }`}
                >
                  <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <button className="bg-white text-[#f26522] font-medium text-sm px-6 py-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors">
                    {item.buttonText || "Xem thêm"}
                  </button>
                </div>
              </div>

              <div
                className={`relative z-10 w-full h-55 mt-4 overflow-hidden rounded-sm transition-all duration-500 ${
                  item.isHighlight ? "hidden" : "block group-hover:hidden"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Person;
