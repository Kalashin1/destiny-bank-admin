/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import SCREENS from "../../../../navigation/constants";
import { useRef, useState, type FormEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase-settings";
import { createUser, getUserById } from "../../../helper";

const LoginForm = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setHasError(false);
    const {
      email: { value: email },
      password: { value: password },
    } = formRef.current!;
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      if (user.uid) {
        console.log("user", user);
        localStorage.setItem("user_id", user.uid);
        
        const existingUser = await getUserById(user.uid);

        if (!existingUser) {
          await createUser(user.uid, { email: user.email! });
        }
        navigate(SCREENS.DASHBOARD);
      }
    } catch (error: any) {
      if (error.message.includes("invalid-credential")) setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="card mt-5 rounded-lg p-5 lg:p-7"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <label className="block">
        <span>Username:</span>
        <span className="relative mt-1.5 flex">
          <input
            className={`form-input peer w-full rounded-lg border bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:hover:border-navy-400 dark:focus:border-accent ${
              hasError
                ? "border-red-500"
                : "border-slate-300  dark:border-navy-450"
            }`}
            placeholder="Enter Email"
            type="email"
            name="email"
          />
          <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
        </span>
        {hasError && <small className="text-red-500 ml-1">Invalid email</small>}
      </label>
      <label className="mt-4 block">
        <span>Password:</span>
        <span className="relative mt-1.5 flex">
          <input
            className={`form-input peer w-full rounded-lg border  bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 focus:z-10 ${
              hasError
                ? "border border-red-500"
                : "border-slate-300 dark:border-navy-450"
            }`}
            placeholder="Enter Password"
            type="password"
            name="password"
          />
          <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </span>
        </span>
        {hasError && (
          <small className="text-red-500 ml-1">Invalid password</small>
        )}
      </label>

      <button className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
        {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Sign In"}
      </button>
    </form>
  );
};

export default LoginForm;
