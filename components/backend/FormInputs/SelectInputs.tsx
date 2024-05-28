import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Option {
  id: string | number;
  title: string;
}

interface SelectInputsProps {
  label: string;
  name: "title" | "description" | "marketId" | "imageUrl" | "slug";
  register: UseFormRegister<any>;
  className?: string;
  options?: Option[];
  multiple?: boolean;
}

export default function SelectInputs({
  label,
  name,
  register,
  className = "sm:col-span-2",
  options = [],
  multiple = false,
}: SelectInputsProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 mb-2 dark:text-slate-50"
      >
        {label}
      </label>
      <div>
        <select
          {...register(name)}
          id={name}
          multiple={multiple}
          className="block w-full rounded-md border-0 py-2 text-slate-950 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
