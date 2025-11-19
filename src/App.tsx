import React, { useState } from 'react';
import { 
  User, 
  Code, 
  Briefcase, 
  Award, 
  FileText, 
  BookOpen, 
  Github, 
  Linkedin, 
  Mail,
  Menu,
  X,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Qualifications from './components/Qualifications';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Reflections from './components/Reflections';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'about', label: 'About Me', icon: <User size={18} /> },
    { id: 'qualifications', label: 'Qualifications', icon: <BookOpen size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={18} /> },
    { id: 'experience', label: 'Work Experience', icon: <Briefcase size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={18} /> },
    { id: 'achievements', label: 'Achievements', icon: <Award size={18} /> },
    { id: 'reflections', label: 'Reflections', icon: <FileText size={18} /> },
    { id: 'resume', label: 'Resume/CV', icon: <FileText size={18} /> },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1 relative">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:flex md:w-64 bg-white shadow-md flex-col h-[calc(100vh-64px)] sticky top-16">
          <nav className="p-4 flex-1">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleSectionClick(section.id)}
                    className={`w-full flex items-center px-4 py-2 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-3">{section.icon}</span>
                    {section.label}
                    {activeSection === section.id && (
                      <ChevronRight className="ml-auto" size={16} />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-3 justify-center">
              <a href="https://github.com/mariame42" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mariam-haitham-eid-92a941331" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:meid@student.42abudhabi.ae" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </aside>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-40 flex items-center justify-center">
            <div className="bg-white rounded-lg w-4/5 max-h-[80vh] overflow-y-auto">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button onClick={toggleMobileMenu}>
                  <X size={24} className="text-gray-600" />
                </button>
              </div>
              <nav className="p-4">
                <ul className="space-y-3">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => handleSectionClick(section.id)}
                        className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${
                          activeSection === section.id
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700'
                        }`}
                      >
                        <span className="mr-3">{section.icon}</span>
                        {section.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-6 justify-center">
                  <a href="https://github.com/mariame42" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/mariam-haitham-eid-92a941331" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:student@42abudhabi.ae" className="text-gray-600 hover:text-blue-600">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-8">
          {activeSection === 'about' && <AboutMe />}
          {activeSection === 'qualifications' && <Qualifications />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'experience' && <WorkExperience />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'achievements' && <Achievements />}
          {activeSection === 'reflections' && <Reflections />}
          {activeSection === 'resume' && <Resume />}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;