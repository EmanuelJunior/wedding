'use server'

import { Database } from "@/interfaces/database.types";
import { createClient } from "@/lib/server-client"
import { revalidatePath } from "next/cache";

export const fetchAuthGuest = async () => {
  const supabase = await createClient();

  // Primero obtenés el usuario
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (userError || !user) {
    return null;
  }

  // Ahora sí buscás al guest por el userId
  const { data, error } = await supabase
    .from('guests')
    .select('*')
    .eq('userId', user.id)
    .single()

  if (error) {
    console.error('Error fetching guest user:', error);
    return null;
  }

  return data;
}

export const changeStatusGuest = async (
  guestId: number, 
  status: Database["public"]["Enums"]["status"]): Promise<Database['public']['Tables']['guests'] | null> => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('guests')
    .update({ status })
    .eq('id', guestId)
    .select()
    .single();

  if (error) {
    console.error('Error updating guest status:', error);
    return null;
  }

  revalidatePath('/dashboard');
  return data;
}