'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import SectionHeading from '@/components/custom/SectionHeading';
import ProjectCard from '@/components/custom/ProjectCard';
import { allProjects, allSkills } from '@/lib/data'; 
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react'; 
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
      delayChildren: 0.2,   
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
};

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Lọc dự án dựa trên search term và selected tech
  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = selectedTech ? project.technologies.includes(selectedTech) : true;
    return matchesSearch && matchesTech;
  });

  const uniqueTechnologies = Array.from(
    new Set(allProjects.flatMap((project) => project.technologies))
  ).sort(); 

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-16"
    >
      <SectionHeading title="All My Projects" />

      {/* Filter and Search Section */}
      <motion.div
        variants={itemVariants}
        className="mb-12 p-6 bg-card rounded-lg shadow-md"
      >
        <h3 className="text-xl font-semibold mb-4 text-primary">Filter Projects</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Input
            placeholder="Search projects by title or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4 items-center">
          <span className="text-muted-foreground mr-2">Filter by Tech:</span>
          {uniqueTechnologies.map((tech) => (
            <Badge
              key={tech}
              variant={selectedTech === tech ? 'default' : 'secondary'}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-base px-3 py-1"
              onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
            >
              {tech}
            </Badge>
          ))}
          {selectedTech && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedTech(null)}
              className="ml-2 text-destructive hover:bg-destructive/10"
            >
              <XCircle className="w-4 h-4 mr-1" /> Clear Filter
            </Button>
          )}
        </div>
      </motion.div>

      {filteredProjects.length > 0 ? (
        <motion.div
          variants={containerVariants} 
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.slug} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-xl text-muted-foreground py-16"
        >
          No projects found matching your criteria.
        </motion.p>
      )}
    </motion.div>
  );
}