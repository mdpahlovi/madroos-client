import React from "react";
import { Link } from "react-router-dom";
import { ImYoutube, ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="footer bg-base-content/10 gap-y-5 footer-center section-gap px-6 text-base text-base-content">
            <div className="content-gap-x flex-wrap">
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link to={"/privacypolicy"} className="link link-hover">
                    Privacy Policy
                </Link>
                <Link className="link link-hover">Terms & Condition</Link>
            </div>
            <div>
                <div className="content-gap-x text-3xl">
                    <Link>
                        <ImYoutube />
                    </Link>
                    <Link>
                        <BsFacebook />
                    </Link>
                    <Link>
                        <ImGithub />
                    </Link>
                </div>
            </div>
            <div>
                <p>
                    Copyright © 2022 - All right reserved by <span className="uppercase underline">Madroos</span> Ltd
                </p>
            </div>
        </footer>
    );
};

export default Footer;
