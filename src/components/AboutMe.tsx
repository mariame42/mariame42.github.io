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
              <h2 className="text-2xl font-bold text-gray-800">Mariam Eid</h2>
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
                I’m Mariam, a dedicated software development student at 42 Abu Dhabi.  With a strong foundation in C, Cpp, Python and Ros2.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                At 42 Abu Dhabi, I developed the most important skill of all — the ability to learn. This mindset guided me through multiple competitions and shaped my growth throughout my journey
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
              My programming journey began at 42 Abu Dhabi. In June 2024, I started with no prior experience. Through hands-on projects, hackathons, and peer learning, I gained strong problem-solving skills and a deeper understanding of programming.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
              Later, I co-founded RMC Labs, a robotics startup that builds customized robots. Through RMC, I learned a great deal about teamwork, robotics, leadership, and managing real-world technical challenges. I currently serve as the CEO and the project manager of our first robot, Roamio, a campus guide robot.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
              Alongside robotics, I also began learning web development. As part of this path, I built a small website while focusing on learning Django.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
              Through rigorous projects and collaborative challenges, I have developed not only technical skills but also important soft skills such as time management, communication, and resilience.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">My Goals</h3>
              <p className="text-gray-600 leading-relaxed">
                I aim to leverage my education at 42 Abu Dhabi and my experience at RMC Labs to contribute meaningfully to the tech industry, especially in areas where software and hardware innovation can solve real-world problems. I am particularly interested in the intersection of technology and sustainability.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
              My immediate goal is to secure an internship where I can apply my skills in a professional environment while continuing to grow as a developer, engineer, and problem-solver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;