import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Globe, Activity } from 'lucide-react';

export default function Features() {
  return (
    <section className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <Link href="/gbd">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Activity className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>Global Burden of Diseases</CardTitle>
              <CardDescription>
                Explore comprehensive data on disease prevalence, mortality rates, and health trends
                across different regions and time periods.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        
        <Link href="/earth-observation">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Globe className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>Earth Observation</CardTitle>
              <CardDescription>
                Monitor environmental factors affecting public health through satellite data and
                advanced analytics.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </section>
  );
}