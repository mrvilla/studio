import { Project } from '../types/project';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export default function Projects({ projects, onProjectClick }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Selected Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of recent work showcasing design, development, and deployment across various platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
