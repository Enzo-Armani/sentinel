'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import styles from './login.module.css'
import { login, signup } from './actions'
import { SubmitButton } from './submit-button'

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true)
  const searchParams = useSearchParams()
  const message = searchParams.get('message')

  // Wrapper to handle form submission based on toggle
  const handleSubmit = async (formData: FormData) => {
    if (isLogin) {
      await login(formData)
    } else {
      await signup(formData)
    }
  }

  return (
    <div className={styles.card}>
        <h2 className={styles.cardTitle}>
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        
        <p className={styles.cardDescription}>
            {isLogin 
              ? 'Enter your credentials to access the dashboard.' 
              : 'Join Sentinel to automate your compliance.'}
        </p>

        <form action={handleSubmit} className={styles.form}>
            
            {/* Name Fields (Only for Signup) */}
            {!isLogin && (
              <div style={{display: 'flex', gap: '1rem'}}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>First Name</label>
                    <input name="firstName" className={styles.formInput} placeholder="Enzo" required />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Last Name</label>
                    <input name="lastName" className={styles.formInput} placeholder="Armani" required />
                </div>
              </div>
            )}

            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email Address</label>
                <input name="email" type="email" className={styles.formInput} placeholder="you@company.com" required />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Password</label>
                <input name="password" type="password" className={styles.formInput} placeholder="••••••••" required />
            </div>

            {/* Smart Button */}
            <SubmitButton text={isLogin ? 'Log In' : 'Sign Up'} />

            {/* Messages */}
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

        <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
            <button 
              onClick={() => setIsLogin(!isLogin)}
              type="button" 
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
  )
}