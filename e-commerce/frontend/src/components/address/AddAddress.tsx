import React, { useEffect, useState } from "react";
import TextField from "../common/TextField";
import { createUserAddress, updateUserAddress } from "../../apis";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { updateAddress } from "../../redux/reducers/addressSlice";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  editAddress: any;
  handleFetch: () => void;
}

const initialData = {
  name: "",
  phone: "",
  pincode: "",
  address: "",
  landmark: "",
  town: "",
  city: "",
  state: "",
  userId: "",
};

const AddAddress: React.FC<ModalProps> = ({
  editAddress,
  isOpen,
  onClose,
  handleFetch,
}) => {
  const user = useSelector((state: any) => state.user.user.userId);
  const dispatch = useDispatch();
  const [data, setData] = useState(initialData);
  const handleClose = () => {
    setData(initialData);
    onClose && onClose();
  };

  const handleChange = (field: string, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (editAddress) {
      const _data = { ...editAddress.userAddress };
      setData(_data);
    } else {
      setData(initialData);
    }
  }, [editAddress]);

  const isValidMobileNumber = (phoneNumber: string): boolean => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const isValidPincode = (pincode: string): boolean => {
    const pincodeRegex = /^[0-9]{6}$/;
    return pincodeRegex.test(pincode);
  };

  const validateForm = () => {
    let isValid = true;

    if (!data.name) {
      toast.error("Name is required");
      isValid = false;
    } else if (!data.phone || !isValidMobileNumber(data.phone)) {
      toast.error("Valid mobile number is required");
      isValid = false;
    } else if (!data.pincode || !isValidPincode(data.pincode)) {
      toast.error("Valid pincode is required");
      isValid = false;
    } else {
      return isValid;
    }
  };

  const handleAddress = () => {
    const isValid = validateForm();
    if (isValid) {
      const _data = { ...data, userId: user };
      createUserAddress(_data)
        .then((response: any) => {
          if (response.success) {
            handleClose();
            handleFetch();
            setData(initialData);
            toast.success(response.message);
          } else {
            toast.error(response.message);
          }
        })
        .catch((err: any) => {
          console.error("Error creating address:", err);
          toast.error("An error occurred while creating the address");
        });
    }
  };

  const handleUpdatedAddress = () => {
    updateUserAddress(editAddress?._id, data)
      .then((response: any) => {
        if (response.success) {
          handleClose();
          dispatch(updateAddress({ id: editAddress?._id, data: data }));
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
      })
      .catch((err: any) => {
        console.error("Error updating address:", err);
        toast.error("An error occurred while updating the address");
      });
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-10/12 max-w-md h-3/5 rounded-md shadow-md relative">
            <header className="w-full bg-white px-2 rounded-t-md py-4 flex items-center justify-between">
              <h1 className="text-md font-bold">
                {editAddress ? "EDIT ADDRESS" : "ADD NEW ADDRESS"}
              </h1>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </header>
            {/* Scrollable content */}
            <div className="overflow-y-auto max-height pb-12">
              <div className="flex flex-col gap-2 p-2">
                <h1 className="text-sm font-bold">CONTACT DETAILS</h1>
                <TextField
                  label="Name"
                  type="text"
                  value={data.name}
                  setValue={(val) => handleChange("name", val)}
                  disabled={false}
                />
                <TextField
                  label="Mobile Number"
                  type="number"
                  value={data.phone}
                  setValue={(val) => handleChange("phone", val)}
                  disabled={false}
                />
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h1 className="text-sm font-bold">Address</h1>
                <TextField
                  label="Pincode"
                  type="number"
                  value={data.pincode}
                  setValue={(val) => handleChange("pincode", val)}
                  disabled={false}
                />
                <TextField
                  label="Address"
                  type="text"
                  value={data.address}
                  setValue={(val) => handleChange("address", val)}
                  disabled={false}
                />
                <TextField
                  label="Landmark"
                  type="text"
                  value={data?.landmark}
                  setValue={(val) => handleChange("landmark", val)}
                  disabled={false}
                />
                <TextField
                  label="Locality/Town"
                  type="text"
                  value={data.town}
                  setValue={(val) => handleChange("town", val)}
                  disabled={false}
                />
                <div className="flex gap-2">
                  <TextField
                    label="City"
                    type="text"
                    value={data.city}
                    setValue={(val) => handleChange("city", val)}
                    disabled={false}
                  />
                  <TextField
                    label="State"
                    type="text"
                    value={data.state}
                    setValue={(val) => handleChange("state", val)}
                    disabled={false}
                  />
                </div>
              </div>
            </div>

            <footer className="absolute bottom-0 w-full rounded-b-md bg-white py-2 px-2 flex items-center justify-center">
              <button
                className="bg-gray-400 w-full px-4 py-2 rounded-lg text-white outline-0"
                onClick={editAddress ? handleUpdatedAddress : handleAddress}
              >
                {editAddress ? "EDIT ADDRESS" : "ADD ADDRESS"}
              </button>
            </footer>
          </div>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      )}
    </>
  );
};

export default AddAddress;
