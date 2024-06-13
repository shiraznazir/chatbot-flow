import { useNavigate } from "react-router-dom";
import orderImg from "../../assets/profile-orders.png";
import editProfileImg from "../../assets/profile-edit.png";

const OverView = () => {
  const navigate = useNavigate();

  return (
    <div className="col-span-12 sm:col-span-8 border border-gray-300 p-4">
      <div className="bg-gray-200 flex justify-between p-4">
        <div className="w-16 h-16 bg-white flex justify-center items-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => navigate("/my/profile")}
            type="button"
            className="bg-white p-2 rounded"
          >
            User
          </button>
        </div>
      </div>
      <div className="my-4 grid-cols-1 grid md:grid-cols-2 gap-4">
        <div
          onClick={() => navigate("/my/orders")}
          className="py-2 col-span-1 border border-gray-200 flex flex-col justify-center items-center gap-2 cursor-pointer hover:bg-gray-100"
        >
          <img src={orderImg} alt="orders" />
          <h1 className="text-md font-semibold">Orders</h1>
          <h1 className="text-sm opacity-50">Check your order status</h1>
        </div>
        <div
          className="py-2 col-span-1 border border-gray-200 flex flex-col justify-center items-center gap-2 cursor-pointer hover:bg-gray-100"
          onClick={() => navigate("/my/profile/update")}
        >
          <img src={editProfileImg} alt="profile-edit" />
          <h1 className="text-md font-semibold">Profile Details</h1>
          <h1 className="text-sm opacity-50">Change your profile details</h1>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default OverView;
