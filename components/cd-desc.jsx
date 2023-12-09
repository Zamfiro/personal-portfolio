"use client";

import React from "react";
import ProjectButtons from "@/components/projectButtons";
import dynamic from "next/dynamic";

const ImageCarousel = dynamic(() => import("./imageCarousel"));

function CreatorDashboard() {
  return (
    <>
      <h3 className="text-4xl sm:text-5xl font-bold text-accent mb-5">
        Creator Dashboard{" "}
        <p className="sm:text-xl text-sm  font-light text-text">
          An app for tracking your performance on social media platforms
        </p>
      </h3>

      <div className="lg:flex lg:space-x-8 ">
        <div className="flex justify-center md:justify-start md:w-fit w-full">
          <video src="/CDP Demo.mp4" autoPlay={true} controlsList className="w-3/4 md:full" ></video>
        </div>

        <div className="sm:flex sm:flex-col justify-center space-y-5">
          <h3 className="text-2xl font-bold  text-accent my-5">Inspiration </h3>
          <p className="text-xl  font-light text-text sm:hover:[&>_a]:underline">
            <span className="block my-5 text-red-500">DISCLAIMER: Prototype</span>

            Content creation and consuption has become a normal activity among
            individuals. Modern UI/UX concepts and the desire to create a tool
            that would be useful to content creators motivated the creation of
            this project.


            <span className="block my-5">The finished product is meant to be a native mobile application.</span>
          </p>

          <p className="[&>_span]:font-bold [&>_span]:text-accent">
            Tech used: <span>Next.js</span>, <span>TailwindCSS</span>,{" "}
            <span>React-icons</span>
          </p>

          <ProjectButtons
            demoUrl={"https://creator-dashboard-prototype.vercel.app/"}
            githubUrl={"https://github.com/Zamfiro/creator-dashboard-prototype?tab=readme-ov-file"}
            useDemo={true}
            useGithub={true}
          />
        </div>
      </div>
    </>
  );
}

export default CreatorDashboard;
