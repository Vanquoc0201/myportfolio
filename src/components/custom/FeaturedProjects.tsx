'use client';

import { motion, Variants } from 'framer-motion'; 
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '@/lib/data';

const containerVariants: Variants = { 
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.3,    
    },
  },
};

const itemVariants: Variants = { 
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
};

const FeaturedProjects = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <SectionHeading title="My Featured Projects" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {featuredProjects.map((project) => (
          <motion.div key={project.slug} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: featuredProjects.length * 0.15 + 0.5 }}
        className="flex justify-center mt-12"
      >
        <Link href="/projects" passHref>
          <Button size="lg" variant="secondary">View All Projects</Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;