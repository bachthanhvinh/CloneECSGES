import { NavLink } from "react-router";
import { appRoutes, type AppRoute } from "../../../routes/routes.config";

interface SubItem {
  to: string;
  labelKey: string;
}

const getSubItems = (r: AppRoute): SubItem[] => [
  ...(r.children ?? []).map((c) => ({ to: c.path, labelKey: c.Name! })),
  ...(r.anchors ?? []).map((a) => ({
    to: `${r.path}#${a.hash}`,
    labelKey: a.labelKey,
  })),
];

export default function NavMenu() {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center space-x-6 text-[16px] font-medium text-gray-700">
        {appRoutes
          .filter((r) => r.Name)
          .map((r) => {
            const subs = getSubItems(r);
            return (
              <li key={r.path} className="group relative cursor-pointer">
                <NavLink
                  to={r.path}
                  className={({ isActive }) =>
                    `transition-colors hover:text-[#E95327] ${
                      isActive ? "text-[#E95327]" : ""
                    }`
                  }
                >
                  {r.Name}
                </NavLink>

                {subs.length > 0 && (
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
                    {subs.map((s) => (
                      <li key={s.to}>
                        <NavLink
                          to={s.to}
                          className={() =>
                            `
                            block px-4 py-3
                            text-base font-medium
                            transition-colors
                            hover:bg-gray-100
                            hover:text-[#E95327]
                           
                            `
                          }
                        >
                          {s.labelKey}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
