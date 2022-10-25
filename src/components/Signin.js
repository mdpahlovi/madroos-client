import React, { useContext } from "react";
import Input from "./Reusable/Input";
import Header from "./Reusable/Header";
import { ImGoogle, ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const Signin = () => {
    const { signIn, signInByGoogle, signInByFacebook, signInByGithub } = useContext(AuthContext);

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch((error) => console.error(error));
    };

    // Social Signin
    const handelGoogleSignIn = () => {
        signInByGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.error(error));
    };
    const handelFacebookSignIn = () => {
        signInByFacebook()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.error(error));
    };
    const handelGithubSignIn = () => {
        signInByGithub()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
            <Header title={"SignIn your account"} route={"Signin"} />
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
