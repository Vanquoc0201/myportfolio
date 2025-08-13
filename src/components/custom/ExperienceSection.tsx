'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './SectionHeading';
import { experiences } from '@/lib/data'; 
import { Separator } from '@/components/ui/separator';

interface ExperienceItemProps {
  experience: typeof experiences[0]; // Type của một item trong mảng experiences
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants : Variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 }, 
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: index * 0.1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full mb-8`}
    >
      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} p-4 bg-card rounded-lg shadow-md`}>
        <h3 className="text-xl font-semibold text-primary">{experience.title}</h3>
        <p className="text-lg text-muted-foreground">{experience.company}</p>
        <p className="text-sm text-gray-500 mb-3">{experience.duration}</p>
        <ul className="list-disc pl-5 text-card-foreground">
          {experience.description.map((point, i) => (
            <li key={i} className="mb-1 text-sm">{point}</li>
          ))}
        </ul>
      </div>
      {/* Optional: Timeline dot/line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-border hidden md:block">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-background z-10"></div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <SectionHeading title="My Experience" />
      <div className="relative">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;