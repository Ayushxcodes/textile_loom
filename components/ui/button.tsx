import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// -------------------------------------------------------------
// THEME UPDATE: TRICOLOUR + ELEVATED GOVERNMENT UI BUTTON
// -------------------------------------------------------------
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A5F30]",
  {
    variants: {
      variant: {
        default:
          // 🇮🇳 INDIAN TRICOLOUR GRADIENT BUTTON
          "flex gap-2 px-6 py-3 bg-gradient-to-r from-[#FF671F] via-white to-[#046A38] text-black font-semibold border border-black/20 shadow-[0_2px_6px_rgba(0,0,0,0.18)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.28)] transition-all duration-200",

        outline:
          // Clean government outline button
          "border border-black/30 bg-white/70 backdrop-blur-sm text-black hover:bg-black/5 px-5 py-3",

        secondary:
          // Slightly tinted neutral button
          "bg-[#F4F4F4] text-black hover:bg-[#EAEAEA] border border-black/10",

        ghost:
          // Transparent minimal button
          "hover:bg-black/10 text-black px-4 py-2",

        destructive: "bg-red-600 text-white hover:bg-red-700",

        link: "text-[#046A38] underline-offset-4 hover:underline",
      },

      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-7 text-base",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
