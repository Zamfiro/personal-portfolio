"use client";

import { KeyboardArrowUp } from "@mui/icons-material";
import { useEffect, useState, useRef, lazy } from "react";
import { ThemeToggle } from "@/components/themeToggle";
import useIsVisible from "@/components/useIsVisible";
import TechCarousel from "@/components/carousel";
import Footer from "@/components/footer";
import ContactForm from "@/components/contactForm";
import RelevantLinks from "@/components/relevantLinks";
import Minor from "@/components/minor-desc";
import CD from "@/components/cd-desc";

export default function Home() {
  const isBrowser = () => typeof window !== "undefined";
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setTimeout(() => {
      if (isScrolling) {
        setIsScrolling(true);
      } else setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const ScrollToContent = () => {
    if (!isBrowser()) return;

    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);

  const ref5 = useRef();
  const isVisible5 = useIsVisible(ref5);

  return (
    <main className="flex min-h-screen bg-background flex-col justify-between transition-colors duration-1000 ">
      <section
        about="Hello"
        className="z-10 bg-fixed px-8 h-screen flex flex-col bg-gradient-from-tl shadow-inner from-primary to-background bg-gradient-to-br"
      >
        <div className="flex justify-end mt-5 fadeInUp-animation">
          <ThemeToggle />
        </div>
        <div className="fadeInUp-animation sm:px-32 text-text flex flex-col justify-center h-screen w-fill items-start">
          <h1 className="text-6xl font-bold fadeInUp-animation">
            Hi I&apos;m <span className="text-primary">Mihajlo</span>
          </h1>
          <p className="text-xl mt-2 fadeInUp-animation">
            My grandma says I&apos;m a genius.{" "}
            <span className="text-sm font-light italic text-accent dark:text-secondary block sm:inline">
              *i fixed the wifi*
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center w-full fadeInUp-animation">
          <div className="text-primary text-xs sm:text-sm md:text-lg font-light italic [&>p>_span]:text-accent [&>_span]:text-accent w-fit h-fit sm:px-32 fadeInUp-animation">
            Made using the finest ingredients provided by <span>Next.js</span> and{" "}
            <span>TailwindCSS</span>{" "}
            <p className="inline md:block">with help from <span>MaterialUI</span>, deployed on{" "}
            <span>Vercel</span></p>
          </div>
          <RelevantLinks />
        </div>
        <button
          className="flex flex-col p-2 items-center justify-center fadeInUp-animation "
          onClick={ScrollToContent}
        >
          <KeyboardArrowUp className="text-5xl text-primary animate-bounce" />
        </button>
      </section>

      <div className="px-12 md:px-24 lg:px-32 z-20">
        <section about="Bio" className={`h-screen md:h-1/2 text-text pt-12`}>
          <div
            ref={ref1}
            className={`flex text-text flex-col w-full h-full justify-center items-center transition-all ease-in-out duration-1000 ${
              isVisible1 ? "opacity-100" : "opacity-0 "
            } `}
          >
            <h1 className="text-3xl md:text-4xl font-light text-primary self-start">
              Bio
            </h1>

            <p className="text-xl mt-5">
              I&apos;m a 21 year old student based in{" "}
              <span className="italic">Maribor, Slovenia.</span> I&apos;m
              currently studying Software Engineering at the University of
              Maribor. I&apos;m a passionate{" "}
              <span className="font-bold italic text-accent">
                programmer and designer.
              </span>{" "}
              I love to create and design things that are both{" "}
              <i>beautiful and functional</i>.
            </p>

            <p className="text-xl  mt-5">
              I&apos;m like a German engine - I&apos;m{" "}
              <span className="font-bold text-accent italic">efficient</span>,{" "}
              <span className="font-bold text-accent italic">reliable</span> and{" "}
              <span className="font-bold text-accent italic">
                I don&apos;t break down
              </span>
              . My fatal flaw, though, is being a perfectionist. I&apos;m always
              trying to improve myself and inspire people around me.
              <p className="mt-5">
                I enjoy motorsports, rich stories and spending time with my
                friends.
              </p>
              <span className="block mt-5 italic text-primary">
                If you need me, I&apos;m probably doing side-quests.
              </span>
            </p>
          </div>
        </section>

        <section about="Education" className="min-h-1/2 w-full mt-20 text-text">
          <div
            ref={ref2}
            className={`flex text-text flex-col w-full h-full justify-center items-center transition-all ease-in-out duration-1000 ${
              isVisible2 ? "opacity-100" : "opacity-0 "
            } `}
          >
            <h1 className="text-3xl md:text-4xl font-light text-primary mb-5 self-start">
              Education
            </h1>

            <div className="flex w-full h-fit justify-center text-text">
              <ul className="divide-y-2 divide-primary w-full [&>*]:p-5 [&>*]:self-middle [&>*]:w-full">
                <li className="flex">
                  <div className="flex flex-col w-2/3 h-full">
                    <h3 className="text-sm sm:text-md md:text-xl font-semibold self-start">
                      Electrotechnic School &quot;Mija Stanimirović&quot;
                    </h3>
                    <div className="font-light text-xs sm:text-md md:text-lg italic text-text opacity-75 w-fill">
                      Sep 2017 - Jun 2019
                    </div>
                  </div>
                  <div className="font-light italic text-sm sm:text-md md:text-lg opacity-75 w-1/3 self-top text-right">
                    Niš
                  </div>
                </li>
                <li className="flex">
                  <div className="flex flex-col w-2/3 h-full">
                    <h3 className="text-sm sm:text-md md:text-xl font-semibold self-start">
                      Srednja elektro-računalniška šola - SERŠ
                    </h3>
                    <div className="font-light text-xs sm:text-md md:text-lg italic text-text opacity-75 w-fill">
                      Sep 2019 - Jun 2021
                    </div>
                    <div className="font-light text-xs sm:text-md md:text-lg italic text-text opacity-75 w-fill">
                      Diploma
                    </div>
                  </div>
                  <div className="font-light italic text-sm sm:text-md md:text-lg opacity-75 w-1/3 self-top text-right">
                    Maribor
                  </div>
                </li>
                <li className="flex">
                  <div className="flex flex-col w-2/3 h-full">
                    <h3 className="text-sm sm:text-md md:text-xl font-semibold self-start">
                      Fakulteta za elektrotehniko, računalništvo in informatiko
                      - FERI
                    </h3>
                    <div className="font-light text-xs sm:text-md md:text-lg italic text-text opacity-75 ">
                      Oct 2021
                    </div>
                  </div>
                  <div className="font-light italic text-sm sm:text-md md:text-lg opacity-75 w-1/3 self-top text-right">
                    Maribor
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section about="Technologies" className="min-h-1/3 mt-20">
          <div
            ref={ref4}
            className={`flex flex-col w-full h-full transition-all ease-in-out duration-1000 ${
              isVisible4 ? "opacity-100" : "opacity-0 "
            } `}
          >
            <h1 className="text-3xl md:text-4xl font-light text-primary mb-5 self-start">
              Skills
            </h1>
            <div className="flex justify-center text-center place-items-center w-full min-h-full">
              <TechCarousel />
            </div>
          </div>
        </section>

        <section about="Projects" className="min-h-screen mt-20">
          <div
            ref={ref3}
            className={`space-y-20 transition-opacity ease-in-out duration-1000 ${
              isVisible3 ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-3xl md:text-4xl font-light text-primary mb-5">
              Projects
            </h1>

            <div>
              <Minor />
            </div>

            <div>
              <CD />
            </div>
          </div>
        </section>

        <section
          about="Contact"
          className="flex flex-col h-screen justify-center text-center"
        >
          <div
            ref={ref5}
            className={`flex flex-col justify-center align-middle items-center transition-opacity ease-in-out duration-1000 ${
              isVisible5 ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-3xl md:text-4xl font-light text-primary mb-5 text-center">
              Contact
            </h1>

            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
