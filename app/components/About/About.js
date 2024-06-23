import Image from "next/image";
import { AboutData } from "@/app/Utilities/data";
import shahid from "@/public/shahid.png";

export default function About() {
  const { title, size, image, message } = AboutData;

  return (
    <div className="bg-gray-About min-h-full p-12 md:p-28 ">
      <div className="grid lg:grid-cols-3  items-center grid-cols-1">
        <div className="hidden  lg:block">
          <Image
            src={shahid}
            alt="shahid's Photo"
            width={size}
            height={size}
            className="rounded-full shadow-md"
          />
        </div>
        <div className="col-span-2 md:ms-12 md:text-center ">
          <h1 className="text-2xl lg:text-4xl  text-center font-light text-gray-800">
            {title}
          </h1>
          <p className="mt-4 text-gray-600 text-base ps-1 md:text-center lg:text-lg font-light">
            {message}
          </p>
          <div className="text-center">
            <button className="mt-4  py-2 px-3 border transition duration-300 ease-in-out hover:bg-zinc-900 hover:text-white border-slate-900 rounded-md">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
