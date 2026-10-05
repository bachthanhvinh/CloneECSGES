export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="shrink-0">
          <a href="/">
            <img
              className="h-12 w-auto object-contain"
              src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/logo-ecsges.svg?ver=1783562053"
              alt="ECS Logo"
            />
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6 text-sm font-medium text-gray-700">
            <li className="hover:text-blue-700 transition-colors cursor-pointer">
              Về ECS
            </li>
            <li className="hover:text-blue-700 transition-colors cursor-pointer">
              Lĩnh vực hoạt động
            </li>
            <li className="hover:text-blue-700 transition-colors cursor-pointer">
              Đối tác
            </li>
            <li className="hover:text-blue-700 transition-colors cursor-pointer">
              Phát triển bền vững
            </li>
            <li className="hover:text-blue-700 transition-colors cursor-pointer">
              Tin tức
            </li>
            <li className="hover:text-blue-700 transition-colors cursor-pointer">
              Tuyển dụng
            </li>
            <li className="cursor-pointer">research</li>
            <li className="font-semibold cursor-pointer">
              <span className="text-blue-700">VI</span> /{" "}
              <span className="text-gray-400">EN</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
