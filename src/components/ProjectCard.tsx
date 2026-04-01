import { ArrowRight } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
    >
      <div className="aspect-video overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full mb-3">
          {project.platform}
        </div>
        <h3 className="text-2xl font-light text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
          {project.title} 
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.summary}
        </p>
        <div className="flex items-center text-gray-900 font-medium group-hover:gap-3 gap-2 transition-all">
          View Project
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}
