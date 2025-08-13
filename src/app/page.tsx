// src/app/page.tsx
import HeroSection from '@/components/custom/HeroSection';
import AboutSnippet from '@/components/custom/AboutSnippet';
import FeaturedProjects from '@/components/custom/FeaturedProjects';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* About Me Snippet */}
      <AboutSnippet />

      {/* Featured Projects Section */}
      <FeaturedProjects />
    </div>
  );
}