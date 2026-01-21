"use client";

import React, { useState, useCallback } from "react";
import { Upload, X, Loader2, AlertCircle, FileIcon } from "lucide-react";
import { uploadFile } from "@/lib/supabase";

interface FileUploadProps {
  /** The storage bucket name in Supabase */
  bucket?: string;
  /** Optional folder path within the bucket */
  folder?: string;
  /** Accepted file types (e.g., "image/*" or "image/png,image/jpeg") */
  accept?: string;
  /** Maximum file size in bytes (default: 5MB) */
  maxSize?: number;
  /** Current file URL (for controlled component) */
  value?: string;
  /** Callback when file is uploaded successfully */
  onUpload?: (url: string) => void;
  /** Callback when file is removed */
  onRemove?: () => void;
  /** Callback for errors */
  onError?: (error: string) => void;
  /** Label text */
  label?: string;
  /** Helper text shown below the upload area */
  helperText?: string;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Language for localization ('ar' | 'en') */
  language?: "ar" | "en";
  /** Custom class name for the container */
  className?: string;
  /** Whether to show image preview (for image files) */
  showPreview?: boolean;
}

const translations = {
  ar: {
    clickToUpload: "انقر للرفع",
    orDragDrop: "أو اسحب الملف",
    maxSize: "الحد الأقصى",
    uploading: "جارٍ الرفع...",
    uploadFailed: "فشل الرفع",
    fileTooLarge: "حجم الملف كبير جداً",
    invalidType: "نوع الملف غير مدعوم",
  },
  en: {
    clickToUpload: "Click to upload",
    orDragDrop: "or drag and drop",
    maxSize: "max",
    uploading: "Uploading...",
    uploadFailed: "Upload failed",
    fileTooLarge: "File size too large",
    invalidType: "File type not supported",
  },
};

export function FileUpload({
  bucket = "logos",
  folder,
  accept = "image/*",
  maxSize = 5 * 1024 * 1024, // 5MB default
  value,
  onUpload,
  onRemove,
  onError,
  label,
  helperText,
  disabled = false,
  language = "en",
  className = "",
  showPreview = true,
}: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const t = translations[language];

  const isImageFile = (file: File) => file.type.startsWith("image/");

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const validateFile = (file: File): string | null => {
    // Check file size
    if (file.size > maxSize) {
      return `${t.fileTooLarge}. ${t.maxSize} ${formatFileSize(maxSize)}`;
    }

    // Check file type if accept is specified
    if (accept && accept !== "*") {
      const acceptedTypes = accept.split(",").map((t) => t.trim());
      const isValidType = acceptedTypes.some((acceptedType) => {
        if (acceptedType.endsWith("/*")) {
          // Wildcard type like "image/*"
          const category = acceptedType.replace("/*", "");
          return file.type.startsWith(category);
        }
        return file.type === acceptedType;
      });

      if (!isValidType) {
        return t.invalidType;
      }
    }

    return null;
  };

  const handleFile = useCallback(
    async (selectedFile: File) => {
      // Validate
      const validationError = validateFile(selectedFile);
      if (validationError) {
        setError(validationError);
        onError?.(validationError);
        return;
      }

      setError(null);
      setFile(selectedFile);

      // Create preview for images
      if (showPreview && isImageFile(selectedFile)) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreview(e.target?.result as string);
        };
        reader.readAsDataURL(selectedFile);
      }

      // Upload to Supabase
      setIsUploading(true);
      try {
        const url = await uploadFile(selectedFile, bucket, folder);
        onUpload?.(url);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : t.uploadFailed;
        setError(`${t.uploadFailed}: ${errorMessage}`);
        onError?.(errorMessage);
        // Reset on error
        setFile(null);
        setPreview(null);
      } finally {
        setIsUploading(false);
      }
    },
    [bucket, folder, maxSize, accept, onUpload, onError, showPreview, t]
  );

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
    // Reset input so same file can be selected again
    e.target.value = "";
  };

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      if (disabled || isUploading) return;

      const droppedFile = e.dataTransfer.files?.[0];
      if (droppedFile) {
        handleFile(droppedFile);
      }
    },
    [disabled, isUploading, handleFile]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled && !isUploading) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
    setError(null);
    onRemove?.();
  };

  const hasFile = file || value;
  const displayPreview = preview || (value && showPreview ? value : null);

  return (
    <div className={className}>
      {/* File Preview */}
      {hasFile && !isUploading ? (
        <div className="relative">
          <div className="flex items-center gap-4 p-4 border-2 border-[#0D9488]/30 rounded-xl bg-[#0D9488]/5">
            {/* Preview or Icon */}
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-white border border-gray-200 shrink-0 flex items-center justify-center">
              {displayPreview && isImageFile(file!) ? (
                <img
                  src={displayPreview}
                  alt="Preview"
                  className="w-full h-full object-contain"
                />
              ) : (
                <FileIcon className="w-8 h-8 text-gray-400" />
              )}
            </div>

            {/* File Info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {file?.name || (value ? "Uploaded file" : "")}
              </p>
              {file && (
                <p className="text-xs text-gray-500">
                  {formatFileSize(file.size)}
                </p>
              )}
            </div>

            {/* Remove Button */}
            <button
              type="button"
              onClick={handleRemove}
              disabled={disabled}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        /* Upload Area */
        <label
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`
            flex flex-col items-center justify-center w-full h-32 
            border-2 border-dashed rounded-xl cursor-pointer 
            transition-all group
            ${
              isDragging
                ? "border-[#0D9488] bg-[#0D9488]/10"
                : "border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-[#0D9488]/50"
            }
            ${disabled || isUploading ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {isUploading ? (
              <>
                <Loader2 className="w-8 h-8 text-[#0D9488] animate-spin mb-3" />
                <p className="text-sm text-[#0D9488] font-medium">
                  {t.uploading}
                </p>
              </>
            ) : (
              <>
                <div className="w-10 h-10 bg-[#0D9488]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#0D9488]/20 transition-colors">
                  <Upload className="w-5 h-5 text-[#0D9488]" />
                </div>
                <p className="mb-1 text-sm text-gray-600">
                  <span className="font-semibold text-[#0D9488]">
                    {t.clickToUpload}
                  </span>{" "}
                  {t.orDragDrop}
                </p>
                {helperText && (
                  <p className="text-xs text-gray-500">{helperText}</p>
                )}
              </>
            )}
          </div>
          <input
            type="file"
            accept={accept}
            onChange={handleFileSelect}
            disabled={disabled || isUploading}
            className="hidden"
          />
        </label>
      )}

      {/* Error Message */}
      {error && (
        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}
