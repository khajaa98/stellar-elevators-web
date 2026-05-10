import { Metadata } from 'next';
import ProjectsContent from './ProjectsContent';

export const metadata: Metadata = {
  title: 'Our Portfolio | Featured Elevator Projects',
  description: 'View our successful elevator installations across South India. From commercial landmarks in Hyderabad to luxury residential projects in Bengaluru and Mumbai.',
  keywords: ['elevator projects Hyderabad', 'best lift installations Telangana', 'commercial elevator portfolio', 'residential lift case studies'],
};

export default function Projects() {
  return <ProjectsContent />;
}
