import {ReactNode} from 'react';
import {Navigation} from '../components/Navigation';
import {Footer} from '../components/Footer';

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({children}: MainLayoutProps) {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
