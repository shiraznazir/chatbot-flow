import React, { useEffect, useState } from "react";
import ScrollToTop from "../common/ScrollToTop";
import Orders from "./Orders";
import ProfileDetails from "./ProfileDetails";
import OverView from "./OverView";
import { useNavigate, useParams } from "react-router-dom";
import UpdateUser from "./UpdateUser";

const UserAccount: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams<{ id?: string; child?: string }>();
  const [tab, setTab] = useState<string>("");

  useEffect(() => {
    params?.id && setTab(params.id);
  }, [params]);

  const renderContent = () => {
    switch (tab) {
      case "overview":
        return <OverView />;
      case "profile":
        return params.child === "update" ? <UpdateUser /> : <ProfileDetails />;
      case "orders":
        return <Orders />;
      default:
        return <OverView />;
    }
  };

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
                  tab === "overview" ? "font-bold text-lg" : "font-semibold"
                }`}
                onClick={() => navigate("/my/overview")}
              >
                Overview
              </h3>
              <hr className="border-b border-gray-300 mb-4" />
              <h3
                className={`mb-2 cursor-pointer hover:font-bold ${
                  tab === "profile" && !params.child
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
                  tab === "orders" ? "font-bold text-lg" : "font-semibold"
                }`}
                onClick={() => navigate("/my/orders")}
              >
                Orders
              </h3>
            </div>
            <div className="col-span-12 sm:col-span-8">{renderContent()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserAccount;
