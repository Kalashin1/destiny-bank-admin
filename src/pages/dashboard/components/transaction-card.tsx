import { type FC } from "react";
import type { Transaction } from "../../../types";
import useDateFormatter from "../../useDateFormatter";
import { useCurrencyFormatter } from "../../../useFormatter";
import { Link } from "react-router-dom";
import SCREENS from "../../../navigation/constants";

const TransactionCard: FC<{transactions: Transaction[]}> = ({
  transactions
}) => {
 
  const dateFormatter = useDateFormatter();
  const currencyFormatter = useCurrencyFormatter();

 
  return (
    <div className="card col-span-2 px-4 pb-5 sm:px-5">
      <div className="my-3 flex h-8 items-center justify-between">
        <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
          Transactions
        </h2>
        <Link
          to={SCREENS.TRANSACTIONS}
          className="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
        >
          View All
        </Link>
      </div>
      <div className="space-y-4">
        {transactions &&
          transactions.map((transaction, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <img
                    className="rounded-full"
                    src="images/100x100.png"
                    alt="avatar"
                  />
                </div>
                <div>
                  <p className="text-slate-700 dark:text-navy-100">
                    {transaction.beneficiary.name}
                  </p>
                  <p className="line-clamp-1 text-xs text-slate-400 dark:text-navy-200">
                    {dateFormatter(transaction.timestamp)}
                  </p>
                </div>
              </div>
              <p className="font-medium text-success">
                {currencyFormatter.format(transaction.amount)}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TransactionCard;
