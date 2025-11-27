import { useRef, type FC, type FormEvent } from "react";

const PinForm: FC<{closeModal: (...args: unknown[]) => void}> = ({
  closeModal
}) => {

  const formRef = useRef<HTMLFormElement|null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const {pin: {value: pin}} = formRef.current!
    console.log("pin", pin)
    if (parseInt(pin) === 1234) {
      alert("Transfer in progress")
      closeModal()
    }
    else alert("incorrect pin")
  }


  return (
    <form ref={formRef} className="w-full">
      <h2 className="text-base">Enter Pin</h2>
      <div className="mt-2 space-y-4">
        <label className="flex flex-col items-start">
          <span className="text-xs+">Your Pin</span>
          <input
            className="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
            placeholder="Enter your pin"
            type="text"
            name="pin"
          />
        </label>
      </div>
      <button
        onClick={handleSubmit}
        className="btn mt-5 h-10 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      >
        Confirm
      </button>
    </form>
  );
};

export default PinForm;
