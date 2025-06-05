import { TrafficMap } from '@/components/dashboard/TrafficMap';
import { KpiCard, KpiCardProps } from '@/components/dashboard/KpiCard';
import { LiveAiInsights } from '@/components/dashboard/LiveAiInsights';
import { DashboardFilters } from '@/components/dashboard/DashboardFilters';
import { Gauge, Clock, AlertTriangle, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const kpiData: KpiCardProps[] = [
  { title: "City Congestion Level", value: "67%", icon: <Gauge className="h-6 w-6 text-primary" />, description: "+2% from yesterday" },
  { title: "Average Trip Time", value: "42 mins", icon: <Clock className="h-6 w-6 text-primary" />, description: "-5 mins from last week" },
  { title: "Active Incidents", value: "3", icon: <AlertTriangle className="h-6 w-6 text-destructive" />, description: "View details" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-headline font-semibold">Dashboard Overview</h1>
      
      <DashboardFilters />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {kpiData.map((kpi) => (
          <KpiCard key={kpi.title} {...kpi} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TrafficMap />
        </div>
        <div>
          <LiveAiInsights />
        </div>
      </div>

      {/* Placeholder for additional charts or information */}
      <Card>
        <CardHeader>
          <CardTitle>More Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Future charts and data visualizations will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
