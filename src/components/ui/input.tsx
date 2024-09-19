// components/ui/input.tsx

import * as React from "react";
import { cn } from "@/lib/utils"; // If you have a utility for class names

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
