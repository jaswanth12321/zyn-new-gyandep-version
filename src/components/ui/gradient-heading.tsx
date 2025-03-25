
import { cn } from "@/lib/utils";
import React from "react";

interface GradientHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "lg" | "xl" | "xxl";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function GradientHeading({
  children,
  variant = "primary",
  size = "default",
  as: Component = "h2",
  className,
  ...props
}: GradientHeadingProps) {
  const gradientStyles = {
    primary: "bg-gradient-to-r from-purple-600 to-indigo-600",
    secondary: "bg-gradient-to-r from-gray-500 to-gray-600",
  };

  const sizeStyles = {
    default: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl",
    xxl: "text-5xl md:text-6xl",
  };

  return (
    <Component
      className={cn(
        "text-transparent bg-clip-text font-bold tracking-tight mb-4",
        gradientStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
