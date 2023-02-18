import React from "react";
import { Route, Routes } from "react-router-dom";
import Games from "../components/Product/Games";
import HomeNavbar from "../components/HomeNavbar/HomeNavbar";
import HomePage from "../components/HomePage/HomePage";
import LargeWithAppLinksAndSocial from "../components/Footer/Footer";
import AboutUs from "../components/Product/AboutUs";
import Career from "../components/Product/Career";
import PrivacyPolicy from "../components/Product/PrivacyPolicy";
import GameScreen from "../components/Product/GameScreen";
const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HomeNavbar />
            <HomePage />
            <LargeWithAppLinksAndSocial />
          </>
        }
      ></Route>
      <Route
        path="/aboutUs"
        element={
          <>
            <HomeNavbar />
            <AboutUs />
            <LargeWithAppLinksAndSocial />
          </>
        }
      ></Route>
      <Route
        path="/games"
        element={
          <>
            <HomeNavbar />
            <Games />
            <LargeWithAppLinksAndSocial />
          </>
        }
      ></Route>
      <Route
        path="/careers"
        element={
          <>
            <HomeNavbar />
            <Career />
            <LargeWithAppLinksAndSocial />
          </>
        }
      ></Route>
      <Route
        path="/gameCard/:id"
        element={
          <>
            <HomeNavbar />
            <GameScreen />
            <LargeWithAppLinksAndSocial />
          </>
        }
      ></Route>
      <Route
        path="/privacyPolicy"
        element={
          <>
            <HomeNavbar />
            <PrivacyPolicy />
            <LargeWithAppLinksAndSocial />
          </>
        }
      ></Route>
    </Routes>
  );
};

export default AllRoutes;
