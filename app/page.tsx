import React from 'react';

export default function Home() {
  return (
    <>
      <div className="page">
        <div className="header">
            <div className="project-name">Sentinel</div>
            <div className="subtitle">Automated Compliance SaaS for Australian Banking and Financial Institutions</div>
            <div className="date">November 2, 2025</div>
        </div>
        
        <div className="vision-hero">
            <h1 className="vision-heading">
                The <span className="gradient-word">Vision</span>
            </h1>
            <p className="vision-description">
                To build a market-leading micro-SaaS that automates legal and regulatory compliance for Australian banking, superannuation, insurance, investment, and financial advice institutions — transforming compliance from a costly manual burden into a streamlined, intelligent process. Over time, this platform will evolve to serve other highly regulated sectors such as healthcare and engineering, extending the benefits of intelligent automation across industries.
            </p>
            <p className="vision-tagline">
                Sentinel transforms compliance from reactive and manual to intelligent and predictive — powered by AI and integrated within the Microsoft 365 ecosystem.
            </p>
        </div>
        
        <h1>Executive Summary</h1>
        <p>Sentinel is an intelligent compliance automation platform built for Australian banking and financial institutions. It eliminates the inefficiencies of manual regulatory tracking by delivering AI-powered monitoring, analysis, and workflow automation — fully integrated within the Microsoft 365 ecosystem. Designed to evolve from financial services into other regulated sectors such as healthcare and engineering, Sentinel represents the next generation of scalable, sector-specific RegTech.</p>
        
        <h1>The Opportunity</h1>
        <p>Australian banking and financial institutions face a significant challenge: navigating a vast and constantly evolving landscape of legal and regulatory compliance requirements. The current approach remains largely manual, making it:</p>
        
        <div className="challenge-list">
            <div className="challenge-item">
                <strong>Overwhelming</strong>
                <p>Keeping track of frequent changes issued by numerous legal and regulatory bodies is effectively a full-time job.</p>
            </div>
            <div className="challenge-item">
                <strong>Expensive</strong>
                <p>Maintaining compliance requires significant investment in specialized staff, legal consultants, and supporting technology.</p>
            </div>
            <div className="challenge-item">
                <strong>Time-Consuming</strong>
                <p>Manually analyzing new rules and implementing necessary changes is slow, inefficient, and difficult to scale.</p>
            </div>
            <div className="challenge-item">
                <strong>Risky</strong>
                <p>Human error in interpreting or applying regulations can lead to severe financial, operational, and reputational consequences.</p>
            </div>
        </div>
        
        <p>With over 15,000 regulated entities across banking, superannuation, insurance, investment, and advice, the addressable market for compliance automation in Australia alone exceeds $500 million annually, with strong potential for global adaptation. Even small efficiency gains represent a multi-million-dollar opportunity, creating strong demand for scalable automation tools like Sentinel.</p>
        
        <p>Beyond Australia, similar regulatory complexity across the UK, EU, and APAC presents a $10 billion+ global RegTech opportunity, positioning Sentinel to scale internationally once validated locally.</p>
        
        <p><strong>Sentinel addresses this by providing an intelligent, automated platform to manage the entire compliance lifecycle.</strong></p>
        
        <h1>Our Solution & Business Model</h1>
        <p>We offer a tiered service model that aligns with the increasing compliance maturity of our customers, from basic awareness to full automation.</p>
        
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
                    <td>Small financial institutions, analysts, risk observers</td>
                    <td>Compliance, legal, and risk management teams</td>
                    <td>Large banks, insurers, super funds</td>
                </tr>
                <tr>
                    <td className="tier-name">Regulatory Coverage</td>
                    <td>Limited (select regulator or topic)</td>
                    <td>Comprehensive coverage across financial and legal landscape</td>
                    <td>Comprehensive with predictive insights</td>
                </tr>
                <tr>
                    <td className="tier-name">Delivery</td>
                    <td>Monthly Outlook digest (Top 3 updates)</td>
                    <td>Real-time alerts via Microsoft Teams & Outlook</td>
                    <td>Automated workflows & rule enforcement via Power Automate</td>
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
                    <td><span className="feature-available">✓</span> Automatically links updates to internal controls</td>
                    <td><span className="feature-available">✓</span> Continuous mapping and impact tracking</td>
                </tr>
                <tr>
                    <td className="tier-name">Regulatory Horizon Tracker</td>
                    <td><span className="feature-unavailable">✗</span></td>
                    <td><span className="feature-available">✓</span> Monitors consultations & upcoming changes</td>
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
                    <td><span className="feature-available">✓</span> Maps changes across financial, regulatory, legal domains</td>
                    <td><span className="feature-available">✓</span> Automated linkage and continuous updates</td>
                </tr>
                <tr>
                    <td className="tier-name">Dashboards</td>
                    <td><span className="feature-unavailable">✗</span></td>
                    <td><span className="feature-available">✓</span> Change trends & regulatory heatmaps</td>
                    <td><span className="feature-available">✓</span> Regulatory readiness dashboards & compliance scorecards</td>
                </tr>
                <tr>
                    <td className="tier-name">Integrations</td>
                    <td><span className="feature-unavailable">✗</span></td>
                    <td><span className="highlight-yellow">Microsoft 365 ecosystem (Outlook, Teams, SharePoint, Power BI)</span></td>
                    <td><span className="highlight-yellow">Full Microsoft 365 + API to ServiceNow, Archer, MetricStream</span></td>
                </tr>
                <tr>
                    <td className="tier-name">Data Governance & Security</td>
                    <td>Standard encryption & access controls</td>
                    <td>Role-based access + Microsoft Entra (Azure AD) integration</td>
                    <td>Advanced DLP, retention, Purview audit controls</td>
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
        
        <h1>Proposed Technology Stack</h1>
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
                <strong>Deployment: Docker on AWS/Google Cloud/Microsoft Azure</strong>
                <p>For scalable, consistent, and repeatable deployments.</p>
            </div>
        </div>
      </div>

      <div className="page">
        <h1 style={{ marginTop: 0 }}>Phased Development Roadmap & Timeline</h1>
        <p>We will follow a three-phased approach to de-risk the project, gather user feedback early, and build momentum towards our full vision. Our roadmap progresses from data aggregation and notification (MVP), to AI-powered insight, and ultimately to full automation and enterprise integration.</p>
        
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
                <strong>Goal:</strong> Move upmarket to larger enterprise customers with full automation, a public API, and deep workflow integration.
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
        
        <h1>Success Metrics</h1>
        <div className="metrics-list">
            <div className="metric-item">
                <strong>50 beta users</strong>
                <p>Onboarded by early 2026</p>
            </div>
            <div className="metric-item">
                <strong>≥ 80% user satisfaction</strong>
                <p>From pilot cohort</p>
            </div>
            <div className="metric-item">
                <strong>10–15% conversion rate</strong>
                <p>From free to paid tier by mid-2026</p>
            </div>
        </div>
        
        <h1>Competitive Positioning</h1>
        <p>While established solutions in the Australian market—such as LexisNexis, Ascent, and Compliance.ai—offer automated regulatory updates and horizon scanning, these platforms often serve large enterprises with complex systems that can be costly, slow to deploy, and less tailored to everyday user workflows. Many focus primarily on alerting rather than delivering instant, actionable updates seamlessly integrated into compliance workflows.</p>
        
        <p>Sentinel stands apart by being built by industry experts who deeply understand the real challenges faced by compliance teams, enabling us to design a solution that not only provides real-time regulatory updates but also automatically maps changes to obligations, assigns tasks, and tracks completion—all within a Microsoft-native platform that enhances ease of use and speed of deployment. This instant, end-to-end automation reduces risk by minimizing lag time between regulatory changes and organizational response, offering a cost-effective, user-friendly alternative that fills critical gaps left by existing providers.</p>
        
        <h1>Go-to-Market Strategy</h1>
        <p>Our go-to-market strategy for Sentinel will leverage executive-level connections to secure internal sponsorships, complemented by targeted account-based selling that addresses each institution&apos;s unique compliance challenges. We will offer pilot programs to demonstrate clear value and ROI, supported by thought leadership content and active participation in industry events to build credibility. Engaging multiple stakeholders—including compliance officers, risk managers, and IT teams—will ensure broad internal alignment, while a strong customer success program will foster ongoing satisfaction and upsell opportunities.</p>
        
        <h1>Team Snapshot</h1>
        <div className="team-list">
            <div className="team-item">
                <strong>Founder / Product Lead</strong>
                <p>Legal and compliance background with experience in financial services legal and regulatory.</p>
            </div>
            <div className="team-item">
                <strong>Technical Lead</strong>
                <p>Full-stack developer with AI and automation expertise.</p>
            </div>
        </div>
      </div>
    </>
  );
}