import Image from 'next/image';

const partners = [
  {
    name: 'World Health Organization',
    logo: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'United Nations',
    logo: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'CDC',
    logo: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'NASA',
    logo: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80',
  },
  {
    name: 'European Space Agency',
    logo: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80',
  },
];

export default function Partners() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Our Partners</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {partners.map((partner) => (
          <div key={partner.name} className="w-40">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={200}
              height={100}
              className="grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </div>
    </section>
  );
}