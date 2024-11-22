import Image from 'next/image';

export default function SecondaryHero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80"
          alt="Health awareness background"
          fill
          className="object-cover brightness-50"
        />
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-2xl text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Making Global Health Data Accessible
          </h2>
          <p className="text-lg opacity-90">
            Our platform combines cutting-edge technology with comprehensive health data
            to provide insights that help shape better healthcare policies and interventions
            worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}