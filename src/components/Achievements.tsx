import React from 'react';
import { Award, Calendar, Trophy } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Achievements = () => {
  const achievements = [
    {
      title: 'KUEC Hackathon',
      organization: 'KUEC',
      date: 'Nov 2025',
      description: 'Contributed to a robotics project under time constraints. Awarded an internship based on individual performance.',
      icon: <Award className="text-blue-500" size={24} />
    },
    {
      title: 'Competition Winner',
      organization: 'North Star Dubai 2025',
      date: 'Oct 2025',
      description: 'Achieved the third place with my team in the north star Dubai 2025 innovative startups competition.',
      icon: <Trophy className="text-yellow-500" size={24} />
    },
    {
      title: 'Hackathon Winner',
      organization: 'Game Jam',
      date: 'Oct 2024',
      description: 'Achieved first place with my team in the Game Jam, marking my initial venture into game development.',
      icon: <Trophy className="text-yellow-500" size={24} />
    },
    {
      title: 'Won the PISA Hackathon (Mentoring Role)',
      organization: 'PISA Charter School',
      date: 'May 2025',
      description: 'Led and mentored a team to victory in the PISA Hackathon, showcasing my leadership skills and teamwork in a competitive environment.',
      icon: <Award className="text-blue-500" size={24} />
    },
    {
      title: 'Participated in the SambaNova Hackathon',
      organization: 'SambaNova',
      date: 'jan 2025',
      description: 'Engaged in the SambaNova Hackathon, where I explored and applied AI concepts to real-world problems, expanding my knowledge in artificial intelligence.',
      icon: <Trophy className="text-yellow-500" size={24} />
    },
    {
      title: 'Participated in the Second Game Jam',
      organization: 'Abu Dhabi gameing',
      date: 'Nov 2024',
      description: 'Competed in a second Game Jam, further refining my game development skills and learning new techniques in a time-sensitive environment.',
      icon: <Award className="text-blue-500" size={24} />
    },
    {
      title: 'Gained Valuable Experience in Non-Winning Hackathons',
      organization: null,
      date: '2024 - 2025',
      description: 'Even in hackathons where I did not win, I gained significant experience, learned new concepts, and honed my problem-solving abilities, which contributed to my growth as a coder.',
      icon: <Award className="text-blue-500" size={24} />
    }
  ];

  return (
    <div className="space-y-8">
      <SectionTitle icon={<Award />} title="Achievements" />
      
      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                {achievement.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{achievement.title}</h3>
                    <p className="text-blue-600">{achievement.organization}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm text-gray-500 flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {achievement.date}
                  </div>
                </div>
                
                <p className="mt-3 text-gray-600">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
          <p className="text-gray-700">Projects Completed</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
          <p className="text-gray-700">Awards Received</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">25</div>
          <p className="text-gray-700">months of Learning</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;