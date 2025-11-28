import { Link } from "react-router-dom";
import UserSVG from "./svgs/user";
import SCREENS from "../../../navigation/constants";

const ProfileButton = () => {
  return (
    <Link
      data-toggle="drawer"
      to={SCREENS.PROFILE}
      data-target="#right-sidebar"
      className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
    >
      <UserSVG />
    </Link>
  );
}

export default ProfileButton;