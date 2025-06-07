import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";

const linkVariants = cva("", {
  variants: {
    variant: {
      default: "",
      btnPrimaryLink:
        "text-center font-medium py-2 rounded-lg shadow-md bg-gradient-to-b from-bonanzagreen-500 to-bonanzagreen-800 text-white w-full inline-flex items-center justify-center gap-2",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface linkProps extends VariantProps<typeof linkVariants> {
  className?: string;
  href: string;
  children: React.ReactNode;
  download?: string;
  rel?: string;
  target?: "_top" | "_self" | "_blank" | "_parent";
}

export default function LinkBonanza({
  rel,
  download,
  target,
  variant,
  className,
  children,
  href,
}: linkProps) {
  return (
    <Link
      href={href}
      rel={rel}
      className={cn(linkVariants({ variant, className }))}
      download={download}
      target={target}
    >
      {children}
    </Link>
  );
}
