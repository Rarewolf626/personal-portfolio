import Image from "next/image";
import React from "react";
import styles from "@/app/page.module.css";
import { Gradient3 } from "./gradient";

function AboutMe() {
  return (
    <div className="md:-ml-10 md:pt-20 pt-16 text-justify items-cen flex xl:flex-row flex-col mb-4 mx-auto">
      <p
        className="md:text-6xl md:text-center text-center justify-start flex mx-auto mb-6 bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400 text-transparent sm:text-6xl text-6xl lg:text-6xl 2xl:text-7xl md:mt-20 lg:mt-12 xl:text-7xl font-display 2xl:max-w-4xl xl:max-w-4xl lg:max-w-3xl"
        aria-label="About me"
      >
        About me
      </p>
      <div className="leading-6 text-lg dark:text-slate-400 text-slate-600 md:leading-10 lg:text-center md:text-center xl:text-left text-left mx-auto text-md md:text-xl max-w-2xl md:max-w-3xl p-6 md:p-0">
        <p className="text-lg md:text-left text-left md:text-2xl md:leading-10 leading-6 dmsans">
          As a seasoned
          <span className="dark:text-teal-300 text-purple-500 poppins">
            {" "}
            Senior Full-Stack Engineer{" "}
          </span>
          <Gradient3 className={styles.logoGradient5} conic /> with over 9 years of experience, I bring a comprehensive skill set in both frontend and backend technologies.
          I am dedicated to leveraging my skills to solve complex challenges and drive technological innovation, with a track record of delivering
          <span className="dark:text-teal-300 text-purple-500 poppins">
            {" "}
            high-quality projects and contributing to team success.
          </span>{" "}<br />
          Let's connect and explore the endless possibilities in the world of technology!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
