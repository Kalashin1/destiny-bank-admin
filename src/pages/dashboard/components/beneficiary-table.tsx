import type { FC } from "react";
import type { Beneficiary } from "../../../types";

const BeneficiaryTable: FC<{
  beneficiaries: Beneficiary[];
  showAddBeneficiaryModal: (...args: unknown[]) => void;
}> = ({ beneficiaries, showAddBeneficiaryModal }) => {
  return (
    <div className="card col-span-2 px-4 pb-5 sm:px-5">
      <div className="my-3 flex h-8 items-center justify-between">
        <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
          Beneficiaries
        </h2>
        <button
          onClick={showAddBeneficiaryModal}
          className="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
        >
          Add
        </button>
      </div>
      <div className="space-y-4">
        {beneficiaries.length > 0 &&
          beneficiaries.map((beneficiary, index) => (
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
                    {beneficiary.name}
                  </p>
                  <p className="line-clamp-1 text-xs text-slate-400 dark:text-navy-200">
                    {beneficiary.accountNumber}
                  </p>
                </div>
              </div>
              <p className="font-medium text-success">
                <button className="btn h-9 w-9 rounded-full bg-secondary p-0 font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90">
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
                    ></path>
                  </svg>
                </button>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BeneficiaryTable;
