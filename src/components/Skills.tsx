import React from 'react';
import { Code, Server, Database, Globe, Cpu, Layers } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        { name: 'C', level: 80 },
        { name: 'Python', level: 60 },
        { name: 'C++', level: 40 },
      ]
    },
    {
      title: 'Robotics',
      icon: <Globe className="text-blue-600" size={24} />,
      skills: [
        { name: 'ROS2', level: 80 },
        { name: 'Electronics', level: 50},
        { name: '3D Printing', level: 80},
        { name: 'Hardware', level: 70},
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <Server className="text-blue-600" size={24} />,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'Linux', level: 80 },
      ]
    },
    {
      title: 'Ai',
      icon: <Database className="text-blue-600" size={24} />,
      skills: [
        { name: 'Ai tools', level: 80 },
        { name: 'API Usage', level: 70 },
        { name: 'Agentic ai', level: 30 },
      ]
    },
    {
      title: 'Web Development',
      icon: <Cpu className="text-blue-600" size={24} />,
      skills: [
        { name: 'Backend with Django', level: 60 },
        { name: 'Frontend with typescript', level: 20 },
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Layers className="text-blue-600" size={24} />,
      skills: [
        { name: 'Time Management', level: 90 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Collaboration', level: 85 },
        { name: 'Communication', level: 80 },
        { name: 'Adaptability', level: 85 },
      ]
    },
    {
      title: 'game Development',
      icon: <Globe className="text-blue-600" size={24} />,
      skills: [
        { name: 'Unity', level: 20 },
        { name: 'Blender', level: 50 },
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <SectionTitle icon={<Code />} title="Skills" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              {category.icon}
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