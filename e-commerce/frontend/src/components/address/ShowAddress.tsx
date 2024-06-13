import React, { useState } from "react";
import { deleteUserAddress } from "../../apis";
import toast from "react-hot-toast";
import DeletePopup from "../common/DeletePopup";
import { useDispatch } from "react-redux";
import { deleteAddress } from "../../redux/reducers/addressSlice";

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

interface ShowAddressProps {
  address: Address;
  selectedAddressId: string;
  handleEdit: (address: Address) => void;
  handleSelect: (val: string) => void;
}

const ShowAddress: React.FC<ShowAddressProps> = ({
  selectedAddressId,
  handleSelect,
  address,
  handleEdit,
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionChange = () => {
    handleSelect(address._id);
  };

  const handleDelete = () => {
    deleteUserAddress(address._id)
      .then((response: any) => {
        if (response.success) {
          dispatch(deleteAddress(address._id));
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
      })
      .catch((err: any) => {
        toast.error("Error ", err);
      });
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md my-2">
      <div className="flex items-center gap-2">
        <input
          id={address._id}
          type="radio"
          className="form-radio text-indigo-600 h-5 w-5"
          value="true"
          checked={Boolean(selectedAddressId === address._id)}
          onChange={handleOptionChange}
        />
        <h1 className="font-bold">{address?.userAddress?.name}</h1>
      </div>
      <div className="ml-7 my-2">
        <p className="text-sm font-light">
          {address?.userAddress?.address},{address?.userAddress?.landmark},
          {address?.userAddress?.town}, {address?.userAddress?.city} -{" "}
          {address?.userAddress?.pincode}
        </p>
        <p className="text-sm my-4 font-light">
          Mobile:{" "}
          <span className="font-bold">{address?.userAddress?.phone}</span>
        </p>
        <ul>
          <li className="text-sm font-light li list-disc">
            Cash on Delivery available
          </li>
        </ul>
        <div className="my-2 flex gap-4">
          <button
            className="border border-black py-1 px-4 rounded-md font-bold"
            type="button"
            onClick={() => setIsOpen(true)}
          >
            Remove
          </button>
          <button
            className="border border-black py-1 px-4 rounded-md font-bold"
            type="button"
            onClick={() => handleEdit(address)}
          >
            Edit
          </button>
        </div>
        <DeletePopup
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={handleDelete}
        />
      </div>
    </div>
  );
};

export default ShowAddress;
