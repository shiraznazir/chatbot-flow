import React, { useEffect, useState } from "react";
import TextField from "../common/TextField";
import toast, { Toaster } from "react-hot-toast";
import { updateUserAPI } from "../../apis";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import useUser from "../../customHooks/useUser";

interface UserData {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
}

const initialData: UserData = {
  firstName: "",
  lastName: "",
  gender: "male",
  email: "",
};

const UpdateUser: React.FC = () => {
  const navigate = useNavigate();
  const userData = useUser();
  const userId: string | undefined = useSelector(
    (state: RootState) => state.user.user?.userId
  );
  const [data, setData] = useState<UserData>(initialData);
  const [selectedGender, setSelectedGender] = useState<string>("male");

  const handleInputChange = (field: keyof UserData, value: string) => {
    setData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleGenderSelection = (gender: string) => {
    setSelectedGender(gender);
    setData((prevData) => ({ ...prevData, gender }));
  };

  const validate = () => {
    if (!data.firstName.trim()) {
      toast.error("Please enter your first name");
      return false;
    }
    if (!data.lastName.trim()) {
      toast.error("Please enter your last name");
      return false;
    }
    if (!data.email.trim()) {
      toast.error("Please enter your email");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (userData?.firstName) {
      const user = {
        firstName: userData?.firstName,
        lastName: userData?.lastName,
        gender: userData?.gender,
        email: userData?.email,
      };
      setData(user);
    }
  }, [userData]);

  const handleSubmit = async () => {
    if (userId && validate()) {
      updateUserAPI(userId, data)
        .then((response: any) => {
          if (response.success) {
            toast.success(response.message);
            navigate("/my/profile");
          } else {
            toast.error(response.message);
          }
        })
        .catch((err: any) => {
          console.log("Error ", err);
          toast.error(err);
        });
    }
  };

  return (
    <div className="col-span-12 sm:col-span-8 border border-gray-300 p-4">
      <div className="w-full flex justify-center items-center"></div>
      <h1 className="text-lg font-bold">Update Profile</h1>
      <hr className="my-2 border-b border-gray-300 mb-4" />
      <div className="my-10 flex flex-col gap-4">
        <TextField
          label="First Name"
          type="text"
          value={data.firstName}
          setValue={(val) => handleInputChange("firstName", val)}
          disabled={false}
        />
        <TextField
          label="Last Name"
          type="text"
          value={data.lastName}
          setValue={(val) => handleInputChange("lastName", val)}
          disabled={false}
        />
        <TextField
          label="Email"
          type="text"
          value={data.email}
          setValue={(val) => handleInputChange("email", val)}
          disabled={false}
        />
        <div className="border border-gray-200 flex justify-evenly">
          <div
            className={`w-full flex justify-center cursor-pointer ${
              selectedGender === "male" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleGenderSelection("male")}
          >
            {selectedGender === "male" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7 pt-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            )}
            <h1 className="text-lg py-1 flex">Male</h1>
          </div>

          <div className="border-l border-gray-300"></div>
          <div
            className={`w-full flex justify-center cursor-pointer ${
              selectedGender === "female" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleGenderSelection("female")}
          >
            {selectedGender === "female" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7 pt-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            )}
            <h1 className="text-lg py-1">Female</h1>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="bg-gray-400 my-2 w-full text-white py-2 font-bold outline-none"
        onClick={handleSubmit}
      >
        Update
      </button>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default UpdateUser;
