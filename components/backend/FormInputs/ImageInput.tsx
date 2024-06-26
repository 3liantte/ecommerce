"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React, { useCallback } from "react";
import toast from "react-hot-toast";

interface ImageInputProps {
  label: string;
  imageUrl?: string;
  setImageUrl: (url: string) => void;
  className?: string;
  endpoint?: string;
}

export default function ImageInput({
  label,
  imageUrl = "",
  setImageUrl,
  className = "col-span-full",
  endpoint = "imageUploader",
}: ImageInputProps) {
  const handleUploadComplete = useCallback(
    (res: { url: string }[]) => {
      if (res && res.length > 0) {
        setImageUrl(res[0].url);
        toast.success("Image Uploaded");
      } else {
        toast.error("Upload failed, please try again.");
      }
    },
    [setImageUrl]
  );

  const handleUploadError = useCallback(() => {
    toast.error("Upload Failed, Try Again");
  }, []);

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type="button"
            className="flex space-x-2 bg-slate-900 rounded-md shadow text-slate-50 py-2 px-4"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Item image"
          width={1000}
          height={667}
          className="w-full h-64 object-contain"
        />
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={handleUploadComplete}
          onUploadError={handleUploadError}
        />
      )}
    </div>
  );
}
