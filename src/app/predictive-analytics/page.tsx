import { CongestionForecast } from '@/components/predictive-analytics/CongestionForecast';
import { CongestionTrends } from '@/components/predictive-analytics/CongestionTrends';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PredictiveAnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-headline font-semibold">Predictive Analytics</h1>
      
      <CongestionForecast />
      <CongestionTrends />

       <Card>
        <CardHeader>
          <CardTitle>Historical Data Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">More detailed historical data views will be available here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
