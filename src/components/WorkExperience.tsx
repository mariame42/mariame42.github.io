import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, FileText } from 'lucide-react';
import SectionTitle from './SectionTitle';

const WorkExperience = () => {
  const experiences = [
    {
      position: 'Intern',
      company: 'Exelixi AI',
      location: 'Dubai, UAE',
      period: '2 months',
      description: 'Developed a software system that communicates with hardware components. Independently handled a full project from development to delivery under real-world constraints.',
      achievements: [
        'Developed software system communicating with hardware components',
        'Independently handled a full project from development to delivery',
        'Delivered the project on time under real-world constraints'
      ],
      logo: `${import.meta.env.BASE_URL}asset/images/exelixi_logo.jpeg`,
      website: null,
      intro: null
    },
    {
      position: 'Club Organizer',
      company: 'AI & ML Club, 42 Abu Dhabi',
      location: 'Abu Dhabi, UAE',
      period: '2026 - Present',
      description: 'Help keep the AI & ML Club running smoothly at 42 Abu Dhabi. I support event design and setup, work to keep members active and engaged, and have started contributing to the club website.',
      achievements: [
        'Helped design and set up club events on AI and ML topics',
        'Worked to keep members active and involved in peer learning',
        'Started contributing to the club website'
      ],
      logo: `${import.meta.env.BASE_URL}asset/images/AI&ML.png`,
      website: 'https://ai-ml-club-event-registration.vercel.app/',
      intro: 'https://drive.google.com/file/d/1n0je9k880Kidi6WlDTXzDWU2MdVDY1cW/view?usp=sharing'
    },
    {
      position: 'Co-founder & CEO',
      company: 'RMC Labs',
      location: 'Abu Dhabi, UAE',
      period: 'MAY 2025 - Present',
      description: 'Co-founded RMC Labs, a robotics startup building tailor-made robots for campuses and events. I lead the product roadmap, manage cross-functional teams, and oversee the development of our first robot, Roamio, an autonomous campus guide.',
      achievements: [
        'createing the first mvp of the robot',
        'be part of the five startups that represent 42 north star Dubai 2025',
        'Participated in the Dubai Startup Competition 2025 and won from the best innovative startups'
      ],
      logo: `${import.meta.env.BASE_URL}asset/images/RMC_logo.png`,
      website: null,
      intro: null
    },
    {
      position: 'Intern',
      company: 'RWT startup',
      location: 'Abu Dhabi, UAE',
      period: 'MAY 2025 - August 2025',
      description: 'worked with the startup RWT to developing some feachers for there existing website',
      achievements: [
        'create my first website from scratch, that can summrize text or file',
        'worked in the tester of there website',
      ],
      logo: `${import.meta.env.BASE_URL}asset/images/RWT_logo02.png`,
      website: null,
      intro: null
    },
    {
      position: 'Discovery Piscine',
      company: '42 Abu Dhabi',
      location: 'Abu Dhabi, UAE',
      period: 'Jun 2024 - Aug 2024',
      description: 'Working with 42 in the Two Discovery program enhanced my Python skills significantly. Through this experience, I not only deepened my understanding of the language but also learned how to effectively teach Python to younger learners. This opportunity helped me develop strong communication and mentoring skills while reinforcing my technical knowledge, allowing me to share the joy of coding with others.',
      achievements: [
        'Enhanced Python Skills through the Two Discovery Program',
        'Developed Teaching and Mentoring Skills',
        'Reinforced Technical Knowledge while Sharing the Joy of Coding'
      ],
      logo: `${import.meta.env.BASE_URL}asset/images/Discovery_Piscine.jpeg`,
      website: null,
      intro: null
    },
    {
      position: 'Mentor School Hackathon',
      company: 'PISA Charter School',
      location: 'Abu Dhabi, UAE',
      period: 'May 2025',
      description: 'During the School Hackathon, I had the opportunity to mentor a team of four participants. Our mission was to guide our team to victory by leveraging AI tools, something I had become familiar with through my previous experiences. Thanks to my knowledge of AI, it was not too difficult to guide and teach the team members. We worked efficiently on the first day, allowing us to spend the second day primarily practicing for our presentation. This approach ultimately led us to win the hackathon.',
      achievements: [
        'Mentored a Team of Four Participants in the School Hackathon',
        'Utilized AI Expertise to Guide and Teach the Team',
        'Led the Team to Victory with Strategic Time Management'
      ],
      logo: `${import.meta.env.BASE_URL}asset/images/Pisa.jpeg`,
      website: null,
      intro: null
    },
    {
      position: 'Bill labs Secretary',
      company: '42 Abu Dhabi',
      location: 'Abu Dhabi, UAE',
      period: 'September 2024 - 2025',
      description: 'I am the Secretary of the Programming Competitive Club "Bill Labs", where we are responsible for organizing activities and encouraging participation in coding competitions. Our club plays a key role in bringing coding challenges to campus, either by hosting our own competitions or by bringing external ones to engage students. In my role, I strive to contribute by generating ideas and collaborating with my team to ensure smooth organization and execution of these events, fostering a competitive and inspiring environment for all participants.',
      achievements: [
        'Served as Secretary of the Programming Competitive Club "Bill Labs"',
        'Organized and Hosted Coding Competitions',
        'Fostered a Competitive and Inspiring Environment'
      ],
      logo: `${import.meta.env.BASE_URL}asset/images/Bell_labs.jpeg`,
      website: null,
      intro: null
    }
  ];

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
