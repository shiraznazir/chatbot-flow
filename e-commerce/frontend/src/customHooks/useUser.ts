import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserAPI } from "../apis";
import toast from "react-hot-toast";

interface UserData {
  firstName: string;
  lastName: string;
  gender: string;
  phone: number;
  email: string;
}

const initialUserData = {
  firstName: "",
  lastName: "",
  gender: "",
  phone: 0,
  email: "",
};

const useUser = () => {
  const user = useSelector((state: any) => state.user.user);
  const [userData, setUserData] = useState<UserData>(initialUserData);

  const getUser = () => {
    getUserAPI(user.userId)
      .then((response: any) => {
        if (response.success) {
          setUserData(response.UserData[0]);
        } else {
          toast.error(response.message);
        }
      })
      .catch((err: any) => {
        toast.error(err);
      });
  };

  useEffect(() => {
    if (user?.userId) {
      getUser();
    }
  }, [user]);
  return userData;
};

export default useUser;
