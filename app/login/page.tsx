import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import styles from '../page.module.css'

export default async function Login(props: {
  searchParams: Promise<{ message: string }>
}) {
  const searchParams = await props.searchParams
  const message = searchParams.message

  const signIn = async (formData: FormData) => {
    'use server'
    const email = formData.get('email') as string
    const supabase = await createClient()

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        // Now securely uses your environment variable
        emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
      },
    })

    if (error) {
      console.error('Supabase Login Error:', error)
      return redirect(`/login?message=${encodeURIComponent(error.message)}`)
    }

    return redirect('/login?message=Check your email for the magic link!')
  }

  // Get today's date for the header
  const today = new Date().toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className={styles.page}>
      <div className="header">
        <div className="project-name">Sentinel</div>
        <div className="subtitle">Authentication Portal</div>
        <div className="date">{today}</div>
      </div>

      <div className={styles.main} style={{ width: '100%', maxWidth: '400px', alignItems: 'stretch' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome Back</h1>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>
            Enter your email to access your compliance dashboard.
          </p>
        </div>

        <form action={signIn} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label 
              htmlFor="email" 
              style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              placeholder="you@company.com"
              required
              style={{
                padding: '12px 16px',
                borderRadius: '6px',
                border: '1px solid #e0e0e0',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
            />
          </div>

          <button 
            style={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '14px',
              borderRadius: '128px',
              fontSize: '1rem',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              marginTop: '8px',
              transition: 'opacity 0.2s'
            }}
            className="hover:opacity-80"
          >
            Send Magic Link
          </button>

          {message && (
            <div style={{
              marginTop: '16px',
              padding: '12px',
              backgroundColor: '#f5f5f5',
              border: '1px solid #eee',
              borderRadius: '6px',
              fontSize: '0.85rem',
              textAlign: 'center',
              color: '#333'
            }}>
              {decodeURIComponent(message)}
            </div>
          )}
        </form>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <a href="/about" style={{ color: '#999', textDecoration: 'none', fontSize: '0.85rem' }}>
                &larr; Return to Project Vision
            </a>
        </div>
      </div>
    </div>
  )
}