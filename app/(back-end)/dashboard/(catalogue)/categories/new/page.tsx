"use client"

import FormHeader from '@/components/backend/FormInputs/FormHeader'
import ImageInput from '@/components/backend/FormInputs/ImageInput'
import SubmitButton from '@/components/backend/FormInputs/SubmitButton'
import TextareaInput from '@/components/backend/FormInputs/TextAreaInput'
import TextInput from '@/components/backend/FormInputs/TextsInput'
import { generateSlug } from '@/lib/generateSlug'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewCategory() {
  // inside the TextInput all functions are exported from FormInputs
  
  const {register,handleSubmit,formState:{errors}} = useForm();
  const [imageUrl, setImageUrl] = useState("");
  async function onSubmit(data: any) {
    // Skimmer
    // { id => auto(), title = "", slug => auto(), description = "", image = "", }
    const slug = generateSlug(data.title)
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);
  }
  return (
    <div>
        {/* title, description, image */}
        <FormHeader title="New Category" />
        <form onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl p-4 bg-slate-300 border
        border-gray-200 rounded-lg shadow sm:p-6 md:p-8
        dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
            label="Category Title"
              name="title"
              register={register}
              errors={errors}
            />
            <TextareaInput
              label="Category Description"
              name="description"
              register={register}
              errors={errors}
          />
            <ImageInput imageUrl={imageUrl} 
              setImageUrl={setImageUrl} 
              label="Category Image" 
              endpoint="categoryImageUploader" />
          </div>
          <SubmitButton 
          isLoading={false} 
          buttonTitle="Create Category" 
          loadingTitle="Creating category, please wait..." />
        </form>
    </div>
  )
}

