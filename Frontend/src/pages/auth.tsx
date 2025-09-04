import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
const Auth = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({ status: false, message: "" });
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();

    // Validation before fetch
    if (
      !data.email ||
      !data.password ||
      (!login && (!data.firstName || !data.lastName))
    ) {
      setResult({ status: false, message: "Please fill all required fields" });
      return;
    }

    const url = login
      ? "http://localhost:3000/auth/logIn"
      : "http://localhost:3000/auth/register";

    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const datalist = await response.json();

      if (!response.ok) {
        throw new Error(datalist.message || "Something went wrong");
      }

      if (!login) {
        setResult({ status: true, message: datalist.message });
        setData({ firstName: "", lastName: "", email: "", password: "" }); // reset form
      } else {
        setUser({
          firstName: datalist.findUser.firstName,
          lastName: datalist.findUser.lastName,
          email: datalist.findUser.email,
          role: datalist.findUser.role,
        });
        alert("login OK ");
        navigate("/");
      }
    } catch (error) {
      setResult({ status: false, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-white w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handelSubmit}
        className="bg-neutral-background w-full max-w-md rounded-xl shadow-lg p-6 flex flex-col gap-5"
      >
        <h2 className="text-2xl font-semibold text-center text-neutral-900 mb-2">
          {login ? "Log in " : "Create an Account"}
        </h2>

        {!login && (
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
                value={data.firstName}
                onChange={handelChange}
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
                value={data.lastName}
                onChange={handelChange}
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
            value={data.email}
            onChange={handelChange}
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
            value={data.password}
            onChange={handelChange}
          />
        </div>

        {/* Message */}
        {result.message && (
          <p
            className={`text-sm text-center p-2 rounded-md ${
              result.status
                ? "bg-secondary text-white"
                : "bg-alert-danger text-white"
            }`}
          >
            {result.message}
          </p>
        )}

        {/* Button with loading icon */}
        <button
          disabled={loading}
          className={`bg-primary text-white w-full py-2.5 rounded-md font-medium flex justify-center items-center gap-2 transition  ${
            loading
              ? "opacity-70 cursor-not-allowed "
              : "hover:bg-primary/90 cursor-pointer"
          }`}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          {loading ? "Processing..." : login ? "Connect" : "Register"}
        </button>

        {/* Footer */}
        <p className="text-sm text-neutral-600 text-center">
          {login ? "Don't Have account?" : "Already have an account?"}
          <span
            className="text-primary font-medium hover:underline cursor-pointer"
            onClick={() => {
              setLogin(!login);
              setResult({ status: false, message: "" });
            }}
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
