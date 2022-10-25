import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="relative section-gap h-auto xs:h-[624px]">
            <div className="my-hero bg-hero"></div>
            <div className="myhero-overlay"></div>
            <div className="myhero-content">
                <h1 className="text-6xl text-primary font-bold">Let’s Started</h1>
                <h2 className="text-5xl xs:text-center font-bold">Learning Skills &amp; Upgrade Your Life</h2>
                <div className="content-gap-x flex-wrap">
                    <div className="flex items-center gap-2">
                        <BsCheckCircleFill className="text-xl text-primary" />
                        Experts Advisors
                    </div>
                    <div className="flex items-center gap-2">
                        <BsCheckCircleFill className="text-xl text-primary" />
                        538+ Courses
                    </div>
                    <div className="flex items-center gap-2">
                        <BsCheckCircleFill className="text-xl text-primary" />
                        Events &amp; Program
                    </div>
                </div>
                <div className="content-gap-x flex-wrap">
                    <Link to={"/"} className="btn btn-primary w-full xs:w-auto">
                        Get Started
                    </Link>
                    <Link to={"/courses"} className="btn btn-outline btn-primary w-full xs:w-auto">
                        Our Courses
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
