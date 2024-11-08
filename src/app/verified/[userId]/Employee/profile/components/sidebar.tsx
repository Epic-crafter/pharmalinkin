"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useUser } from "@/lib/contexts/user"
import { File, User } from "lucide-react"

// Menu items.


export function AppSidebar() {
    const {userId,userRole}=useUser()
    const items = [
        {
          title: "Profile",
          url: `/verified/${userId}/${userRole}/profile`,
          icon: User,
        },
        {
          title: "Resume",
          url: `/verified/${userId}/${userRole}/profile/resume`,
          icon: File ,
        },
      ]
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="pt-24">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
