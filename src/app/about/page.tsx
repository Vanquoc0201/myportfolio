'use client'; 

import { motion } from 'framer-motion';
import SectionHeading from '@/components/custom/SectionHeading';
import SkillsSection from '@/components/custom/SkillsSection';
import ExperienceSection from '@/components/custom/ExperienceSection';
import EducationSection from '@/components/custom/EducationSection';
import { personalInfo } from '@/lib/data'; 
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-12"
    >
      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <SectionHeading title="About Me" />
        <motion.div
          variants={itemVariants}
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary shadow-lg"
        >
          {personalInfo.profilePicture && (
            <Image
              src={personalInfo.profilePicture}
              alt={personalInfo.name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 128px, 160px"
            />
          )}
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          {personalInfo.name}, {personalInfo.title}
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          {personalInfo.aboutMeShort.replace('A passionate Fullstack Developer', 'I am a passionate Fullstack Developer')} {/* Mở rộng đoạn giới thiệu */}
          <br /><br />
          My journey in development has equipped me with strong skills across the entire software development lifecycle, from designing engaging user interfaces to building robust backend systems. I am always eager to learn new technologies and apply them to create innovative solutions.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link href="/contact" passHref>
            <Button size="lg">Let's Connect!</Button>
          </Link>
        </motion.div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Education Section */}
      <EducationSection />

      {/* Final Call to Action (Optional) */}
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-6 text-foreground"
        >
          Ready to bring your ideas to life?
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/contact" passHref>
            <Button size="lg" variant="secondary">Contact Me Now</Button>
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}