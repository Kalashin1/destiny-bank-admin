import { useContext, type FC, type ReactNode } from "react";
import AppWrapper from "./components/app-wrapper";
import Sidebar from "./components/sidebar/";
import { LayoutContext } from "../layout-context";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { showSidePanel } = useContext(LayoutContext);
  return (
    <div className="relative">
      <Sidebar />
      <AppWrapper />
      {showSidePanel ? (
        <main
          className={`main-content absolute top-0 
          sm:left-64 w-full pb-8`}
        >
          <div className="mt-4 grid grid-cols-12 gap-4 px-(--margin-x) transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
            <div className="col-span-12 lg:col-span-8">{children}</div>
          </div>
        </main>
      ) : (
        <main className="absolute top-16 sm:left-10 w-full pb-8">
          <div className="mt-4 grid grid-cols-12 gap-4 px-(--margin-x) transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
            <div className="col-span-12 w-full lg:col-span-12 sm:px-8">{children}</div>
          </div>
        </main>
      )}
    </div>
  );
};

export default Layout;
