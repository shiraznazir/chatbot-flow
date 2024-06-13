import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { adminLoginAPI } from "../../apis";
import ScrollToTop from "../../components/common/ScrollToTop";
// import { useDispatch } from "react-redux";

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const userInput = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const validateMobileNumber = (mobile: string) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };

  const validatePassword = (password: string) => {
    return password.length >= 5;
  };

  const validateForm = () => {
    if (!userInput.current?.value) {
      toast.error("Please enter a mobile number.");
      return false;
    }

    if (!validateMobileNumber(userInput.current?.value || "")) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return false;
    }

    if (!passwordRef.current?.value) {
      toast.error("Please enter a password.");
      return false;
    }

    if (!validatePassword(passwordRef.current?.value || "")) {
      toast.error("Password must be at least 5 characters long.");
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    if (validateForm()) {
      try {
        const loginData: any = {
          phone: userInput.current?.value,
          password: passwordRef.current?.value,
        };
        const response = await adminLoginAPI(loginData);
        if (response.success) {
          toast.success(response.message);
          navigate("/dashboard");
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("An error occurred during login.");
      }
    }
  };

  return (
    <div className="bg-purple-200 min-h-screen flex justify-center items-center">
      <ScrollToTop />
      <div className="w-full max-w-md p-4 bg-purple-100 rounded-lg shadow-lg">
        <h1 className="my-4 text-center text-2xl font-bold">Welcome Admin</h1>
        <h1 className="my-4 text-center">Login to dashboard</h1>
        <div className="m-4 flex flex-col gap-2">
          <label htmlFor="mobile">Mobile No</label>
          <input
            id="mobile"
            ref={userInput}
            className="bg-white p-2 border-b-2 border-purple-200 focus:border-purple-500 outline-0"
            type="text"
            placeholder="Enter mobile number"
          />
        </div>
        <div className="relative m-4 flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            ref={passwordRef}
            className="bg-white p-2 border-b-2 border-purple-200 focus:border-purple-500 outline-0"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
          />
          <button
            className="absolute top-[3.2rem] right-3 transform -translate-y-1/2"
            onClick={() => setShowPassword((prevVal) => !prevVal)}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="my-6 mx-4">
          <button
            onClick={handleLogin}
            className="p-2 text-white bg-purple-300 w-full text-center hover:bg-purple-400"
          >
            Login
          </button>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default AdminLogin;
