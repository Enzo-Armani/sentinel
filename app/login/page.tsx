'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import styles from './login.module.css'
import { login, signup } from './actions'
import { SubmitButton } from './submit-button'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const searchParams = useSearchParams()
  const message = searchParams.get('message')

  // This wrapper determines which Server Action to call
  const handleSubmit = async (formData: FormData) => {
    if (isLogin) {
      await login(formData)
    } else {
      await signup(formData)
    }
  }

  return (
    <div className={styles.loginWrapper}>
      {/* Decorative Background Elements */}
      <div className={`${styles.decorativeCircle} ${styles.circle1}`}></div>
      <div className={`${styles.decorativeCircle} ${styles.circle2}`}></div>

      <div className={styles.container}>
        <header className={styles.header}>
            <h1 className={styles.logo}>Sentinel</h1>
        </header>

        <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            
            <p className={styles.cardDescription}>
                {isLogin 
                  ? 'Enter your credentials to access the dashboard.' 
                  : 'Join Sentinel to automate your compliance.'}
            </p>

            {/* The Form Action triggers the loading state in SubmitButton */}
            <form action={handleSubmit} className={styles.form}>
                
                {/* Name Fields (Only visible for Signup) */}
                {!isLogin && (
                  <div style={{display: 'flex', gap: '1rem'}}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>First Name</label>
                        <input 
                          name="firstName" 
                          className={styles.formInput} 
                          placeholder="Enzo" 
                          required 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Last Name</label>
                        <input 
                          name="lastName" 
                          className={styles.formInput} 
                          placeholder="Armani" 
                          required 
                        />
                    </div>
                  </div>
                )}

                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email Address</label>
                    <input 
                      name="email" 
                      type="email" 
                      className={styles.formInput} 
                      placeholder="you@company.com" 
                      required 
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Password</label>
                    <input 
                      name="password" 
                      type="password" 
                      className={styles.formInput} 
                      placeholder="••••••••" 
                      required 
                    />
                </div>

                {/* The Smart Button with Loading Spinner */}
                <SubmitButton text={isLogin ? 'Log In' : 'Sign Up'} />

                {/* Error/Success Messages */}
                {message && (
                    <div style={{
                        marginTop: '1rem', 
                        padding: '0.75rem', 
                        background: 'rgba(255,255,255,0.05)', 
                        borderRadius: '0.5rem',
                        fontSize: '0.9rem',
                        textAlign: 'center',
                        color: message.includes('created') ? '#10b981' : '#ef4444'
                    }}>
                        {decodeURIComponent(message)}
                    </div>
                )}
            </form>

            {/* Toggle between Login and Signup */}
            <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  type="button" // Important so it doesn't submit the form
                  style={{
                    background: 'none', 
                    border: 'none', 
                    color: 'var(--color-text-muted)', 
                    cursor: 'pointer', 
                    fontSize: '0.9rem',
                    textDecoration: 'underline',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
                >
                  {isLogin ? "New here? Create an account" : "Already have an account? Log In"}
                </button>
            </div>
        </div>

        <div className={styles.copyright}>© Sentinel 2025</div>
      </div>
    </div>
  )
}