import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/login2.jpg";
import Login from "../../components/Login/Login";
import ScrollToTop from "../../components/common/ScrollToTop";

const LoginPage: React.FC = () => {
  return (
    <div className="sm:pt-20">
      <ScrollToTop />
      <div className="w-full h-screen relative flex justify-center items-center">
        <div className="absolute w-full h-full flex bg-gray-200 blur-sm z-0">
          <div className="relative hidden md:block w-6/12 lg:w-8/12 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center clip-path-2"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </div>
        </div>
        <div className="absolute py-10 top-0 z-20 w-full h-screen flex justify-center items-center">
          <div className="w-10/12 lg:w-8/12 shadow-2xl flex flex-col md:flex-row bg-gray-100">
            <div className="w-full md:w-6/12 lg:w-7/12 relative hidden md:block overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center clip-path-1 flex flex-col items-start justify-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <h1 className="pl-5 text-white text-4xl font-normal">
                  Login / Signup
                </h1>
                <h1 className="text-white pl-5">
                  your account to make purchase <br /> more quickly
                </h1>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-5/12  bg-gray-100 flex flex-col justify-center items-center">
              <div className="m-4 flex flex-col gap-4">
                <h1 className="text-xl md:text-3xl text-center font-bold">
                  Welcome to byte fashion
                </h1>
                <h1 className="text-sm md:text-base text-center">
                  By entering with your user you can make <br /> purchases more
                  quickly and have more control of <br /> your orders
                </h1>
                <Login />
                <Link to={"/dashboard/login"}>
                  <h1 className="text-center">Login to Dashboard</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
