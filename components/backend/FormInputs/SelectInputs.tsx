import React from 'react'

export default function SelectInputs({
    label,
    name,
    register,
    className = "sm:col-span-2",
    options = [],
    multiple = false
}) {
  return (
    <div>
        <label htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 
        mb-2 dark:text-slate-50">
            {label}
        </label>
        <div>
            <select
                {...register(`${name}`)}
                id={name}
                multiple= {multiple}
                name={name}
                className="block w-full rounded-md border-0 py-2 text-slate-950
                shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset
                focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    {options.map((option, i) => {
                        return(
                            <option key={i} value={option.id}>
                                {option.title}
                            </option>
                        );
                    })}
            </select>
        </div>
    </div>
  )
}
