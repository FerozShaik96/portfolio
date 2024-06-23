import { data } from "@/app/Utilities/data";

export default function ProjectCard({ FgIcon }) {
  return (
    <div className="w-full p-4 md:p-7 bg-white border-gray-300 border rounded-md shadow-md overflow-hidden transition duration-300 ease-in-out hover:transform hover:scale-102 hover:shadow-lg">
      <header>
        <CardHeader FgIcon={FgIcon} />
      </header>
      <hr />
      <main>
        <Languages data={data} />
      </main>
      <footer>
        <CardFooter FgIcon={FgIcon} />
      </footer>
    </div>
  );
}

function CardHeader({ FgIcon }) {
  return (
    <>
      <h3 className="text-md font-semibold text-gray-text">myportfolio</h3>
      <div className="flex flex-col md:flex-row mt-3 mb-4 gap-3">
        <div className="flex items-center justify-center md:justify-start border border-slate-500 py-2 px-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-light text-slate-500 hover:text-white text-base w-full md:w-auto">
          <FgIcon className="text-xl md:mr-2" />
          <p className="md:inline-block">Clone Project</p>
        </div>
        <div className="flex items-center justify-center md:justify-start border border-slate-500 py-2 px-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-light text-slate-500 hover:text-white text-base w-full md:w-auto">
          <FgIcon className="text-xl md:mr-2" />
          <p className="md:inline-block">Repo</p>
        </div>
      </div>
    </>
  );
}

function CardFooter({ FgIcon }) {
  return (
    <div className="flex mt-3 items-center text-sm text-gray-500 gap-5">
      <div className="flex items-center gap-1">
        <FgIcon /> <span>Stars</span>
      </div>
      <p>Updated on January 17, 2024</p>
    </div>
  );
}

function Languages({ data }) {
  return (
    <div className="mt-3 md:flex items-center gap-2">
      <p className="text-sm text-gray-700">Languages:</p>
      <div className="flex flex-wrap gap-3 mt-2 text-gray-700">
        {data.length !== 0 ? (
          data.map((item, index) => (
            <div key={index} className="flex flex-wrap gap-2">
              {Object.entries(item).map(([key, value]) => (
                <a
                  key={key}
                  className="text-xs bg-slate-100 p-1 rounded-md font-semibold"
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
