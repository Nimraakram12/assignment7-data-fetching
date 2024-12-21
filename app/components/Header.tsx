
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-200 shadow-md">
      
      <div className="flex items-center justify-center flex-grow">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full w-10 h-10 flex items-center justify-center">
          <span className="text-white font-bold">N</span>
        </div>
        <span className="ml-4 text-4xl font-black text-indigo-600">Fetching</span>
      </div>

      
      <nav className="hidden md:flex flex-grow justify-center">
        <ul className="flex space-x-6 font-bold items-center">
          <li>
            <Link href="/server-side"
               className="text-gray-700 hover:text-indigo-500 text-2xl transition">
                Server-Side Fetching
            </Link>
          </li>
          <li>
            <Link href="/client-side"
              className="text-gray-700 hover:text-indigo-500 text-2xl transition">
                Client-Side Fetching
            </Link>
          </li>
        </ul>
      </nav>

      
      <nav className="md:hidden flex flex-grow justify-end">
        <button
          className="text-gray-700 hover:text-indigo-500 text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        
        {isMobileMenuOpen && (
          <div className="absolute top-16 right-0 bg-indigo-300 text-gray-900 shadow-lg p-6 rounded-lg space-y-6 w-64">
            <Link href="/server-side"
              className="block text-xl font-semibold hover:text-indigo-600 transition">
              Server-Side Fetching
            </Link>
            <Link href="/client-side"
              className="block text-xl font-semibold hover:text-indigo-600 transition">
              Client-Side Fetching
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
