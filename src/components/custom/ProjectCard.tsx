'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link'; 
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Project as ProjectType } from '@/app/types';

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, shortDescription, image, technologies, slug, liveDemoUrl, githubUrl } = project;

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 }
      }}
      className="h-full" 
    >
      <Card className="h-full flex flex-col justify-between overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-card text-card-foreground">
        <CardHeader className="p-0">
          {/* Link cho ảnh/tiêu đề để đi đến trang chi tiết dự án */}
          <Link href={`/projects/${slug}`} passHref className="block"> {/* Bọc ảnh/tiêu đề */}
            <div className="relative w-full h-48">
              <Image
                src={image}
                alt={title}
                fill
                style={{objectFit:"contain"}}
                className="rounded-t-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          {/* Link cho tiêu đề */}
          <Link href={`/projects/${slug}`} passHref>
            <CardTitle className="text-xl font-semibold mb-2 hover:text-primary transition-colors cursor-pointer">{title}</CardTitle>
          </Link>
          <CardDescription className="text-muted-foreground mb-4">{shortDescription}</CardDescription>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row gap-2 w-full">
          {liveDemoUrl && (
              <Button asChild variant="outline" className="w-full sm:w-1/2">
                  <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </Button>
          )}
          {githubUrl && (
              <Button asChild className="w-full sm:w-1/2">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;