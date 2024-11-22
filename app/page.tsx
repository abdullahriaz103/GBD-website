import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Partners from '@/components/Partners';
import SecondaryHero from '@/components/SecondaryHero';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <Hero />
      <Features />
      <SecondaryHero />
      <Partners />
    </div>
  );
}