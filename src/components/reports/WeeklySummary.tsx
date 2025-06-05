import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpenText } from 'lucide-react';

export function WeeklySummary() {
  const summaryPoints = [
    "Overall city congestion decreased by 3% compared to the previous week.",
    "Thika Road showed the highest improvement in average travel time reduction (7%).",
    "Weekend traffic patterns remained consistent, with Saturday afternoon being the peak.",
    "No major incidents reported that significantly impacted overall traffic flow this week.",
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpenText className="h-6 w-6 text-primary" />
          Summary of Weekly Traffic Insights
        </CardTitle>
        <CardDescription>Key observations from the past week's traffic data.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {summaryPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-primary" />
              <span className="text-sm">{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
