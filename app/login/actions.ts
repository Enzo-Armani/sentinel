'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  // Gather data
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // 1. Attempt Login
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return redirect(`/login?message=${encodeURIComponent(error.message)}`)
  }

  // 2. Check if they need onboarding (Institution Type)
  const { data: profile } = await supabase
    .from('profiles')
    .select('institution_type')
    .single()

  // If no type is selected yet, force onboarding
  if (!profile?.institution_type) {
    return redirect('/onboarding')
  }

  revalidatePath('/', 'layout')
  return redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  // Gather data
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string

  // 1. Sign Up with Meta Data
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    },
  })

  if (error) {
    return redirect(`/login?message=${encodeURIComponent(error.message)}`)
  }

  // 2. Immediate Login (Since email confirm is off)
  const { error: loginError } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (loginError) {
    return redirect('/login?message=Account created. Please log in.')
  }

  // 3. Send to Onboarding
  return redirect('/onboarding')
}