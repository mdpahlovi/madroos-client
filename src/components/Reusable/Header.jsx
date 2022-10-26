import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title, route, children }) => {
    return (
        <div className="relative section-gap">
            <div className="my-hero bg-header"></div>
            <div className="myhero-overlay"></div>
            <div className="my-container content-gap-y text-left">
                <h3 className="text-5xl sm:text-6xl font-bold text-white text-uppercase">{title}</h3>
                <div className="text-white breadcrumbs">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>{route}</li>
                    </ul>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Header;
