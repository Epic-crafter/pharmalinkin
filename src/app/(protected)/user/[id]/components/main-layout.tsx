// "use client";

// import * as React from "react";
// import { useState } from "react";
// import { cn } from "@/lib/utils";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@/components/ui/resizable";
// import { Separator } from "@/components/ui/separator";
// import Sidebar from "../components/Sidebar/Sidebar"; // Ensure this path is correct

// interface MailProps {
//   children: any;
//   defaultLayout: number[] | undefined;
//   defaultCollapsed?: boolean;
//   navCollapsedSize: number;
// }

// export function MainLayout({
//   children,
//   defaultLayout = [20, 80],
//   defaultCollapsed = false,
//   navCollapsedSize,
// }: MailProps) {
//   const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

//   // Example props for Sidebar (you should update these with real data)
//   const sidebarProps = {
//     logo: "/path/to/logo.png", // Provide the actual path to the logo
//     menuItems: [
//       { icon: "/path/to/icon1.png", label: "Dashboard", isActive: true },
//       { icon: "/path/to/icon2.png", label: "Messages", isActive: false },
//       // Add more items as needed
//     ],
//     settingsItems: [
//       { icon: "/path/to/settings-icon.png", label: "Settings" },
//       { icon: "/path/to/logout-icon.png", label: "Log Out" },
//       // Add more settings items if needed
//     ],
//     bannerImage: "/path/to/banner.png", // Provide the actual banner image path
//     userAvatar: "/path/to/user-avatar.png", // User's avatar image
//     userEmail: "user@example.com", // User's email
//   };

//   return (
//     <TooltipProvider delayDuration={0}>
//       <ResizablePanelGroup
//         direction="horizontal"
//         onLayout={(sizes: number[]) => {
//           document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
//             sizes
//           )}`;
//         }}
//         className="h-full overflow-hidden"
//       >
//         <ResizablePanel
//           defaultSize={defaultLayout[0]}
//           collapsedSize={navCollapsedSize}
//           collapsible={true}
//           minSize={15}
//           maxSize={20}
//           onCollapse={() => {
//             setIsCollapsed(true);
//             document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
//               true
//             )}`;
//           }}
//           onResize={() => {
//             setIsCollapsed(false);
//             document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
//               false
//             )}`;
//           }}
//           className={cn(
//             isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out"
//           )}
//         >
//           <div
//             className={cn(
//               "flex h-[52px] items-center justify-center",
//               isCollapsed ? "h-[52px]" : "px-2"
//             )}
//           ></div>
//           <Separator />
//           {/* Pass the props to Sidebar */}
//           <Sidebar {...sidebarProps} />
//           <Separator />
//         </ResizablePanel>
//         <ResizableHandle withHandle />
//         <ResizablePanel defaultSize={defaultLayout[1]} minSize={80}>
//           <div
//             className={cn(
//               "flex h-[52px] items-center justify-center",
//               isCollapsed ? "h-[52px]" : "px-2"
//             )}
//           ></div>
//           <Separator />
//           <div className="h-[calc(100%-52px)] overflow-auto">{children}</div>
//         </ResizablePanel>
//       </ResizablePanelGroup>
//     </TooltipProvider>
//   );
// }
