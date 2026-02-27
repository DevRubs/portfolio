'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import ProjectModal from './ProjectModal';

const projects = [
  {
    id: 'asana-lead-engagement',
    title: 'Asana Lead Engagement Workflow',
    description: 'Automated lead management and engagement tracking system using Asana.',
    fullDescription: 'A comprehensive workflow automation that manages lead engagement processes through Asana. Features include automated task creation, deadline tracking, progress monitoring, and team collaboration tools. The system handles lead qualification, follow-up scheduling, and conversion tracking with real-time notifications.',
    problem: 'Manual lead management was time-consuming and prone to errors. Leads were falling through the cracks due to lack of systematic follow-up processes.',
    solution: 'Built a fully automated workflow in Asana that handles lead intake, qualification scoring, task assignment, and follow-up reminders. Integrated with communication tools for seamless team notifications.',
    stack: ['Asana API', 'JavaScript', 'Automation Scripts', 'Webhook Integration'],
    status: 'DEPLOYED',
    image: '/project-photos/Asana_Lead_Engagement_Workflow.png',
    demo: '#'
  },
  {
    id: 'contact-form-automation',
    title: 'Contact Form Automation',
    description: 'Intelligent contact form processing and response automation system.',
    fullDescription: 'An automated contact form system that processes submissions, categorizes inquiries, and routes them to appropriate team members. Features include spam filtering, priority scoring, auto-responses, and CRM integration. The system handles both simple inquiries and complex support requests with intelligent routing.',
    problem: 'Contact form submissions were piling up without proper categorization or timely responses. Important inquiries were getting lost in the noise.',
    solution: 'Developed an intelligent automation system that categorizes form submissions, assigns priority levels, sends appropriate auto-responses, and routes to the right team members. Integrated with existing CRM for seamless lead management.',
    stack: ['JavaScript', 'Node.js', 'Email API', 'CRM Integration', 'Spam Filtering'],
    status: 'DEPLOYED',
    image: '/project-photos/ContactForm_Automation.png',
    demo: '#'
  },
  {
    id: 'video-to-blog-automation',
    title: 'Video to Blog Automation',
    description: 'Automated content creation pipeline that converts video content into blog posts.',
    fullDescription: 'A comprehensive automation system that transcribes video content, extracts key insights, generates blog posts, and optimizes them for SEO. Features include automatic transcription, content summarization, image extraction, and social media integration. The system can process multiple video formats and publish across various platforms.',
    problem: 'Creating blog content from video recordings was extremely time-consuming. Video content wasn\'t being repurposed effectively for written formats.',
    solution: 'Built an end-to-end automation pipeline that transcribes videos, generates SEO-optimized blog posts, extracts relevant images, and publishes across multiple platforms. Reduced content creation time by 80%.',
    stack: ['Python', 'OpenAI API', 'FFmpeg', 'SEO Tools', 'Social Media APIs'],
    status: 'DEPLOYED',
    image: '/project-photos/Video_to_Blog_Automation.png',
    demo: '#'
  },
  {
    id: 'coming-soon',
    title: 'COMING_SOON',
    description: 'Next project in development.',
    fullDescription: 'Currently exploring new automation opportunities. Have an idea? Let me know.',
    stack: ['TBD'],
    status: 'IN_PROGRESS',
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="px-4 md:px-12 lg:px-32 py-20 border-t border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-[#00ff9d] text-xs md:text-sm mb-4">{'>'} projects.fetch()</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#e0e0e0] mb-4">
            PROJECTS_
          </h2>
          <p className="text-[#666666] text-sm md:text-base mb-8">
            Click a card to view details.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <button
                onClick={() => openProject(project)}
                className={`w-full text-left p-4 md:p-6 border border-[#1a1a1a] hover:border-[#00ff9d] transition-all duration-300 group ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
                data-hover
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs px-2 py-1 ${
                    project.status === 'DEPLOYED' 
                      ? 'text-[#00ff9d] border border-[#00ff9d]' 
                      : 'text-[#666666] border border-[#666666]'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-[#666666] text-xs group-hover:text-[#00ff9d] transition-colors">
                    [CLICK_TO_OPEN]
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-[#00ff9d] mb-2">
                  {project.title}
                </h3>

                <p className="text-[#666666] text-sm mb-4 group-hover:text-[#e0e0e0] transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs text-[#e0e0e0] bg-[#1a1a1a] px-2 py-1">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="text-xs text-[#666666]">+{project.stack.length - 3} more</span>
                  )}
                </div>

                <div className="mt-4 h-px bg-[#1a1a1a] group-hover:bg-[#00ff9d] transition-colors" />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
}