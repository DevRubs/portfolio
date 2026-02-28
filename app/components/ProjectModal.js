'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/90 z-50"
            style={{ willChange: 'opacity' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-[#0a0a0a] border border-[#00ff9d]/50 z-50 overflow-y-auto"
            style={{ willChange: 'transform, opacity' }}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal header */}
            <div className="sticky top-0 bg-[#0a0a0a] border-b border-[#1a1a1a] p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                <span className="ml-4 text-[#666666] text-sm">{project.title}.exe</span>
              </div>
              <button
                onClick={onClose}
                className="text-[#666666] hover:text-[#00ff9d] transition-colors text-sm"
                data-hover
              >
                Close
              </button>
            </div>

            {/* Content */}
            <div className="p-4 md:p-8">
              {/* Title */}
              <p className="text-[#00ff9d] text-xs md:text-sm mb-2">Project Details</p>
              <h2 className="text-2xl md:text-4xl font-bold text-[#e0e0e0] mb-6">
                {project.title}
              </h2>

              {/* Status */}
              <div className="mb-6">
                <span className={`text-xs px-3 py-1 ${
                  project.status === 'DEPLOYED'
                    ? 'text-[#00ff9d] border border-[#00ff9d]'
                    : 'text-[#666666] border border-[#666666]'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Project Image */}
              {project.image && (
                <div className="mb-8">
                  <p className="text-[#00ff9d] text-xs mb-3">Screenshot</p>
                  <div className="border border-[#1a1a1a] p-4">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full max-w-sm mx-auto border border-[#1a1a1a]"
                    />
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="mb-8">
                <p className="text-[#00ff9d] text-xs mb-2">Description</p>
                <p className="text-[#e0e0e0] text-sm md:text-base leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* The Problem */}
              {project.problem && (
                <div className="mb-8">
                  <p className="text-[#00ff9d] text-xs mb-2">Problem Solved</p>
                  <p className="text-[#666666] text-sm md:text-base leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {/* The Solution */}
              {project.solution && (
                <div className="mb-8">
                  <p className="text-[#00ff9d] text-xs mb-2">Solution Implemented</p>
                  <p className="text-[#666666] text-sm md:text-base leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-8">
                <p className="text-[#00ff9d] text-xs mb-3">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs md:text-sm text-[#e0e0e0] bg-[#1a1a1a] px-3 py-1.5 border border-[#1a1a1a] hover:border-[#00ff9d]/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(project.github || project.demo) && (
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-[#00ff9d] text-[#00ff9d] text-sm hover:bg-[#00ff9d]/10 transition-colors"
                      data-hover
                    >
                      View Code
                    </a>
                  )}

                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}