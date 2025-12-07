import { type FC } from "react";
import LockSVG from "./svgs/lock";

const ProfileButton: FC<{
  showDropdown: (...args: unknown[]) => void;
}> = ({showDropdown}) => {
  return (
    <button
      onClick={showDropdown}
      data-toggle="drawer"
      data-target="#right-sidebar"
      className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
    >
      <LockSVG />
    </button>
  );
};

export default ProfileButton;
