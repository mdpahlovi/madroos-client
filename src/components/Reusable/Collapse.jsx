import React from "react";

const Collapse = ({ que, ans }) => {
    return (
        <div className="collapse collapse-arrow p-2 bg-base-content/10 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title text-2xl font-bold flex justify-between">{que}</div>
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
