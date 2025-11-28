import type { FC } from "react";
import NotificationSVG from "./svgs/notification";

const NotificationButton: FC<{
  showNotification: (...args: unknown[]) => void;
}> = ({ showNotification }) => {
  return (
    <div id="notification-wrapper" className="flex">
      <button
        id="notification-ref"
        className="btn relative h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
        onClick={showNotification}
      >
        <NotificationSVG />

        <span className="absolute -right-px -top-px flex h-3 w-3 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-80"></span>
          <span className="inline-flex h-2 w-2 rounded-full bg-secondary"></span>
        </span>
      </button>
    </div>
  );
};

export default NotificationButton;
