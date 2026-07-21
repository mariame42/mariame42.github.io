import React from 'react';
import { User, MapPin, Mail, Phone } from 'lucide-react';
import SectionTitle from './SectionTitle';

const AboutMe = () => {
  return (
    <div className="space-y-8">
      <SectionTitle icon={<User />} title="About Me" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={`${import.meta.env.BASE_URL}asset/images/42abu.jpg`}
              alt="Profile" 
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Mariam Haitham Eid</h2>
              <p className="text-blue-600 font-medium">Software Engineering Student</p>
              
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>Abu Dhabi, UAE</span>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="mr-2" />
                  <span>meid@student.42abudhabi.ae</span>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="mr-2" />
                  <span>+971 52 145 0585</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">About me</h3>
              <p className="text-gray-600 leading-relaxed">
                I’m Mariam, a software development student at 42 Abu Dhabi with a foundation in C, C++, Python, and ROS2, and growing experience in Docker, web development, and systems programming.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                At 42 Abu Dhabi, I developed the most important skill of all — the ability to learn. That mindset has guided me through competitions, real projects, and professional experience.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
              My programming journey began at 42 Abu Dhabi in June 2024 with no prior experience. Through hands-on projects, hackathons, and peer learning, I built strong problem-solving skills and a deeper understanding of programming.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
              Later, I co-founded RMC Labs, a robotics startup that builds customized robots. Through RMC, I learned about teamwork, robotics, leadership, and real-world technical challenges. I currently serve as CEO and project manager of our first robot, Roamio, a campus guide robot.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
              Along the way, I completed an internship at Exelixi AI in Dubai, where I delivered a software system that communicates with hardware. I also organize the AI & ML Club at 42 Abu Dhabi, helping design events, keep members engaged, and contribute to the club website.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
              My recent 42 projects include building an IRC server in C++, a Docker-based infrastructure with Inception, and KiddoPath — a kids’ productivity platform we are developing as part of ft_transcendence.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">My Goals</h3>
              <p className="text-gray-600 leading-relaxed">
                I aim to keep growing at the intersection of software and hardware — using what I learn at 42, RMC Labs, and industry experience to build practical solutions to real problems.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
              My next focus is to deepen my skills in AI, systems, and product development while contributing to meaningful projects as a developer, engineer, and problem-solver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;