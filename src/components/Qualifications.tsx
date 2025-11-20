import React from 'react';
import { BookOpen, Calendar, Award } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Qualifications = () => {
  const educationItems = [
    {
      institution: '42 Abu Dhabi',
      degree: 'Software Engineering Program',
      period: '2023 - Present',
      description: 'Intensive project-based curriculum focused on programming, algorithms, and software development. Completed core projects including ft_printf, minitalk, and minishell.',
      logo: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      institution: 'high school graduate',
      degree: 'high school diploma',
      period: '2022 - 2023',
      description: 'arned a high school diploma with a strong academic foundation, achieving a 98.6% overall score.',
      logo: `${import.meta.env.BASE_URL}asset/images/highscore.png`
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'June 2023',
      description: 'Foundational understanding of AWS Cloud services, security, architecture, and compliance.'
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: 'March 2023',
      description: 'Proficiency in Kubernetes installation, configuration, and management.'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: 'November 2022',
      description: 'Advanced skills in building and deploying React applications.'
    }
  ];

  return (
    <div className="space-y-8">
      <SectionTitle icon={<BookOpen />} title="Qualifications" />
      
      <div className="space-y-10">
        {/* Education */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <BookOpen size={20} className="mr-2 text-blue-600" />
            Education
          </h3>
          
          <div className="space-y-6">
            {educationItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img 
                      className="h-48 w-full object-cover md:w-48" 
                      src={item.logo} 
                      alt={item.institution} 
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">{item.institution}</h4>
                        <p className="text-blue-600">{item.degree}</p>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-1" />
                        {item.period}
                      </div>
                    </div>
                    <p className="mt-3 text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
    
      </div>
    </div>
  );
};

export default Qualifications;