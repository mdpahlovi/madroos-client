import React from "react";

const CourseMeterial = ({ className, time, lesson }) => {
    return (
        <div className={`${className}`}>
            <div className="rounded-lg shadow bg-base-content/10 p-6 md:p-8 content-gap-y">
                <h3 className="text-3xl font-bold">Material Includes</h3>
                <ul className="pl-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    <li className="list-decimal">{time} on-demand video</li>
                    <li className="list-decimal">{lesson * 10} downloadable resources</li>
                    <li className="list-decimal">Full lifetime access</li>
                    <li className="list-decimal">Assignments</li>
                    <li className="list-decimal">Certificate of Completion</li>
                </ul>
            </div>
        </div>
    );
};

export default CourseMeterial;
