import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { slideInFromTop } from "@/lib/motion"; 
import { motion } from "framer-motion";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  technologies: readonly string[];  // <-- change here
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  technologies,
}: ProjectCardProps) => {
  return (
    <div className="relative w-[400px] h-[500px] bg-none rounded-lg shadow-lg border border-[#2A0E61] overflow-hidden">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-[220px] object-cover"
      />
      <div className="p-4 flex flex-col h-[calc(100%-220px)] justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-sm text-gray-300 line-clamp-5">{description}</p>
          {/* Technology Stack */}
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="Welcome-box py-[5px] px-[10px] border border-[#7042f88b] opacity-[0.9] rounded-md bg-[#1a1a1a]"
              >
                <h1 className="Welcome-text text-[12px] text-[#b49bff]">
                  {tech}
                </h1>
              </div>
            ))}

          </div>
        </div>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 bg-white/50 text-black px-3 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
        >
          <Github/>
        </Link>
      </div>
    </div>

  );
};
