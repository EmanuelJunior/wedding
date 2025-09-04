'use server'

import { createClient } from "@/lib/server-client"
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'

interface FormData {
  email: string;
  password: string
}

export async function login(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.email,
    password: formData.password
  }

  const { error } = await supabase.auth.signInWithPassword(data);

  if ( error ) {
    redirect('/auth/login?message=Could not authenticate user')
  }

  revalidatePath('/dashboard', 'layout')
  redirect('/dashboard')
}

export async function logout() {

  const supabase = await createClient();
  await supabase.auth.signOut();

  redirect('/auth/login')
}