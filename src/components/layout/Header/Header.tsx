import { NavLink } from "react-router";
import NavMenu from "./NavMenu";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="shrink-0">
          <NavLink to="/">
            <img
              className="h-12 w-auto object-contain"
              src="https://ecs.edu.vn/wp-content/themes/ecsges/assets/img/logo-ecsges.svg?ver=1783562053"
              alt="ECS Logo"
            />
          </NavLink>
        </div>

        <NavMenu />
      </div>
    </header>
  );
};
