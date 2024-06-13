import React, { useEffect, useState } from "react";
import PriceDetails from "../common/PriceDetails";
import AddAddress from "./AddAddress";
import { getUserAddresses } from "../../apis";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import usePriceDetails from "../../customHooks/usePriceDetails";
import { fetchAddress } from "../../redux/reducers/addressSlice";
import ShowAddress from "./ShowAddress";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../common/ScrollToTop";
import { login } from "../../redux/reducers/userSlice";

interface User {
  userId: string;
  phone: string;
}

interface UserAddress {
  name: string;
  phone: string;
  pincode: string;
  address: string;
  landmark: string;
  town: string;
  city: string;
  state: string;
}

interface Address {
  createdAt: string;
  updatedAt: string;
  userAddress: UserAddress;
  userId: string;
  _id: string;
}

const Addresses: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user: User = useSelector((state: any) => state.user.user);
  const priceDetails = usePriceDetails();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [editAddress, setEditAddress] = useState<Address | null>(null);
  const [selectedAddressId, setSelectedAddressId] = useState<string>("");
  const [addresses, setAddresses] = useState<Address[]>([]);

  const closeModal = () => setIsOpen(false);

  const handleEdit = (address: Address) => {
    setIsOpen(true);
    setEditAddress(address);
  };

  const getAddresses = () => {
    getUserAddresses(user?.userId)
      .then((res: any) => {
        if (res.success) {
          dispatch(fetchAddress(res.data));
          setAddresses(res.data);
          setSelectedAddressId(res?.data[0]?._id);
        } else {
          toast.error(res.message);
        }
      })
      .catch((err: any) => {
        console.error("Error", err);
        toast.error("Error", err.message || "Something went wrong");
      });
  };

  const validate = () => {
    if (!selectedAddressId) {
      toast.error("Please select an address");
      return false;
    }
    return true;
  };

  const handleAddress = async () => {
    if (validate()) {
      const data: any = {
        ...user,
        address_id: selectedAddressId,
      };
      await dispatch(login(data));
      navigate("/checkout/cart/payment");
    }
  };

  useEffect(() => {
    if (user?.userId) {
      getAddresses();
    }
  }, [user]);

  return (
    <div className="pt-20 bg-gray-200">
      <ScrollToTop />
      <div className="p-4 lg:p-10 grid grid-cols-1 lg:grid-cols-6 gap-4">
        <div className="lg:col-span-4">
          <div className="mb-4 px-4 py-2 bg-white flex justify-between shadow-md">
            <h1 className="text-md font-bold">Select Delivery Address</h1>
            <button
              className="border border-gray-500 rounded-lg p-2 font-bold text-xs"
              type="button"
              onClick={() => setIsOpen(true)}
            >
              ADD NEW ADDRESS
            </button>
          </div>
          <div className="mb-4 px-4 py-2 bg-white shadow-md">
            <h1 className="text-sm font-bold my-2">DEFAULT ADDRESS</h1>
            {addresses.length > 0 ? (
              addresses.map((address: Address) => (
                <ShowAddress
                  key={address._id}
                  selectedAddressId={selectedAddressId}
                  handleSelect={() => setSelectedAddressId(address._id)}
                  handleEdit={handleEdit}
                  address={address}
                />
              ))
            ) : (
              <p>No addresses found. Please add a new address.</p>
            )}
          </div>
        </div>
        <div className="lg:col-span-2">
          <PriceDetails priceDetails={priceDetails} />
          <div className="bg-white flex justify-center items-center">
            <button
              className="my-2 text-white font-bold bg-gray-400 rounded-md text-center p-2 w-11/12"
              onClick={handleAddress}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      {/* AddAddress modal */}
      <AddAddress
        handleFetch={getAddresses}
        editAddress={editAddress}
        isOpen={isOpen}
        onClose={closeModal}
      />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Addresses;
