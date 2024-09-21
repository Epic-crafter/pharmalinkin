"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    href: string;
    icon: LucideIcon;
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  const path = usePathname();
  const router = useRouter();
  const navigateTo = (path: string) => {
    router.push(`/user/1234/${path}`);
  };
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex h-full flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) => {
          const isActive =
          (link.href === '/' && path === '/user/1234') || 
          (link.href !== '/' && path.startsWith(`/user/1234/${link.href}`));
          return isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => navigateTo(link.href)}
                  variant={isActive ? "default" : "ghost"}
                >
                  <link.icon className="w-4" />
                  <span className="sr-only">{link.title}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button
              key={index}
              onClick={() => navigateTo(link.href)}
              className="flex justify-start"
              variant={isActive ? "default" : "ghost"}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto font",
                    isActive && "text-background dark:text-white"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Button>
          );
        })}
      </nav>
    </div>
  );
}
