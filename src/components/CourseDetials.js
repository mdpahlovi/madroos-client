import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import Header from "./Reusable/Header";
import CourseMeterial from "./Reusable/CourseMeterial";
import CouseAbout from "./Reusable/CouseAbout";
import ReactToPdf from "react-to-pdf";

const CourseDetials = () => {
    const course = useLoaderData();
    const { id, img, name, instructor, ratting, price, lesson, students, time, keyword, about } = course;

    // PDF Genarate Ref
    const ref = React.createRef();
    const options = {
        orientation: "landscape",
        unit: "in",
    };

    return (
        <>
            <Header title={name} route={"Course"}>
                <ReactToPdf targetRef={ref} filename="Course Details.pdf" options={options} x={0.5} y={0.25} scale={0.8}>
                    {({ toPdf }) => (
                        <div>
                            <button className="btn btn-primary" onClick={toPdf}>
                                Download PDF
                            </button>
                        </div>
                    )}
                </ReactToPdf>
            </Header>
            <section ref={ref} className="my-container section-gap grid grid-cols-1 lg:grid-cols-[8fr_4fr] gap-6 md:gap-8">
                <div className="content-gap-y gap-8">
                    <div className="rounded-lg shadow bg-base-content/10 p-0 sm:p-6 md:p-8">
                        <img className="rounded-lg" src={img} alt="" />
                        <div className="p-6 sm:pt-8 sm:p-0 content-gap-y">
                            <div className="flex flex-wrap gap-3">
                                {keyword.map((keyword, index) => (
                                    <button key={index} className="btn btn-xs btn-primary">
                                        {keyword}
                                    </button>
                                ))}
                            </div>
                            <h3 className="text-3xl font-bold">{name}</h3>
                        </div>
                    </div>
                    <CouseAbout className={"hidden lg:block"} about={about} />
                </div>
                <div className="content-gap-y gap-8">
                    <div className="h-max rounded-lg shadow bg-base-content/10 p-6 md:p-8 content-gap-y">
                        <h3 className="text-3xl font-bold">Price : {price}$</h3>
                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                            <div>Total Student: {students}</div>
                            <div>Instructor: {instructor.name}</div>
                            <div>Lesson: {lesson}</div>
                            <div>Duration: {time}</div>
                            <div className="flex items-center gap-1">
                                Ratting: <IoMdStar className="text-xl text-primary" />
                                <span className="text-lg font-bold">{ratting}</span>
                                <span className="text-sm">({students})</span>
                            </div>
                        </div>
                        <Link to={`/checkout/${id}`} className="btn btn-primary">
                            Get premium access
                        </Link>
                    </div>
                    <CourseMeterial className={"hidden lg:block"} time={time} lesson={lesson} />
                </div>
                <CouseAbout className={"lg:hidden"} about={about} />
                <CourseMeterial className={"lg:hidden"} time={time} lesson={lesson} />
            </section>
        </>
    );
};

export default CourseDetials;
