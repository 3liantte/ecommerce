import FormHeader from '@/components/backend/FormHeader'
import PageHeader from '@/components/backend/PageHeader'
import { X } from 'lucide-react'
import React from 'react'

export default function NewCategory() {
  return (
    <div>
        {/* title, description, image */}
        <FormHeader title="New Category" />
        <form action=""
        className="w-full max-w-2xl p-4 bg-white border
        border-gray-200 rounded-lg shadow sm:p-6 md:p-8
        dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">

        </form>
    </div>
  )
}
