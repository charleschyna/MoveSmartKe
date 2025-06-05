import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Thermometer } from 'lucide-react';

const forecastIntervals = [
  { value: "1hr", label: "1 Hour", hint: "1hr traffic heatmap" },
  { value: "4hr", label: "4 Hours", hint: "4hr traffic heatmap" },
  { value: "24hr", label: "24 Hours", hint: "24hr traffic heatmap" },
];

export function CongestionForecast() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">Congestion Forecast Heatmaps</CardTitle>
        <Thermometer className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="1hr" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            {forecastIntervals.map((interval) => (
              <TabsTrigger key={interval.value} value={interval.value}>
                {interval.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {forecastIntervals.map((interval) => (
            <TabsContent key={interval.value} value={interval.value}>
              <div className="h-[300px] md:h-[400px] w-full bg-muted rounded-md flex items-center justify-center">
                <Image
                  src={`https://placehold.co/600x400.png`}
                  alt={`Congestion heatmap for ${interval.label}`}
                  width={600}
                  height={400}
                  className="h-full w-full object-contain rounded-md"
                  data-ai-hint={interval.hint}
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Predicted congestion heatmap for the next {interval.label.toLowerCase()}.
              </p>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
