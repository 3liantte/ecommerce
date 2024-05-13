import { Layers } from "lucide-react";
import React from "react";

interface FinanceCardProps {
  data: {
    title: string;
    sales: number;
  };
}

export default function FinanceCard({ data }: FinanceCardProps) {
  return (
    <div
      className={
        "rounded-lg bg-white dark:bg-slate-700 shadow-md p-8 text-slate-900 dark:text-white flex items-center flex-col gap-2"
      }
    >
      <Layers />
      <h4>{data.title}</h4>
      <h2 className="lg:text-2xl lg-1xl">R {data.sales}</h2>
    </div>
  );
}
