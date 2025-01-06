import React from 'react';
import { useInView } from 'react-intersection-observer';
import { experiences, education } from '../../data/resume';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
import { BriefcaseIcon } from 'lucide-react';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Resume</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Summary */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 leading-relaxed">
              I am an experienced Frontend Developer with over 1 year of expertise in building scalable web applications. 
              I am skilled in creating dynamic and user-friendly systems across platforms. 
              I excel in system and web development using technologies such as HTML, CSS, and React (a modern JavaScript library for frontend development). 
              I am passionate about staying current with emerging technologies.</p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BriefcaseIcon className="text-blue-600" size={28} />
              <h3 className="text-2xl font-bold">Professional Experience</h3>
            </div>
            <div ref={ref} className="space-y-6">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <EducationCard
                  key={edu.id}
                  education={edu}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Certifications
          <div>
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold"> Certified Solutions Architect</h4>
                    <p className="text-gray-600">Cisco, 2022</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold">Professional Scrum Master I (PSM I)</h4>
                    <p className="text-gray-600">Scrum.org, 2021</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>*/}
          
        </div>
      </div>
    </section>
  );
};

export default Resume;