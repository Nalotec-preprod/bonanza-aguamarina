import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CircleAlert } from "lucide-react";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function InputError({ className, children }: Props) {
  return (
    <p
      className={cn(
        "text-red-600 flex items-center justify-start gap-2 text-xs",
        className,
      )}
    >
      <CircleAlert className="shrink-0 h-4" />
      {children}
    </p>
  );
}
