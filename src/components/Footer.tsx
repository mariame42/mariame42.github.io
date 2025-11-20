import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Code42 } from '../icons/Code42';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code42 className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-gray-800 font-medium">
              Mariam Haitham Eid
            </span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://github.com/mariame42" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mariam-haitham-eid-92a941331" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:student@42abudhabi.ae" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Mariam Eid. All rights reserved.
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>
            Made with <span className="text-red-500">♥</span> at 42 Abu Dhabi
          </p>
          <p className="mt-2">
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> · 
            <a href="#" className="text-blue-600 hover:underline ml-3">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;