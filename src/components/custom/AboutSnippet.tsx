'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SectionHeading from './SectionHeading';
import { personalInfo } from '@/lib/data'; 

const AboutSnippet = () => {
  return (
    <section className="container mx-auto px-4 py-16 bg-card text-card-foreground rounded-lg shadow-lg my-12">
      <SectionHeading title="Who Am I?" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
      >
        {personalInfo.aboutMeShort}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center"
      >
        <Link href="/about" passHref>
          <Button size="lg" variant="outline" className='cursor-pointer'>Learn More About Me</Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutSnippet;