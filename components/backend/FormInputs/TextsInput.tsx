import { Label } from '@radix-ui/react-dropdown-menu'
import React from 'react'

export default function TextsInput({
    label,
    name,
    register,
    errors,
    isRequired = true,
    type = "text",
    className = "sm:col-span-2",
    defaultValue = ""
}) {    
  return (
    <div className={className}>
        <label htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 mb-2">
            {label}
        </label>
        <div className="mt-2">
            <input 
                {...register('${name}', {require: isRequired})}
                type={type}
                name={name}
                id={name}
                defaultValue={defaultValue}
                autoComplete={name}
                className="block w-full rounded-md border-0 py-2
                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                placeholder:text-gray-400 focus-:ring-focus:ring-inset
                focus:ring-blue-600 sm:text-sm"
            />
        </div>
    </div>
  )
}
