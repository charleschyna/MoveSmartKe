"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Car, LayoutDashboard, Route, Activity, Waypoints, FileText, Settings as SettingsIcon, Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/route-optimization", label: "Route Optimization", icon: Route },
  { href: "/predictive-analytics", label: "Predictive Analytics", icon: Activity },
  { href: "/scenario-simulation", label: "Scenario Simulation", icon: Waypoints },
  { href: "/reports", label: "Reports & Exports", icon: FileText },
  { href: "/settings", label: "Settings", icon: SettingsIcon },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar side="left" variant="sidebar" collapsible="icon">
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2">
          <Car className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-semibold text-primary group-data-[collapsible=icon]:hidden">MoveSmart KE</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))}
                  tooltip={{ children: item.label, side: "right" }}
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2 group-data-[collapsible=icon]:hidden">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} MoveSmart KE</p>
      </SidebarFooter>
    </Sidebar>
  );
}
