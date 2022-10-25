import React from "react";
import { IoIosPeople, IoMdTime, IoMdStar } from "react-icons/io";

const CourseCard = ({ course }) => {
    const { img, name, instructor, ratting, price, lesson, students, time } = course;
    return (
        <div className="rounded-3xl shadow-lg">
            <figure>
                <img className="w-full rounded-t-3xl" src={img} alt="Shoes" />
            </figure>
            <div className="px-5 grid grid-rows-card-body">
                <div class="border-b flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img className="w-10 rounded-full" src={instructor.img} alt="" />
                        <p className="text-lg font-semibold">{instructor.name}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <IoMdStar className="text-xl text-primary" />
                        <span className="text-lg font-bold">{ratting}</span>
                        <span className="text-sm">({students})</span>
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p>Price : {price}$</p>
                </div>
                <div class="border-t pt-3 pb-4 flex justify-between">
                    <div>Lesson {lesson}</div>
                    <div className="flex items-center gap-1">
                        <IoIosPeople className="text-xl text-primary" /> {students}
                    </div>
                    <div className="flex items-center gap-1">
                        <IoMdTime className="text-xl text-primary" />
                        {time}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
