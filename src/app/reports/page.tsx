import { DownloadSection } from '@/components/reports/DownloadSection';
import { WeeklySummary } from '@/components/reports/WeeklySummary';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-headline font-semibold">Reports & Exports</h1>
      
      <DownloadSection />
      <WeeklySummary />

      <Card>
        <CardHeader>
          <CardTitle>Custom Report Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Future functionality to generate custom reports will be available here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
