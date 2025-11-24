const SidebarPanelBody = () => {
  return (
    <div
      className="nav-wrapper h-[calc(100%-4.5rem)] overflow-x-hidden pb-6"
      data-simplebar
    >
      <ul className="flex flex-1 flex-col px-4 font-inter">
        <li>
          <a
            href="/"
            data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
            data-active-class="font-medium text-primary dark:text-accent-light"
            className="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out"
          >
            CRM Analytics
          </a>
        </li>
        <li>
          <a
            href="dashboards-orders.html"
            data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
            data-active-class="font-medium text-primary dark:text-accent-light"
            className="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out"
          >
            Orders
          </a>
        </li>
      </ul>
      <div className="mx-4 my-3 h-px bg-slate-200 dark:bg-navy-500"></div>
      <ul className="flex flex-1 flex-col px-4 font-inter">
        <li className="ac nav-parent [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50 [&.is-active_svg]:rotate-90">
          <button className="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-600 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50">
            <span>Cryptocurrency</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-slate-400 transition-transform ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <ul className="ac-panel">
            <li>
              <a
                href="dashboards-crypto-1.html"
                className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                data-active-class="font-medium text-primary dark:text-accent-light"
              >
                <div className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full border border-current opacity-40"></div>
                  <span>Cryptocurrency v1</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="dashboards-crypto-2.html"
                className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                data-active-class="font-medium text-primary dark:text-accent-light"
              >
                <div className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full border border-current opacity-40"></div>
                  <span>Cryptocurrency v2</span>
                </div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SidebarPanelBody;
