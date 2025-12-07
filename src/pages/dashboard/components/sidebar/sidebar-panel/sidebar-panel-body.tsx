import { Link } from "react-router-dom";
import SCREENS from "../../../../../navigation/constants";
import { auth } from "../../../../../firebase-settings";

const SidebarPanelBody = () => {
  const currentUser = auth.currentUser;
  const links = [
    {
      text: "Dashboard",
      link: SCREENS.DASHBOARD,
    },
    {
      text: "Add Balance",
      link: SCREENS.ADD_BALANCE,
    },
    {
      text: "Transactions",
      link: SCREENS.TRANSACTIONS,
    },
    // {
    //   text: "Card",
    //   link: SCREENS.CARD,
    // },
    {
      text: "Profile",
      link: SCREENS.PROFILE,
    },
    {
      text: "Logout",
      link: SCREENS.LOGIN,
    },
  ];
  return (
    <div
      className="nav-wrapper h-[calc(100%-4.5rem)] overflow-x-hidden pb-6"
      data-simplebar
    >
      <ul className="flex flex-1 flex-col px-4 font-inter">
        {links.map((link, index) => {
          if (
            link.link === SCREENS.ADD_BALANCE &&
            !currentUser?.email?.includes("@admin")
          )
            return;
          else
            return (
              <li key={index}>
                <Link
                  to={link.link}
                  data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                  data-active-class="font-medium text-primary dark:text-accent-light"
                  className="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out"
                >
                  {link.text}
                </Link>
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default SidebarPanelBody;
