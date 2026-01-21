import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Debug: Log configuration status (only in development)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  console.log('Supabase URL configured:', !!supabaseUrl);
  console.log('Supabase Anon Key configured:', !!supabaseAnonKey);
  if (supabaseUrl) {
    console.log('Supabase URL:', supabaseUrl);
  }
}

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables!');
  console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? 'Set' : 'MISSING');
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Set' : 'MISSING');
}

export const supabase = createClient(
  supabaseUrl || '', 
  supabaseAnonKey || ''
);

/**
 * Upload a file to Supabase Storage
 * @param file - The file to upload
 * @param bucket - The storage bucket name (default: 'logos')
 * @param folder - Optional folder path within the bucket
 * @returns The public URL of the uploaded file
 */
export async function uploadFile(
  file: File,
  bucket: string = 'logos',
  folder?: string
): Promise<string> {
  // Validate Supabase configuration
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase is not configured. Please check your environment variables.');
  }

  // Generate a unique filename
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
  const filePath = folder ? `${folder}/${fileName}` : fileName;

  console.log('Uploading file:', { bucket, filePath, fileSize: file.size, fileType: file.type });

  // Upload the file
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      console.error('Supabase upload error:', error);
      throw new Error(`Upload failed: ${error.message}`);
    }

    // Get the public URL
    const { data: urlData } = supabase.storage
      .from(bucket)
      .getPublicUrl(data.path);

    console.log('Upload successful:', urlData.publicUrl);
    return urlData.publicUrl;
  } catch (err) {
    console.error('Upload exception:', err);
    if (err instanceof Error && err.message.includes('Failed to fetch')) {
      throw new Error('Network error: Could not connect to Supabase. Please check your internet connection and Supabase URL configuration.');
    }
    throw err;
  }
}

/**
 * Delete a file from Supabase Storage
 * @param fileUrl - The public URL of the file to delete
 * @param bucket - The storage bucket name (default: 'logos')
 */
export async function deleteFile(
  fileUrl: string,
  bucket: string = 'logos'
): Promise<void> {
  // Extract the file path from the URL
  const urlParts = fileUrl.split(`/storage/v1/object/public/${bucket}/`);
  if (urlParts.length !== 2) {
    throw new Error('Invalid file URL');
  }
  
  const filePath = urlParts[1];
  
  const { error } = await supabase.storage
    .from(bucket)
    .remove([filePath]);

  if (error) {
    throw new Error(`Delete failed: ${error.message}`);
  }
}
