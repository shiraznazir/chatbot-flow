import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import img1 from "../../assets/B1.jpeg";
import img1 from "../../assets/banner1.png";
import img2 from "../../assets/banner2.png";
import img3 from "../../assets/banner3.png";
import "../../App.css";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const NewBanner: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (img1 && img2 && img3) {
      setIsLoaded(true);
    }
  }, [img1 && img2, img3]);

  return (
    <>
      {isLoaded ? (
        <div>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            centerSlidePercentage={100}
            showArrows={true}
            dynamicHeight={true}
            useKeyboardArrows={true}
            showThumbs={false}
            width="100%"
            // height={400}
            // className="carousel-container"
          >
            <div>
              <img width={100} height={50} src={img1} alt="Slide-1" />
            </div>
            <div>
              <img width={100} height={50} src={img2} alt="Slide-2" />
            </div>
            <div>
              <img width={100} height={50} src={img3} alt="Slide-3" />
            </div>
          </Carousel>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default NewBanner;
