'use client';
import React from 'react';
import { useState } from 'react';
import TechnicalSkills from './TechnicalSkills';
import SoftSkills from './SoftSkills';
function Skills() {
  const [activeTab, setActiveTab] = useState('TechnicalSkills');
  return (
    <div className="flex h-full items-center justify-center py-12 md:pb-16 md:pt-20 lg:pb-20 lg:pt-32">
      <div className="w-full md:w-[448px] lg:w-[775px]">
        <h1 className="mb-12 text-center text-5xl font-light text-gray-text">
          Skills
        </h1>
        <div className="mb-5 flex items-center py-2">
          <div
            className={`w-full text-center focus:outline-none md:w-56 lg:w-96 ${
              activeTab === 'TechnicalSkills'
                ? 'rounded-t-lg border-x border-t'
                : 'rounded-t-lg border-b hover:border-x hover:border-t'
            }`}
          >
            <button
              className="w-full py-3"
              onClick={() => setActiveTab('TechnicalSkills')}
            >
              Technical Skills
            </button>
          </div>
          <div
            className={`w-full text-center focus:outline-none md:w-56 lg:w-96 ${
              activeTab === 'SoftSkills'
                ? 'rounded-t-lg border-x border-t'
                : 'rounded-t-lg border-b hover:border-x hover:border-t'
            }`}
          >
            <button
              className="w-full py-3"
              onClick={() => setActiveTab('SoftSkills')}
            >
              Soft Skills
            </button>
          </div>
        </div>
        <div className="mx-auto w-9/12 justify-center lg:mx-0 lg:w-full">
          <div className="p-4">
            {activeTab === 'TechnicalSkills' && <TechnicalSkills />}
            {activeTab === 'SoftSkills' && <SoftSkills />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
