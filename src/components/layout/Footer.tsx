'use client';

import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react'; 
import Image from 'next/image'; 

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t bg-background">
      <div className="container flex flex-col items-center justify-between text-center md:flex-row md:text-left">
        {/* Copyright */}
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Võ Văn Quốc. All rights reserved.
        </p>

        {/* Quick Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0">
          <Link href="/about" passHref><Button variant="link" className="text-sm text-muted-foreground">About</Button></Link>
          <Link href="/projects" passHref><Button variant="link" className="text-sm text-muted-foreground">Projects</Button></Link>
          <Link href="/contact" passHref><Button variant="link" className="text-sm text-muted-foreground">Contact</Button></Link>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <Link href="https://github.com/Vanquoc0201" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              {/* Sử dụng Image component cho icon GitHub */}
              <Image src="/images/icons/github.png" alt="GitHub" width={20} height={20} className="object-contain" />
              <span className="sr-only">GitHub profile</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/v%C4%83n-qu%E1%BB%91c-v%C3%B5-ab381834b/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              {/* Sử dụng Image component cho icon LinkedIn */}
              <Image src="/images/icons/linkedin.jpg" alt="LinkedIn" width={20} height={20} className="object-contain" />
              <span className="sr-only">LinkedIn profile</span>
            </Button>
          </Link>
          <Link href="mailto:vovanquoc0201@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email : vovanquoc0201@gmail.com</span>
            </Button>
          </Link>
        </div>
      </div>
      <Separator className="my-8" />
      <p className="text-xs text-center text-muted-foreground">
        Built with Next.js, Tailwind CSS, Shadcn UI and Framer Motion.
      </p>
    </footer>
  );
};

export default Footer;