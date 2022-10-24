import React, { useState } from "react";
import LightLogo from "../images/light-logo.jpg";
import DarkLogo from "../images/dark-logo.jpg";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
    const [open, setOpen] = useState(true);

    const [toggle, setToggle] = useState(true);

    const navLink = ({ isActive }) => (isActive ? "font-bold underline" : "");
    const nevMenu = `w-full lg:w-auto fixed lg:static top-16 left-0 pb-5 lg:pb-0 transition-all duration-500 z-[1] ${
        open ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
    } lg:opacity-100 lg:translate-y-0`;

    return (
        <nav className="sticky top-0 z-10 border-b border-base-300">
            <div className="my-container h-16 lg:h-20 flex justify-between items-center">
                <Link to="/">
                    <img className="w-28 lg:w-32" src={toggle ? LightLogo : DarkLogo} alt="" />
                </Link>
                <div className="content-gap-x z-[2]">
                    <label className="mr-2 lg:hidden swap swap-rotate text-3xl cursor-pointer z-[2]">
                        <input onClick={() => setOpen(!open)} type="checkbox" />
                        <CgMenuRight className="swap-off" />
                        <CgClose className="swap-on" />
                    </label>
                    <div className="flex items-center lg:hidden">
                        <ToggleTheme toggle={toggle} setToggle={setToggle} />
                    </div>
                </div>
                <div className={nevMenu}>
                    <div className="flex flex-col lg:flex-row items-center gap-x-5 gap-y-3">
                        <NavLink to="/" className={navLink} end>
                            Home
                        </NavLink>
                        <NavLink to="courses" className={navLink}>
                            Courses
                        </NavLink>
                        <NavLink to="blogs" className={navLink}>
                            Blogs
                        </NavLink>
                        <NavLink to="faq" className={navLink}>
                            FAQ
                        </NavLink>
                        <Link to="signin" className="btn btn-primary">
                            Signin
                        </Link>
                        <div className="hidden lg:block ml-1">
                            <ToggleTheme toggle={toggle} setToggle={setToggle} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
