import type { Metadata } from 'next';
import {  Roboto } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: 'AdaForms - Blockchain Verification for Google Forms',
  description: 'Verify the integrity of Google Form responses using Cardano blockchain technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${roboto.variable} bg-white min-h-screen`}>
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0 flex items-center">
                  {/* <img src="/api/placeholder/24/24" alt="Adaverc Logo" className="mr-2" /> */}
                  <span className="text-xl font-bold text-[#4285F4]">Ada<span className="text-[#0033AD]">verc</span></span>
                </Link>
              </div>
              <nav className="flex space-x-1">
                <Link 
                  href="/verify" 
                  className="text-gray-700 hover:text-[#4285F4] hover:bg-[#e8f0fe] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Verify
                </Link>
                <Link 
                  href="/docs" 
                  className="text-gray-700 hover:text-[#4285F4] hover:bg-[#e8f0fe] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Documentation
                </Link>
                <a 
                  href="#" 
                  className="ml-3 bg-[#0033AD] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-[#002A8C] transition-colors"
                >
                  Get Add-on
                </a>
              </nav>
            </div>
          </div>
        </header>
        <div className='bg-white'>
        {children}

        </div>
        
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-[#0033AD] mr-2">
                  <div className="w-3 h-3 bg-[#0033AD] rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-[#0033AD]">AdaForms</span>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-gray-500 hover:text-[#0033AD]">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-gray-500 hover:text-[#0033AD]">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-gray-500 hover:text-[#0033AD]">
                  Contact
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4 md:mt-0">
                &copy; {new Date().getFullYear()} AdaForms. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}