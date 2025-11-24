import { Link } from "react-router-dom";
import AppSVG from "../svgs/app";
import ElementSVG from "../svgs/elements";
import FormSVG from "../svgs/form";
import HomeSVG from "../svgs/home";
import PagesSVG from "../svgs/pages";
import BottomLinks from "./bottom-links";
import SidebarPanel from "./sidebar-panel";
import { useContext } from "react";
import { LayoutContext } from "../../../layout-context";

const Sidebar = () => {
  const sidebarSVGS = [
    <HomeSVG />,
    <AppSVG />,
    <PagesSVG />,
    <FormSVG />,
    <ElementSVG />,
  ];

  const {
    showSidePanel
  } = useContext(LayoutContext)

  return (
    <div className="print:hidden">
      {/* <!-- Main Sidebar --> */}
      <div className="main-sidebar">
        <div className="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800">
          {/* <!-- Application Logo --> */}
          <div className="flex pt-4">
            <a href="/">
              <img
                className="h-11 w-11 transition-transform duration-500 ease-in-out hover:rotate-360"
                src="/images/app-logo.svg"
                alt="logo"
              />
            </a>
          </div>

          {/* Main section Links */}
          <div className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6">
            {/* <!-- Dashobards --> */}
            {sidebarSVGS.map((svg, index) => (
              <Link
                to=""
                key={index}
                className="tooltip-main-sidebar flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                {svg}
              </Link>
            ))}
          </div>

          {/* Bottom Links */}
          <BottomLinks />
        </div>
      </div>

      {/* Sidebar Panel */}
      {showSidePanel && (<SidebarPanel />)}
    </div>
  );
};

export default Sidebar;
