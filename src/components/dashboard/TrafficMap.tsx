import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export function TrafficMap() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-lg font-medium">Specific Real-time Traffic: Nairobi</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">Detailed view of current road conditions in Nairobi.</CardDescription>
        </div>
        <MapPin className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="h-[400px] p-0 md:h-[500px]">
        <Image
          src="https://placehold.co/800x500.png"
          alt="Specific real-time traffic map for Nairobi"
          width={800}
          height={500}
          className="h-full w-full rounded-b-lg object-cover"
          data-ai-hint="Nairobi traffic"
        />
      </CardContent>
    </Card>
  );
}
