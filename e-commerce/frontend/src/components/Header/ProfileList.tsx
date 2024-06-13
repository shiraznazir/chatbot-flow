import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

interface ProfileListProps {
  setProfileToggle: (toggle: boolean) => void;
  handleProfileClose: () => void;
  handleLogout: () => void;
}

const ProfileList = ({
  setProfileToggle,
  handleProfileClose,
  handleLogout,
}: ProfileListProps) => {
  const user = useSelector((state: any) => state.user.user);

  return (
    <div
      onMouseEnter={() => setProfileToggle(true)}
      onMouseLeave={handleProfileClose}
      className="absolute w-64 flex top-16 md:top-20 right-0 bg-white px-2"
    >
      <ul className="p-2">
        {user?.phone ? (
          <li className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Hello, User</h1>
            <p className="text-sm font-normal">{user?.phone}</p>
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
                onClick={handleProfileClose}
              >
                Login
              </button>
            </Link>
          </li>
        )}
        <li className="w-full border-t border-gray-200 my-4"></li>
        {user?.phone && (
          <>
            <Link onClick={handleProfileClose} to={"/my/overview"}>
              <li className="py-1 px-2 text-md hover:font-bold list-none">
                Overview
              </li>
            </Link>
            <Link onClick={handleProfileClose} to={"/my/profile"}>
              <li className="py-1 px-2 text-md hover:font-bold list-none">
                Profile
              </li>
            </Link>
            <Link onClick={handleProfileClose} to={"/my/profile/update"}>
              <li className="py-1 px-2 text-md hover:font-bold list-none">
                Edit Profile
              </li>
            </Link>
            <Link onClick={handleProfileClose} to={"/my/orders"}>
              <li className="py-1 px-2 text-md hover:font-bold list-none">
                Orders
              </li>
            </Link>
          </>
        )}

        {user?.phone && (
          <li
            className="py-1 px-2 text-md hover:font-bold list-none"
            onClick={handleLogout}
          >
            Logout
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProfileList;
