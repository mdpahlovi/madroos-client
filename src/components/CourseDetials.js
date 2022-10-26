import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IoMdStar } from "react-icons/io";

const CourseDetials = () => {
    const course = useLoaderData();
    const { img, instructor, ratting, price, lesson, students, time } = course;
    return (
        <section className="grid grid-cols-[8fr_4fr] gap-8">
            <div className="rounded-lg bg-base-content/10 border border-base-content/50 p-8">
                <img className="rounded-lg" src={img} alt="" />
            </div>
            <div className="h-max rounded-lg bg-base-content/10 border border-base-content/50 p-8 content-gap-y">
                <h3 className="text-3xl font-bold">Price : {price}$</h3>
                <div className="grid grid-cols-2 gap-5">
                    <Link className="btn btn-primary">CheckOut</Link>
                    <button className="btn btn-primary btn-outline">Download PDF</button>
                </div>
                <div>
                    <div className="border-t border-base-content/50 py-3">Total Student: {students}</div>
                    <div className="border-t border-base-content/50 py-3">Instructor: {instructor.name}</div>
                    <div className="border-t border-base-content/50 py-3">Lesson: {lesson}</div>
                    <div className="border-t border-base-content/50 py-3">Duration: {time}</div>
                    <div className="border-y border-base-content/50 py-3 flex items-center gap-1">
                        Ratting: <IoMdStar className="text-xl text-primary" />
                        <span className="text-lg font-bold">{ratting}</span>
                        <span className="text-sm">({students})</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetials;
