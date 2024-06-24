import { FaGithub } from 'react-icons/fa';
import { ProjectData, NavData } from '@/app/Utilities/data';
import ProjectCard from '@/app/components/Projects/ProjectCard';

export default function Project() {
  const FgIcon = FaGithub;
  return (
    <section
      id={NavData.Projects.page}
      className="lg:20 lg:pt-0pt-0 min-h-screen bg-gray-back p-5 md:p-10 md:pt-0"
    >
      <h1 className="py-20 text-center text-5xl font-extralight text-slate-700">
        Recent Projects
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {ProjectData.map((project) => (
          <div key={project.id} className="w-full drop-shadow-2xl sm:w-full">
            <ProjectCard key={project.id} project={project} FgIcon={FgIcon} />
          </div>
        ))}
      </div>
    </section>
  );
}
