import React from "react";
import Collapse from "./Reusable/Collapse";
import Header from "./Reusable/Header";

const Blogs = () => {
    return (
        <section>
            <Header title={"Our Letest Blogs"} route={"Blogs"} />
            <article className="my-container sm:max-w-2xl section-gap content-gap-y">
                <Collapse
                    que={"What is cors ?"}
                    ans={
                        "Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos."
                    }
                />
                <Collapse
                    que={"Why are you using firebase ?"}
                    ans={
                        "Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity. Firebase can be used when you do not want to spend a lot of time developing your own backend. We can use it for authenticatiom, hostion, server etc."
                    }
                />
                <Collapse
                    que={"What other options do you have to implement authentication ?"}
                    ans={"Auth0, MongoDB, Passport, Okta & Amazon-cognito etc are the most popular alternatives and competitors to Firebase Authentication."}
                />
                <Collapse
                    que={"How does the private route work ?"}
                    ans={
                        "The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property."
                    }
                />
                <Collapse
                    que={"What is Node ? How does Node work ?"}
                    ans={
                        "It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive."
                    }
                />
            </article>
        </section>
    );
};

export default Blogs;
