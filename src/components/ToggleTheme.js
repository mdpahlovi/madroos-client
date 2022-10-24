import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ToggleTheme = ({ toggle, setToggle }) => {
    let dataTheme = document.documentElement.attributes[0];

    const toggleTheme = () => {
        setToggle(!toggle);
        if (dataTheme.value === "light") {
            dataTheme.value = "dark";
        } else {
            dataTheme.value = "light";
        }
    };
    return (
        <div className="border-l border-base-content py-[6px] pl-5 flex items-center">
            <label className="swap swap-rotate">
                <input onClick={toggleTheme} type="checkbox" />
                <MdLightMode className="swap-off text-3xl"></MdLightMode>
                <MdDarkMode className="swap-on text-3xl"></MdDarkMode>
            </label>
        </div>
    );
};

export default ToggleTheme;
