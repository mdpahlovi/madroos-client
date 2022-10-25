import React from "react";
import { Link } from "react-router-dom";
import { ImYoutube, ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="footer border-t border-base-300 gap-y-5 footer-center section-gap px-6 text-base text-base-content">
            <div className="content-gap-x">
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
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
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;
