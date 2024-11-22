"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Globe2, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Health Observatory</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/careers" className="hover:text-primary transition-colors">
              Careers
            </Link>
            <Link href="/faq" className="hover:text-primary transition-colors">
              FAQs
            </Link>
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="block hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/careers" className="block hover:text-primary transition-colors">
              Careers
            </Link>
            <Link href="/faq" className="block hover:text-primary transition-colors">
              FAQs
            </Link>
            <Link href="/login">
              <Button className="w-full">Login</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}