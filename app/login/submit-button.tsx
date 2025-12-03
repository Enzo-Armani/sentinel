'use client'

import { useFormStatus } from 'react-dom'
import styles from './login.module.css'

export function SubmitButton({ text, className = '' }: { text: string, className?: string }) {
  const { pending } = useFormStatus()

  return (
    <button 
      type="submit" 
      className={`${styles.btn} ${className} ${pending ? styles.loading : ''}`}
      disabled={pending}
    >
      {text}
    </button>
  )
}