import React from "react";

const Collapse = ({ que, ans }) => {
    return (
        <div className="card rounded-lg bg-base-content/10 shadow">
            <div className="card-body">
                <h2 className="card-title text-2xl">{que}</h2>
                <p>{ans}</p>
            </div>
        </div>
    );
};

export default Collapse;
