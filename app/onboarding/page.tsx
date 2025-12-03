'use client'

import { useState, useTransition } from 'react'
import { saveInstitutionType } from './actions'
import styles from '../login/login.module.css'

export default function Onboarding() {
  const [isPending, startTransition] = useTransition()
  // Default to 'ADI' being highlighted initially (optional, or set null for neither)
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (type: string) => {
    setSelected(type)
    
    // Create FormData to match the existing server action signature
    const formData = new FormData()
    formData.append('type', type)

    startTransition(async () => {
      await saveInstitutionType(formData)
    })
  }

  // Helper to determine button styles dynamically
  const getButtonStyle = (type: string) => {
    // If nothing selected yet, ADI is default primary, AFS is secondary
    const isDefaultPrimary = selected === null && type === 'ADI'
    
    // If this specific button is selected
    const isSelected = selected === type

    // Use Primary style (Purple) if it's the selected one OR the default primary
    // But if we have made a selection, the non-selected one must be secondary
    if (isSelected || (selected === null && isDefaultPrimary)) {
      return `${styles.btn} ${isSelected && isPending ? styles.loading : ''}`
    }
    
    // Otherwise return Secondary (Dark)
    return `${styles.btn} ${styles.btnSecondary}`
  }

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>One last thing</h2>
          <p className={styles.cardDescription}>
            Select your institution type to configure your dashboard.
          </p>
          
          <div className={styles.form}>
            {/* Option 1: ADI */}
            <button 
              onClick={() => handleSelect('ADI')}
              disabled={isPending}
              className={getButtonStyle('ADI')}
              style={{marginBottom: '1rem'}}
            >
              Authorised Deposit-Taking Institution (ADI)
            </button>

            {/* Option 2: AFS */}
            <button 
              onClick={() => handleSelect('AFS Licensee')}
              disabled={isPending}
              className={getButtonStyle('AFS Licensee')}
            >
              AFS Licensee
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}