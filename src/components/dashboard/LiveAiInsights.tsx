'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { getLiveAiInsights, type LiveAiInsightsInput } from '@/ai/flows/live-ai-insights';
import { Brain, Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function LiveAiInsights() {
  const [insight, setInsight] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchInsight = async (region: string = "Nairobi", timeOfDay: string = "Evening Rush") => {
    setIsLoading(true);
    try {
      const input: LiveAiInsightsInput = { region, timeOfDay };
      const result = await getLiveAiInsights(input);
      setInsight(result.insight);
    } catch (error) {
      console.error("Error fetching AI insight:", error);
      toast({
        title: "Error",
        description: "Could not fetch AI insights. Please try again.",
        variant: "destructive",
      });
      setInsight("Failed to load insights.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInsight();
  }, []);

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">Live AI Insights</CardTitle>
        <Brain className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2 pt-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : (
          <p className="text-sm text-foreground pt-2 flex items-start gap-2">
            <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span>{insight || "No insights available."}</span>
          </p>
        )}
        <Button variant="outline" size="sm" onClick={() => fetchInsight()} className="mt-4 w-full">
          Refresh Insight
        </Button>
      </CardContent>
    </Card>
  );
}
