import { Metadata } from 'next';
import WhyChooseUsContent from './WhyChooseUsContent';

export const metadata: Metadata = {
  title: 'Why Choose Stellar Elevators | Leading Lift Company',
  description: 'Discover why homeowners and architects in Hyderabad trust Stellar Elevators. From local manufacturing to our "Smile" service philosophy and uncompromising safety.',
  keywords: ['best elevator company Hyderabad', 'reliable lift manufacturers Telangana', 'top elevator service South India', 'why choose Stellar Elevators'],
};

export default function WhyChooseUs() {
  return <WhyChooseUsContent />;
}
