"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';

const diseases = ['Malaria', 'Lung Cancer', 'Acute Respiratory Infection'];
const regions = ['South Asia', 'Middle East', 'America'];
const countries = {
  'South Asia': ['India', 'Pakistan', 'Bangladesh'],
  'Middle East': ['Saudi Arabia', 'UAE', 'Iran'],
  'America': ['USA', 'Canada', 'Mexico'],
};
const years = Array.from({ length: 12 }, (_, i) => (2013 + i).toString());

export default function GBDPage() {
  const [selectedDisease, setSelectedDisease] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [displayType, setDisplayType] = useState<'table' | 'graph'>('table');
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const handleClear = () => {
    setSelectedDisease('');
    setSelectedRegion('');
    setSelectedCountry('');
    setSelectedYear('');
    setShowResults(false);
  };

  const getDescription = () => {
    if (!selectedDisease) return '';

    const descriptions = {
      'Malaria': 'Malaria remains a significant public health challenge, particularly in tropical and subtropical regions. The data shows infection rates, mortality, and the effectiveness of intervention programs.',
      'Lung Cancer': 'Lung cancer statistics include incidence rates, mortality, risk factors, and treatment outcomes. This data helps identify trends and evaluate healthcare interventions.',
      'Acute Respiratory Infection': 'ARI data encompasses various respiratory conditions, showing seasonal patterns, demographic impacts, and the burden on healthcare systems.',
    };

    return descriptions[selectedDisease as keyof typeof descriptions];
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Global Burden of Diseases</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Explore comprehensive data on disease prevalence, mortality rates, and health trends
            across different regions and time periods.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            width={400}
            height={300}
            alt="Global Health Data"
            className="rounded-lg"
          />
        </div>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={selectedDisease} onValueChange={setSelectedDisease}>
              <SelectTrigger>
                <SelectValue placeholder="Select Disease" />
              </SelectTrigger>
              <SelectContent>
                {diseases.map((disease) => (
                  <SelectItem key={disease} value={disease}>
                    {disease}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger>
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select 
              value={selectedCountry} 
              onValueChange={setSelectedCountry}
              disabled={!selectedRegion}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                {selectedRegion &&
                  countries[selectedRegion as keyof typeof countries].map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-4">
            <Select value={displayType} onValueChange={(value: 'table' | 'graph') => setDisplayType(value)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select Display Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="table">Table View</SelectItem>
                <SelectItem value="graph">Graph View</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-4">
            <Button 
              type="submit"
              disabled={!selectedDisease || !selectedRegion || !selectedCountry || !selectedYear}
            >
              Show Results
            </Button>
            <Button type="button" variant="outline" onClick={handleClear}>
              Clear
            </Button>
          </div>
        </form>

        {showResults && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Results</h2>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-lg mb-4">
                Showing data for {selectedDisease} in {selectedCountry}, {selectedRegion} ({selectedYear})
              </p>
              <p className="mb-6 text-muted-foreground">{getDescription()}</p>
              {displayType === 'table' ? (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Metric</th>
                        <th className="text-left p-2">Value</th>
                        <th className="text-left p-2">Change from Previous Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Prevalence Rate</td>
                        <td className="p-2">25.3 per 100,000</td>
                        <td className="p-2 text-red-500">+2.1%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Mortality Rate</td>
                        <td className="p-2">12.1 per 100,000</td>
                        <td className="p-2 text-green-500">-1.5%</td>
                      </tr>
                      <tr>
                        <td className="p-2">DALYs</td>
                        <td className="p-2">456.7 per 100,000</td>
                        <td className="p-2 text-red-500">+0.8%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center bg-background rounded-lg">
                  <p className="text-muted-foreground">Graph visualization would appear here</p>
                </div>
              )}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}