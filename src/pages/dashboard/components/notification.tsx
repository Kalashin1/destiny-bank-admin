import type { FC } from "react";

const NotificationDropdown: FC<{
  hideDropdown: (...args: unknown[]) => void;
}> = ({ hideDropdown }) => {
  return (
    <div className="absolute z-100 right-10 top-15">
      <div className="notification-tab-wrapper popper-box mx-4 mt-1 flex max-h-[calc(100vh-6rem)] w-[calc(100vw-2rem)] flex-col rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-800 dark:bg-navy-700 dark:shadow-soft-dark sm:m-0 sm:w-80">
        <div className="rounded-t-lg bg-slate-100 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
          <div className="flex items-center justify-between px-4 pt-2">
            <div className="flex items-center space-x-2 py-2">
              <h3 className="font-medium text-slate-700 dark:text-navy-100">
                Notifications
              </h3>
              <div className="badge h-5 rounded-full bg-primary/10 px-1.5 text-primary dark:bg-accent-light/15 dark:text-accent-light">
                26
              </div>
            </div>

            <button onClick={hideDropdown}>
              <i className="fas fa-circle-xmark" />
            </button>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden">
          <div className="is-scrollbar-hidden space-y-4 overflow-y-auto px-4 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 dark:bg-secondary-light/15">
                <i className="fa fa-user-edit text-secondary dark:text-secondary-light"></i>
              </div>
              <div>
                <p className="font-medium text-slate-600 dark:text-navy-100">
                  User Photo Changed
                </p>
                <div className="mt-1 line-clamp-1 text-xs text-slate-400 dark:text-navy-300">
                  John Doe changed his avatar photo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;
