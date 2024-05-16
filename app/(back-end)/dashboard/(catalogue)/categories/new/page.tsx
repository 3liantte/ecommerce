"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "@/components/backend/FormInputs/FormHeader";
import ImageInput from "@/components/backend/FormInputs/ImageInput";
import SubmitButton from "@/components/backend/FormInputs/SubmitButton";
import TextareaInput from "@/components/backend/FormInputs/TextAreaInput";
import TextInput from "@/components/backend/FormInputs/TextsInput";
import { generateSlug } from "@/lib/generateSlug";
import axios from "axios";

export default function NewCategory() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageUrl, setImageUrl] = useState("");

  async function onSubmit(data: any) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;

    try {
      const response = await axios.post("/api/categories", data);
      console.log("Category created:", response.data);

      reset();
    } catch (error) {
      console.error("Error creating category:", error);
    }
  }

  return (
    <div>
      <FormHeader title="New Category" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl p-4 bg-slate-300 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
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
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            label="Category Image"
            endpoint="categoryImageUploader"
          />
        </div>
        <SubmitButton
          isLoading={false}
          buttonTitle="Create Category"
          loadingTitle="Creating category, please wait..."
        />
      </form>
    </div>
  );
}
