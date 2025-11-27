import DashboardCard from "../components/dashboard-card";

const CardDetailForm = () => {
  return (
    <div className="grid sm:relative md:-top-16 w-12/12 place-items-center">
      <div className="card mt-20 w-full max-w-xl p-4 sm:p-5">
        <DashboardCard />
        <div className="space-y-4 w-full">
          <label className="block">
            <span>Card number</span>
            <input
              className="form-input mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
              placeholder="**** **** **** ****"
              type="text"
              id="cardNumber"
            />
          </label>
          <label className="block">
            <span>Name on card</span>
            <input
              className="form-input mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
              placeholder="John Doe"
              type="text"
            />
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span>Expiration date</span>
              <input
                className="form-input mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                placeholder="mm/yy"
                type="text"
                id="expireDate"
              />
            </label>
            <label className="block">
              <span>CVV</span>
              <input
                className="form-input mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                placeholder="***"
                type="password"
                id="cvv"
                maxLength={3}
              />
            </label>
          </div>
          <div className="flex justify-center space-x-2 pt-4">
            <button className="btn min-w-[7rem] border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
              Cancel
            </button>
            <button className="btn min-w-[7rem] bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetailForm;