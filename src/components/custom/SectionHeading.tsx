
'use client';

import { motion, Variants } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';

interface SectionHeadingProps {
  title: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,  
  });

  const variants: Variants = { 
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`text-3xl md:text-4xl font-bold text-center mb-10 text-foreground ${className}`}
    >
      {title}
    </motion.h2>
  );
};

export default SectionHeading;