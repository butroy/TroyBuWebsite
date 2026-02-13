import HeroSection from '@/components/home/HeroSection';
import BioPreview from '@/components/home/BioPreview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Gallery from '@/components/home/Gallery';
import RecentPosts from '@/components/home/RecentPosts';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BioPreview />
      <FeaturedProjects />
      <Gallery />
      <RecentPosts />
      <ContactCTA />
    </>
  );
}
