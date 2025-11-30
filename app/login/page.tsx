import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import styles from './login.module.css'

export default async function Login(props: {
  searchParams: Promise<{ message: string }>
}) {
  // Await the searchParams (Required for Next.js 15)
  const searchParams = await props.searchParams
  const message = searchParams.message

  const signIn = async (formData: FormData) => {
    'use server'
    
    const email = formData.get('email') as string
    const supabase = await createClient()

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        // Redirects user to your callback route
        emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
      },
    })

    if (error) {
      console.error('Supabase Login Error:', error)

      // --- CRASH FIX ---
      // We clean the error message to remove newlines (\n) or huge text
      // which causes Next.js to crash with "ERR_INVALID_CHAR"
      const cleanMessage = (error.message || "Authentication failed")
        .replace(/[\n\r]+/g, ' ') // Replace newlines with space
        .trim()
        .substring(0, 200) // Cut off if too long

      return redirect(`/login?message=${encodeURIComponent(cleanMessage)}`)
    }

    return redirect('/login?message=✓ Magic Link Sent! Check your email.')
  }

  // Get today's date for the header
  const today = new Date().toLocaleDateString('en-AU', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div className={styles.loginWrapper}>
      {/* Decorative Circles */}
      <div className={`${styles.decorativeCircle} ${styles.circle1}`}></div>
      <div className={`${styles.decorativeCircle} ${styles.circle2}`}></div>

      <div className={styles.container}>
        <header className={styles.header}>
            <h1 className={styles.logo}>Sentinel</h1>
            <p className={styles.subtitle}>Authentication Portal</p>
            <p className={styles.date}>{today}</p>
        </header>

        <div className={styles.card}>
            <h2 className={styles.cardTitle}>Welcome Back</h2>
            <p className={styles.cardDescription}>
                Enter your email to access your compliance dashboard.
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

                <button type="submit" className={styles.btn}>Send Magic Link</button>

                {/* Status Message Display */}
                {message && (
                    <div className={styles.messageBox}>
                        {decodeURIComponent(message)}
                    </div>
                )}
            </form>

            <a href="/about" className={styles.footerLink}>Return to Project Vision</a>
        </div>
      </div>
    </div>
  )
}