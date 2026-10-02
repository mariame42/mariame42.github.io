import React from 'react';
import { BookOpen, Calendar } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { education } from '../data/profile';

const Qualifications = () => {
  return (
    <div className="space-y-8">
      <SectionTitle icon={<BookOpen />} title="Qualifications" />
      
      <div className="space-y-10">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <BookOpen size={20} className="mr-2 text-blue-600" />
            Education
          </h3>
          
          <div className="space-y-6">
            {education.map((item, index) => (
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
