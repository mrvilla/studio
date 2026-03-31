import { ArrowDown, Mail } from 'lucide-react';

interface HeroProps {
  onViewProjects: () => void;
  onGetInTouch: () => void;
}

export default function Hero({ onViewProjects, onGetInTouch }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl w-full text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
          Villa Studio 
          </h1>
          <h2 className='text-2xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight'>
          Developer & UI Designer
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
              Building and Designing thoughtful digital experiences across <br className="hidden md:block" />
            WordPress, FSE (Full Site Editing), Joomla, and YOOtheme.
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            From concept to deployment, I focus on creating digital experiences that work seamlessly for users and clients alike.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onViewProjects}
              className="group px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <button
              onClick={onGetInTouch}
              className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg hover:border-gray-900 transition-all duration-300 flex items-center gap-2"
            >
              Get in Touch
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
