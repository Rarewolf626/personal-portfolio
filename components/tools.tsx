import React from "react";
import { Gradient } from "./gradient";
import styles from "@/app/page.module.css";
import me from "@/public/images/my_photo.png";
import Image from "next/image";

export default function Tools() {
  return (
    <div className="md:mt-[15rem] -mt-[2rem] mx-auto items-center justify-center max-w-7xl">
      <div className="mx-auto items-center justify-center grid grid-cols-1 lg:grid-cols-2 max-w-6xl">
        <Gradient className={styles.logoGradient2} conic />
        <div className="md:text-2xl mx-auto md:p-0 p-6 text-md md:leading-10  dark:text-slate-400 text-slate-600 leading-6 max-w-2xl md:max-w-3xl lg:max-w-xl">
          <div className="max-w-full text-lg md:text-left text-left md:text-2xl md:leading-10 leading-6 dmsans mx-auto">
          • Frontend Development: Proficient in React, Angular, and Vue, I excel in creating dynamic, user-centric web applications with a strong emphasis on performance and responsive design.<br />
          • Backend Development: Experienced in NodeJS, PHP, Laravel, and WordPress, I have a robust understanding of building scalable server-side applications and managing databases to deliver seamless and efficient solutions.<br />
          • Full-Stack Proficiency: My rich background in integrating frontend and backend technologies enables me to develop comprehensive solutions from concept to deployment, ensuring alignment with business goals and user needs.
          </div>
        </div>
        <Image
          src={me}
          height={400}
          width={400}
          className="md:block mt-6 mx-auto hidden rounded-full overflow-hidden hover:scale-110 scale-105 border-purple-400 hover:border-r-[0px] duration-500"
          alt="my picture"
        />
        <Image
          src={me}
          height={300}
          width={300}
          className="mx-auto p-6 md:hidden block pt-12 overflow-hidden hover:scale-110 scale-105 border-purple-400 hover:border-r-[0px] duration-500"
          alt="my picture"
        />
      </div>
    </div>
  );
}
