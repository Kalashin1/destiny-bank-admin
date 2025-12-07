import { useEffect, useState, type FC } from "react";
import Select from "react-select";
import { getBalance, getUsers, lockAccount, unLockAccount } from "../../helper";
import type { User } from "../../../types";

const LockAccountDropdown: FC<{
  hideDropdown: (...args: unknown[]) => void;
}> = ({ hideDropdown }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUsers] = useState("");

  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const set_up = async () => {
      const balance = await getBalance(selectedUser);
      if (balance?.isLocked) setLocked(true);
      else setLocked(false);
    };

    set_up();
  }, [selectedUser]);

  const lock = async () => {
    await lockAccount(selectedUser);
    alert("Account locked successfully!");
    location.reload();
  };

  const unlock = async () => {
    await unLockAccount(selectedUser);
    alert("Account unlocked successfully!");
    location.reload();
  };

  useEffect(() => {
    const set_up = async () => {
      const _users = await getUsers();
      if (_users) setUsers(_users);
    };

    set_up();
  }, []);
  return (
    <div className="absolute z-100 right-0 top-15">
      <div className="notification-tab-wrapper popper-box mx-4 mt-1 flex max-h-[calc(100vh-6rem)] w-[calc(100vw-2rem)] flex-col rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-800 dark:bg-navy-700 dark:shadow-soft-dark sm:m-0 sm:w-80">
        <div className="rounded-t-lg bg-slate-100 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
          <div className="flex items-center justify-between px-4 pt-2">
            <div className="flex items-center space-x-2 py-2">
              <h3 className="font-medium text-slate-700 dark:text-navy-100">
                Users
              </h3>
            </div>

            <button onClick={hideDropdown}>
              <i className="fas fa-circle-xmark" />
            </button>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden">
          <div className="is-scrollbar-hidden space-y-4 overflow-y-auto px-4 py-4">
            <div className="flex flex-col items-center space-x-3">
              <Select
                className="w-full"
                options={users.map((user) => ({
                  label: user.fullName,
                  value: user.id,
                }))}
                onChange={(v) => setSelectedUsers(v!.value)}
              />
              <button
                onClick={() => {
                  if (locked) unlock();
                  else lock();
                }}
                className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >
                {locked ? "Unlock" : "Lock"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockAccountDropdown;
