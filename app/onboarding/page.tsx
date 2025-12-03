import { saveInstitutionType } from './actions'
import styles from '../login/login.module.css'
import { SubmitButton } from '../login/submit-button' // Reuse the spinner button

export default function Onboarding() {
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>One last thing</h2>
          <p className={styles.cardDescription}>
            Select your institution type to configure your dashboard.
          </p>
          
          {/* Form 1: ADI */}
          <form action={saveInstitutionType} className={styles.form} style={{marginBottom: '1rem'}}>
            <input type="hidden" name="type" value="ADI" />
            <SubmitButton text="Authorised Deposit-Taking Institution (ADI)" />
          </form>

          {/* Form 2: AFS */}
          <form action={saveInstitutionType} className={styles.form}>
            <input type="hidden" name="type" value="AFS Licensee" />
            <SubmitButton 
              text="AFS Licensee" 
              className={styles.btnSecondary} // We need to add this style or it will look purple
            />
          </form>
        </div>
      </div>
    </div>
  )
}