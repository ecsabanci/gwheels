'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

export function NavMenu() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/about', label: 'hakkımızda' },
    { href: '/comparison', label: 'karşılaştır' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    } else if (href === '/comparison') {
      return pathname === '/comparison' || pathname?.startsWith('/comparison/');
    }
    return pathname === href;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="flex items-center gap-8 w-full md:w-auto">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`text-md transition-colors ${isActive(item.href)
              ? 'text-emerald-600 dark:text-emerald-400 font-medium underline'
              : 'text-slate-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400'
              }`}
          >
            {item.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </>
  );
} 