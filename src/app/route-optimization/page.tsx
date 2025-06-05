import { OptimizationForm } from '@/components/route-optimization/OptimizationForm';
import { RouteMapDisplay } from '@/components/route-optimization/RouteMapDisplay';
import { RouteResults } from '@/components/route-optimization/RouteResults';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RouteOptimizationPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-headline font-semibold">Route Optimization</h1>
      
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Plan Your Route</CardTitle>
          </CardHeader>
          <CardContent>
            <OptimizationForm />
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <RouteMapDisplay />
          <RouteResults />
        </div>
      </div>
    </div>
  );
}
