import { Suspense } from 'react'
import styles from './login.module.css'
import LoginForm from './login-form'

export default function LoginPage() {
  const today = new Date().toLocaleDateString('en-AU', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div className={styles.loginWrapper}>
      <div className={`${styles.decorativeCircle} ${styles.circle1}`}></div>
      <div className={`${styles.decorativeCircle} ${styles.circle2}`}></div>

      <div className={styles.container}>
        <header className={styles.header}>
            <h1 className={styles.logo}>Sentinel</h1>
        </header>

        {/* Suspense Boundary fixes the build error */}
        <Suspense fallback={<div className={styles.card}>Loading...</div>}>
          <LoginForm />
        </Suspense>

        <div className={styles.copyright}>© Sentinel 2025</div>
      </div>
    </div>
  )
}