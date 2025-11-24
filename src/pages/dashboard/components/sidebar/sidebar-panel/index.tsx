import SidebarPanelBody from "./sidebar-panel-body";
import SidebarPanelHeader from "./sidebar-panel-header";

const SidebarPanel = () => {
  return (
    <div className="sm:w-72 hidden sm:block w-60 h-screen">
      <div className="flex h-full grow flex-col bg-white lg:pl-(--main-sidebar-width) dark:bg-navy-750">
        {/* <!-- Sidebar Panel Header --> */}
        <SidebarPanelHeader />
        {/* Sidebar Panel Body */}
        <SidebarPanelBody />
      </div>
    </div>
  );
};

export default SidebarPanel;
