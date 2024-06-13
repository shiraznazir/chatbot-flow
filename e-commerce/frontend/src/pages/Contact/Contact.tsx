import banner from "../../assets/contact-banner3.jpg";
import Location from "./Location";
import Form from "./Form";
import ScrollToTop from "../../components/common/ScrollToTop";

const Contact = () => {
  return (
    <div className="pt-20">
      <ScrollToTop />
      <div className="relative w-full h-[25rem]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative w-full h-[25rem] bg-purple-500 opacity-20 flex justify-center items-center">
            <div className="absolute">
              <h1 className="text-black text-2xl">explore</h1>
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-12 my-16 gap-4">
        <div className="col-span-5">
          <Location />
        </div>
        <div className="col-span-7">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
