import { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Elevator Services & Maintenance | AMC Hyderabad',
  description: 'Professional elevator installation, maintenance, AMC, and modernization services in Hyderabad. Ensure the safety and longevity of your lifts with Stellar Elevators.',
  keywords: ['elevator maintenance Hyderabad', 'lift AMC Telangana', 'elevator modernization South India', 'lift repair Hyderabad', 'elevator installation services'],
};

export default function Services() {
  return <ServicesContent />;
}
