import { useEffect, useRef, useState, type FormEvent } from "react";
import Loader from "../../../components/loader";
import { auth } from "../../../../firebase-settings";
import { useNavigate } from "react-router-dom";
import SCREENS from "../../../../navigation/constants";
import { getUserById, updateUser } from "../../../helper";
import type { User } from "../../../../types";

const ProfileCard = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const currentUser = auth.currentUser;
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const get_user = async () => {
    if (!currentUser) navigate(SCREENS.LOGIN);
    else {
      const data = await getUserById(currentUser.uid);
      if (data) setUser(data);
      else navigate(SCREENS.LOGIN);
    }
  };

  useEffect(() => {
    const set_up = async () => {
      if (!currentUser) navigate(SCREENS.LOGIN);
      else {
        const data = await getUserById(currentUser.uid);
        if (data) setUser(data);
        else navigate(SCREENS.LOGIN);
      }
    };

    set_up();
  }, [currentUser, navigate]);

  useEffect(() => {}, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const {
        fullName: { value: fullName },
        phone: { value: phone },
        address: { value: address },
        province: { value: province },
      } = formRef.current!;
      if (!currentUser) navigate(SCREENS.LOGIN);
      else {
        await updateUser(currentUser.uid!, {
          fullName,
          phone,
          address,
          province,
        });
        alert("Profile updated successfully");
        await get_user();
      }
    } catch (error) {
      alert("Error updating account");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card relative">
      <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
        <h2 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
          Account Setting
        </h2>
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => navigate(SCREENS.DASHBOARD)}
            className="btn min-w-28 rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="btn min-w-28 rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Save
          </button>
        </div>
      </div>

      {/* <div className="my-7 h-px bg-slate-200 dark:bg-navy-500"></div> */}
      {isLoading ? (
        <div className="absolute top-1/2 left-1/2">
          <Loader />
        </div>
      ) : (
        <div className="p-4 sm:p-5">
          <div className="flex flex-col">
            <span className="text-base font-medium text-slate-600 dark:text-navy-100">
              Avatar
            </span>
            <div className="avatar mt-1.5 h-20 w-20">
              <img
                className="mask is-squircle"
                src="images/100x100.png"
                alt="avatar"
              />
            </div>
          </div>
          <form ref={formRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="grid col-span-2">
              <span>Display name </span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter name"
                  name="fullName"
                  defaultValue={user?.fullName}
                  type="text"
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i className="fa-regular fa-user text-base"></i>
                </span>
              </span>
            </label>

            <label className="block">
              <span>Email Address </span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter email address"
                  value={currentUser?.email ?? ""}
                  disabled
                  name="email"
                  type="text"
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i className="fa-regular fa-envelope text-base"></i>
                </span>
              </span>
            </label>
            <label className="block">
              <span>Phone Number</span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter phone number"
                  name="phone"
                  defaultValue={user?.phone}
                  type="text"
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i className="fa fa-phone"></i>
                </span>
              </span>
            </label>
            <label className="block">
              <span>Address</span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  name="address"
                  defaultValue={user?.address}
                  placeholder="Enter address"
                  type="text"
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i className="fa fa-location-pin"></i>
                </span>
              </span>
            </label>
            <label className="block">
              <span>Province</span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter province"
                  defaultValue={user?.province}
                  name="province"
                  type="text"
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i className="fa fa-map"></i>
                </span>
              </span>
            </label>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
