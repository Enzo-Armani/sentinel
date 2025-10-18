import React from 'react';

export default function Home() {
  return (
    <>
      <div className="page">
        <div className="header">
            <div className="project-name">Sentinel</div>
            <div className="subtitle">Automated Compliance SaaS for Australian Institutions</div>
            <div className="date">October 18, 2025</div>
        </div>
        
        <div className="vision-hero">
            <h1 className="vision-heading">
                The <span className="gradient-word">Vision</span>
            </h1>
            <p className="vision-description">
                To build a market-leading micro-SaaS that automates regulatory compliance for Australian institutions, transforming it from a costly manual burden into a streamlined, intelligent process.
            </p>
        </div>
        
        <h1>1. The Opportunity</h1>
        <p>Australian institutions face a significant challenge: navigating a vast and constantly changing landscape of compliance requirements. The current approach is predominantly manual, making it:</p>
        
        <div className="challenge-list">
            <div className="challenge-item">
                <strong>Overwhelming</strong>
                <p>Keeping track of changes from numerous regulatory bodies is a full-time job.</p>
            </div>
            <div className="challenge-item">
                <strong>Expensive</strong>
                <p>Requires significant investment in specialized staff and legal consultants.</p>
            </div>
            <div className="challenge-item">
                <strong>Time-Consuming</strong>
                <p>Manually analyzing new rules and implementing changes is slow and inefficient.</p>
            </div>
            <div className="challenge-item">
                <strong>Risky</strong>
                <p>The potential for human error can lead to costly fines and reputational damage.</p>
            </div>
        </div>
        
        <p><strong>Sentinel will address this by providing an intelligent, automated platform to manage the entire compliance lifecycle.</strong></p>
        
        <h1>2. Our Solution & Business Model</h1>
        <p>We will offer a tiered service model that aligns with the increasing compliance maturity of our clients, from basic awareness to full automation.</p>
        
        <table>
            <thead>
                <tr>
                    <th>Tier</th>
                    <th>Level 1 (Free)</th>
                    <th>Level 2 (Subscription)</th>
                    <th>Level 3 (Subscription+)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="tier-name">Goal</td>
                    <td>Awareness</td>
                    <td>Actionable Intelligence</td>
                    <td>Automated Implementation</td>
                </tr>
                <tr>
                    <td className="tier-name">Features</td>
                    <td dangerouslySetInnerHTML={{ __html: `• Limited watchlists<br>• Weekly email digests<br>• Document previews with citations<br>• No workflow connectors` }}></td>
                    <td dangerouslySetInnerHTML={{ __html: `• Unlimited source monitoring<br>• Real-time alerts<br>• Control mappings<br>• AI-generated redline drafts<br>• Evidence & task management<br>• Integrations (Slack, Teams, Jira)` }}></td>
                    <td dangerouslySetInnerHTML={{ __html: `• Automated change implementation<br>• Policy PRs (e.g., to GitHub)<br>• OPA bundle updates<br>• Cloud baseline enforcement<br>• Approval gates & audit trails` }}></td>
                </tr>
            </tbody>
        </table>
        
        <h1>3. Proposed Technology Stack ⚙️</h1>
        <p>Our technology choices prioritize rapid development, scalability, and leveraging best-in-class tools for AI and data processing.</p>
        
        <div className="tech-stack">
            <div className="tech-item">
                <strong>Frontend: Next.js (React)</strong>
                <p>For a modern, fast, and responsive user experience.</p>
            </div>
            <div className="tech-item">
                <strong>Backend: Python with FastAPI</strong>
                <p>To leverage Python's unparalleled ecosystem for data scraping and AI.</p>
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
        <h1 style={{ marginTop: 0 }}>4. Phased Development Roadmap & Timeline 🗺️</h1>
        <p>We will follow a three-phased approach to de-risk the project, gather user feedback early, and build momentum towards our full vision.</p>
        
        <div className="phase-section">
            <div className="phase-header">
                <div className="phase-title">Phase 1: MVP - The Notification Engine (Level 1)</div>
                <div className="phase-timeline">3 Months</div>
            </div>
            <div className="phase-goal">
                <strong>Goal:</strong> Validate our core data aggregation and notification capabilities with a select group of beta testers.
            </div>
            <p><strong>Timeline:</strong> Late October 2025 – Late January 2026</p>
            <p><strong>Key Deliverables:</strong> A functional platform that monitors 1-3 regulatory sources and sends email alerts upon detecting changes.</p>
            
            <table className="timeline-table">
                <tbody>
                    <tr>
                        <td>Weeks 1-4</td>
                        <td><strong>Foundation & Backend Setup:</strong> Initialize project, design database schema, build basic user auth API.</td>
                    </tr>
                    <tr>
                        <td>Weeks 5-8</td>
                        <td><strong>Core Scraping Engine:</strong> Build robust scrapers for initial sources, implement change detection logic.</td>
                    </tr>
                    <tr>
                        <td>Weeks 9-12</td>
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
                        <td>Month 1 (Feb '26)</td>
                        <td><strong>AI & Payments:</strong> Integrate Stripe for subscriptions. Set up pgvector and the data embedding pipeline.</td>
                    </tr>
                    <tr>
                        <td>Month 2 (Mar '26)</td>
                        <td><strong>Recommendation Engine:</strong> Build the core RAG logic and perform extensive prompt engineering for accuracy.</td>
                    </tr>
                    <tr>
                        <td>Month 3 (Apr '26)</td>
                        <td><strong>Frontend Polish & New Sources:</strong> Build the enhanced dashboard. Add scrapers for 3-5 more sources.</td>
                    </tr>
                    <tr>
                        <td>Month 4 (May-Jun '26)</td>
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