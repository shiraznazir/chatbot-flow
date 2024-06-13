// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";
// import { adminLogoutAPI } from "../../apis";

interface ProfileListProps {
  setProfileToggle: (toggle: boolean) => void;
}

const Profile = ({ setProfileToggle }: ProfileListProps) => {
  // const handleLogout = () => {
  //   adminLogoutAPI()
  //     .then((response: any) => {
  //       if (response.success) {
  //         toast.success(response.message);
  //       } else {
  //         toast.error(response.message);
  //       }
  //     })
  //     .catch((err: any) => toast.error("Error ", err));
  // };

  return (
    <div
      onMouseEnter={() => setProfileToggle(true)}
      onMouseLeave={() => setProfileToggle(false)}
      className="absolute w-64 flex top-16 md:top-20 right-0 bg-white px-2"
    >
      {/* <ul className="p-2">
        {user?.phone ? (
          <li className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Hello, Admin</h1>
          </li>
        ) : (
          <li className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Welcome</h1>
            <p className="text-sm font-normal">
              To access account and manage orders
            </p>
            <Link to="/login">
              <button
                type="button"
                className="w-full border border-gray-200 rounded py-1"
                onClick={() => setProfileToggle(false)}
              >
                Login
              </button>
            </Link>
          </li>
        )}
        <li className="w-full border-t border-gray-200 my-4"></li>
        {user?.phone && (
          <Link to={"/checkout/order"}>
            <li className="py-1 px-2 text-md hover:font-bold list-none">
              Orders
            </li>
          </Link>
        )}

        {user?.phone && (
          <li
            className="py-1 px-2 text-md hover:font-bold list-none"
            onClick={handleLogout}
          >
            Logout
          </li>
        )}
      </ul> */}
    </div>
  );
};

export default Profile;
