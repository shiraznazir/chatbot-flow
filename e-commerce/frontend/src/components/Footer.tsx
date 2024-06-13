import instaIcon from "../assets/instagram.svg";
import twitterIcon from "../assets/twitter.svg";
import facebookIcon from "../assets/facebook.svg";
import youtubeIcon from "../assets/youtube.svg";
import mastercardIcon from "../assets/mastercard-logo.svg";
import visaIcon from "../assets/visa.svg";
import paypalIcon from "../assets/paypal-50.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="border-t-2 border-gray-200"></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 p-8 gap-4">
        <div className="my-4">
          {/* Social */}
          <h1 className="my-4 text-lg font-semibold">Social</h1>
          <ul>
            <li className="flex gap-4 my-2">
              <img className="w-5 h-5" src={instaIcon} alt="instagramicon" />
              <h1 className="flex items-center justify-center cursor-pointer text-sm font-light">
                Instagram
              </h1>
            </li>
            <li className="flex gap-4 my-2">
              <img className="w-5 h-5" src={twitterIcon} alt="twittericon" />
              <h1 className="flex items-center justify-center cursor-pointer text-sm font-light">
                Twitter
              </h1>
            </li>
            <li className="flex gap-4 my-2">
              <img className="w-5 h-5" src={facebookIcon} alt="facebookicon" />
              <h1 className="flex items-center justify-center cursor-pointer text-sm font-light">
                Facebook
              </h1>
            </li>
            <li className="flex gap-4 my-2">
              <img className="w-5 h-5" src={youtubeIcon} alt="youtubeicon" />
              <h1 className="flex items-center justify-center cursor-pointer text-sm font-light">
                Youtube
              </h1>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className="my-4">
          <h1 className="my-4 text-lg font-semibold">Contact</h1>
          <ul>
            <li className="my-2">
              <Link to="/contact">
                <h1 className="text-sm font-light cursor-pointer">
                  Contact Us
                </h1>
              </Link>
            </li>
            <li className="my-2">
              <h1 className="text-sm font-light cursor-pointer">
                yourexample@gmail.com
              </h1>
            </li>
            <li className="my-2">
              <h1 className="text-sm font-light cursor-pointer">
                example@email.com
              </h1>
            </li>
            <li className="flex my-2">
              <h1 className="text-sm font-light cursor-pointer">
                Call Us: &nbsp;&nbsp;
              </h1>
              <a
                className="text-sm font-light cursor-pointer"
                href="tel:+910000000000"
              >
                0000000000
              </a>
            </li>
          </ul>
        </div>
        {/* About */}
        <div className="my-4">
          <h1 className="my-4 text-lg font-semibold">About</h1>
          <ul>
            <li className="my-2">
              <h1 className="text-sm font-light cursor-pointer">
                Support Center
              </h1>
            </li>
            <li className="my-2">
              <h1 className="text-sm font-light cursor-pointer">
                Customer Support
              </h1>
            </li>
            <li className="my-2">
              <h1 className="text-sm font-light cursor-pointer">About Us</h1>
            </li>
            <li className="my-2">
              <h1 className="text-sm font-light cursor-pointer">Copyright</h1>
            </li>
          </ul>
        </div>
        {/* Customer Care */}
        <div className="my-4">
          <h1 className="my-4 text-lg font-semibold">Customer Care</h1>
          <ul>
            <li className="my-2">
              <h1 className="text-sm font-light cursor-pointer">FAQ & Helps</h1>
            </li>
            <li className="my-2">
              <h1 className="text-sm font-light cursor-pointer">
                Shipping & Delivery
              </h1>
            </li>
            <li className="my-2">
              <h1 className="text-sm font-light cursor-pointer">
                Return & Exchanges
              </h1>
            </li>
          </ul>
        </div>
        {/* Our Information */}
        <div className="my-4">
          <h1 className="my-4 text-lg font-semibold">Our Information</h1>
          <ul>
            <li className="my-2">
              <h1 className="text-sm font-light cursor-pointer">
                Privacy policy update
              </h1>
            </li>
            <li className="my-2">
              <h1 className="text-sm font-light cursor-pointer">
                Terms & conditions
              </h1>
            </li>
            <li className="my-2">
              <h1 className="text-sm font-light cursor-pointer">
                Return Policy
              </h1>
            </li>
            <li className="flex my-2">
              <h1 className="text-sm font-light cursor-pointer">Site Map</h1>
            </li>
          </ul>
        </div>
        {/* Top Categories */}
        <div className="my-4">
          <h1 className="my-4 text-lg font-semibold">Top Categories</h1>
          <ul>
            <li className="my-2">
              <h1 className="text-sm font-light cursor-pointer">Men's Wear</h1>
            </li>
            <li className="my-2">
              <h1 className="text-sm font-light cursor-pointer">
                Women's Wear
              </h1>
            </li>
            <li className="my-2">
              <h1 className="text-sm font-light cursor-pointer">Kids's Wear</h1>
            </li>
            <li className="my-2">
              <h1 className="text-sm font-light cursor-pointer">
                Sports's Wear
              </h1>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t-2 border-gray-200 my-2"></div>
      <div className="flex justify-around items-center my-2">
        <h1 className="text-sm font-light">
          Copyright © 2024 <span className="font-semibold">REDQ</span>{" "}
          &nbsp;&nbsp; All rights reserved
        </h1>
        <div className="md:flex gap-8 hidden">
          <img
            className="cursor-pointer"
            src={mastercardIcon}
            alt="mastercard"
          />
          <img className="cursor-pointer" src={visaIcon} alt="visacard" />
          <img
            className="cursor-pointer"
            width={40}
            height={20}
            src={paypalIcon}
            alt="paypal"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
