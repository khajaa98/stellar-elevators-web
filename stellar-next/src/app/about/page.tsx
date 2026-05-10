import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us | Our Story & Manufacturing Excellence',
  description: 'Learn about Stellar Elevators, our journey since 2019, and our "Smile" philosophy. Discover our state-of-the-art manufacturing facility in Hyderabad.',
  keywords: ['elevator manufacturing Hyderabad', 'Stellar Elevators CEO', 'elevator company history', 'Hyderabad industrial engineering'],
};

export default function About() {
  return <AboutContent />;
}
