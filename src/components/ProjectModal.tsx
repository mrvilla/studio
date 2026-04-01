import { useEffect } from 'react';
import { Link2Icon, X } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        <div className="aspect-video w-full overflow-hidden bg-gray-100 rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 md:p-12">
          <div className="inline-block px-4 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full mb-4">
            {project.platform}
          </div>

          <a className="flex hover:underline" href={project.link} title={project.title}>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 flex">
              {project.title}<Link2Icon className="ml-4 mt-1 -rotate-45" size={40} />
            </h2>
          </a>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Overview
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                My Role
              </h3>
              <p className="text-lg text-gray-700">
                {project.role}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                What I Did
              </h3>
              <ul className="space-y-2">
                {project.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0" />
                    <span className="leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Outcome
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
