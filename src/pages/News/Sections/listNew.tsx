import { useEffect, useState } from "react";
import { fetchGetArticles, fetchListCategories } from "../../../apis";
import { Link, NavLink } from "react-router";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  thumbnail_url: string | null;
  category_id: string;
  author_id: string;
  is_published: boolean;
  published_at: Date | null;
  created_at: Date;
  updated_at: Date;
}

const ListNew = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [categoryData, articleData] = await Promise.all([
          fetchListCategories(),
          fetchGetArticles(),
        ]);

        setCategories(categoryData);
        setArticles(articleData);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const getCategoryName = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Tin tức";
  };

  const formatDate = (dateString: Date | null) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  if (isLoading) {
    return <div className="text-center py-10">Đang tải dữ liệu...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="flex flex-wrap justify-center gap-8 mb-12 border-b pb-4">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.slug}`}
            className="text-gray-500 hover:text-orange-500 text-lg transition-colors"
          >
            {category.name}
          </a>
        ))}
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article
            key={article.id}
            className="flex flex-col h-full group cursor-pointer"
          >
            <div className="overflow-hidden mb-4">
              <img
                src={
                  article.thumbnail_url ||
                  "https://placehold.co/600x400?text=No+Image"
                }
                alt={article.title}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <span className="text-gray-500 text-sm uppercase mb-2 font-medium tracking-wide">
              {getCategoryName(article.category_id)}
            </span>

            <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
              {article.title}
            </h3>

            <p className="text-gray-500 text-sm mb-6 line-clamp-3 grow">
              {article.description}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <span className="text-gray-400 text-sm">
                {formatDate(article.published_at || article.created_at)}
              </span>
              <Link
                to={`/${article.slug}`}
                className="bg-[#f05123] text-white px-5 py-1.5 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors block"
              >
                Xem thêm
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* <div className="flex items-center justify-center mt-16 relative">
        <div className="absolute w-full h-px bg-gray-200"></div>
        <button className="relative bg-white px-6 text-[#f05123] font-semibold uppercase tracking-wider border-b-2 border-[#f05123] pb-1 hover:text-orange-700 transition-colors">
          Xem thêm
        </button>
      </div> */}
    </div>
  );
};

export default ListNew;
