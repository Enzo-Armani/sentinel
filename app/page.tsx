import React from 'react';

export default function Home() {
  return (
    <>
      <div className="page">
        <div className="header">
            <div className="project-name">Sentinel</div>
            <div className="subtitle">Automated Compliance SaaS for Australian Financial Institutions</div>
            <div className="date">November 2, 2025</div>
        </div>
        
        <div className="vision-hero">
            <h1 className="vision-heading">
                The <span className="gradient-word">Vision</span>
            </h1>
            <p className="vision-description">
                To build a market-leading micro-SaaS that automates legal and regulatory compliance for Australian financial institutions, transforming it from a costly manual burden into a streamlined, intelligent process.
            </p>
            <p className="vision-tagline">
                Sentinel transforms compliance from reactive and manual to intelligent and predictive — powered by AI and integrated with the Microsoft 365 ecosystem.
            </p>
        </div>
        
        <h1>1. The Opportunity</h1>
        <p>Australian institutions face a significant challenge: navigating a vast and constantly changing landscape of financial compliance requirements. The current approach is predominantly manual, making it:</p>
        
        <div className="challenge-list">
            <div className="challenge-item">
                <strong>Overwhelming</strong>
                <p>Keeping track of changes from numerous legal and regulatory bodies is a full-time job.</p>
            </div>
            <div className="challenge-item">
                <strong>Expensive</strong>
                <p>Requires significant investment in specialized staff, legal consultants, and technology.</p>
            </div>
            <div className="challenge-item">
                <strong>Time-Consuming</strong>
                <p>Manually analyzing new rules and implementing the application of changes is slow and inefficient.</p>
            </div>
            <div className="challenge-item">
                <strong>Risky</strong>
                <p>The potential for human error can lead to severe implications.</p>
            </div>
        </div>
        
        <p><strong>Sentinel addresses this by providing an intelligent, automated platform to manage the entire compliance lifecycle.</strong></p>
        
        <h1>2. Our Solution & Business Model</h1>
        <p>We will offer a tiered service model that aligns with the increasing compliance maturity of our clients, from basic awareness to full automation.</p>
        
        <table className="enhanced-table">
            <thead>
                <tr>
                    <th>Feature / Goal</th>
                    <th>Tier 1 — <strong>Signal</strong> (Free)</th>
                    <th>Tier 2 — <strong>Insight</strong> (Subscription)</th>
                    <th>Tier 3 — <strong>Autonomy</strong> (Subscription+)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="tier-name">Primary Goal</td>
                    <td>Awareness</td>
                    <td>Actionable Intelligence</td>
                    <td>Automated Implementation</td>
                </tr>
                <tr>
                    <td className="tier-name">Ideal Users</td>
                    <td>Small financial institutions (FIs), analysts, risk observers</td>
                    <td>Compliance, legal, and risk management teams</td>
                    <td>Large banks, insurers, super funds</td>
                </tr>
                <tr>
                    <td className="tier-name">Regulatory Coverage</td>
                    <td>Limited (select regulator or topic)</td>
                    <td>Comprehensive coverage across the financial and legal landscape</td>
                    <td>Comprehensive coverage with predictive insights</td>
                </tr>
                <tr>
                    <td className="tier-name">Delivery</td>
                    <td>Monthly Outlook digest (Top 3 key updates)</td>
                    <td>Real-time alerts via Microsoft Teams & Outlook</td>
                    <td>Automated workflows and rule enforcement via Microsoft Power Automate</td>
                </tr>
                <tr>
                    <td className="tier-name">Watchlists</td>
                    <td>1 fixed category (e.g., Prudential or Conduct)</td>
                    <td>Unlimited configurable watchlists</td>
                    <td>Unlimited + automated assignment by topic or entity</td>
                </tr>
                <tr>
                    <td className="tier-name">AI Summaries & Impact Classification</td>
                    <td><span className="feature-unavailable">✗</span></td>
                    <td><span className="feature-available">✓</span> (relevance, urgency, business area)</td>
                    <td><span className="feature-available">✓</span> + predictive trend analysis</td>
                </tr>
                <tr>
                    <td className="tier-name">Change-to-Control Traceability</td>
                    <td><span className="feature-unavailable">✗</span></td>
                    <td><span className="feature-available">✓</span> Automatically links regulatory updates to internal controls or obligations</td>
                    <td><span className="feature-available">✓</span> Continuous mapping and impact tracking within automated workflows</td>
                </tr>
                <tr>
                    <td className="tier-name">Regulatory Horizon Tracker</td>
                    <td><span className="feature-unavailable">✗</span></td>
                    <td><span className="feature-available">✓</span> Monitor consultations & upcoming changes</td>
                    <td><span className="feature-available">✓</span> Includes predictive focus areas and likely reforms</td>
                </tr>
                <tr>
                    <td className="tier-name">Obligation Impact Snapshot</td>
                    <td><span className="feature-unavailable">✗</span></td>
                    <td><span className="feature-available">✓</span> One-click impact report by business unit</td>
                    <td><span className="feature-available">✓</span> Automated portfolio-level impact modeling</td>
                </tr>
                <tr>
                    <td className="tier-name">Document Updates</td>
                    <td><span className="feature-unavailable">✗</span></td>
                    <td><span className="feature-available">✓</span> AI-generated redlines for policies & procedures</td>
                    <td><span className="feature-available">✓</span> Auto-routed redlines + tracked approvals</td>
                </tr>
                <tr>
                    <td className="tier-name">Control Mapping</td>
                    <td><span className="feature-unavailable">✗</span></td>
                    <td><span className="feature-available">✓</span> Map changes to internal control frameworks across financial, regulatory, and legal domains</td>
                    <td><span className="feature-available">✓</span> Automated linkage and continuous updates across all frameworks</td>
                </tr>
                <tr>
                    <td className="tier-name">Dashboards</td>
                    <td><span className="feature-unavailable">✗</span></td>
                    <td><span className="feature-available">✓</span> Change trends & regulatory heatmaps</td>
                    <td><span className="feature-available">✓</span> Regulatory readiness dashboards and compliance scorecards</td>
                </tr>
                <tr>
                    <td className="tier-name">Integrations</td>
                    <td><span className="feature-unavailable">✗</span></td>
                    <td><span className="highlight-yellow">Microsoft 365 ecosystem (Outlook, Teams, SharePoint, Power BI)</span></td>
                    <td><span className="highlight-yellow">Full Microsoft 365 ecosystem + API to ServiceNow, Archer, MetricStream</span></td>
                </tr>
                <tr>
                    <td className="tier-name">Data Governance & Security</td>
                    <td>Standard encryption & access controls</td>
                    <td>Role-based access + Microsoft Entra (Azure AD) integration</td>
                    <td>Advanced DLP, retention, and Purview audit controls</td>
                </tr>
                <tr>
                    <td className="tier-name">Data Sovereignty</td>
                    <td>Hosted on Microsoft Azure (Australia)</td>
                    <td>Hosted on Microsoft Azure (Australia)</td>
                    <td>Hosted on Microsoft Azure (Australia)</td>
                </tr>
                <tr>
                    <td className="tier-name">Value Proposition</td>
                    <td>Stay informed about what is changing</td>
                    <td>Manage and act on regulatory impact using Microsoft-native tools</td>
                    <td>Achieve continuous, automated compliance — reducing reporting effort and accelerating change implementation</td>
                </tr>
            </tbody>
        </table>
        
        <h1>3. Proposed Technology Stack</h1>
        <p>Our technology choices prioritize rapid development, scalability, and leveraging best-in-class tools for AI and data processing.</p>
        
        <div className="tech-stack">
            <div className="tech-item">
                <strong>Frontend: Next.js (React)</strong>
                <p>For a modern, fast, and responsive user experience.</p>
            </div>
            <div className="tech-item">
                <strong>Backend: Python with FastAPI</strong>
                <p>To leverage Python&apos;s unparalleled ecosystem for data scraping and AI development.</p>
            </div>
            <div className="tech-item">
                <strong>Database: PostgreSQL with pgvector</strong>
                <p>A robust, all-in-one solution for both relational data and AI-powered vector search.</p>
            </div>
            <div className="tech-item">
                <strong>Background Jobs: Celery with Redis</strong>
                <p>For reliably handling intensive background tasks like scraping and AI analysis.</p>
            </div>
            <div className="tech-item">
                <strong>Deployment: Docker on AWS/Google Cloud</strong>
                <p>For scalable, consistent, and repeatable deployments.</p>
            </div>
        </div>
      </div>

      <div className="page">
        <h1 style={{ marginTop: 0 }}>4. Phased Development Roadmap & Timeline</h1>
        <p>We will follow a three-phased approach to de-risk the project, gather user feedback early, and build momentum towards our full vision.</p>
        
        <div className="phase-section">
            <div className="phase-header">
                <div className="phase-title">Phase 1: MVP - The Notification Engine (Level 1)</div>
                <div className="phase-timeline">3 Months</div>
            </div>
            <div className="phase-goal">
                <strong>Goal:</strong> Validate our core data aggregation and notification capabilities with a select group of beta testers.
            </div>
            <p><strong>Timeline:</strong> November 2025 – February 2026</p>
            <p><strong>Key Deliverables:</strong> A functional platform that monitors 1-3 regulatory sources and sends email alerts upon detecting changes.</p>
            
            <table className="timeline-table">
                <tbody>
                    <tr>
                        <td>Weeks 1–4</td>
                        <td><strong>Foundation & Backend Setup:</strong> Initialize project, design database schema, build basic user auth API.</td>
                    </tr>
                    <tr>
                        <td>Weeks 5–8</td>
                        <td><strong>Core Scraping Engine:</strong> Build robust scrapers for initial sources, implement change detection logic.</td>
                    </tr>
                    <tr>
                        <td>Weeks 9–12</td>
                        <td><strong>Frontend & Deployment:</strong> Build basic UI, integrate email service, deploy to the cloud for beta access.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div className="phase-section">
            <div className="phase-header">
                <div className="phase-title">Phase 2: V1 - The AI-Powered Analyst (Level 2)</div>
                <div className="phase-timeline">4 Months</div>
            </div>
            <div className="phase-goal">
                <strong>Goal:</strong> Launch the paid subscription product by introducing the core AI-powered analysis and workflow integrations.
            </div>
            <p><strong>Timeline:</strong> February 2026 – June 2026</p>
            <p><strong>Key Deliverables:</strong> A commercial product that provides AI-generated recommendations, redline drafts, and integrates with key business tools like Slack and Jira.</p>
            
            <table className="timeline-table">
                <tbody>
                    <tr>
                        <td>Month 1 (Feb &apos;26)</td>
                        <td><strong>AI & Payments:</strong> Integrate Stripe for subscriptions. Set up pgvector and the data embedding pipeline.</td>
                    </tr>
                    <tr>
                        <td>Month 2 (Mar &apos;26)</td>
                        <td><strong>Recommendation Engine:</strong> Build the core RAG logic and perform extensive prompt engineering for accuracy.</td>
                    </tr>
                    <tr>
                        <td>Month 3 (Apr &apos;26)</td>
                        <td><strong>Frontend Polish & New Sources:</strong> Build the enhanced dashboard. Add scrapers for 3-5 more sources.</td>
                    </tr>
                    <tr>
                        <td>Month 4 (May–June &apos;26)</td>
                        <td><strong>Testing & Launch:</strong> Conduct end-to-end testing, gather beta feedback, and execute the public launch.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div className="phase-section">
            <div className="phase-header">
                <div className="phase-title">Phase 3: V2 - The Automation Engine (Level 3)</div>
                <div className="phase-timeline">6+ Months</div>
            </div>
            <div className="phase-goal">
                <strong>Goal:</strong> Move upmarket to larger enterprise clients with full automation, a public API, and deep workflow integration.
            </div>
            <p><strong>Timeline:</strong> Starting July 2026</p>
            <p><strong>Key Deliverables:</strong> An enterprise-ready platform capable of automated policy updates, with robust audit trails and advanced analytics.</p>
            
            <table className="timeline-table">
                <tbody>
                    <tr>
                        <td>Q3 2026</td>
                        <td><strong>API & First Integrations:</strong> Design and build a secure public API. Deliver the first major workflow integration.</td>
                    </tr>
                    <tr>
                        <td>Q4 2026</td>
                        <td><strong>Advanced AI & Analytics:</strong> Refine AI for generative tasks (document drafting). Build compliance dashboards.</td>
                    </tr>
                    <tr>
                        <td>2027 Onwards</td>
                        <td><strong>Enterprise Focus:</strong> Add more integrations based on customer demand. Implement enterprise features like SSO and RBAC.</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </>
  );
}