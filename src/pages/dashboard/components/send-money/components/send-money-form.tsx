import { useContext, useRef, useState, type FormEvent } from "react";
import { AddTransaction } from "../../../../helper";
import { SendMoneyContext } from "../send-money-context";
import Modal from "../../modal";
import PinForm from "./pin-modal";

const SendMoneyForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [showPinModal, updateShowPinModal] = useState(false);

  const { selectedBeneficiary } = useContext(SendMoneyContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const {
      accountNumber: { value: accountNumber },
      bank: { value: bank },
      amount: { value: amount },
    } = formRef.current!;
    try {
      await AddTransaction({
        amount: parseInt(amount),
        beneficiary: {
          name: selectedBeneficiary?.name ?? "",
          accountNumber,
          bank,
        },
      });
      updateShowPinModal(true);
    } catch (error) {
      alert("Error making transfer");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mt-2 space-y-4">
          <label className="block">
            <span className="text-xs+">Pay to</span>
            {selectedBeneficiary ? (
              <input
                className="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Enter bank account number"
                type="text"
                value={selectedBeneficiary.accountNumber}
                name="accountNumber"
              />
            ) : (
              <input
                className="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Enter bank account number"
                type="text"
                name="accountNumber"
              />
            )}
          </label>
          <label className="block">
            <span className="text-xs+">Bank</span>
            {selectedBeneficiary ? (
              <input
                id="card-number"
                className="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Enter bank name"
                type="text"
                value={selectedBeneficiary.bank}
                name="bank"
              />
            ) : (
              <input
                id="card-number"
                className="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Enter bank name"
                type="text"
                name="bank"
              />
            )}
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
                name="amount"
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
          {isLoading ? <i className="fas fa-spin fa-spinner" /> : "Send Money"}
        </button>
      </form>
      {showPinModal && (
        <Modal
          closeModal={() => {
            updateShowPinModal(false);
          }}
        >
          <PinForm closeModal={() => {
            updateShowPinModal(false)
            formRef.current!.reset()
          }} />
        </Modal>
      )}
    </>
  );
};

export default SendMoneyForm;
