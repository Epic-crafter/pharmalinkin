// components/ui/card-title.tsx

import { cn } from "@/lib/utils"; // Utility function for conditional class names
import React from "react";

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          "text-lg font-semibold leading-tight", // Base styles for CardTitle
          className // Allowing additional class names to be passed
        )}
        {...props}
      >
        {children}
      </h2>
    );
  }
);

CardTitle.displayName = "CardTitle";

export default CardTitle;
