import { Metadata } from 'next';
import ProductsContent from './ProductsContent';

export const metadata: Metadata = {
  title: 'Luxury Elevators | Our Product Range',
  description: 'Explore Stellar Elevators\' premium collection: Villa Elevators, Passenger Lifts, Hospital Elevators, and Freight solutions. Engineered for safety and elegance in Hyderabad.',
  keywords: ['villa elevators Hyderabad', 'passenger lifts Telangana', 'panoramic glass elevators', 'hospital lifts South India', 'home elevator designs'],
};

export default function Products() {
  return <ProductsContent />;
}
