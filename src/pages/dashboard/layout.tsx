import { type FC, type ReactNode } from "react";
import AppWrapper from "./components/app-wrapper";
import Sidebar from "./components/sidebar/";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="relative">
      <Sidebar />
      <AppWrapper />
      <main className="absolute top-16 lg:left-24 xl:left-10 sm:w-10/12 xl:w-full pb-8">
        <div className="mt-4 grid grid-cols-12 gap-4 px-(--margin-x) transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
