import React from "react";
import Header from "../components/Reusable/Header";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const CoursesLayout = () => {
    const courses = useLoaderData();
    console.log(courses);

    return (
        <>
            <Header title={"Explore our course"} route={"Courses"} />
            <section className="my-container section-gap grid grid-cols-1 lg:grid-cols-[4fr_8fr] xl:grid-cols-[3fr_9fr] gap-6">
                <div className="h-max rounded-3xl shadow-lg p-5 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:content-gap-y bg-base-content/10">
                    <Link to={"/courses"} className="btn btn-primary">
                        Courses
                    </Link>
                    {courses.map((course) => (
                        <Link to={`/courses/course/${course.id}`} key={course.id} className="btn btn-primary">
                            {course.name}
                        </Link>
                    ))}
                </div>
                <Outlet />
            </section>
        </>
    );
};

export default CoursesLayout;
