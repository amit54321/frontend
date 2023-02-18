import styles from "./HomeNavbar.module.css";
import { useBreakpointValue, Text } from "@chakra-ui/react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const HomeNavbar = () => {
  const isDesktop = true;
  const [gamesColor, setGamesColor] = useState("white");
  const [aboutUsColor, setAboutColor] = useState("white");
  const [careersColor, setCarrerColor] = useState("white");
  //useBreakpointValue({ base: false, lg: true });
  const navigate = useNavigate();
  return (
    <div>
      <div position="fixed" className={styles.navbar}>
        <div
          onClick={() => {
            setGamesColor("white");
            setCarrerColor("white");
            setAboutColor("white");
            navigate("/");
          }}
          className="navIcon"
        >
          <img src="\kaiser.png" alt="" height={120} width={120} />
        </div>
        {isDesktop ? (
          <div className={styles.navItems} activeClassName="selected">
            <NavLink
              to="/games"
              className={({ isActive }) => {
                console.log(isActive);
                if (isActive) {
                  setGamesColor("teal.500");
                  setCarrerColor("white");
                  setAboutColor("white");
                }
              }}
            >
              <Text color={gamesColor}>GAMES</Text>
            </NavLink>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) => {
                if (isActive) {
                  setAboutColor("teal.500");
                  setCarrerColor("white");
                  setGamesColor("white");
                }
                console.log(isActive);
              }}
            >
              <Text color={aboutUsColor}>ABOUT US</Text>
            </NavLink>
            <NavLink
              to="/careers"
              className={({ isActive }) => {
                if (isActive) {
                  setCarrerColor("teal.500");
                  setAboutColor("white");
                  setGamesColor("white");
                }
                console.log(isActive);
              }}
            >
              <Text color={careersColor}> CAREERS</Text>
            </NavLink>
          </div>
        ) : (
          <div></div>
        )}
        <div></div>
        {/*   {
          <div className={styles.navUser}>
            <HiOutlineShoppingBag onClick={() => navigate("/cart")} size={25} />
            <ImUser size={25} onClick={() => navigate("/login")} />
            <FiSearch size={25} />
            <BsHeartFill size={25} onClick={() => navigate("/wishlist")} />
          </div>
        } */}
      </div>
      <div className={styles.navbarq}>
        <img
          src="\publish.png"
          alt=""
          style={{ height: null, width: null, flex: 1 }}
        />
      </div>
    </div>
  );
};

export default HomeNavbar;
