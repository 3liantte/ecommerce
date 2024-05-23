import { Layers } from "lucide-react";
import React from "react";

interface FinanceCardProps {
  data: {
    title: string;
    sales: number;
  };
  color: string;
}

export default function FinanceCard({ data, color }: FinanceCardProps) {
  return (
    <div
      className={
        "rounded-lg shadow-md p-8 text-slate-900 dark:text-white flex items-center flex-col gap-2"
      }
      style={{ backgroundColor: color }}
    >
      <Layers />
      <h4>{data.title}</h4>
      <h2 className="lg:text-2xl lg-1xl">{data.sales}</h2>
    </div>
  );
}
