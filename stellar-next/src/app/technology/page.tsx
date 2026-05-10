import { Metadata } from 'next';
import TechnologyContent from './TechnologyContent';

export const metadata: Metadata = {
  title: 'Elevator Technology & Innovation | IoT Lifts Hyderabad',
  description: 'Discover the advanced technology behind Stellar Elevators: Gearless motors, Smart IoT monitoring, and multi-redundant safety systems. Leading innovation in Hyderabad.',
  keywords: ['smart elevator technology', 'IoT lifts Hyderabad', 'gearless elevator motors', 'elevator safety systems Telangana', 'eco-friendly elevators'],
};

export default function Technology() {
  return <TechnologyContent />;
}
