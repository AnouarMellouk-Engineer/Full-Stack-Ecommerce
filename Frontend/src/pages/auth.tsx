import { Link } from "react-router-dom";
import { useState } from "react";

const Auth = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="bg-white w-full h-screen flex justify-center items-center">
      <form className="bg-neutral-background w-full max-w-md rounded-xl shadow-lg p-6 flex flex-col gap-5">
        <h2 className="text-2xl font-semibold text-center text-neutral-900 mb-2">
          {login ? "Log in " : "Create an Account"}
        </h2>
        {login || (
          <>
            {/* First Name */}
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-neutral-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="inputfield"
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-neutral-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="inputfield"
                placeholder="Enter your last name"
              />
            </div>
          </>
        )}

        {/* Email */}
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="email"
            className="text-sm font-medium text-neutral-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="inputfield"
            placeholder="you@example.com"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="password"
            className="text-sm font-medium text-neutral-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="inputfield"
            placeholder="Enter a secure password"
          />
        </div>

        {/* Button */}
        <button className="bg-primary text-white w-full py-2.5 rounded-md font-medium hover:bg-primary/90 transition cursor-pointer">
          {login ? "Connect" : "Register"}
        </button>

        {/* Footer */}
        <p className="text-sm text-neutral-600 text-center">
          {login ? "Don't Have account?" : " Already have an account?"}
          <span
            className="text-primary font-medium hover:underline cursor-pointer"
            onClick={() => setLogin(!login)}
          >
            {login ? " Register" : " Log in"}
          </span>
        </p>

        {/* Go Back Home */}
        <p className="text-sm text-neutral-500 text-center">
          <Link
            to="/"
            className="inline-block mt-2 text-neutral-600 hover:text-primary transition"
          >
            ← Go back home
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Auth;
