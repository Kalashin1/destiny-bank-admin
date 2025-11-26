const AccountSummary = () => {
  return (
    <>
      <div className="card p-4 sm:p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-xl shadow-primary/50 dark:bg-accent dark:shadow-accent/50">
          <i className="fa fa-dollar-sign text-xl text-white"></i>
        </div>
        <p className="mt-16">Income</p>
        <p className="mt-2 font-medium text-slate-700 dark:text-navy-100">
          <span className="text-2xl">$35</span>
          <span className="text-base">.3k</span>
        </p>
        <p className="mt-1 flex items-center text-xs text-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-success"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 11l5-5m0 0l5 5m-5-5v12"
            />
          </svg>
          <span>4.3%</span>
        </p>
      </div>
      <div className="card p-4 sm:p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warning shadow-xl shadow-warning/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
        <p className="mt-16">Expense</p>
        <p className="mt-2 font-medium text-slate-700 dark:text-navy-100">
          <span className="text-2xl">$7</span>
          <span className="text-base">.14k</span>
        </p>
        <p className="mt-1 flex items-center text-xs text-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-error"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 13l-5 5m0 0l-5-5m5 5V6"
            />
          </svg>
          <span>1.9%</span>
        </p>
      </div>
      <div className="card p-4 sm:p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-info shadow-xl shadow-info/50">
          <i className="fa fa-coins text-xl text-white"></i>
        </div>
        <p className="mt-16">Upcoming</p>
        <p className="mt-2 font-medium text-slate-700 dark:text-navy-100">
          <span className="text-2xl">$7</span>
          <span className="text-base">.42k</span>
        </p>
        <p className="mt-1 flex items-center text-xs text-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-success"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 11l5-5m0 0l5 5m-5-5v12"
            />
          </svg>
          <span>7.11%</span>
        </p>
      </div>
      <div className="card p-4 sm:p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary shadow-xl shadow-secondary/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </div>
        <p className="mt-16">Saving</p>
        <p className="mt-2 font-medium text-slate-700 dark:text-navy-100">
          <span className="text-2xl">$2</span>
          <span className="text-base">.44k</span>
        </p>
        <p className="mt-1 flex items-center text-xs text-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-success"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 11l5-5m0 0l5 5m-5-5v12"
            />
          </svg>
          <span>3.47%</span>
        </p>
      </div>
    </>
  );
}

export default AccountSummary;