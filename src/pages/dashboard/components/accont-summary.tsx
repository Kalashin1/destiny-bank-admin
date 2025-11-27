import { useEffect, useState } from "react";
import { getBalance } from "../../helper";
import type { Balance } from "../../../types";
import { useCurrencyFormatter } from "../../../useFormatter";

const AccountSummary = () => {
  const [balances, setBalance] = useState<Balance|null>(null)
  useEffect(() => {
    const set_up = async () => {
      const data = await getBalance();
    
      if (data) {
        setBalance(data)
      }
    }

    set_up()
  }, [])
  const formatter = useCurrencyFormatter()
  return (
    <>
      <div className="card p-4 sm:p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-xl shadow-primary/50 dark:bg-accent dark:shadow-accent/50">
          <i className="fa fa-dollar-sign text-xl text-white"></i>
        </div>
        <p className="mt-16">Balance</p>
        <p className="mt-2 font-medium text-slate-700 dark:text-navy-100">
          {(<span className="text-2xl">{balances && formatter.format(balances?.balance)}</span>)}
          <span className="text-base">k</span>
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
          {balances && (<span className="text-2xl">{formatter.format(balances.expenses)}</span>)}
          <span className="text-base">k</span>
        </p>
        
      </div>
      <div className="card p-4 sm:p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-info shadow-xl shadow-info/50">
          <i className="fa fa-coins text-xl text-white"></i>
        </div>
        <p className="mt-16">Income</p>
        <p className="mt-2 font-medium text-slate-700 dark:text-navy-100">
          {balances && (<span className="text-2xl">{formatter.format(balances.income)}</span>)}
          <span className="text-base">k</span>
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
          {balances && (<span className="text-2xl">{formatter.format(balances.savings)}</span>)}
          <span className="text-base">k</span>
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