import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Tall Poppies',
    platform: 'WordPress / Full Site Editing',
    summary: 'Podcast platform focused on storytelling and editorial content, with ongoing support for content updates, structure, and site performance',
    image: '/../site-tp.png?auto=compress&cs=tinysrgb&w=1200',
    overview: 'A WordPress website updated and prepared for launch, including migration, live deployment, content adjustments, and troubleshooting.',
    role: 'Frontend Developer / WordPress Support / Deployment',
    responsibilities: [
      'Managed site deployment from staging to live',
      'Updated WordPress content and structure',
      'Fixed search behavior',
      'Configured form delivery and SMTP',
      'Verified launch readiness and QA'
    ],
    outcome: 'Stable live deployment with improved reliability and polished user-facing details'
  },
  {
    id: '2',
    title: 'Backery Raddatz',
    platform: 'Joomla / YOOtheme',
    summary: 'Multi-location backery website with structured content and product presenation, store information, and light e-commerce functionality.',
    image: '/../site-br.png?auto=compress&cs=tinysrgb&w=1200',
    overview: 'A comprehensive Joomla-based website featuring custom components, advanced layouts, and a fully responsive theme tailored to the client\'s brand identity.',
    role: 'Frontend Developer / Theme Developer',
    responsibilities: [
      'Developed custom Joomla theme from design mockups',
      'Built responsive layouts and component library',
      'Implemented custom Joomla components and modules',
      'Optimized performance and accessibility',
      'Collaborated with backend team on data structure'
    ],
    outcome: 'High-performance, accessible website with seamless content management capabilities'
  },
  {
    id: '3',
    title: 'Torque Sphere',
    platform: 'YOOtheme / WordPress',
    summary: 'E-commerce platform for industrial motor controllers, featuring custom layouts and optimised product for technical audiences.',
    image: '/../site-ts.png?auto=compress&cs=tinysrgb&w=1200',
    overview: 'A visually striking e-commerce platform leveraging YOOtheme Pro\'s layout builder with custom CSS and JavaScript enhancements for a premium shopping experience.',
    role: 'UI Designer / Frontend Developer',
    responsibilities: [
      'Designed custom page layouts in YOOtheme builder',
      'Developed custom CSS animations and transitions',
      'Implemented product filtering and search',
      'Enhanced mobile shopping experience',
      'Integrated with WooCommerce'
    ],
    outcome: 'Elegant, conversion-optimized e-commerce site with increased engagement and sales'
  }
];
