'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Line, LineChart, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';
import { TrendingUp } from 'lucide-react';

const barChartData = [
  { area: "CBD", congestion: 75, lastWeek: 70 },
  { area: "Westlands", congestion: 60, lastWeek: 65 },
  { area: "Thika Rd", congestion: 85, lastWeek: 80 },
  { area: "Mombasa Rd", congestion: 70, lastWeek: 72 },
  { area: "Ngong Rd", congestion: 55, lastWeek: 50 },
];

const barChartConfig = {
  congestion: {
    label: "Current Congestion (%)",
    color: "hsl(var(--primary))",
  },
  lastWeek: {
    label: "Last Week (%)",
    color: "hsl(var(--secondary-foreground))",
  }
} satisfies ChartConfig;


const lineChartData = [
  { time: "6 AM", congestion: 30 }, { time: "9 AM", congestion: 70 },
  { time: "12 PM", congestion: 40 }, { time: "3 PM", congestion: 60 },
  { time: "6 PM", congestion: 80 }, { time: "9 PM", congestion: 50 },
];

const lineChartConfig = {
  congestion: {
    label: "Avg. Congestion",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

export function CongestionTrends() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Congestion by Area</CardTitle>
          <CardDescription>Current vs. Last Week Average</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={barChartConfig} className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barChartData} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="area"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 10)}
                />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="congestion" fill="var(--color-congestion)" radius={4} />
                <Bar dataKey="lastWeek" fill="var(--color-lastWeek)" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Daily Congestion Trend (City Average)</CardTitle>
          <CardDescription>Average congestion levels throughout the day.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={lineChartConfig} className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineChartData} accessibilityLayer
                margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line type="monotone" dataKey="congestion" stroke="var(--color-congestion)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
