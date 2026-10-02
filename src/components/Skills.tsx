import React from 'react';
import { Code, Server, Database, Globe, Cpu, Layers } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { skillCategories } from '../data/profile';

const icons = {
  code: <Code className="text-blue-600" size={24} />,
  globe: <Globe className="text-blue-600" size={24} />,
  server: <Server className="text-blue-600" size={24} />,
  database: <Database className="text-blue-600" size={24} />,
  cpu: <Cpu className="text-blue-600" size={24} />,
  layers: <Layers className="text-blue-600" size={24} />,
};

const Skills = () => {
  const pageCategories = skillCategories.filter((category) => category.showOnPage);

  return (
    <div className="space-y-8">
      <SectionTitle icon={<Code />} title="Skills" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pageCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              {icons[category.icon]}
              <h3 className="text-xl font-semibold text-gray-800 ml-2">{category.title}</h3>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
