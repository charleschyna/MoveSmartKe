import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Clock, BarChart3, AlertCircle } from 'lucide-react';

export function RouteResults() {
  // Placeholder data
  const estimatedTime = "35 minutes";
  const congestionRating = "Low (2/10)";
  const alternativeRoutes = [
    { name: "Alternative Route 1", time: "40 minutes", congestion: "Moderate" },
    { name: "Alternative Route 2", time: "45 minutes", congestion: "Moderate" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Route Details</CardTitle>
        <CardDescription>Based on current traffic conditions.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          <span>Estimated Travel Time: <strong>{estimatedTime}</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          <span>Congestion Rating: <span className="text-green-600 font-semibold">{congestionRating}</span></span>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Alternative Routes:</h4>
          {alternativeRoutes.length > 0 ? (
            <ul className="space-y-2">
              {alternativeRoutes.map((route, index) => (
                <li key={index} className="text-sm p-2 border rounded-md bg-secondary/50">
                  <strong>{route.name}:</strong> {route.time}, Congestion: {route.congestion}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">No alternative routes available.</p>
          )}
        </div>

        <div className="flex items-start gap-2 p-3 bg-accent/10 text-accent-foreground border border-accent/20 rounded-md">
          <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <p className="text-sm">
            This route is optimized considering real-time traffic. Conditions may change.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
