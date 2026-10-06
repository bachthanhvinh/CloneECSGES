import { NavLink } from "react-router";
import { appRoutes } from "../../../routes/routes.config";

export default function NavMenu() {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center space-x-6 text-lg font-medium text-gray-700">
        {appRoutes
          .filter((r) => r.labelKey)
          .map((r) => (
            <li key={r.path} className="group relative cursor-pointer">
              {/* Menu cha */}
              <NavLink
                to={r.path}
                className={({ isActive }) =>
                  `transition-colors hover:text-[#E95327] ${
                    isActive ? "text-[#E95327]" : ""
                  }`
                }
              >
                {r.labelKey!}
              </NavLink>

              {/* Dropdown */}
              {r.children && (
                <ul
                  className="
                    invisible absolute left-0 top-full z-50
                    mt-4 min-w-58.75
                    translate-y-2
                    rounded-lg
                    bg-white
                    py-2
                    opacity-0
                    shadow-lg
                    ring-1 ring-black/5
                    transition-all duration-200

                    group-hover:visible
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  {r.children.map((c) => (
                    <li key={c.path}>
                      <NavLink
                        to={c.path}
                        className={({ isActive }) =>
                          `
                          block px-4 py-3
                          text-base font-medium
                          transition-colors
                          hover:bg-gray-100
                          hover:text-[#E95327]
                          ${isActive ? "text-[#E95327]" : "text-gray-800"}
                          `
                        }
                      >
                        {c.labelKey!}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
}
