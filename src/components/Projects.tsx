import React, { useEffect, useState } from 'react';
import { Code, ExternalLink, Github, Calendar, X } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { projects } from '../data/profile';

const Projects = () => {
  const [openImage, setOpenImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    if (!openImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openImage]);

  return (
    <div className="space-y-8">
      <SectionTitle icon={<Code />} title="Projects" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
            <button
              type="button"
              onClick={() => setOpenImage({ src: project.image, title: project.title })}
              className="block w-full h-48 overflow-hidden cursor-zoom-in bg-transparent border-0 p-0"
              aria-label={`View ${project.title} image`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </button>
            
            <div className="p-5 flex-grow">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={14} className="mr-1" />
                  {project.date}
                </div>
              </div>
              
              <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
              
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {(project.github || project.demo) && (
            <div className="px-5 py-3 border-t border-gray-200 flex justify-between">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 flex items-center text-sm font-medium"
                >
                  <Github size={16} className="mr-1" />
                  GitHub
                </a>
              )}
              
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 flex items-center text-sm font-medium"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Live Demo
                </a>
              )}
            </div>
            )}
          </div>
        ))}
      </div>

      {openImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setOpenImage(null)}
        >
          <button
            type="button"
            onClick={() => setOpenImage(null)}
            className="absolute top-4 right-4 text-white"
            aria-label="Close image"
          >
            <X size={28} />
          </button>
          <img
            src={openImage.src}
            alt={openImage.title}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
