const TransactionCard = () => {
  return (
    <div className="card col-span-2 px-4 pb-5 sm:px-5">
      <div className="my-3 flex h-8 items-center justify-between">
        <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
          Transactions
        </h2>
        <a
          href="#"
          className="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
        >
          View All
        </a>
      </div>
      <div className="space-y-4">
        <div className="flex cursor-pointer items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <img className="rounded-full" src="images/100x100.png" alt="avatar" />
            </div>
            <div>
              <p className="text-slate-700 dark:text-navy-100">Konnor Guzman</p>
              <p className="line-clamp-1 text-xs text-slate-400 dark:text-navy-200">
                Dec 21, 2021 - 08:05
              </p>
            </div>
          </div>
          <p className="font-medium text-success">$660.22</p>
        </div>
        <div className="flex cursor-pointer items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <img className="rounded-full" src="images/100x100.png" alt="avatar" />
            </div>
            <div>
              <p className="text-slate-700 dark:text-navy-100">Henry Curtis</p>
              <p className="line-clamp-1 text-xs text-slate-400 dark:text-navy-200">
                Dec 19, 2021 - 11:55
              </p>
            </div>
          </div>
          <p className="font-medium text-success">$33.63</p>
        </div>
        <div className="flex cursor-pointer items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <img className="rounded-full" src="images/100x100.png" alt="avatar" />
            </div>
            <div>
              <p className="text-slate-700 dark:text-navy-100">Derrick Simmons</p>
              <p className="line-clamp-1 text-xs text-slate-400 dark:text-navy-200">
                Dec 16, 2021 - 14:45
              </p>
            </div>
          </div>
          <p className="font-medium text-success">$674.63</p>
        </div>
        <div className="flex cursor-pointer items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <img className="rounded-full" src="images/100x100.png" alt="avatar" />
            </div>
            <div>
              <p className="text-slate-700 dark:text-navy-100">Kartina West</p>
              <p className="line-clamp-1 text-xs text-slate-400 dark:text-navy-200">
                Dec 13, 2021 - 11:30
              </p>
            </div>
          </div>
          <p className="font-medium text-error">$547.63</p>
        </div>
        <div className="flex cursor-pointer items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <img className="rounded-full" src="images/100x100.png" alt="avatar" />
            </div>
            <div>
              <p className="text-slate-700 dark:text-navy-100">Samantha Shelton</p>
              <p className="line-clamp-1 text-xs text-slate-400 dark:text-navy-200">
                Dec 10, 2021 - 09:41
              </p>
            </div>
          </div>
          <p className="font-medium text-success">$736.24</p>
        </div>
      </div>
    </div>
  );
}

export default TransactionCard;