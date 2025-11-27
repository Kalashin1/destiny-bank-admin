import type { FC, ReactNode } from "react";

const Modal: FC<{
  children: ReactNode;
  closeModal: (...args: unknown[]) => void;
}> = ({ children, closeModal }) => {
  return (
    <div
      className="modal fixed inset-0 z-100 flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
      id="modal1"
      role="dialog"
      onClick={closeModal}
    >
      <div className="modal-overlay absolute inset-0 bg-slate-900/60"></div>
      <div onClick={(e) => e.stopPropagation()} className="modal-content scrollbar-sm relative flex max-w-lg flex-col items-center overflow-y-auto rounded-lg bg-white px-4 py-10 text-center dark:bg-navy-700 sm:px-5">
        {children}
      </div>
    </div>
  );
};

export default Modal;
