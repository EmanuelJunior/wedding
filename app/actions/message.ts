"use server"

import { createClient } from "@/lib/server-client"

export const likeMessage = async ( messageId: string ) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('messages')
    .update({ likes: 'likes + 1' })
    .eq('id', messageId)
    .select()
    .single();

  if (error) {
    console.error('Error liking message:', error);
    return null;
  }

  return data;
}

export const addMessage = async ( guestId: number, message: string ) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('messages')
    .insert({ guestId, message, likes: 0 })
    .select()
    .single();

  if (error) {
    console.error('Error adding message:', error);
    return null;
  }

  return data;
}

export const addMessageForm = async ( formData: FormData, guestId: number | undefined ) => {
  const message = formData.get('message')?.toString() || '';
  if ( !guestId ) return;

  console.log({ guestId, message });
  await addMessage( guestId, message );
}