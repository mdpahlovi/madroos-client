import React from "react";
import Hero from "./Hero";
import AboutImg from "../images/about.jpg";
import FeedBack from "./Reusable/FeedBack";
import S1 from "../images/S1.jpg";
import S2 from "../images/S2.jpg";
import S3 from "../images/S3.jpg";
import S4 from "../images/S4.jpg";

const Home = () => {
    return (
        <>
            <Hero />
            <section className="my-container section-gap">
                <div className="grid grid-cols-1 lg:grid-cols-[4fr_8fr] items-center gap-x-8 xl:gap-x-12 gap-y-8">
                    <img src={AboutImg} alt="" className="w-auto mx-auto rounded-lg" />
                    <div>
                        <div className="line-x max-w-md mx-auto lg:mx-0 mb-2">
                            <h5 className="text-base-content/50 mx-2">Why choose Madroos</h5>
                        </div>
                        <h1 className="text-5xl text-center lg:text-left font-bold">About US</h1>
                        <p className="py-6">
                            Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value via focused
                            benefits. Rapidiously redefine highly efficient niche markets with plug-and-play materials professionally seize client centric
                            solutions
                        </p>
                        <div className="stats stats-vertical sm:stats-horizontal shadow">
                            <div className="stat">
                                <div className="text-sm text-base-content/50 mb-2">Successflly Trained</div>
                                <div className="text-3xl font-bold">3526+</div>
                            </div>
                            <div className="stat">
                                <div className="text-sm text-base-content/50 mb-2">Classes Completed</div>
                                <div className="text-3xl font-bold">12,36+</div>
                            </div>
                            <div className="stat">
                                <div className="text-sm text-base-content/50 mb-2">Satisfaction Rate</div>
                                <div className="text-3xl font-bold">97%</div>
                            </div>
                            <div className="stat">
                                <div className="text-sm text-base-content/50 mb-2">Success Rate</div>
                                <div className="text-3xl font-bold">96%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-container section-gap text-center">
                <div className="line-x max-w-md mx-auto">
                    <h5 className="text-base-content/50 mx-2">What student says</h5>
                </div>
                <h1 className="text-5xl font-bold mt-2 mb-10">Student’s Testimonials</h1>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <FeedBack
                            img={S1}
                            name={"MD Pahlovi"}
                            work={"Web DeveLoper At Google"}
                            feedback={
                                "My experience at Madroos is great and memorable. The mentors at Madroos helped us enhance my academic and interpersonal skills. I am thankful to Training & Placement cell for providing a platform to enhance my skills and an opportunity to showcase them."
                            }
                        />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <FeedBack
                            img={S2}
                            name={"MD Hasan"}
                            work={"Web Designer At Twitter"}
                            feedback={
                                "It was my immense luck and fortune to be the part of Madroos where I can grow. The entire faculty and department leaves no stone unturned to shape one's future. My 6 month at Madroos have been a wonderful experience of learning with prolific exposure to outside."
                            }
                        />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <FeedBack
                            img={S3}
                            name={"MD Rofiq"}
                            work={"Web DeveLoper At Facebook"}
                            feedback={
                                "My experience at Madroos is great and memorable. Huge respect, love and devotion for entire faculty members and department. It's their efforts that make me to count myself into better professionals."
                            }
                        />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <FeedBack
                            img={S4}
                            name={"MD Salman"}
                            work={"Web Designer At Amazon"}
                            feedback={
                                "Great experience from Madroos. You get a lot of opportunities. Work hard to get it. Be prepared for everything. Maintain your attendance."
                            }
                        />
                    </div>
                </div>
                <div className="mt-5 content-gap-x justify-center">
                    <a href="#item1" className="btn btn-xs btn-circle hover:bg-base-content/75">
                        1
                    </a>
                    <a href="#item2" className="btn btn-xs btn-circle hover:bg-base-content/75">
                        2
                    </a>
                    <a href="#item3" className="btn btn-xs btn-circle hover:bg-base-content/75">
                        3
                    </a>
                    <a href="#item4" className="btn btn-xs btn-circle hover:bg-base-content/75">
                        4
                    </a>
                </div>
            </section>
        </>
    );
};

export default Home;
