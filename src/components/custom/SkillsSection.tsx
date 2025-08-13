'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './SectionHeading';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { allSkills } from '@/lib/data'; 
import { Skill as SkillType } from '@/app/types';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SkillCategory: React.FC<{ category: string; skills: SkillType[] }> = ({ category, skills }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants} 
      className="mb-8 p-6 bg-card rounded-lg shadow-sm"
    >
      <h3 className="text-2xl font-semibold mb-4 text-primary">{category}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={itemVariants} className="flex items-center gap-2">
            {skill.icon && (
              <Image src={skill.icon} alt={skill.name} width={24} height={24} className="object-contain" />
            )}
            <Badge variant="secondary" className="px-3 py-1 text-base">
              {skill.name}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};


const SkillsSection = () => {
  const categorizedSkills = allSkills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {} as Record<string, SkillType[]>);

  return (
    <section className="container mx-auto px-4 py-16">
      <SectionHeading title="My Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <SkillCategory key={category} category={category} skills={skills} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;