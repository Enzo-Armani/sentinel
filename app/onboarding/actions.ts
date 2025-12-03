'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function saveInstitutionType(formData: FormData) {
  const type = formData.get('type') as string
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return redirect('/login')

  // FIX: Use UPSERT instead of UPDATE.
  // This creates the row if it's missing, or updates it if it exists.
  // This solves the "nothing happens" bug if the trigger failed earlier.
  const { error } = await supabase
    .from('profiles')
    .upsert({ 
      id: user.id, 
      email: user.email,
      institution_type: type 
    }, { onConflict: 'id' })

  if (error) {
    console.error('Onboarding Error:', error)
    // If error, stay here
    return redirect('/onboarding?error=db_error')
  }

  return redirect('/')
}