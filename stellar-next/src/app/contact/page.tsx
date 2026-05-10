import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | Elevator Consultation Hyderabad',
  description: 'Get a free consultation for your elevator project. Contact Stellar Elevators in Suchitra, Hyderabad for luxury villa lifts, maintenance, or modernization queries.',
  keywords: ['contact elevator company Hyderabad', 'lift inquiry Telangana', 'elevator consultation South India', 'Stellar Elevators phone number'],
};

export default function Contact() {
  return <ContactContent />;
}
