import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import styles from './login.module.css'
import { SubmitButton } from './submit-button'

export default async function Login(props: {
  searchParams: Promise<{ message: string }>
}) {
  const searchParams = await props.searchParams
  const rawMessage = searchParams.message

  // Safety decode
  let displayMessage = ""
  if (rawMessage) {
    try {
      displayMessage = decodeURIComponent(rawMessage)
    } catch (e) {
      displayMessage = rawMessage
    }
  }

  // Update success check to match new message
  const isSuccess = displayMessage?.includes('Link Sent');
  const isError = displayMessage && !isSuccess;

  const signIn = async (formData: FormData) => {
    'use server'
    
    const email = formData.get('email') as string
    const supabase = await createClient()
    const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || '').trim()

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${baseUrl}/auth/callback`,
      },
    })

    if (error) {
      console.error('Supabase Login Error:', error)
      const safeErrorMessage = (error.message || "Login failed")
        .replace(/[^a-zA-Z0-9\s]/g, '') 
        .trim()
        .substring(0, 100)
      return redirect(`/login?message=${encodeURIComponent(safeErrorMessage)}`)
    }

    // Updated Confirmation Message
    return redirect('/login?message=Link Sent. Check your email.')
  }

  return (
    <div className={styles.loginWrapper}>
      <div className={`${styles.decorativeCircle} ${styles.circle1}`}></div>
      <div className={`${styles.decorativeCircle} ${styles.circle2}`}></div>

      <div className={styles.container}>
        <header className={styles.header}>
            <h1 className={styles.logo}>Sentinel</h1>
        </header>

        <div className={styles.card}>
            <h2 className={styles.cardTitle}>Welcome Back</h2>
            
            {/* Dynamic Description Text */}
            <p className={`
              ${styles.cardDescription} 
              ${isSuccess ? styles.textSuccess : ''}
              ${isError ? styles.textError : ''}
            `}>
                {displayMessage || "Enter your email to access your compliance dashboard."}
            </p>

            <form action={signIn} className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        className={styles.formInput} 
                        placeholder="you@company.com"
                        required
                        autoComplete="email"
                    />
                </div>

                <SubmitButton />
            </form>

            <div style={{textAlign: 'center'}}>
                <a href="/about" className={styles.footerLink}>Return to Project Vision</a>
            </div>
        </div>

        <div className={styles.copyright}>
            © Sentinel 2025
        </div>
      </div>
    </div>
  )
}