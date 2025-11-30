import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import styles from './page.module.css'

export default async function Home() {
  const supabase = await createClient()

  // 1. Get the real user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  // 2. Get today's date
  const today = new Date().toLocaleDateString('en-AU', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.container}>
        
        {/* Header Section */}
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <h1 className={styles.logo}>Sentinel</h1>
                <div className={styles.subtitle}>
                    <span className={styles.badge}>
                        <span className={styles.statusDot}></span>
                        Live Compliance Dashboard
                    </span>
                    <span style={{opacity: 0.3}}>|</span>
                    <span>{user.email}</span>
                </div>
                <div className={styles.date}>{today}</div>
            </div>
            
            <div className={styles.headerActions}>
                {/* Settings Button (Placeholder for now) */}
                <button className={`${styles.btn} ${styles.btnSecondary}`}>
                  Settings
                </button>
                
                {/* Real Sign Out Button */}
                <form action="/auth/signout" method="post">
                  <button className={`${styles.btn} ${styles.btnPrimary}`}>
                    Sign Out
                  </button>
                </form>
            </div>
        </header>

        <main>
            <div className={styles.mainCard}>
                <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>Regulatory Updates</h2>
                </div>

                {/* Status Hero */}
                <div className={styles.statusContainer}>
                    <div className={styles.statusIcon}></div>
                    <div className={styles.statusContent}>
                        <h3 className={styles.statusTitle}>All clear.</h3>
                        <p className={styles.statusDescription}>
                          No new regulatory changes detected for your sector today.
                        </p>
                        <div className={styles.scraperStatus}>
                            Scraper Status: Pending Activation - Week 2
                        </div>
                    </div>
                </div>

                {/* Info Grid - These will be real numbers soon */}
                <div className={styles.infoGrid}>
                    <div className={styles.infoCard}>
                        <div className={styles.infoCardIcon}>📊</div>
                        <div className={styles.infoCardTitle}>Active Monitors</div>
                        <div className={styles.infoCardValue}>12 Sources</div>
                    </div>
                    <div className={styles.infoCard}>
                        <div className={styles.infoCardIcon}>🔍</div>
                        <div className={styles.infoCardTitle}>Last Scan</div>
                        <div className={styles.infoCardValue}>2 hours ago</div>
                    </div>
                    <div className={styles.infoCard}>
                        <div className={styles.infoCardIcon}>✓</div>
                        <div className={styles.infoCardTitle}>Compliance Status</div>
                        <div className={styles.infoCardValue}>Up to date</div>
                    </div>
                </div>
            </div>
        </main>

        <footer className={styles.footer}>
            <a href="/about" className={styles.footerLink}>Read the Project Vision & Roadmap</a>
        </footer>
      </div>
    </div>
  )
}