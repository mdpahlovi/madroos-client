import React from "react";

const CouseAbout = ({ className, about }) => {
    return (
        <div className={`${className}`}>
            <div className="rounded-lg shadow bg-base-content/10 p-6 md:p-8 content-gap-y">
                <h3 className="text-3xl font-bold">About This Course ?</h3>
                <h3>{about}</h3>
            </div>
        </div>
    );
};

export default CouseAbout;
