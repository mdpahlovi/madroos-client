import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Input from "./Reusable/Input";
import Header from "./Reusable/Header";
import { AuthContext } from "../context/UserContext";
import { toast } from "react-toastify";
import { getThemeValue } from "../Utilities/getThemeValue";

const Signup = () => {
    const { createUser } = useContext(AuthContext);

    const handelSubmit = (event) => {
        // Get Form Data
        event.preventDefault();
        const form = event.target;
        const name = `${form.fastName.value} ${form.lastName.value}`;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        // Check Password
        if (password.length < 6) {
            toast.error("OPPS ! Password sould be 6 cherecter or more", {
                theme: getThemeValue(),
            });
            return;
        }
        if (password !== confirmPassword) {
            toast.error("OPPS ! Your password didn't match", {
                theme: getThemeValue(),
            });
            return;
        }

        // Create New User
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                user.displayName = name;
                form.reset();
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
            <Header title={"Create a new user"} route={"Signup"}></Header>
            <section className="form-container section-gap content-gap-y">
                <form onSubmit={handelSubmit} className="content-gap-y">
                    <div className="content-gap-y xs:flex-row justify-between">
                        <Input type={"text"} name={"fastName"} text={"Fast Name"} />
                        <Input type={"text"} name={"lastName"} text={"Last Name"} />
                    </div>
                    <Input type={"email"} name={"email"} text={"Email"} />
                    <Input type={"password"} name={"password"} text={"Password"} />
                    <Input type={"password"} name={"confirmPassword"} text={"Confirm Password"} />
                    <label className="label justify-start cursor-pointer">
                        <input type="checkbox" className="checkbox checkbox-primary" />
                        <p className="ml-2">
                            I agree to the
                            <a className="ml-2 underline" href="/">
                                Terms & Conditions
                            </a>
                        </p>
                    </label>
                    <input type={"submit"} value="Sign Up" className="btn btn-primary" />
                </form>
                <p className="text-center">
                    If you already a user?
                    <Link to="/signin" className="ml-1.5 font-bold uppercase underline">
                        Sign In Now
                    </Link>
                </p>
            </section>
        </>
    );
};

export default Signup;
