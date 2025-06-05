'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { getLiveAiInsights, type LiveAiInsightsInput } from '@/ai/flows/live-ai-insights';
import { Brain, Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LiveAiInsightsProps {
  region: string;
  timeOfDay: string;
}

export function LiveAiInsights({ region, timeOfDay }: LiveAiInsightsProps) {
  const [insight, setInsight] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchInsight = useCallback(async (currentRegion: string, currentTimeOfDay: string) => {
    setIsLoading(true);
    try {
      // Map "current" time of day to a more descriptive value for the AI if needed
      // For now, we'll pass it as is, but the AI prompt might benefit from more specific times.
      const apiTimeOfDay = currentTimeOfDay === "current" ? "current real-time" : currentTimeOfDay;
      
      const input: LiveAiInsightsInput = { region: currentRegion, timeOfDay: apiTimeOfDay };
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
  }, [toast]); // toast is stable, no need to include it if it causes re-renders

  useEffect(() => {
    if (region && timeOfDay) {
      fetchInsight(region, timeOfDay);
    }
  }, [region, timeOfDay, fetchInsight]);

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
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => fetchInsight(region, timeOfDay)} 
          className="mt-4 w-full"
          disabled={isLoading}
        >
          Refresh Insight
        </Button>
      </CardContent>
    </Card>
  );
}
