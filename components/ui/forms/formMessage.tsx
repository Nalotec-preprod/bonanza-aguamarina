import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckCircle2, CircleAlert, TriangleAlert } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const formMesageVariants = cva(
  "flex items-start gap-2 p-2 rounded-md shadow-md",
  {
    variants: {
      variant: {
        error: "bg-red-200 border border-red-600 text-red-600",
        success:
          "bg-aquamarine-200 border border-aquamarine-700 text-aquamarine-700",
        warning: "",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "success",
      size: "default",
    },
  },
);

export default function FormMessage({
  children,
  className,
  size,
  variant,
}: Props &
  VariantProps<typeof formMesageVariants> & {
    asChild?: boolean;
  }) {
  return (
    <div className={cn(formMesageVariants({ variant, size, className }))}>
      {variant === "success" && <CheckCircle2 className="shrink-0" />}
      {variant === "error" && <CircleAlert className="shrink-0" />}
      {variant === "warning" && <TriangleAlert className="shrink-0" />}
      {children}
    </div>
  );
}
