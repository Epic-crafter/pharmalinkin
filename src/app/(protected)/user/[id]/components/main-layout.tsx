"use client"

import * as React from "react"
import {
  ArchiveX,
  File,
  Gauge,
  Send,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import {Sidebar} from './Sidebar/SideNav'
import { useState } from "react"

interface MailProps {
  children:any,
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}
export function MainLayout({
    children,
    defaultLayout = [20,80],
    defaultCollapsed = false,
    navCollapsedSize,
  }: MailProps) {

    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
 
  return (
   <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes
          )}`
        }}
        className="h-full overflow-hidden"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true
            )}`
          }}
          onResize={() => {
            setIsCollapsed(false)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false
            )}`
          }}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          <div
            className={cn(
              "flex h-[52px] items-center justify-center",
              isCollapsed ? "h-[52px]" : "px-2"
            )}
          >
          </div>
          <Separator />
<Sidebar/>
          <Separator />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={80}>
        <div
            className={cn(
              "flex h-[52px] items-center justify-center",
              isCollapsed ? "h-[52px]" : "px-2"
            )}
          >
          </div>
          <Separator />
          <div
           className="h-[calc(100%-52px)] overflow-auto"
          >
         {children}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
     </TooltipProvider>
  )
}

