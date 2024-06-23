import { experienceData } from '@/app/Utilities/data';
import pace from '@/public/pace.png';
import simpana from '@/public/simpana.png';
import vendify from '@/public/vendify.png';
import Image from 'next/image';

export default function Experience() {
  const imagdata = [simpana, vendify, pace];
  return (
    <div className="h-full">
      <h1 className="mt-20 text-center text-5xl font-extralight text-gray-text">
        Experiences
      </h1>
      <div className="mt-10 grid grid-cols-1 gap-y-8 p-4 lg:mx-auto lg:w-5/6 lg:grid-cols-2 lg:gap-y-14">
        {experienceData.map((item, index) => (
          <div key={index} className="mx-auto">
            <Image
              src={imagdata[index]}
              alt={item.about}
              className="h-auto w-[300px]"
            />
            <div className="mt-6 flex flex-col items-center justify-center text-lg font-light text-gray-700">
              <p className="">{item.role}</p>
              <p>{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
