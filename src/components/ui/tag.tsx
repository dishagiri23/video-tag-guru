
import * as React from "react";
import { cn } from "@/lib/utils";

const Tag = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "outline" | "primary" | "secondary" }
>(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variant === "default" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === "outline" && "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        variant === "primary" && "bg-primary/10 text-primary hover:bg-primary/20",
        variant === "secondary" && "bg-secondary/80 text-secondary-foreground hover:bg-secondary/60",
        className
      )}
      {...props}
    />
  );
});
Tag.displayName = "Tag";

export { Tag };
