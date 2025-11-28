import { Link } from "react-router-dom";
import AppSVG from "../svgs/app";
import ElementSVG from "../svgs/elements";
import HomeSVG from "../svgs/home";
import PagesSVG from "../svgs/pages";
import SidebarPanel from "./sidebar-panel";
import { useContext } from "react";
import { LayoutContext } from "../../../layout-context";
import SCREENS from "../../../../navigation/constants";
import { Tooltip } from "react-tooltip";
import { auth } from "../../../../firebase-settings";

const Sidebar = () => {
  const currentUser = auth.currentUser
  const sidebarSVGS = [
    {
      link: SCREENS.DASHBOARD,
      svg: <HomeSVG />,
      tooltipContent: "Dashboard",
    },
    {
      link: SCREENS.ADD_BALANCE,
      svg: <AppSVG />,
      tooltipContent: "Add Balance",
    },
    {
      link: SCREENS.TRANSACTIONS,
      svg: <PagesSVG />,
      tooltipContent: "Transactions",
    },
    {
      link: SCREENS.LOGIN,
      svg: <ElementSVG />,
      tooltipContent: "Logout",
    },
  ];

  const { showSidePanel } = useContext(LayoutContext);

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
            {sidebarSVGS.map((link, index) => {
              if (link.link === SCREENS.ADD_BALANCE && !(currentUser?.email?.includes('@admin'))) {
                return;
              } else return (
                <>
                  <Link
                    to={link.link}
                    key={index}
                    data-tooltip-id={`${index}`}
                    data-tooltip-content={`${link.tooltipContent}`}
                    className="tooltip-main-sidebar flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                  >
                    {link.svg}
                  </Link>
                  <Tooltip id={`${index}`} />
                </>
              );
            })}
          </div>

          {/* Bottom Links */}
          {/* <BottomLinks /> */}
        </div>
      </div>

      {/* Sidebar Panel */}
      {showSidePanel && window.window.innerWidth < 500 && <SidebarPanel />}
    </div>
  );
};

export default Sidebar;
