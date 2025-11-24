import { useContext } from "react";
import SidebarPanelBody from "./sidebar-panel-body";
import SidebarPanelHeader from "./sidebar-panel-header";
import { LayoutContext } from "../../../../layout-context";

const SidebarPanel = () => {
  const {
    showSidePanel
  } = useContext(LayoutContext)
  return (
    <div
      className={`sm:w-28 bg-white sm:relative sm:top-16 relative sm:left-20 sm:block w-60 h-screen ${
        showSidePanel ? "block z-100" : "hidden"
      }`}
    >
      <div className="flex w-full h-full grow flex-col">
        {/* <!-- Sidebar Panel Header --> */}
        <SidebarPanelHeader />
        {/* Sidebar Panel Body */}
        <SidebarPanelBody />
      </div>
    </div>
  );
};

export default SidebarPanel;
