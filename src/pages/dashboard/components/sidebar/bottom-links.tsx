import { Link } from "react-router-dom";
// import SettingSVG from "../svgs/settings";
import SCREENS from "../../../../navigation/constants";

const BottomLinks = () => {
  return (
    <div className="flex flex-col items-center space-y-3 py-3">
      {/* <!-- Settings --> */}
      {/* <a
        href="forms-layout-5.html"
        className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
      >
        <SettingSVG />  
      </a> */}

      {/* <!-- Profile --> */}
      <div id="profile-wrapper" className="flex">
        <Link to={SCREENS.PROFILE} id="profile-ref" className="avatar h-12 w-12">
          <img className="rounded-full" src="images/100x100.png" alt="avatar" />
          <span className="absolute right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-success dark:border-navy-700"></span>
        </Link>
       
      </div>
    </div>
  );
};

export default BottomLinks;
