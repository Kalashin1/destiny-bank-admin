const SendMoney = () => {
  return (
    <div className="card -mt-12 px-4 pb-5 sm:px-5">
      <div className="mt-12">
        <div className="flex items-center justify-between py-3">
          <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
            Beneficiaries
          </h2>
         
        </div>

        <div className="flex space-x-2">
          

          <div className="avatar h-8 w-8 hover:z-10">
            <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
              jd
            </div>
          </div>

          
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
          <label className="block">
            <span className="text-xs+">Bank</span>
            <input
              id="card-number"
              className="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Bank Name"
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