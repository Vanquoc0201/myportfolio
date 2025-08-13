// src/components/custom/EducationSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './SectionHeading';
import { education } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface EducationItemProps {
  item: typeof education[0];
  index: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: index * 0.15 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="mb-8"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-primary">{item.degree}</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">{item.institution}</CardDescription>
          <p className="text-sm text-gray-500">{item.duration}</p>
        </CardHeader>
        <CardContent>
          <p className="text-card-foreground">{item.details}</p>
          {item.gpa && <p className="text-sm text-gray-500 mt-2">GPA: {item.gpa}</p>}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const EducationSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <SectionHeading title="My Education" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((item, index) => (
          <EducationItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;