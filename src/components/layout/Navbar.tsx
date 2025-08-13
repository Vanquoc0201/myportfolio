'use client'; // Đảm bảo có dòng này!

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react'; // Giữ lại Menu, X
import Image from 'next/image';
import { ModeToggle } from '../ui/modetoggle';



const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const NavBar = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm"
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo / Tên Portfolio */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-primary">V</span>õ Văn Quốc<span className="text-sm font-normal text-muted-foreground"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <Button variant="ghost" className="text-base font-medium transition-colors hover:text-primary cursor-pointer">
                {link.label}
              </Button>
            </Link>
          ))}
          {/* ModeToggle trên Desktop */}
          <ModeToggle /> {/* <-- Thêm ModeToggle ở đây */}
          {/* Social Icons on Desktop */}
          <Link href="https://github.com/Vanquoc0201" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              {/* Sử dụng Image component nếu bạn dùng PNG/JPG */}
              <Image src="/images/icons/github.png" alt="GitHub" width={20} height={20} className="object-contain" />
              {/* Hoặc dùng Simple Icons nếu bạn đã cài và muốn dùng SVG: <SiGithub className="h-5 w-5" /> */}
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/v%C4%83n-qu%E1%BB%91c-v%C3%B5-ab381834b/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              {/* Sử dụng Image component nếu bạn dùng PNG/JPG */}
              <Image src="/images/icons/linkedin.jpg" alt="LinkedIn" width={20} height={20} className="object-contain" />
              {/* Hoặc dùng Simple Icons nếu bạn đã cài và muốn dùng SVG: <SiLinkedin className="h-5 w-5" /> */}
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation (Hamburger Menu) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-6">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} passHref>
                    <Button variant="ghost" className="w-full justify-start text-lg">
                      {link.label}
                    </Button>
                  </Link>
                ))}
                {/* ModeToggle trên Mobile */}
                <div className="flex justify-center mt-4">
                  <ModeToggle /> {/* <-- Thêm ModeToggle ở đây */}
                </div>
                {/* Social Icons on Mobile */}
                <div className="flex justify-center gap-4 mt-4">
                    <Link href="https://github.com/Vanquoc0201" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon">
                            <Image src="/images/icons/github.png" alt="GitHub" width={24} height={24} className="object-contain" />
                            {/* Hoặc <SiGithub className="h-6 w-6" /> */}
                        </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/v%C4%83n-qu%E1%BB%91c-v%C3%B5-ab381834b/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon">
                            <Image src="/images/icons/linkedin.jpg" alt="LinkedIn" width={24} height={24} className="object-contain" />
                            {/* Hoặc <SiLinkedin className="h-6 w-6" /> */}
                        </Button>
                    </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default NavBar;