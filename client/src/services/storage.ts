import { supabase } from './supabase';
import { StorageError } from '../utils/errors';

export const uploadFile = async (
  file: File,
  folder: string,
  userId: string
): Promise<string> => {
  const ext = file.name.split('.').pop();
  const path = `${folder}/${userId}/${Date.now()}.${ext}`;

  const { error } = await supabase.storage
    .from('applications')
    .upload(path, file);

  if (error) {
    throw new StorageError(`Failed to upload file: ${error.message}`);
  }

  return path;
};