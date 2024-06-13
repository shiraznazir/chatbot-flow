import React from "react";
import ScrollToTop from "../common/ScrollToTop";
import Orders from "./Orders";
import ProfileDetails from "./ProfileDetails";
import OverView from "./OverView";
import { useNavigate, useParams } from "react-router-dom";
import UpdateUser from "./UpdateUser";

const Main: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams<{ id?: string; child?: string }>();
  console.log("Params>>>>>", params);

  return (
    <section className="w-full pt-20">
      <ScrollToTop />
      <div className="w-full sm:w-9/12 mx-auto mt-6 mb-4 p-4">
        <header className="my-4">
          <h1 className="font-bold text-lg">Account</h1>
          <h2 className="text-sm">User</h2>
        </header>
        <div className="border border-gray-300 p-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-4 border border-gray-300 p-4">
              <h3
                className={`mb-2 cursor-pointer hover:font-bold ${
                  params.id === "overview"
                    ? "font-bold text-lg"
                    : "font-semibold"
                }`}
                onClick={() => navigate("/my/overview")}
              >
                Overview
              </h3>
              <hr className="border-b border-gray-300 mb-4" />
              <h3
                className={`mb-2 cursor-pointer hover:font-bold ${
                  params.id === "profile"
                    ? "font-bold text-lg"
                    : "font-semibold"
                }`}
                onClick={() => navigate("/my/profile")}
              >
                Profile
              </h3>
              <hr className="border-b border-gray-300 mb-4" />
              <h3
                className={`mb-2 cursor-pointer hover:font-bold ${
                  params.id === "orders" ? "font-bold text-lg" : "font-semibold"
                }`}
                onClick={() => navigate("/my/orders")}
              >
                Orders
              </h3>
            </div>
            <div className="col-span-12 sm:col-span-8">
              {params?.id === "overview" && <OverView />}
              {!params?.child && params?.id === "profile" && <ProfileDetails />}
              {params?.child === "update" && <UpdateUser />}
              {params?.id === "orders" && <Orders />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
