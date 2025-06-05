'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FileDown, BarChart2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function DownloadSection() {
  const { toast } = useToast();

  const handleDownload = (type: string) => {
    toast({
      title: "Download Started",
      description: `Your ${type} report is being generated and will download shortly.`,
    });
    // Simulate download
    console.log(`Downloading ${type} report...`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Downloadable Reports</CardTitle>
        <CardDescription>Access pre-generated reports or export current data.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2">
        <Button onClick={() => handleDownload('PDF')} variant="outline">
          <FileDown className="mr-2 h-4 w-4" />
          Download Summary PDF
        </Button>
        <Button onClick={() => handleDownload('Charts Data (CSV)')} variant="outline">
          <BarChart2 className="mr-2 h-4 w-4" />
          Export Charts Data (CSV)
        </Button>
      </CardContent>
    </Card>
  );
}
