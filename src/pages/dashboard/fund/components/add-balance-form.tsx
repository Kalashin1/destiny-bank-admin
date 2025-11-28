import { useRef, useState, type FormEvent } from "react";
import { updateBalance } from "../../../helper";
import { useNavigate } from "react-router-dom";
import SCREENS from "../../../../navigation/constants";

const AddBalanceForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const {
        balance: { value: balance },
        income: { value: income },
        savings: { value: savings },
        cashback: {value: cashback }
      } = formRef.current!;
      await updateBalance({
        balance: parseInt(balance),
        income: parseInt(income),
        savings: parseInt(savings),
        expenses: parseInt(cashback),
      });
      alert("Balance update successfully");
      navigate(SCREENS.DASHBOARD);
    } catch (error) {
      console.log(error);
      alert("error adding balance");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="card lg:w-6/12 p-4 mt-8 w-12/12 justify-self-center"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <h2 className="text-base text-center">Top Balance</h2>
      <div className="mt-2 space-y-4">
        <label className="block">
          <span className="text-xs+">Balance</span>
          <input
            className="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
            placeholder="Enter account balance"
            type="number"
            name="balance"
          />
        </label>
      </div>
      <div className="mt-2 space-y-4">
        <label className="block">
          <span className="text-xs+">Cashback</span>
          <input
            className="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
            placeholder="Enter account balance"
            type="number"
            name="cashback"
          />
        </label>
      </div>
      <div className="mt-2 space-y-4">
        <label className="block">
          <span className="text-xs+">Income</span>
          <input
            className="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
            placeholder="Enter Income"
            type="number"
            name="income"
          />
        </label>
      </div>
      <div className="mt-2 space-y-4">
        <label className="block">
          <span className="text-xs+">Savings</span>
          <input
            className="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
            placeholder="Enter savings"
            type="number"
            name="savings"
          />
        </label>
      </div>
      <div className="mt-2 space-y-4">
        <button className="btn mt-5 h-10 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
          {isLoading ? <i className="fas fa-spin fa-spinner" /> : "Confirm"}
        </button>
      </div>
    </form>
  );
};

export default AddBalanceForm;
