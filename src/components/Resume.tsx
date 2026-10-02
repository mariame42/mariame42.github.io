import React, { useRef, useState } from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';
import html2pdf from 'html2pdf.js';
import { profile, education, experiences, skillCategories, projects } from '../data/profile';

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
              <h2 className="resume-name">{profile.cvName}</h2>
              <p className="resume-subtitle">{profile.title}</p>
              <p className="resume-contact">
                {profile.location} | {profile.email} | {profile.phone}
              </p>
            </div>

            <section className="resume-block">
              <h3 className="resume-section-title">Education</h3>
              {education.map((item) => (
                <div key={item.institution} className="resume-entry">
                  <div className="resume-entry-header">
                    <p className="resume-role">{item.cv.title}</p>
                    <p className="resume-date">{item.cv.period}</p>
                  </div>
                  <p className="resume-org">{item.cv.detail}</p>
                </div>
              ))}
            </section>

            <section className="resume-block">
              <h3 className="resume-section-title">Experience</h3>
              {experiences.map((exp) => (
                <div key={`${exp.position}-${exp.company}`} className="resume-entry">
                  <div className="resume-entry-header">
                    <p className="resume-role">{exp.cv.role}</p>
                    <p className="resume-date">{exp.cv.period}</p>
                  </div>
                  <p className="resume-org">{exp.cv.org}</p>
                  <ul className="resume-bullets">
                    {exp.cv.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="resume-block">
              <h3 className="resume-section-title">Skills</h3>
              <div className="resume-skills-grid">
                {skillCategories.map((category) => (
                  <div key={category.title}>
                    <p className="resume-skill-label">{category.cvLabel}:</p>
                    <p className="resume-skill-value">
                      {category.skills.map((skill) => skill.cvName ?? skill.name).join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="resume-block">
              <h3 className="resume-section-title">Projects</h3>
              <ul className="resume-bullets">
                {projects.map((project) => (
                  <li key={project.title}>
                    <strong>{project.cv.name}:</strong> {project.cv.summary}
                  </li>
                ))}
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
