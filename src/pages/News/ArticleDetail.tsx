import { useEffect, useState } from "react";
import type { Article, Category } from "./Sections/listNew";
import { fetchGetArticles, fetchListCategories } from "../../apis";
import { useParams, Link } from "react-router"; // Bổ sung import Link

const ArticleDetail = () => {
  const { slug } = useParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (slug) {
          setIsLoading(true);
          const [resultCat, resultArt] = await Promise.all([
            fetchListCategories(),
            fetchGetArticles(),
          ]);
          setArticles(resultArt);
          setCategories(resultCat);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  // LOGIC CỦA BẠN: Rất tốt
  const findSlugArt = articles.find((item) => item.slug === slug);
  const findTitleCat = categories.find(
    (item) => item.id === findSlugArt?.category_id,
  );

  const sidebarArticles = articles
    .filter((item) => item.slug !== slug)
    .slice(0, 4);

  if (isLoading) return <div className="text-center py-10">Đang tải...</div>;
  if (!findSlugArt)
    return <div className="text-center py-10">Không tìm thấy bài viết!</div>;

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="bg-gray-100 py-3 px-4 mb-8 rounded-md">
        <ul className="flex flex-wrap gap-2 text-sm text-gray-600 items-center">
          <li>
            <Link to="/" className="hover:text-[#f05123] transition-colors">
              Trang chủ
            </Link>
          </li>
          <li className="text-gray-400">›</li>
          <li>
            <Link
              to="/tin-tuc"
              className="hover:text-[#f05123] transition-colors"
            >
              Tin tức
            </Link>
          </li>
          <li className="text-gray-400">›</li>
          <li>
            <Link
              to={`/tin-tuc#${findTitleCat?.slug}`}
              className="hover:text-[#f05123] transition-colors"
            >
              {findTitleCat?.name || "Tin tức"}
            </Link>
          </li>
          <li className="text-gray-400">›</li>
          <li className="text-gray-900 font-medium line-clamp-1">
            {findSlugArt.title}
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 leading-snug">
            {findSlugArt.title}
          </h1>
          <p className="text-gray-500 mb-6 pb-4 border-b">
            Ngày đăng:{" "}
            {new Date(findSlugArt.created_at).toLocaleDateString("vi-VN")}
          </p>

          <div
            className="prose prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: findSlugArt.content }}
          />
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-50 py-3 mb-6">
            <h2 className="border-l-4 border-[#f05123] pl-3 text-gray-800 font-bold uppercase tracking-wide">
              Tin tức - Thông báo
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {sidebarArticles.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <Link to={`/${item.slug}`}>
                  <div className="overflow-hidden mb-3 rounded-md">
                    <img
                      src={item.thumbnail_url || "https://placehold.co/400x250"}
                      alt={item.title}
                      className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>

                <span className="text-gray-400 text-xs uppercase mb-1 block font-medium">
                  {categories.find((cat) => cat.id === item.category_id)
                    ?.name || "Tin tức"}
                </span>

                <Link to={`/${item.slug}`}>
                  <h3 className="text-base font-semibold text-gray-800 mb-1 group-hover:text-[#f05123] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </Link>

                <span className="text-gray-400 text-xs">
                  {new Date(item.created_at).toLocaleDateString("vi-VN")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
