import { useEffect, useMemo, useState } from "react";
import type { Article, Category } from "./Sections/listNew";
import { fetchGetArticles, fetchListCategories } from "../../apis";
import { useParams, Link } from "react-router";
import DOMPurify from "dompurify";

const dateFormatter = new Intl.DateTimeFormat("vi-VN");

const ArticleDetail = () => {
  const { slug } = useParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [resultCat, resultArt] = await Promise.all([
          fetchListCategories(),
          fetchGetArticles(),
        ]);

        if (!cancelled) {
          setArticles(resultArt);
          setCategories(resultCat);
        }
      } catch (err) {
        if (!cancelled) {
          console.error(err);
          setError("Không thể tải bài viết. Vui lòng thử lại sau.");
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    fetchData();
    return () => {
      cancelled = true;
    };
  }, []);

  const findSlugArt = useMemo(
    () => articles.find((item) => item.slug === slug),
    [articles, slug],
  );

  const findTitleCat = useMemo(
    () => categories.find((item) => item.id === findSlugArt?.category_id),
    [categories, findSlugArt?.category_id],
  );

  const categoryMap = useMemo(
    () => new Map(categories.map((c) => [c.id, c])),
    [categories],
  );

  const sidebarArticles = useMemo(
    () => articles.filter((item) => item.slug !== slug).slice(0, 4),
    [articles, slug],
  );

  const content = findSlugArt?.content ?? "";
  const clean = useMemo(() => DOMPurify.sanitize(content), [content]);

  if (isLoading) return <div className="text-center py-10">Đang tải...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;
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
              to={`/tin-tuc#${findTitleCat?.slug ?? ""}`}
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
            Ngày đăng: {dateFormatter.format(new Date(findSlugArt.created_at))}
          </p>

          <div
            className="text-gray-800 leading-7 text-base
              [&_p]:mb-4
              [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mt-8 [&_h1]:mb-3
              [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3
              [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
              [&_li]:my-1
              [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:italic
              [&_a]:text-indigo-600 [&_a]:underline
              [&_img]:block [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:my-6 [&_img]:mx-auto
              [&_img[data-align=left]]:mx-0 [&_img[data-align=right]]:ml-auto [&_img[data-align=right]]:mr-0"
            dangerouslySetInnerHTML={{ __html: clean }}
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
                      loading="lazy"
                      className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>

                <span className="text-gray-400 text-xs uppercase mb-1 block font-medium">
                  {categoryMap.get(item.category_id)?.name || "Tin tức"}
                </span>

                <Link to={`/${item.slug}`}>
                  <h3 className="text-base font-semibold text-gray-800 mb-1 group-hover:text-[#f05123] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </Link>

                <span className="text-gray-400 text-xs">
                  {dateFormatter.format(new Date(item.created_at))}
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
