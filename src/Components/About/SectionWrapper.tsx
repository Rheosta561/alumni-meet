import React from "react";
import { Separator } from "@radix-ui/react-separator";

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ title, children }: SectionWrapperProps) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl text-center font-semibold mb-2">{title}</h2>
      <Separator className="mb-4" />
      {children}
    </div>
  );
}
