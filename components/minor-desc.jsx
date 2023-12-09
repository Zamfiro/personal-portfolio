"use client";

import React from "react";
import ProjectButtons from "@/components/projectButtons";
import dynamic from "next/dynamic";

const ImageCarousel = dynamic(() => import("./imageCarousel"));

function Minor() {
  const images = [
    {
      src: "/mobile-minor.png",
      width: 1080,
    },
    {
      src: "/song-selection.png",
      width: 1080,
    },
  ];

  const [imgArr, setImgArr] = React.useState(images);

  return (
    <>
      <h3 className="text-4xl sm:text-5xl font-bold text-accent mb-5">
        Minor{" "}
        <p className="sm:text-xl text-sm  font-light text-text">
          A semi-minimalistic audio player
        </p>
      </h3>

      <div className="lg:flex lg:space-x-8 ">
      <div className="flex justify-end md:w-fit w-full">
          <ImageCarousel images={imgArr} />
        </div>

        <div className="sm:flex sm:flex-col justify-center space-y-5">
          <h3 className="text-2xl font-bold  text-accent my-5">Inspiration </h3>
          <p className="text-xl  font-light text-text sm:hover:[&>_a]:underline">
            The waveform seeker was modeled using{" "}
            <a
              href="https://soundcloud.com/"
              className="font-bold text-accent"
              target="_blank"
            >
              Soundcloud
            </a>{" "}
            as inspiration and{" "}
            <a
              href="https://tidal.com/"
              className="font-bold text-accent"
              target="_blank"
            >
              Tidal
            </a>{" "}
            gave me an idea of what I would like the UI/UX to be.
          </p>

          <p className="[&>_span]:font-bold [&>_span]:text-accent">
            Tech used: <span>Next.js</span>, <span>Waveform.js</span>,{" "}
            <span>TailwindCSS</span>, <span>MaterialUI Icons</span>
          </p>

          <ProjectButtons
            demoUrl={"https://minor-beryl.vercel.app/"}
            githubUrl={"https://github.com/Zamfiro/Minor"}
            useDemo={true}
            useGithub={true}
          />
        </div>

       
      </div>
    </>
  );
}

export default Minor;
