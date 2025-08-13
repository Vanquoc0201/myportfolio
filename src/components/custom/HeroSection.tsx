'use client';

import { motion, Variants } from 'framer-motion'; 
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';

const containerVariants: Variants = { 
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = { 
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
};

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center px-4 py-16 overflow-hidden bg-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 max-w-4xl mx-auto"
      >
        {personalInfo.profilePicture && (
          <motion.div
            variants={itemVariants} 
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary shadow-lg"
          >
            <Image
              src={personalInfo.profilePicture}
              alt={personalInfo.name}
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="(max-width: 768px) 128px, 160px"
            />
          </motion.div>
        )}

        <motion.h1
          variants={itemVariants} 
          className="text-4xl md:text-6xl font-extrabold mb-4 text-foreground leading-tight"
        >
          Hi, I&apos;m <span className="text-primary">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants} 
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects" passHref>
            <Button size="lg" className="px-8 py-3 text-lg cursor-pointer">
              View My Projects
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg cursor-pointer">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl z-0 pointer-events-none"
      ></motion.div>
    </section>
  );
};

export default HeroSection;