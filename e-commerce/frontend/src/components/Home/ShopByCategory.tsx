import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sportsImg from "../../assets/sports.jpg";
import kidImg from "../../assets/kids.jpg";
import sunglassesImg from "../../assets/sunglasses.jpg";
import womenImg from "../../assets/woman.jpg";
import watchImg from "../../assets/watch.jpg";
import manImg from "../../assets/man.jpg";
import sneakersImg from "../../assets/sneakers.jpg";

const style = "w-24 sm:w-36 md:w-52 h-24 sm:h-36 md:h-52 rounded-xl";

const textStyle = "text-center py-2 font-normal sm:font-medium";

const ShopByCategory = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  return (
    <div className="p-4 lg:p-8">
      {/* <h1 className="m-2 md:m-4 text-xl md:text-2xl font-bold">
        Shop By Category
      </h1> */}
      <h1 className="m-4 text-2xl font-bold">Shop By Category</h1>
      <div className="">
        <Carousel
          swipeable={true}
          draggable={false}
          //   showDots={true}
          // rewindWithAnimation={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["mobile"]}
          //   deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="px-4">
            <img className={style} src={sportsImg} alt="img1" />
            <h1 className={textStyle}>Sports</h1>
          </div>
          <div className="mx-2">
            <img className={style} src={sneakersImg} alt="sneakers" />
            <h1 className={textStyle}>Sneakers</h1>
          </div>
          <div className="mx-2">
            <img className={style} src={kidImg} alt="img2" />
            <h1 className={textStyle}>Kids</h1>
          </div>
          <div className="mx-2">
            <img className={style} src={womenImg} alt="img3" />
            <h1 className={textStyle}>Women</h1>
          </div>
          <div className="mx-2">
            <img className={style} src={watchImg} alt="watch" />
            <h1 className={textStyle}>Watch</h1>
          </div>
          <div className="mx-2">
            <img className={style} src={manImg} alt="man" />
            <h1 className={textStyle}>Men</h1>
          </div>
          <div className="mx-2">
            <img className={style} src={sunglassesImg} alt="sunglasses" />
            <h1 className={textStyle}>Sunglasses</h1>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ShopByCategory;
