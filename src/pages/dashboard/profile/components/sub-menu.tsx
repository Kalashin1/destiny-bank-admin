const SubMenu = () => {
  return (
    <div className="card p-4 sm:p-5">
      <div className="flex items-center space-x-4">
        <div className="avatar h-14 w-14">
          <img
            className="rounded-full"
            src="/images/100x100.png"
            alt="avatar"
          />
        </div>
        <div>
          <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
            Travis Fuller
          </h3>
          <p className="text-xs+">Author</p>
        </div>
      </div>
      <ul className="mt-6 space-y-1.5 font-inter font-medium">
        <li>
          <a
            className="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Account</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SubMenu;
