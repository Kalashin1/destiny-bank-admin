import LoginForm from "./components/login-form";

const Login = () => {
  return (
    <main className="grid w-full grow grid-cols-1 place-items-center pt-10 sm:pt-0">
      <div className="w-full max-w-104 p-4 sm:px-5">
        <div className="text-center">
          <img
            className="mx-auto h-16 w-16"
            src="images/app-logo.svg"
            alt="logo"
          />
          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
              Welcome Back
            </h2>
            <p className="text-slate-400 dark:text-navy-300">
              Please sign in to continue
            </p>
          </div>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default Login;
