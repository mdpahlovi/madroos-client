import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const Hero = () => {
    return (
        <div className="relative h-[624px]">
            <div className="my-hero bg-hero"></div>
            <div className="myhero-overlay"></div>
            <div className="myhero-content">
                <h1 className="text-6xl text-primary font-bold">Let’s Started</h1>
                <h2 className="text-5xl font-bold">Learning Skills &amp; Upgrade Your Life</h2>
                <div className="content-gap-x">
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
                <div className="content-gap-x">
                    <button to={"/"} className="btn btn-primary">
                        Get Started
                    </button>
                    <button to={"courses"} className="btn btn-outline btn-primary">
                        Our Courses
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
