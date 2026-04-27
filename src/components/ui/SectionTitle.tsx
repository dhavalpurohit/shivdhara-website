import { cn } from "@/lib/utils";
import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
      )}
      <div
        className={cn(
          "h-1.5 w-20 bg-secondary mt-6 rounded-full",
          centered && "mx-auto",
        )}
      />
    </div>
  );
};
