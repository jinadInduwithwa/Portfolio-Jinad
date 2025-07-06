import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projects
      </h1>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-10 animate-scroll px-10 w-max">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              technologies={project.technologies} 
            />
          ))}

          {/* Repeat for seamless scroll */}
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={`${project.title}-duplicate-${index}`}
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              technologies={project.technologies} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
