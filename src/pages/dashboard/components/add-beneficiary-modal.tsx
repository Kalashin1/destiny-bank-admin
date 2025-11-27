import { useRef, useState, type FC, type FormEvent } from "react";
import { AddBeneficiary } from "../../helper";

const AddBeneficiaryForm: FC<{ closeModal: (...args: unknown[]) => void }> = ({
  closeModal,
}) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const {
        fullName: { value: name },
        accountNumber: { value: accountNumber },
        bank: { value: bank },
      } = formRef.current!;
      const result = await AddBeneficiary({ name, accountNumber, bank });
      if (result) {
        alert("Beneficiary added successfully");
        closeModal()
      }
    } catch (error) {
      alert("Error adding beneficiary")
      console.log(error)
    } finally{
      setIsLoading(false)
    }
  };
  return (
    <form className="w-full space-y-2.5" ref={formRef} onSubmit={handleSubmit}>
      <h2 className="text-base">Add Beneficiary</h2>
      <label className="flex flex-col items-start">
        <span className="text-xs+ text-left">Name</span>
        <input
          className="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
          placeholder="Enter full name"
          name="fullName"
          type="text"
        />
      </label>
      <label className="flex flex-col items-start">
        <span className="text-xs+">Account Number</span>
        <input
          className="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
          placeholder="Enter account number"
          type="text"
          name="accountNumber"
        />
      </label>
      <label className="flex flex-col items-start">
        <span className="text-xs+">Bank</span>
        <input
          className="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
          placeholder="Enter bank"
          name="bank"
          type="text"
        />
      </label>
      <button className="btn mt-5 h-10 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
        {isLoading ? (<i className="fas fa-spinner fa-spin" />) : "Add Beneficiary"}
      </button>
    </form>
  );
};

export default AddBeneficiaryForm;
