import React from "react";
import Collapse from "./Reusable/Collapse";
import Header from "./Reusable/Header";

const FAQ = () => {
    return (
        <>
            <Header title={"Commonly Asked Questions"} route={"FAQ"}></Header>
            <article className="my-container md:max-w-3xl section-gap content-gap-y">
                <Collapse
                    que={"Can I learn at my own pace ?"}
                    ans={
                        "This is another common question that people have about online courses. There are usually self-paced programs and traditional classroom or meeting-style programs available. Today’s world is full of busy people that want to better themselves, so the self-paced programs are popular. Whether or not you provide this option, be sure to answer this question for people and explain the pros and cons of each type of learning. As a bonus, you can even invite them to contact you for more information or to discuss what their options are. "
                    }
                />
                <Collapse
                    que={"Are you licensed orginization ?"}
                    ans={
                        "There isn’t always a need for licensing or accreditation for online courses. However, some programs do require it. Either way, people will usually ask what type of training or background you have, as well as any licensing that’s available if that’s relevant. Make sure that you answer this question by telling them if you do hold any licenses or accreditation, as well as by explaining whether or not those are needed, and why. It gives them the confidence that you have the right experience and boosts your credibility because you’re offering additional information for the sake of education alone."
                    }
                />
                <Collapse
                    que={"Does this course really work for me?"}
                    ans={
                        "There’s always a skeptic, and when it comes to online learning, there are often several of them. Everyone wants to know if online courses “really work”—and that’s a hard question to answer because there are several factors to consider. On a general basis, yes, online learning can be effective. However, that depends on whether the courses are set up properly, the provider is educated and experienced, and if the person taking the courses does well in a virtual learning environment. You should be able to explain these things to people so that they know what they’re getting into. Then, you can invite them to contact you to discuss whether it would be right for them. "
                    }
                />
                <Collapse
                    que={"What types of assignments do you give?"}
                    ans={
                        "Like knowing the format of online learning, people often want to know the type of work they’ll be doing when they take online courses. Be sure to provide a glimpse of what you offer here and link to previous projects or assignments if you can. You can also link to course or program pages. As long as you explain to people how the courses are taught and what they can expect in terms of coursework, you’ll be helping them make a better decision about their educational needs. "
                    }
                />
                <Collapse
                    que={"What are the requirements to take the courses or sign up with your website?"}
                    ans={
                        "People will want to know how to get started. You can link them to the pages on your website that help them through that process, but you’ll also want to take the time to explain it to them here. If you have certain enrollment windows, for example, list those. If payment or deposits are required, explain that, as well. Make sure that people know exactly what they need to do to take online courses from you, no matter what those courses might be. "
                    }
                />
            </article>
        </>
    );
};

export default FAQ;
