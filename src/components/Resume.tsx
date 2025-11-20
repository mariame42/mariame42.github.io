import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Resume = () => {
  return (
    <div className="space-y-8">
      <SectionTitle icon={<FileText />} title="Resume/CV" />
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">My Resume</h3>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a 
              href="#download-resume" 
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Download size={18} className="mr-2" />
              Download PDF
            </a>
            
            <a 
              href="#view-resume" 
              className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              <ExternalLink size={18} className="mr-2" />
              View Online
            </a>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="aspect-[8.5/11] bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-2xl mx-auto p-8 bg-white shadow-sm">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Mariam Eid</h2>
                <p className="text-gray-600">Software Engineering Student</p>
                <div className="mt-2 text-sm text-gray-500">
                  <p>Abu Dhabi, UAE | meid@student.42abudhabi.ae | +971 52 145 0585</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-2">Education</h3>
                <div className="mb-3">
                  <div className="flex justify-between">
                    <p className="font-medium">42 Abu Dhabi</p>
                    <p className="text-sm text-gray-600">2023 - Present</p>
                  </div>
                  <p className="text-sm">Software Engineering Program</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="font-medium">high school graduate</p>
                    <p className="text-sm text-gray-600">2022 - 2023</p>
                  </div>
                  <p className="text-sm">high school diploma</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-2">Experience</h3>
                <div className="mb-3">
                  <div className="flex justify-between">
                    <p className="font-medium">Co-founder & CEO</p>
                    <p className="text-sm text-gray-600">May 2025 - Present</p>
                  </div>
                  <p className="text-sm font-medium">RMC Labs</p>
                  <ul className="text-xs list-disc list-inside mt-1 text-gray-600">
                    <li>Co-founded RMC Labs, a robotics startup building tailor-made robots for campuses and events.</li>
                    <li>Lead the product roadmap, manage cross-functional teams, and oversee the development of our first robot, Roamio, an autonomous campus guide.</li>
                    <li>createing the first mvp of the robot</li>
                    <li>be part of the five startups that represent 42 north star Dubai 2025</li>
                    <li>Participated in the Dubai Startup Competition 2025 and won from the best innovative startups</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="font-medium">Intern</p>
                    <p className="text-sm text-gray-600">May 2025 - August 2025</p>
                  </div>
                  <p className="text-sm font-medium">RWT startup</p>
                  <ul className="text-xs list-disc list-inside mt-1 text-gray-600">
                    <li>worked with the startup RWT to developing some feachers for there existing website</li>
                    <li>create my first website from scratch, that can summrize text or file</li>
                    <li>worked in the tester of there website</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="font-medium">Discovery Piscine</p>
                    <p className="text-sm text-gray-600">Jun 2024 - Aug 2024</p>
                  </div>
                  <p className="text-sm font-medium">42 Abu Dhabi, Abu Dhabi</p>
                  <ul className="text-xs list-disc list-inside mt-1 text-gray-600">
                    <li>Enhanced Python Skills through the Two Discovery Program</li>
                    <li>Developed Teaching and Mentoring Skills</li>
                    <li>Reinforced Technical Knowledge while Sharing the Joy of Coding</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="font-medium">Mentor School Hackathon</p>
                    <p className="text-sm text-gray-600">JMay 2025</p>
                  </div>
                  <p className="text-sm font-medium">PISA Charter School</p>
                  <ul className="text-xs list-disc list-inside mt-1 text-gray-600">
                    <li>Mentored a Team of Four Participants in the School Hackathon</li>
                    <li>Utilized AI Expertise to Guide and Teach the Team</li>
                    <li>Led the Team to Victory with Strategic Time Management</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-2">Skills</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="font-medium">Programming Languages:</p>
                    <p className="text-xs text-gray-600">C, Python, Cpp</p>
                  </div>
                  <div>
                    <p className="font-medium">Robotics:</p>
                    <p className="text-xs text-gray-600">ROS2, Electronics, 3D Printing, Hardware</p>
                  </div>
                  <div>
                    <p className="font-medium">game Development:</p>
                    <p className="text-xs text-gray-600">unity, blender</p>
                  </div>
                  <div>
                    <p className="font-medium">Ai:</p>
                    <p className="text-xs text-gray-600">Ai tools, agentic ai</p>
                  </div>
                  <div>
                    <p className="font-medium">Computer Science:</p>
                    <p className="text-xs text-gray-600">Data Structures, Algorithms, OS</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-2">Projects</h3>
                <ul className="text-sm list-disc list-inside text-gray-600">
                  <li><span className="font-medium text-gray-700">para_legal_news:</span> a legal AI agent</li>
                  <li><span className="font-medium text-gray-700">minishell:</span> A simplified shell implementation in C</li>
                  <li><span className="font-medium text-gray-700">Personal Portfolio:</span> A responsive portfolio website for Learning to learn modile</li>
                  <li><span className="font-medium text-gray-700">The Guider:</span> A robot designed to guide people at 42 and will be powered by AI.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <p className="mt-4 text-gray-600 text-sm">
          This is a preview of my resume. Download the PDF version for the complete, printable document.
        </p>
      </div>
    </div>
  );
};

export default Resume;