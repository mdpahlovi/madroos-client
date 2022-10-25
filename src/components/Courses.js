import React from "react";
import Header from "./Reusable/Header";
import { useLoaderData } from "react-router-dom";
import CourseCard from "./Reusable/CourseCard";

const Courses = () => {
    const courses = useLoaderData();

    return (
        <>
            <Header title={"Explore our course"} route={"Courses"} />
            <section className="my-container section-gap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </section>
        </>
    );
};

export default Courses;
