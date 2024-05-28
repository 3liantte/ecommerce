"use client";

import FormHeader from "@/components/backend/FormInputs/FormHeader";
import ImageInput from "@/components/backend/FormInputs/ImageInput";
import SubmitButton from "@/components/backend/FormInputs/SubmitButton";

import SelectInputs from "@/components/backend/FormInputs/SelectInputs";
import { generateSlug } from "@/lib/generateSlug";
import { makePostRequest, makeGetRequest } from "@/lib/apiRequest";

import React, { useEffect, useState } from "react";
import { useForm, FieldErrors } from "react-hook-form";
import TextInput from "@/components/backend/FormInputs/TextsInput";
import TextareaInput from "@/components/backend/FormInputs/TextAreaInput";

interface Category {
  title: string;
  description: string;
  image: string;
}

interface FormData {
  title: string;
  description: string;
  marketId: number;
  imageUrl?: string;
  slug?: string;
}

export default function NewCategory() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);

  const markets = [
    {
      id: 1,
      title: "Shoprite",
    },
    {
      id: 2,
      title: "Boxer",
    },
    {
      id: 3,
      title: "Roots",
    },
    {
      id: 4,
      title: "OBC",
    },
  ];

  async function onSubmit(data: FormData) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);
    await makePostRequest(
      setLoading,
      "api/categories",
      data,
      "Category",
      reset
    );
    await makeGetRequest(setLoading, "api/categories", setCategories, setError);
    setImageUrl("");
  }

  useEffect(() => {
    makeGetRequest(setLoading, "api/categories", setCategories, setError);
  }, []);

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
          <SelectInputs
            label="Select Market"
            name="marketId"
            register={register}
            className="w-full"
            options={markets}
            multiple={false}
          />
          {errors.marketId && (
            <p className="text-red-600 text-sm mt-1">
              {errors.marketId.message}
            </p>
          )}
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
          isLoading={loading}
          buttonTitle="Create Category"
          loadingTitle="Creating category, please wait..."
        />
      </form>
    </div>
  );
}
