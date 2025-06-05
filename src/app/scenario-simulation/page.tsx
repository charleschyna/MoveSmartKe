import { ScenarioForm } from '@/components/scenario-simulation/ScenarioForm';
import { ImpactMap } from '@/components/scenario-simulation/ImpactMap';
import { AiSuggestions } from '@/components/scenario-simulation/AiSuggestions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ScenarioSimulationPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-headline font-semibold">Scenario Simulation</h1>
      
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Define Scenario</CardTitle>
          </CardHeader>
          <CardContent>
            <ScenarioForm />
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <ImpactMap />
          <AiSuggestions />
        </div>
      </div>
    </div>
  );
}
