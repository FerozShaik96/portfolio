'use client';
import ProgressBar from '@ramonak/react-progress-bar';
import { skillsData } from '@/app/Utilities/data';
export default function SoftSkills() {
  const oneSideSoft = [];
  const secondSideSoft = [];
  skillsData.softSkills.forEach((skill, index) => {
    if (Math.floor(skillsData.softSkills.length / 2 > index)) {
      oneSideSoft.push(skill);
    } else {
      secondSideSoft.push(skill);
    }
  });
  console.log(oneSideSoft);
  console.log(secondSideSoft);
  return (
    <div className="h-full justify-center md:flex md:gap-x-6 lg:gap-x-6">
      <div>
        {oneSideSoft.map((skill) => (
          <div className="mb-3 w-full md:w-56 lg:w-96" key={skill.name}>
            <p className="mb-1 text-gray-text">{skill.name}</p>
            <ProgressBar
              completed={skill.value}
              customLabel=" "
              height="15px"
              bgColor="#0D6EFD"
              animateOnRender={true}
            />
          </div>
        ))}
      </div>
      <div>
        {secondSideSoft.map((skill) => (
          <div className="mb-3 w-full md:w-56 lg:w-96" key={skill.name}>
            <p className="mb-1 text-gray-text">{skill.name}</p>
            <ProgressBar
              completed={skill.value}
              customLabel=" "
              bgColor="#0D6EFD"
              height="15px"
              animateOnRender={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
