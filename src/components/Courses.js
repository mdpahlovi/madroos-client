import React from "react";

import { useLoaderData } from "react-router-dom";
import CourseCard from "./Reusable/CourseCard";

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
};

export default Courses;
