const BeneficiaryTable = () => {
  return (
    <div className="is-scrollbar-hidden overflow-x-auto card col-span-2 p-4 sm:p-5">
      <table className="is-zebra w-full text-left">
        <thead>
          <tr>
            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
              Name
            </th>
            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
              Acct Number
            </th>
            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
              &nbsp;
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              Cy Ganderton
            </td>

            <td className="whitespace-nowrap px-4 py-3 sm:px-5">123456789</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <button className="btn h-9 w-9 p-0 font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25">
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
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BeneficiaryTable