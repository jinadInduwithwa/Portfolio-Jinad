"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineItem {
  date: string;
  title: string;
  job: string;
  contents: string[];
}

interface TimelineProp {
  data: TimelineItem[];
}

export const Timeline = ({ data }: TimelineProp) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Update height on mount, resize, and data change
  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        console.log("Timeline height:", rect.height); // Debug height
        setHeight(rect.height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [data]);

  // Debug scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // Full container scroll
  });

  useEffect(() => {
    scrollYProgress.on("change", (value) => console.log("scrollYProgress:", value));
  }, [scrollYProgress]);

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div className="c-space section-spacing min-h-screen mx-10" ref={containerRef}>
      
      <h2 className="text-heading">My Work Experience</h2>
      <div ref={ref} className="relative pb-20">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
                <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                  <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
                </div>
                <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                  <h3>{item.date}</h3>
                  <h3 className="text-3xl text-neutral-400">{item.title}</h3>
                  <h3 className="text-3xl text-neutral-500">{item.job}</h3>
                </div>
              </div>
              <div className="relative w-full pl-20 pr-4 md:pl-4">
                <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden">
                  <h3>{item.date}</h3>
                  <h3>{item.job}</h3>
                </div>
                {item.contents.map((content, index) => (
                  <p className="mb-3 font-normal text-neutral-400" key={index}>
                    {content}
                  </p>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-neutral-400">No work experience data available.</p>
        )}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] z-50 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};