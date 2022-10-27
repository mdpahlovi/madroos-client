import React, { useContext } from "react";
import Input from "./Reusable/Input";
import Header from "./Reusable/Header";
import { ImGoogle, ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import { toast } from "react-toastify";
import { getThemeValue } from "../Utilities/getThemeValue";

const Signin = () => {
    const { signIn, signInByGoogle, signInByFacebook, signInByGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const loaction = useLocation();
    const from = loaction.state?.from?.pathname || "/";

    const handelSubmit = (event) => {
        // Get Form Data
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                toast.success("User Signin Completed", {
                    theme: getThemeValue(),
                });
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                if (errorMessage === "Firebase: Error (auth/wrong-password).") {
                    toast.error("OPPS ! Your password didn't match", {
                        theme: getThemeValue(),
                    });
                    form.reset();
                } else if (errorMessage === "Firebase: Error (auth/user-not-found).") {
                    toast.error("OPPS ! User doesn't found", {
                        theme: getThemeValue(),
                    });
                    form.reset();
                }
            });
    };

    // Social Signin
    const handelGoogleSignIn = () => {
        signInByGoogle()
            .then((result) => {
                toast.success("Google Signin Done", {
                    theme: getThemeValue(),
                });
                navigate(from, { replace: true });
            })
            .catch((error) => console.error(error));
    };
    const handelFacebookSignIn = () => {
        signInByFacebook()
            .then((result) => {
                toast.success("Facebook Signin Done", {
                    theme: getThemeValue(),
                });
                navigate(from, { replace: true });
            })
            .catch((error) => console.error(error));
    };
    const handelGithubSignIn = () => {
        signInByGithub()
            .then((result) => {
                toast.success("Github Signin Done", {
                    theme: getThemeValue(),
                });
                navigate(from, { replace: true });
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
            <Header title={"SignIn your account"} route={"Signin"}></Header>
            <section className="form-container section-gap content-gap-y">
                <form onSubmit={handelSubmit} className="content-gap-y">
                    <Input type={"email"} name={"email"} text={"Email"} />
                    <Input type={"password"} name={"password"} text={"Password"} />
                    <div className="content-gap-x flex-wrap justify-between items-center">
                        <label className="label cursor-pointer">
                            <span className="mr-2">Remember me</span>
                            <input type="checkbox" className="checkbox checkbox-primary" />
                        </label>
                        <a className="link" href="/">
                            Forgot password?
                        </a>
                    </div>
                    <input type={"submit"} value="Sign In" className="btn btn-primary" />
                </form>
                <div className="line-x">
                    <p className="mx-2">Or Sign in with</p>
                </div>
                <div className="content-gap-y xs:flex-row justify-between">
                    <button onClick={handelGoogleSignIn} className="btn btn-outline btn-primary gap-1.5">
                        <ImGoogle />
                        Google
                    </button>
                    <button onClick={handelFacebookSignIn} className="btn btn-outline btn-primary gap-1.5">
                        <BsFacebook />
                        Facebook
                    </button>
                    <button onClick={handelGithubSignIn} className="btn btn-outline btn-primary gap-1.5">
                        <ImGithub />
                        Github
                    </button>
                </div>
                <p className="text-center">
                    Don't have an account?
                    <Link to="/signup" className="ml-1.5 font-bold uppercase underline">
                        Sign Up Now
                    </Link>
                </p>
            </section>
        </>
    );
};

export default Signin;
