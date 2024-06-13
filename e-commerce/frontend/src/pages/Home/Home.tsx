import React from "react";
import Exclusive from "../../components/Home/Exclusive";
import FeaturedProducts from "../../components/Home/FeaturedProducts";
import NewArrivals from "../../components/Home/NewArrivals";
import SellingProducts from "../../components/Home/SellingProducts";
import ShopByCategory from "../../components/Home/ShopByCategory";
import NewBanner from "../../components/common/NewBanner";
import ScrollToTop from "../../components/common/ScrollToTop";

const Home: React.FC = () => {
  return (
    <>
      <div className="pt-14 md:pt-20 z-50">
        <ScrollToTop />
        <NewBanner />
        <ShopByCategory />
        <NewArrivals />
        <SellingProducts />
        <FeaturedProducts />
        <Exclusive />
      </div>
    </>
  );
};

export default Home;
