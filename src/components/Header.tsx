'use client';

import Link from 'next/link';
import { NavMenu } from './NavMenu';
import { Container } from './Container';
import { BoltIcon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <header className="">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-4">
          <Link href="/" className="text-4xl font-bold logo flex flex-col">
            <div className="flex items-center gap-1 mb-2">
              <BoltIcon className="w-8 h-8 text-emerald-600" />
              <span>G-Wheels</span>
            </div>
            <span className='text-xs'> <span className='font-bold border-2 border-emerald-600 p-1 rounded-full'>EV</span> dünyasından haberler</span>
          </Link>
          <NavMenu />
        </div>
      </Container>
    </header>
  );
};

export { Header }; 