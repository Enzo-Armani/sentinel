'use client'

import { useFormStatus } from 'react-dom'
import styles from './login.module.css'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button 
      type="submit" 
      className={`${styles.btn} ${pending ? styles.loading : ''}`}
      disabled={pending}
    >
      Send Link
    </button>
  )
}