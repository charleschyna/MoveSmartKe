'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export function DashboardFilters() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <Label htmlFor="region-filter" className="mb-2 block text-sm font-medium">Region</Label>
            <Select defaultValue="nairobi">
              <SelectTrigger id="region-filter">
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nairobi">Nairobi</SelectItem>
                <SelectItem value="mombasa">Mombasa</SelectItem>
                <SelectItem value="kisumu">Kisumu</SelectItem>
                <SelectItem value="nakuru">Nakuru</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="time-filter" className="mb-2 block text-sm font-medium">Time of Day</Label>
            <Select defaultValue="current">
              <SelectTrigger id="time-filter">
                <SelectValue placeholder="Select Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">Current</SelectItem>
                <SelectItem value="morning_peak">Morning Peak (7-9 AM)</SelectItem>
                <SelectItem value="mid_day">Mid-day (10 AM - 3 PM)</SelectItem>
                <SelectItem value="evening_peak">Evening Peak (4-7 PM)</SelectItem>
                <SelectItem value="night">Night (8 PM onwards)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="vehicle-filter" className="mb-2 block text-sm font-medium">Vehicle Type</Label>
            <Select defaultValue="all">
              <SelectTrigger id="vehicle-filter">
                <SelectValue placeholder="Select Vehicle Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Vehicles</SelectItem>
                <SelectItem value="car">Cars</SelectItem>
                <SelectItem value="matatu">Matatus (PSV)</SelectItem>
                <SelectItem value="truck">Trucks</SelectItem>
                <SelectItem value="motorcycle">Motorcycles</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
