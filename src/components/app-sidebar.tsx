import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import * as React from "react";
import { AppLogo } from "./app-logo";
import { ModeToggle } from "./mode-toggle";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Header",
      url: "#",
      items: [
        {
          title: "Header A",
          url: "#",
        },
        {
          title: "Header B",
          url: "#",
        },
      ],
    },
    {
      title: "Hero",
      url: "#",
      items: [
        {
          title: "Hero A",
          url: "#",
        },
        {
          title: "Hero B",
          url: "#",
          isActive: true,
        },
      ],
    },
    {
      title: "Features",
      url: "#",
      items: [
        {
          title: "Features A",
          url: "#",
        },
        {
          title: "Features B",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <AppLogo />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1">
          <ModeToggle />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
