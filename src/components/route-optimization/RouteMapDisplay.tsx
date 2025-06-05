import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Route } from 'lucide-react';

export function RouteMapDisplay() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">Optimized Route</CardTitle>
        <Route className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="h-[300px] p-0 md:h-[400px]">
        <Image
          src="https://placehold.co/700x400.png"
          alt="Optimized route map"
          width={700}
          height={400}
          className="h-full w-full rounded-b-lg object-cover"
          data-ai-hint="route map"
        />
      </CardContent>
    </Card>
  );
}
