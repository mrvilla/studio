import { useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { projects } from './data/projects';
import { Project } from './types/project';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onViewProjects={scrollToProjects} onGetInTouch={scrollToContact} />
      <Projects projects={projects} onProjectClick={setSelectedProject} />
      <About />
      <Contact />
      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
