import { useEffect, useState } from "react";
import { getBalance,  unLockAccount } from "../../helper";
import LockSVG from "./svgs/lock";
import UnlockSVG from "./svgs/unlock";

const ProfileButton = () => {
  const lock = async () => {
    // await lockAccount();
    alert("Account locked successfully!");
    location.reload()
  };

  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const set_up = async () => {
      const data = await getBalance("")
      if (data) {
        setIsLocked(data.isLocked)
      } else setIsLocked(false)
    }

    set_up()
  }, [])

  const unlock = async () => {
    await unLockAccount()
    alert("Account unlocked successfully!")
    location.reload()
  }
  if (isLocked) return (
    <button
      onClick={unlock}
      data-toggle="drawer"
      data-target="#right-sidebar"
      className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
    >
      <UnlockSVG />
    </button>
  );
  return (
    <button
      onClick={lock}
      data-toggle="drawer"
      data-target="#right-sidebar"
      className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
    >
      <LockSVG />
    </button>
  );
};

export default ProfileButton;
