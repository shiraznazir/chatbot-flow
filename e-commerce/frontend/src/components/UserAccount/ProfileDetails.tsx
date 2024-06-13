import { useNavigate } from "react-router-dom";
import useUser from "../../customHooks/useUser";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";

const ProfileDetails = () => {
  const navigate = useNavigate();
  const userData = useUser();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (userData?.firstName) {
      setLoading(false);
    }
  }, [userData]);

  return (
    <div className="col-span-12 sm:col-span-8 border border-gray-300 p-4 fade-in">
      <h1 className="text-lg font-bold">Profile Details</h1>
      <hr className="my-2 border-b border-gray-300 mb-4" />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="my-14 grid grid-cols-2">
            <div className="col-span-1 flex flex-col gap-4">
              <h1 className="font-normal">Full Name</h1>
              <h1 className="font-normal">Email</h1>
              <h1 className="font-normal">Gender</h1>
              <h1 className="font-normal">Phone</h1>
            </div>
            <div className="col-span-1 flex flex-col gap-4">
              <h1 className="font-normal">
                {userData?.firstName && userData?.lastName
                  ? `${": " + userData.firstName} ${userData.lastName}`
                  : "---Not Added---"}
              </h1>
              <h1 className="font-normal">
                : {userData?.email || "---Not Added---"}
              </h1>
              <h1 className="font-normal">
                : {userData?.gender || "---Not Added---"}
              </h1>
              <h1 className="font-normal">
                : {userData?.phone || "---Not Added---"}
              </h1>
            </div>
          </div>
          <button
            type="button"
            className="bg-gray-400 w-full text-white py-2 font-bold"
            onClick={() => navigate("/my/profile/update")}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default ProfileDetails;
