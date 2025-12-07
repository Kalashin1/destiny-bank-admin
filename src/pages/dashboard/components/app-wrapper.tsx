import { useContext, useState } from "react";
import NotificationButton from "./notification-button";
import ProfileButton from "./profile-button";
import { LayoutContext } from "../../layout-context";
// import NotificationDropdown from "./notification";
import { auth } from "../../../firebase-settings";
import LockAccountDropdown from "./lock-account-dropdown";

const AppWrapper = () => {
  const {setShowSidePanel, showSidePanel} = useContext(LayoutContext)  
  // const [showNotification, updateShowNotification] = useState(false)
  const [showUsersDropdown, updateShowUsersDropdown] = useState(false);

  const currentUser = auth.currentUser;

  const toggleSidePanel = () => {
    if (setShowSidePanel)
      setShowSidePanel(!showSidePanel)
  }

  return (
    <nav className="header print:hidden">
      {/* <!-- App Header  --> */}
      <div className="header-container relative flex w-full bg-white dark:bg-navy-700 print:hidden">
        {/* <!-- Header Items --> */}
        <div className="flex w-full items-center justify-between relative">
          {/* <!-- Left: Sidebar Toggle Button --> */}
          <div className="h-7 w-7">
            <button
              onClick={toggleSidePanel}
              className="sidebar-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          {/* <!-- Right: Header buttons --> */}
          <div className="-mr-1.5 flex items-center space-x-2">
            <NotificationButton
              showNotification={() => {}}
            />
            {currentUser && currentUser.email?.includes("@admin") && (
              <ProfileButton showDropdown={() => updateShowUsersDropdown(true)} />
            )}
          </div>

          {/* {showNotification && (
            <NotificationDropdown
              hideDropdown={() => updateShowNotification(false)}
            />
          )} */}
          {showUsersDropdown && (
            <LockAccountDropdown
              hideDropdown={() => updateShowUsersDropdown(false)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default AppWrapper;
