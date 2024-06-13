import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
// import MobFooter from "./components/MobFooter";
import "./App.css";
import { useEffect, useState } from "react";
import {
  fetchAllProductData,
  fetchFeaturedData,
  fetchNewArrivalsData,
} from "./redux/reducers/homeSlice";
import { useAppDispatch } from "./redux/hooks";

function Root() {
  const location = useLocation();
  const currentUrl = location.pathname;
  const dispatch = useAppDispatch();
  const [disableFooter, setDisableFooter] = useState(false);
  // const [windowSize, setWindowSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });

  // const handleResize = () => {
  //   setWindowSize({
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    dispatch(fetchNewArrivalsData(1));
    dispatch(fetchFeaturedData(1));
    dispatch(fetchAllProductData(1));
  }, [dispatch]);

  useEffect(() => {
    if (currentUrl === "/login") {
      setDisableFooter(true);
    }
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      {!disableFooter && <Footer />}
      {/* <MobFooter /> */}
    </>
  );
}

export default Root;
