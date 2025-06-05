import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

// This component would ideally receive data from a shared state updated by ScenarioForm
export function AiSuggestions() {
  const suggestions = [
    "Divert traffic via Jogoo Road and Landhies Road.",
    "Increase traffic police presence at key intersections.",
    "Update digital signage with real-time diversion information.",
    "Advise public to use alternative transport if possible.",
  ]; // Placeholder data

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-primary" />
          AI-Powered Suggestions
        </CardTitle>
        <CardDescription>Mitigation strategies based on the simulated scenario.</CardDescription>
      </CardHeader>
      <CardContent>
        {suggestions.length > 0 ? (
          <ul className="space-y-3">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-primary" />
                <span className="text-sm">{suggestion}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">
            No suggestions available. Run a simulation to get AI-powered mitigation strategies.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
