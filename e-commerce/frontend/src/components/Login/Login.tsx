import React, { useEffect, useState } from "react";
import OtpInput from "../common/OtpInput";
import { useNavigate } from "react-router-dom";
import { generateOTPByMob, verifyOTP } from "../../apis/user-auth";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/reducers/userSlice";
import toast from "react-hot-toast";
import { fetchCartData } from "../../redux/reducers/cartSlice";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state?.user?.user?.userId);
  const cartData: any = useSelector((state: any) => state.cart.products);
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [focus, setFocus] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [disable, setDisable] = useState(true);
  const [enable, setEnable] = useState(false);
  const [otpScreen, setOtpScreen] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const formattedValue = value.replace(/[^\d]/g, "");
    setPhoneNumber(formattedValue);
  };

  useEffect(() => {
    setDisable(phoneNumber.length !== 10);
  }, [phoneNumber]);

  const handleContinue = async () => {
    try {
      await generateOTPByMob({ phone: phoneNumber });
      setOtpScreen(true);
    } catch (error) {
      console.error("Error generating OTP:", error);
      toast.error("Error generating OTP");
    }
  };

  const handleVerify = async () => {
    const _otp = otp.join("");
    const data = cartData.map((product: any) => {
      return {
        productId: product?.productId?._id,
        quantity: product?.quantity,
        size: product?.size,
        color: product?.color,
      };
    });
    try {
      const response = await verifyOTP({
        phone: phoneNumber,
        otp: _otp,
        products: cartData.length > 0 ? data : [],
      });
      if (response.success) {
        toast.success(response.message);
        const data: any = {
          phone: phoneNumber,
          userId: response.userId,
        };
        await dispatch(login(data));
        await dispatch(fetchCartData(response.userId));
        cartData.length > 0
          ? navigate("/checkout/cart/address")
          : navigate("/");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Error verifying OTP");
    }
  };

  useEffect(() => {
    setEnable(otp.every((value) => value));
  }, [otp]);

  return (
    <div className="px-4 md:px-0">
      {otpScreen ? (
        <div>
          <h1 className="text-md md:text-xl text-center font-semibold">
            Verify with OTP
          </h1>
          <div className="my-4 flex justify-center items-center">
            <OtpInput setOtp={setOtp} otp={otp} />
          </div>
          <button
            className={`my-2 w-full p-2 text-white outline-0 ${
              enable ? "bg-gray-500" : "bg-gray-300"
            }`}
            disabled={!enable}
            onClick={handleVerify}
          >
            Verify
          </button>
        </div>
      ) : (
        <div className="">
          <h1 className="text-xl text-center font-semibold">Login / Signup</h1>
          <h1 className="text-md block md:hidden my-4 text-center">
            Enter Mobile Number
          </h1>
          <div className="relative my-4 focus-within:text-black">
            <input
              className="w-full my-2 group text-gray-800 placeholder:text-gray-300 h-10 p-1 border-b-2 border-gray-200 focus:border-gray-500 outline-none focus:outline-none pl-16"
              placeholder="Enter your mobile number"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              onChange={handlePhoneNumberChange}
              maxLength={10}
              required
            />
            <div className="absolute top-4 left-4">
              <h1 className={`${focus ? "text-gray-800" : "text-gray-300"}`}>
                +91 &nbsp; |{" "}
              </h1>
            </div>
          </div>
          <button
            className={`my-2 w-full p-2 text-white ${
              disable ? "bg-gray-300" : "bg-gray-500"
            }`}
            disabled={disable}
            onClick={handleContinue}
          >
            Request OTP
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
