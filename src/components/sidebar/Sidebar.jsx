import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../../contexts/ContextProvider";

import { links } from "../../data/dummy";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <Fragment>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Shoppie</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((link, key) => (
              <div key={key}>
                <p className="text-gray-400 m3 mt-4 uppercase">{link.title}</p>
                {link.links.map((subLink, key) => (
                  <NavLink
                    to={`${subLink.name}`}
                    key={key}
                    onClick={handleCloseSidebar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {subLink.icon}
                    <span className="capitalize">{subLink.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Sidebar;
