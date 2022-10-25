import React from "react";
import Header from "./Reusable/Header";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "./Reusable/CourseCard";

const Courses = () => {
    const courses = useLoaderData();

    return (
        <>
            <Header title={"Explore our course"} route={"Courses"} />
            <section className="my-container section-gap grid grid-cols-1 lg:grid-cols-[4fr_8fr] xl:grid-cols-[3fr_9fr] gap-6">
                <div className="h-max rounded-3xl shadow-lg p-5 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:content-gap-y bg-base-content/10">
                    {courses.map((course) => (
                        <Link to={`course/${course.id}`} key={course.id} className="btn btn-primary">
                            {course.name}
                        </Link>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Courses;
