import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function SectionHeader({ children }: Props) {
  return (
    <h1 className="text-center text-xl font-bold uppercase my-4">{children}</h1>
  );
}
