import { useState, type FC } from "react";
import type { Beneficiary } from "../../../../types";
import { SendMoneyContext } from "./send-money-context";
import SendMoneyForm from "./components/send-money-form";

const SendMoney: FC<{
  beneficiaries: Beneficiary[];
}> = ({ beneficiaries }) => {
  const [selectedBeneficiary, updateSelectedBeneficiary] =
    useState<Beneficiary | null>(null);

  return (
    <div className="card -mt-12 px-4 pb-5 sm:px-5">
      <div className="mt-12">
        <div className="flex items-center justify-between py-3">
          <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
            Beneficiaries
          </h2>
        </div>

        <div className="flex space-x-2">
          {beneficiaries &&
            beneficiaries.map((beneficiary, index) => (
              <div
                onClick={() => {
                  if (updateSelectedBeneficiary)
                    updateSelectedBeneficiary(beneficiary);
                }}
                className="avatar cursor-pointer h-8 w-8 hover:z-10"
                key={index}
              >
                <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                  {beneficiary.name.slice(0, 1)}
                  {beneficiary.name.split(" ")[1]?.slice(0, 1)}
                </div>
              </div>
            ))}
        </div>

        <SendMoneyContext.Provider
          value={{
            selectedBeneficiary,
            updateSelectedBeneficiary,
          }}
        >
          <SendMoneyForm></SendMoneyForm>
        </SendMoneyContext.Provider>
      </div>
    </div>
  );
};

export default SendMoney;
