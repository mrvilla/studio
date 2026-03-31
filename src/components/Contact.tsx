import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
          Let's Work Together
        </h2>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          I'm available for freelance projects and collaborations.
          Whether you need a new website, theme customization, or deployment support,
          I'd love to help you.
        </p>
        <a
          href="mailto:evilla@iammrvilla.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
        >
          <Mail className="w-5 h-5" />
          evilla@iammrvilla.com
        </a>
      </div>
    </section>
  );
}
