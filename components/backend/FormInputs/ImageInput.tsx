import React from "react";
import { Pencil } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { UploadDropzone } from "@/lib/uploadthing";

interface ImageInputProps {
  label: string;
  imageUrl?: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  endpoint?: string;
}

const ImageInput: React.FC<ImageInputProps> = ({
  label,
  imageUrl = "",
  setImageUrl,
  className = "col-span-full",
  endpoint = "imageUploader",
}) => {
  const handleImageUpload = (res: any[]) => {
    if (res && res.length > 0 && res[0].url) {
      setImageUrl(res[0].url);
      toast.success("Image Uploaded");
    } else {
      toast.error("Image Upload Failed");
    }
  };

  const handleUploadError = (error: Error) => {
    console.error("Upload Error:", error);
    toast.error("Image Upload Failed");
  };

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
          onClientUploadComplete={handleImageUpload}
          onUploadError={handleUploadError}
        />
      )}
    </div>
  );
};

export default ImageInput;
