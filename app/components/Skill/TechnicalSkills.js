'use client';
import { useState, useEffect } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { skillsData } from '@/app/Utilities/data';
export default function TechnicalSkills() {
  const [skills, setSkills] = useState({ oneSide: [], twoSide: [] });
  const fetchSkillsData = () => {
    const halfLength = Math.floor(skillsData.hardSkills.length / 2);
    const oneSideSkills = skillsData.hardSkills.slice(0, halfLength);
    const twoSideSkills = skillsData.hardSkills.slice(halfLength);

    setSkills({ oneSide: oneSideSkills, twoSide: twoSideSkills });
  };
  useEffect(() => {
    if (skillsData.hardSkills && skillsData.hardSkills.length > 0) {
      fetchSkillsData();
    }
  }, []);
  console.log(skills.oneSide);
  return (
    <div className="h-full justify-center md:flex md:gap-x-6 lg:gap-x-6">
      <div>
        {skills.oneSide.map((skill) => (
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
        {skills.twoSide.map((skill) => (
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
