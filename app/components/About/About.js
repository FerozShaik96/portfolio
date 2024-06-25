import Image from 'next/image';
import { AboutData, NavData } from '@/app/Utilities/data';
import Feroz from '@/public/Feroz.JPG';

export default function About() {
  const { title, size, image, message } = AboutData;

  return (
    <section
      id={NavData.About.page}
      className="min-h-full bg-gray-About p-12 pt-20 md:p-28"
    >
      <div className="grid grid-cols-1 items-center lg:grid-cols-3">
        <div className="hidden lg:block">
          <Image
            src={Feroz}
            alt="Feroz's Photo"
            width={size}
            height={size}
            className="rounded-full shadow-md"
          />
        </div>
        <div className="col-span-2 md:ms-12 md:text-center">
          <h1 className="mb-12 text-center text-2xl font-light text-gray-800 lg:text-5xl lg:font-extralight">
            {title}
          </h1>
          <p className="mt-4 ps-1 text-base font-light text-gray-600 md:text-center lg:text-lg">
            {message}
          </p>
          <a className="text-center">
            <button className="mt-6 rounded-md border border-slate-900 px-3 py-2 transition duration-300 ease-in-out hover:bg-zinc-900 hover:text-white">
              Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
