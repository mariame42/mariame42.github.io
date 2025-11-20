import React from 'react';
import { FileText, Calendar, Quote } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Reflections = () => {
  const reflections = [
    {
      title: 'My Journey at 42 Abu Dhabi',
      date: 'August 2023',
      content: `
        <p>Over the past year, my journey in coding has been both challenging and rewarding. Starting from zero, I have immersed myself in various projects and hackathons, each contributing to my growth as a developer.</p>
        
        <p>Similarly, in Para_Legal_News, I worked with my team to develop a website with an AI agent, an idea that originated during the SambaNova Hackathon and has since evolved into an ongoing project. </p>
        
        <p>Additionally, contributing to the Seacrit Hackathons initiative has allowed me to help create a structured and engaging experience for participants at 42.</p>
      `
    },
    {
      title: 'Reflections on Team leading',
      date: 'May 2024',
      content: `
        <p>Working as a team leader in a robotics project was a challenge but also a great learning experience. I learned to be more organized and to delegate tasks to the team members. I also learned to be more patient and to listen to the team members.</p>
        
        <p>So in big events like the north star Dubai, We were able as a team to represent 42 and win the best innovative startups award.</p>
      `
    },
    {
      title: 'Reflections on Team Collaboration',
      date: 'May 2023',
      content: `
        <p>Working in a team for the first time during the Minishell project was a valuable learning experience. Initially, our coding styles were quite different, but over the course of two months, we worked hard to find common ground. This collaboration taught me the importance of adaptability and communication in a team setting.</p>

        <p>also working with a different team in cube 3d project, my collegue had a different coding style, so i learned with him to work with SOLID principle</p>
        
        <p>Later, during hackathons, especially when working with people I didn't know, I learned to quickly plan and focus on the core elements of the challenge. I realized that having a small, functional project was far better than having nothing at all. Sometimes, the key is not to aim for perfection but to prioritize the most important aspects and work within the time constraints. This experience taught me to think faster and continuously improve the project as time allowed, rather than becoming stuck on a big, unattainable goal.</p>
      `
    },
    {
      title: 'The Impact of Peer Learning',
      date: 'February 2023',
      content: `
        <p>The peer learning model at 42 Abu Dhabi has fundamentally changed how I approach knowledge acquisition and sharing. Traditional education often emphasizes individual achievement, but at 42, success is deeply intertwined with community engagement.</p>
        
        <p>I've found that explaining concepts to others is one of the most effective ways to solidify my own understanding. The process of articulating complex ideas in simple terms forces me to identify gaps in my knowledge and address them. This has made me both a better learner and communicator.</p>
        
        <p>The absence of formal instructors has cultivated a culture of resourcefulness. When faced with challenges, we learn to consult documentation, research solutions, and experiment—skills that closely mirror real-world software development practices. This self-directed approach to learning has made me more confident in my ability to tackle unfamiliar technologies and problems.</p>
        
        <p>As I progress in my journey, I'm increasingly drawn to mentoring newer students. Seeing concepts click for someone I'm helping brings a unique satisfaction that has become one of my primary motivations. This reciprocal exchange of knowledge creates a sustainable learning ecosystem that benefits everyone involved.</p>
      `
    }
  ];

  return (
    <div className="space-y-8">
      <SectionTitle icon={<FileText />} title="Reflections" />
      
      <div className="space-y-8">
        {reflections.map((reflection, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800">{reflection.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={16} className="mr-1" />
                  {reflection.date}
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute text-gray-200 h-12 w-12 -left-2 -top-2 opacity-50" />
                <div 
                  className="prose prose-blue max-w-none text-gray-600 pl-6 relative z-10"
                  dangerouslySetInnerHTML={{ __html: reflection.content }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reflections;