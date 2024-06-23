import { FaGithub } from "react-icons/fa";
import ProjectCard from "@/app/components/Projects/ProjectCard";

export default function Project() {
  const projects = [
    { id: 1, FgIcon: FaGithub },
    { id: 2, FgIcon: FaGithub },
    { id: 3, FgIcon: FaGithub },
    { id: 4, FgIcon: FaGithub },
  ];

  return (
    <div className="bg-gray-back p-5 md:p-10 lg:20  md:pt-0 lg:pt-0pt-0 min-h-screen">
      <h1 className="text-5xl text-slate-700  py-20  font-extralight text-center">
        Recent Projects
      </h1>
      <div className="grid grid-cols-1   md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <div key={project.id} className="w-full sm:w-full drop-shadow-2xl">
            <ProjectCard key={project.id} FgIcon={project.FgIcon} />
          </div>
        ))}
      </div>
    </div>
  );
}
