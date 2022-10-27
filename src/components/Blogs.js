import React from "react";
import BlogCard from "./Reusable/BlogCard";
import Header from "./Reusable/Header";

const Blogs = () => {
    return (
        <>
            <Header title={"Our Letest Blogs"} route={"Blogs"}></Header>
            <article className="my-container section-gap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <BlogCard
                    que={"What is cors?"}
                    ans={
                        "Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos."
                    }
                />
                <BlogCard
                    que={"Why are you using firebase?"}
                    ans={
                        "Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity. Firebase can be used when you do not want to spend a lot of time developing your own backend. We can use it for authenticatiom, hostion, server etc."
                    }
                />
                <BlogCard
                    que={"What other options do you have to implement authentication ?"}
                    ans={"Auth0, MongoDB, Passport, Okta & Amazon-cognito etc are the most popular alternatives and competitors to Firebase Authentication."}
                />
                <BlogCard
                    que={"How does the private route work?"}
                    ans={
                        "The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property."
                    }
                />
                <BlogCard
                    que={"What is Node?"}
                    ans={
                        "Node.js is the JavaScript runtime environment which is based on Google’s V8 Engine i.e. with the help of Node.js we can run the JavaScript outside of the browser. Other things that you may or may not have read about Node.js is that it is single-threaded, based on event-driven architecture, and non-blocking based on the I/O model."
                    }
                />
                <BlogCard
                    que={"How does Node work?"}
                    ans={
                        "It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive."
                    }
                />
            </article>
        </>
    );
};

export default Blogs;
