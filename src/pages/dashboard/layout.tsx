import { useContext, type FC, type ReactNode } from "react";
import AppWrapper from "./components/app-wrapper";
import Sidebar from "./components/sidebar/";
import { LayoutContext } from "../layout-context";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const {
    showSidePanel
  } = useContext(LayoutContext);
  return (
    <div className="relative">
      {showSidePanel &&<Sidebar />}
      <AppWrapper />
      <main className="absolute top-16 w-full flex justify-center items-center">
        <div className="mt-4 grid grid-cols-12 gap-4 px-(--margin-x) transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 w-full lg:gap-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
