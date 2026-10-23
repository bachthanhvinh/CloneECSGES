import { Link } from "react-router";
import { newsData } from "../../../apis/data";

const TheLatestNews = () => {
  return (
    <>
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-center text-5xl font-medium  uppercase text-black">
            Tin tức
          </h1>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {newsData.map((item) => (
              <article key={item.id}>
                <Link to={`/news/${item.id}`} className="block overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-58.75 w-full object-cover rounded-md transform "
                  />
                </Link>

                <div className="mt-5 text-sm uppercase text-gray-400">
                  {item.category}
                </div>

                <Link
                  to={`/news/${item.id}`}
                  className="mt-3 block h-20  text-[21px] leading-[1.3] text-black"
                >
                  {item.title}
                </Link>

                <p className="mt-4 h-14 line-clamp-2 text-base leading-7 text-gray-400">
                  {item.description}
                </p>

                <p className="mt-7 text-sm text-gray-400">{item.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TheLatestNews;
