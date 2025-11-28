import { useState, type FC } from "react";
import FilterTransactionTable from "../../components/filter-transaction-table";
import { TRANSACTION_STATUS, type Transaction } from "../../../../types";
import useDateFormatter from "../../../useDateFormatter";
import { useCurrencyFormatter } from "../../../../useFormatter";

const TransactionTable: FC<{
  transactions: Transaction[];
  handlePageClick: (pageNum: number) => Promise<void>;
}> = ({ transactions, handlePageClick }) => {
  const [showFilterComponent, setShowFilterComponent] = useState(false);

  const dateFormatter = useDateFormatter();
  const currencyFormatter = useCurrencyFormatter();

  const paginationNumbers = [1, 2, 3, 4, 5];

  return (
    <div id="table-filter" className="mt-8">
      <div className="ac">
        <div className="flex items-center justify-between">
          <h2 className="line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100">
            Transactions
          </h2>
          <div className="flex">
            <div className="table-search-wrapper flex items-center">
              <label className="block">
                <input
                  className="table-search-input form-input w-0 bg-transparent px-1 text-right transition-all duration-100 placeholder:text-slate-500 dark:placeholder:text-navy-200"
                  placeholder="Search here..."
                  type="text"
                />
              </label>
              <button className="table-search-toggle btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4.5 w-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <button
              onClick={() => setShowFilterComponent(!showFilterComponent)}
              className="ac-trigger btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4.5 w-4.5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M18 11.5H6M21 4H3m6 15h6"
                />
              </svg>
            </button>
          </div>
        </div>
        {showFilterComponent && <FilterTransactionTable />}
        <div className="card mt-3">
          <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
            <table className="is-hoverable w-full text-left">
              <thead>
                <tr>
                  <th className="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                    Amount
                  </th>
                  <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                    Beneficiary Name
                  </th>
                  <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                    Beneficiary Account
                  </th>

                  <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                    Progress
                  </th>
                  <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                    Status
                  </th>
                  <th className="whitespace-nowrap rounded-tr-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                    Created
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions &&
                  transactions.map((transaction, index) => (
                    <tr
                      key={index}
                      className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                    >
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {currencyFormatter.format(transaction.amount)}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5">
                        {transaction.beneficiary.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {transaction.beneficiary.accountNumber}
                      </td>

                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        <div
                          data-tooltip="42% Completed"
                          data-theme="primary"
                          className="progress h-2 bg-slate-150 dark:bg-navy-500"
                        >
                          <div className="w-5/12 rounded-full bg-primary dark:bg-accent"></div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        <div className="badge space-x-2.5 px-0 text-primary dark:text-accent-light">
                          <div className="h-2 w-2 rounded-full bg-current"></div>
                          <span>
                            {transaction.status ?? TRANSACTION_STATUS[1]}
                          </span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {dateFormatter(transaction.timestamp, "short")}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5">
            <div className="text-xs+">1 - 10 of 10 entries</div>
            <ol className="pagination space-x-1.5">
              <li>
                <button
                  onClick={() => {}}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </li>
              {paginationNumbers.map((num, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      handlePageClick(num)
                    }}
                    className="flex h-8 min-w-8 items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                  >
                    {num}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {}}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
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
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
