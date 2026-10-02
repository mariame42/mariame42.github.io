import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, FileText } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { experiences } from '../data/profile';

const WorkExperience = () => {
  return (
    <div className="space-y-8">
      <SectionTitle icon={<Briefcase />} title="Work Experience" />
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img 
                  className="h-48 w-full object-cover md:w-48" 
                  src={exp.logo} 
                  alt={exp.company} 
                />
              </div>
              <div className="p-6 w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm text-gray-500 flex flex-col items-start md:items-end">
                    <div className="flex items-center mb-1">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <p className="mt-4 text-gray-600">{exp.description}</p>
                
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                {(exp.website || exp.intro) && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Club Website
                      </a>
                    )}
                    {exp.intro && (
                      <a
                        href={exp.intro}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
                      >
                        <FileText size={16} className="mr-1" />
                        Introduction PPT
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
