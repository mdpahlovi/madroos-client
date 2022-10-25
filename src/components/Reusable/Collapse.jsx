import React from "react";

const Collapse = ({ que, ans }) => {
    return (
        <div className="collapse collapse-arrow border border-base-content bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-bold flex justify-between">{que}</div>
            <div className="collapse-content">
                <p>
                    <span className="font-bold">Ans: </span>
                    {ans}
                </p>
            </div>
        </div>
    );
};

export default Collapse;
