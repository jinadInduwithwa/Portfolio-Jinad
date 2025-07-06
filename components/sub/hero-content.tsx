"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer
          </h1>
          
          
        </motion.div>
        

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              amazing
            </span>{" "}
            software projects with care.
          </span>
        </motion.div>


        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I'm an undergraduate Full Stack Developer with hands-on experience in web,
          mobile, and software projects. Take a look at my work and what I can do.
        </motion.p>

        {/* Additional Details Section */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-400 my-1 max-w-[600px]"
          >
           <p>
            I'm currently focused on building modern full-stack applications using powerful technologies like React, Next.js, Node.js, and Spring Boot. My passion lies in developing clean and responsive user interfaces, writing scalable and efficient backend logic, and seamlessly integrating RESTful APIs and third-party services. <br /><br />
            Throughout my academic journey, I've worked on a variety of real-world projects that reflect practical problem-solving and creative thinking — from dynamic e-commerce platforms and inventory management systems to responsive mobile-first web apps. These experiences have not only strengthened my technical skills but also taught me the importance of writing clean code, following good architecture practices, and collaborating in team environments. <br /><br />
            Whether it's building the frontend from scratch or designing robust backend services, I love the challenge of bringing ideas to life through code. Feel free to explore my portfolio and see the work I've done so far!
          </p>

          </motion.div>
        )}

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          onClick={toggleDetails}
        >
          {isExpanded ? "Show Less" : "Learn More"}
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};