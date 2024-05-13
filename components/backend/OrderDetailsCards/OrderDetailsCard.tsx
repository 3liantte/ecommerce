import React from "react";

interface OrderDetailCardProps {
  data: {
    title: string;
    number: number;
    icon: React.ComponentType;
  };
}

export default function OrderDetailsCard({ data }: OrderDetailCardProps) {
  const { title, number, icon: Icon } = data;
  return (
    <div className="rounded-lg shadow-lg dark:bg-slate-700 bg-white text-slate-900 dark:text-white p-4">
      <div className="flex space-x-4">
        <div
          className="w-12 h-12 bg-slate-100 rounded-full
            flex items-center justify-center text-slate-950"
        >
          <Icon />
        </div>
        <div className="">
          <p>{title}</p>
          <h3 className="text-2xl font-bold">{number}</h3>
        </div>
      </div>
    </div>
  );
}
