const SendMoney = () => {
  return (
    <div className="card -mt-12 px-4 pb-5 sm:px-5">
      <div className="mt-12">
        <div className="flex items-center justify-between py-3">
          <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
            Send Money
          </h2>
          <div className="inline-flex">
            <button className="btn -mr-1 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </button>

           
          </div>
        </div>

        <div className="flex space-x-2">
          <div className="avatar h-8 w-8 hover:z-10">
            <img
              className="rounded-full ring ring-white dark:ring-navy-700"
              src="images/100x100.png"
              alt="avatar"
            />
          </div>

          <div className="avatar h-8 w-8 hover:z-10">
            <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
              jd
            </div>
          </div>

          <div className="avatar h-8 w-8 hover:z-10">
            <img
              className="rounded-full ring ring-white dark:ring-navy-700"
              src="images/100x100.png"
              alt="avatar"
            />
          </div>

          <div className="avatar h-8 w-8 hover:z-10">
            <img
              className="rounded-full ring ring-white dark:ring-navy-700"
              src="images/100x100.png"
              alt="avatar"
            />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-xs+">View All Contacts</p>

          <button className="btn -mr-1 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
        <div className="mt-2 space-y-4">
          <label className="block">
            <span className="text-xs+">Pay to</span>
            <input
              id="card-number"
              className="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="**** **** **** ****"
              type="text"
            />
          </label>
          <div>
            <span className="text-xs+">Amount</span>

            <div className="mt-1.5 flex h-9 -space-x-px">
              <select className="form-select rounded-l-lg border border-slate-300 bg-white px-3 py-2 pr-9 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
                <option>$</option>
                <option>£</option>
                <option>€</option>
              </select>
              <input
                className="form-input w-full rounded-r-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Price"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-between text-slate-400 dark:text-navy-300">
          <p className="text-xs+">Commission:</p>
          <p>3$</p>
        </div>
        <div className="mt-2 flex justify-between">
          <p>Total:</p>
          <p className="font-medium text-slate-700 dark:text-navy-100">3$</p>
        </div>

        <button className="btn mt-5 h-10 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
          Send Money
        </button>
      </div>
    </div>
  );
}

export default SendMoney;