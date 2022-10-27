import React from "react";
import { Link } from "react-router-dom";
import Header from "./Reusable/Header";

const CheckoutError = () => {
    return (
        <>
            <Header title={"Please Signin First"} route={"Checkout"} />
            <section className="my-container section-gap flex flex-col justify-center items-center gap-6">
                <h1 className="text-5xl text-center font-bold">
                    Go to
                    <Link className="ml-4 uppercase underline" to={"/courses"}>
                        COURSE Page
                    </Link>
                </h1>
                <h1 className="text-5xl text-center font-bold"> & </h1>
                <h1 className="text-5xl text-center font-bold">Select Any Course</h1>
            </section>
        </>
    );
};

export default CheckoutError;
