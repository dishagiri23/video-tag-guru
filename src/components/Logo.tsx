
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center overflow-hidden">
        <span className="text-white font-bold text-lg">V</span>
      </div>
      <span className="font-bold text-xl tracking-tight text-foreground">
        VideoTag<span className="text-primary">Guru</span>
      </span>
    </div>
  );
}
