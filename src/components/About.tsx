export default function About() {
  const skills = [
    'Frontend Development',
    'UI Design',
    'WordPress',
    'WordPress FSE(Full Site Editing)',
    'Joomla',
    'YOOtheme',
    'Responsive Design',
    'Deployment & Maintenance',
    'Custom-built Solutions',
    'React',
    'NextJS',
    'CSS Layout, Animations, and Interactions',
    'HTML Semantic and Structure',
    'Accessibility',
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm a frontend developer and User Interaction designer with a passion for creating
                web and mobile experiences. I work with various tools including WordPress (Full Site Editing),
                Joomla, Wix, YOOtheme and Custom-built Solutions. I've built everything from editorial sites
                to e-commerce experiences.
              </p>
              <p>
                I help bring websites to life through simple design,
                clean code, and reliable deployment. Whether it's styling a custom theme,
                troubleshooting a complex system, or collaborating with you and/or smal team,
                I focus on delivering solutions that work for both users and your audiences.
              </p>
              <p>
                When I'm not building websites, you'll find me exploring new design systems,
                refining my craft, and staying curious about the evolving web space.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-8">
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 hover:border-gray-900 transition-colors text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
