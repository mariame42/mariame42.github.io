import React, { useRef, useState } from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';
import html2pdf from 'html2pdf.js';

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!resumeRef.current || downloading) return;
    setDownloading(true);
    try {
      await html2pdf()
        .set({
          margin: [12, 12, 12, 12],
          filename: 'Mariam_Eid_Resume.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            scrollY: 0,
            windowWidth: resumeRef.current.scrollWidth,
          },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak: {
            mode: ['avoid-all', 'css', 'legacy'],
            avoid: ['.resume-entry', '.resume-section-title'],
          },
        })
        .from(resumeRef.current)
        .save();
    } finally {
      setDownloading(false);
    }
  };

  const handleViewOnline = () => {
    resumeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="space-y-8">
      <SectionTitle icon={<FileText />} title="Resume/CV" />

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">My Resume</h3>

          <div className="mt-4 md:mt-0 flex space-x-4">
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-60"
            >
              <Download size={18} className="mr-2" />
              {downloading ? 'Preparing PDF...' : 'Download PDF'}
            </button>

            <button
              type="button"
              onClick={handleViewOnline}
              className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              <ExternalLink size={18} className="mr-2" />
              View Online
            </button>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg overflow-x-auto bg-gray-100 p-4 md:p-8">
          <div ref={resumeRef} id="resume-document" className="resume-a4-sheet mx-auto">
            <div className="text-center mb-6">
              <h2 className="resume-name">Mariam Eid</h2>
              <p className="resume-subtitle">Software Engineering Student</p>
              <p className="resume-contact">
                Abu Dhabi, UAE | meid@student.42abudhabi.ae | +971 52 145 0585
              </p>
            </div>

            <section className="resume-block">
              <h3 className="resume-section-title">Education</h3>
              <div className="resume-entry">
                <div className="resume-entry-header">
                  <p className="resume-role">42 Abu Dhabi</p>
                  <p className="resume-date">2023 - Present</p>
                </div>
                <p className="resume-org">Software Engineering Program</p>
              </div>
              <div className="resume-entry">
                <div className="resume-entry-header">
                  <p className="resume-role">High School Graduate</p>
                  <p className="resume-date">2022 - 2023</p>
                </div>
                <p className="resume-org">High school diploma</p>
              </div>
            </section>

            <section className="resume-block">
              <h3 className="resume-section-title">Experience</h3>

              <div className="resume-entry">
                <div className="resume-entry-header">
                  <p className="resume-role">Intern</p>
                  <p className="resume-date">2 months</p>
                </div>
                <p className="resume-org">Exelixi AI, Dubai</p>
                <ul className="resume-bullets">
                  <li>Developed a software system communicating with hardware components</li>
                  <li>Independently handled a full project from development to delivery</li>
                  <li>Delivered the project on time under real-world constraints</li>
                </ul>
              </div>

              <div className="resume-entry">
                <div className="resume-entry-header">
                  <p className="resume-role">Club Organizer</p>
                  <p className="resume-date">2026 - Present</p>
                </div>
                <p className="resume-org">AI & ML Club, 42 Abu Dhabi</p>
                <ul className="resume-bullets">
                  <li>Helped design and set up club events on AI and ML topics</li>
                  <li>Worked to keep members active and involved in peer learning</li>
                  <li>Started contributing to the club website</li>
                </ul>
              </div>

              <div className="resume-entry">
                <div className="resume-entry-header">
                  <p className="resume-role">Co-founder & CEO</p>
                  <p className="resume-date">May 2025 - Present</p>
                </div>
                <p className="resume-org">RMC Labs</p>
                <ul className="resume-bullets">
                  <li>Co-founded a robotics startup building tailor-made robots for campuses and events</li>
                  <li>Lead product roadmap and oversee Roamio, an autonomous campus guide robot</li>
                  <li>Built the first MVP and represented 42 at North Star Dubai 2025</li>
                  <li>Participated in the Dubai Startup Competition 2025</li>
                </ul>
              </div>

              <div className="resume-entry">
                <div className="resume-entry-header">
                  <p className="resume-role">Intern</p>
                  <p className="resume-date">May 2025 - August 2025</p>
                </div>
                <p className="resume-org">RWT startup</p>
                <ul className="resume-bullets">
                  <li>Developed features for the existing company website</li>
                  <li>Built a summarizer website from scratch for text and files</li>
                  <li>Helped with website testing</li>
                </ul>
              </div>

              <div className="resume-entry">
                <div className="resume-entry-header">
                  <p className="resume-role">Discovery Piscine</p>
                  <p className="resume-date">Jun 2024 - Aug 2024</p>
                </div>
                <p className="resume-org">42 Abu Dhabi</p>
                <ul className="resume-bullets">
                  <li>Enhanced Python skills through the Two Discovery Program</li>
                  <li>Developed teaching and mentoring skills with younger learners</li>
                </ul>
              </div>

              <div className="resume-entry">
                <div className="resume-entry-header">
                  <p className="resume-role">Mentor School Hackathon</p>
                  <p className="resume-date">May 2025</p>
                </div>
                <p className="resume-org">PISA Charter School</p>
                <ul className="resume-bullets">
                  <li>Mentored a team of four participants using AI tools</li>
                  <li>Led the team to victory with focused planning and time management</li>
                </ul>
              </div>
            </section>

            <section className="resume-block">
              <h3 className="resume-section-title">Skills</h3>
              <div className="resume-skills-grid">
                <div>
                  <p className="resume-skill-label">Programming:</p>
                  <p className="resume-skill-value">C, C++, Python</p>
                </div>
                <div>
                  <p className="resume-skill-label">Robotics:</p>
                  <p className="resume-skill-value">ROS2, Electronics, 3D Printing, Hardware</p>
                </div>
                <div>
                  <p className="resume-skill-label">DevOps & Tools:</p>
                  <p className="resume-skill-value">Git, Docker, Linux</p>
                </div>
                <div>
                  <p className="resume-skill-label">Web:</p>
                  <p className="resume-skill-value">Django, TypeScript</p>
                </div>
                <div>
                  <p className="resume-skill-label">AI:</p>
                  <p className="resume-skill-value">AI tools, agentic AI</p>
                </div>
                <div>
                  <p className="resume-skill-label">Computer Science:</p>
                  <p className="resume-skill-value">Data Structures, Algorithms, OS, Networking</p>
                </div>
              </div>
            </section>

            <section className="resume-block">
              <h3 className="resume-section-title">Projects</h3>
              <ul className="resume-bullets">
                <li>
                  <strong>KiddoPath (ft_transcendence):</strong> Kids' productivity platform with
                  microservices (in progress)
                </li>
                <li>
                  <strong>ft_irc:</strong> IRC server in C++ with a modular SOLID-inspired architecture
                </li>
                <li>
                  <strong>Inception:</strong> Multi-container Docker stack (NGINX, WordPress, MariaDB)
                </li>
                <li>
                  <strong>Roamio:</strong> Campus guide robot powered by AI, with RMC Labs
                </li>
                <li>
                  <strong>para_legal_news:</strong> Legal AI agent website
                </li>
                <li>
                  <strong>minishell:</strong> Simplified shell implementation in C
                </li>
              </ul>
            </section>
          </div>
        </div>

        <p className="mt-4 text-gray-600 text-sm">
          A4 layout with readable text. Download PDF splits across pages only when needed — no blank
          pages.
        </p>
      </div>
    </div>
  );
};

export default Resume;
