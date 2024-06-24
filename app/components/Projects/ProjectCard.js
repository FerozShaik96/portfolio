import { data } from '@/app/Utilities/data';

export default function ProjectCard({ project, FgIcon }) {
  return (
    <div className="hover:scale-102 w-full overflow-hidden rounded-md border border-gray-300 bg-white p-4 shadow-md transition duration-300 ease-in-out hover:transform hover:shadow-lg md:p-7">
      <header>
        <CardHeader projectData={project} FgIcon={FgIcon} />
      </header>
      <hr />
      <main>
        <Languages projectLan={project} />
      </main>
      <footer>
        <CardFooter ProjectDataUpdate={project} FgIcon={FgIcon} />
      </footer>
    </div>
  );
}

function CardHeader({ projectData, FgIcon }) {
  return (
    <>
      <h3 className="text-md font-semibold text-gray-text">
        {projectData.projectName}
      </h3>
      <div className="mb-4 mt-3 flex flex-col gap-3 md:flex-row">
        <a
          href={projectData.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-md border border-slate-500 px-3 py-2 text-base text-slate-500 transition duration-300 ease-in-out hover:bg-gray-light hover:text-white md:w-auto md:justify-start"
        >
          <FgIcon className="text-xl md:mr-2" />
          <p className="md:inline-block">Clone Project</p>
        </a>
        <a
          href={projectData.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-md border border-slate-500 px-3 py-2 text-base text-slate-500 transition duration-300 ease-in-out hover:bg-gray-light hover:text-white md:w-auto md:justify-start"
        >
          <FgIcon className="text-xl md:mr-2" />
          <p className="md:inline-block">Repo</p>
        </a>
      </div>
    </>
  );
}

function CardFooter({ ProjectDataUpdate, FgIcon }) {
  return (
    <div className="mt-3 flex items-center gap-5 text-sm text-gray-500">
      <div className="flex items-center gap-1">
        <FgIcon /> <span>Stars</span>
      </div>
      <p>
        Updated on <span className="me-1">{ProjectDataUpdate.monthUpdate}</span>
        <span className="me-1">{ProjectDataUpdate.dateUpdate}</span>
        <span>{ProjectDataUpdate.yearUpdate}</span>
      </p>
    </div>
  );
}

function Languages({ projectLan }) {
  const data = [
    projectLan.Javascript ? { JavaScript: projectLan.Javascript } : '',
    projectLan.CSS ? { CSS: projectLan.CSS } : '',
    projectLan.HTML ? { HTML: projectLan.HTML } : '',
  ].filter(Boolean);
  return (
    <div className="mt-3 items-center gap-2 md:flex">
      <p className="text-sm text-gray-700">Languages:</p>
      <div className="mt-2 flex flex-wrap gap-3 text-gray-700">
        {data.length !== 0 ? (
          data.map((item, index) => (
            <div key={index} className="flex flex-wrap gap-2">
              {Object.entries(item).map(([key, value]) => (
                <a
                  key={key}
                  className="rounded-md bg-slate-100 p-1 text-xs font-semibold"
                >
                  {key}: {value}
                </a>
              ))}
            </div>
          ))
        ) : (
          <p className="text-sm">code yet to be deployed</p>
        )}
      </div>
    </div>
  );
}
