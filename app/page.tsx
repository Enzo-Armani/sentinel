import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import styles from './page.module.css' // Importing your custom styles

export default async function Home() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  // Get today's date for the "Live" feel
  const today = new Date().toLocaleDateString('en-AU', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div className={styles.page}>
      {/* 1. Header Section (Matches your About page style) */}
      <div className="header">
        <div className="project-name">Sentinel</div>
        <div className="subtitle">
          Live Compliance Dashboard <span style={{ opacity: 0.5 }}>|</span> {user.email}
        </div>
        <div className="date">{today}</div>
      </div>

      {/* 2. Main Dashboard Content */}
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h1 style={{ margin: 0, fontSize: '2rem' }}>Regulatory Updates</h1>
            
            {/* Styled Logout Button */}
            <form action="/auth/signout" method="post">
              <button 
                style={{
                  fontSize: '0.9rem',
                  color: '#666',
                  background: 'none',
                  border: '1px solid #eee',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  cursor: 'pointer'
                }}
                className="hover:bg-gray-50"
              >
                Sign Out
              </button>
            </form>
        </div>

        {/* The "Empty State" Box */}
        <div style={{ 
            padding: '60px', 
            border: '1px dashed #ccc', 
            borderRadius: '8px', 
            textAlign: 'center',
            backgroundColor: '#fafafa'
        }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 500, marginBottom: '10px' }}>
                All clear.
            </p>
            <p style={{ color: '#666' }}>
                No new regulatory changes detected for your sector today.
            </p>
            <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '20px' }}>
                (Scraper Status: Pending Activation - Week 2)
            </p>
        </div>

        {/* Link back to Vision */}
        <div style={{ marginTop: '60px', borderTop: '1px solid #eee', paddingTop: '20px', textAlign: 'center' }}>
            <a href="/about" style={{ color: '#999', textDecoration: 'none', fontSize: '0.9rem' }}>
                Read the Project Vision & Roadmap &rarr;
            </a>
        </div>
      </div>
    </div>
  )
}