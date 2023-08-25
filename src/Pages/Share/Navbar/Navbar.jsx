import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const linksData = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/about",
      text: "About",
    },
    {
      to: "/Appointment",
      text: "Appointment",
    },
  ];
  const activeLink =
    "text-white rounded px-4 py-1 transition-colors duration-500 bg-orange-600";
  return (
    <div>
      <nav className={`w-[100%] fixed z-50 mx-auto ${scrolled ? 'bg-gray-800' : ''} text-black`}> 
        <div className=" mx-auto ">
          <div className="flex z-50 px-8  justify-between items-center text-white">
            <Link to="/" className="flex items-center gap-2">
              {/* <img className="h-10 w-10 " src={logo} alt="" /> */}
              <h2 className="text-2xl font-bold">
                Your Logo
              </h2>
            </Link>
            <div className="hidden md:flex gap-8 items-center font-medium p-4">
              {linksData.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.to}
                  className={({ isActive }) => (isActive ? activeLink : "")}
                >
                  {link.text}
                </NavLink>
              ))}
            </div>

            <div onClick={handleNav} className="block  md:hidden">
              {nav ? (
                <HiOutlineMenuAlt3 size={20} className="" />
              ) : (
                <div className="flex items-center gap-2 font-semibold">
                  <HiOutlineMenuAlt2 size={20} className="" />
                </div>
              )}
            </div>
            <div
              className={
                nav
                  ? "fixed left-0 top-0 w-[80%] h-full px-6 text-center border-r md:hidden border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                  : "ease-in-out duration-500 fixed left-[-100%]"
              }
            >
              <div className="flex flex-col p-0 gap-5 text-white">
                <h1 className="w-full text-start text-3xl font-bold text-[#00df9a] m-4">
                  <Link to="/">REACT.</Link>
                </h1>
                {linksData.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.to}
                    className={({ isActive }) => (isActive ? activeLink : "")}
                  >
                    {link.text}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
