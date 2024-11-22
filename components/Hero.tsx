import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Monitoring Global Health & Environmental Trends
        </h1>
        <p className="text-lg text-muted-foreground">
          Join us in understanding and addressing global health challenges through data-driven insights
          and environmental monitoring.
        </p>
        <div className="flex gap-4">
          <Link href="/gbd">
            <Button size="lg">Explore GBD Data</Button>
          </Link>
          <Link href="/earth-observation">
            <Button size="lg" variant="outline">Earth Observation</Button>
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80"
          width={600}
          height={400}
          alt="Global Health Monitoring"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}