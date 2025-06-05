'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { simulateRoadClosure, type SimulateRoadClosureInput, type SimulateRoadClosureOutput } from '@/ai/flows/simulate-road-closure';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function ScenarioForm() {
  const [scenarioDescription, setScenarioDescription] = useState('');
  const [currentTrafficData, setCurrentTrafficData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [simulationResult, setSimulationResult] = useState<SimulateRoadClosureOutput | null>(null);
  const { toast } = useToast();

  // This would typically update a shared state accessible by ImpactMap and AiSuggestions components
  // For now, we'll just log it and display it here.
  const handleSimulationComplete = (result: SimulateRoadClosureOutput) => {
    setSimulationResult(result);
    console.log("Simulation Result:", result);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!scenarioDescription.trim()) {
      toast({ title: "Input Required", description: "Please describe the scenario.", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    setSimulationResult(null);
    try {
      const input: SimulateRoadClosureInput = { 
        scenarioDescription, 
        currentTrafficData: currentTrafficData || "Assume typical weekday traffic for the described scenario area." 
      };
      const result = await simulateRoadClosure(input);
      handleSimulationComplete(result);
      toast({
        title: "Simulation Complete",
        description: "Traffic impact and suggestions are available.",
      });
    } catch (error) {
      console.error("Error simulating scenario:", error);
      toast({
        title: "Error",
        description: "Could not simulate scenario. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="scenarioDescription">Scenario Description</Label>
        <Textarea
          id="scenarioDescription"
          value={scenarioDescription}
          onChange={(e) => setScenarioDescription(e.target.value)}
          placeholder="e.g., Closure of Uhuru Highway northbound at Haile Selassie Ave due to an event."
          rows={4}
          required
        />
      </div>
      <div>
        <Label htmlFor="currentTrafficData">Current Traffic Data (Optional)</Label>
        <Textarea
          id="currentTrafficData"
          value={currentTrafficData}
          onChange={(e) => setCurrentTrafficData(e.target.value)}
          placeholder="e.g., Heavy congestion on feeder roads, moderate on bypasses. (If empty, AI will assume typical conditions)"
          rows={3}
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Simulate Impact
      </Button>

      {simulationResult && (
        <Alert className="mt-6">
          <AlertTitle>Simulation Results (Preview)</AlertTitle>
          <AlertDescription className="space-y-2">
            <p><strong>Projected Impact:</strong> {simulationResult.projectedTrafficImpact}</p>
            <div>
              <strong>Suggestions:</strong>
              <ul className="list-disc pl-5">
                {simulationResult.suggestedMitigationStrategies.map((strat, idx) => (
                  <li key={idx}>{strat}</li>
                ))}
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      )}
    </form>
  );
}
