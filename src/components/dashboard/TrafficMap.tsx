import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export function TrafficMap() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">Real-time Traffic Congestion</CardTitle>
        <MapPin className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="h-[400px] p-0 md:h-[500px]">
        <Image
          src="https://placehold.co/800x500.png"
          alt="Real-time traffic map"
          width={800}
          height={500}
          className="h-full w-full rounded-b-lg object-cover"
          data-ai-hint="city traffic map"
        />
      </CardContent>
    </Card>
  );
}
