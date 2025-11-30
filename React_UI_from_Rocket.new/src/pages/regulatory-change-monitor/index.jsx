import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import GlobalFilterBar from '../../components/GlobalFilterBar';
import StatusIndicator from '../../components/StatusIndicator';
import AlertNotificationCenter from '../../components/AlertNotificationCenter';
import MetricsCard from './components/MetricsCard';
import TimelineItem from './components/TimelineItem';
import PriorityQueueCard from './components/PriorityQueueCard';
import ChangeDataTable from './components/ChangeDataTable';
import AdvancedFilters from './components/AdvancedFilters';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const RegulatoryChangeMonitor = () => {
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [activeTab, setActiveTab] = useState('timeline');

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      setLastRefresh(new Date());
    }, 300000);

    return () => clearInterval(refreshInterval);
  }, []);

  const metricsData = [
    {
      icon: 'FileText',
      title: 'New Changes Detected',
      value: '47',
      change: '+12.5%',
      changeType: 'positive',
      color: 'bg-primary'
    },
    {
      icon: 'Clock',
      title: 'Pending Reviews',
      value: '23',
      change: '-8.3%',
      changeType: 'negative',
      color: 'bg-warning'
    },
    {
      icon: 'CheckCircle2',
      title: 'Assessments Completed',
      value: '156',
      change: '+15.2%',
      changeType: 'positive',
      color: 'bg-success'
    },
    {
      icon: 'Timer',
      title: 'Avg Response Time',
      value: '4.2h',
      change: '-22.1%',
      changeType: 'positive',
      color: 'bg-secondary'
    }
  ];

  const timelineData = [
    {
      id: 1,
      title: "GDPR Amendment - Enhanced Data Subject Rights",
      description: "The European Commission has introduced amendments to GDPR Article 17, expanding the scope of the right to erasure and introducing new obligations for data controllers regarding automated decision-making processes.",
      source: "European Commission",
      jurisdiction: "European Union",
      effectiveDate: new Date('2025-12-15'),
      impactLevel: 'critical',
      status: 'pending',
      keyChanges: [
        "Extended right to erasure now includes AI training data",
        "Mandatory impact assessments for automated decision systems",
        "New transparency requirements for data processing algorithms",
        "Enhanced penalties for non-compliance up to 4% of global revenue"
      ],
      affectedAreas: ["Data Privacy", "AI Systems", "Customer Data", "Marketing"],
      assignedTo: "Sarah Mitchell"
    },
    {
      id: 2,
      title: "SEC Climate Disclosure Rules - Final Implementation",
      description: "The Securities and Exchange Commission has finalized climate-related disclosure requirements for public companies, mandating comprehensive reporting of climate risks, greenhouse gas emissions, and transition plans.",
      source: "Securities and Exchange Commission",
      jurisdiction: "United States",
      effectiveDate: new Date('2026-01-01'),
      impactLevel: 'high',
      status: 'in-progress',
      keyChanges: [
        "Mandatory Scope 1 and 2 emissions reporting for large accelerated filers",
        "Climate risk disclosure in annual reports and registration statements",
        "Board oversight and governance structure reporting requirements",
        "Third-party attestation required for emissions data"
      ],
      affectedAreas: ["Financial Reporting", "ESG", "Operations", "Investor Relations"],
      assignedTo: "Michael Chen"
    },
    {
      id: 3,
      title: "UK Online Safety Act - Platform Liability Expansion",
      description: "The UK government has expanded the Online Safety Act to include new categories of harmful content and increased platform liability for user-generated content, with significant penalties for non-compliance.",
      source: "UK Department for Digital, Culture, Media & Sport",
      jurisdiction: "United Kingdom",
      effectiveDate: new Date('2025-11-30'),
      impactLevel: 'high',
      status: 'pending',
      keyChanges: [
        "Expanded definition of harmful content to include financial scams",
        "Mandatory content moderation systems with human oversight",
        "New reporting obligations for platform safety incidents",
        "Increased fines up to £18 million or 10% of global revenue"
      ],
      affectedAreas: ["Content Moderation", "User Safety", "Legal", "Product"],
      assignedTo: null
    },
    {
      id: 4,
      title: "California Privacy Rights Act (CPRA) - Enforcement Guidelines",
      description: "The California Privacy Protection Agency has released detailed enforcement guidelines for CPRA compliance, clarifying requirements for automated decision-making technology and sensitive personal information handling.",
      source: "California Privacy Protection Agency",
      jurisdiction: "California, USA",
      effectiveDate: new Date('2025-12-01'),
      impactLevel: 'medium',
      status: 'completed',
      keyChanges: [
        "Clarified definition of sensitive personal information",
        "New opt-out requirements for automated profiling",
        "Enhanced data minimization obligations",
        "Specific requirements for third-party service providers"
      ],
      affectedAreas: ["Data Privacy", "Marketing", "Analytics", "Vendor Management"],
      assignedTo: "Jennifer Lopez"
    },
    {
      id: 5,
      title: "EU AI Act - High-Risk System Classification",
      description: "The European Union has published updated classification criteria for high-risk AI systems under the AI Act, including new requirements for conformity assessments and post-market monitoring.",
      source: "European Commission",
      jurisdiction: "European Union",
      effectiveDate: new Date('2026-02-01'),
      impactLevel: 'critical',
      status: 'pending',
      keyChanges: [
        "Expanded list of high-risk AI applications",
        "Mandatory conformity assessment procedures",
        "Continuous post-market monitoring requirements",
        "New documentation and transparency obligations"
      ],
      affectedAreas: ["AI Development", "Product", "Compliance", "Legal"],
      assignedTo: "David Kumar"
    }
  ];

  const priorityQueueData = [
    {
      id: 1,
      title: "GDPR Amendment - Enhanced Data Subject Rights",
      source: "European Commission",
      riskScore: 92,
      effectiveDate: new Date('2025-12-15'),
      assignedTo: "Sarah Mitchell"
    },
    {
      id: 2,
      title: "SEC Climate Disclosure Rules - Final Implementation",
      source: "Securities and Exchange Commission",
      riskScore: 85,
      effectiveDate: new Date('2026-01-01'),
      assignedTo: "Michael Chen"
    },
    {
      id: 3,
      title: "UK Online Safety Act - Platform Liability Expansion",
      source: "UK DCMS",
      riskScore: 78,
      effectiveDate: new Date('2025-11-30'),
      assignedTo: null
    },
    {
      id: 4,
      title: "EU AI Act - High-Risk System Classification",
      source: "European Commission",
      riskScore: 88,
      effectiveDate: new Date('2026-02-01'),
      assignedTo: "David Kumar"
    },
    {
      id: 5,
      title: "CCPA Enforcement Guidelines Update",
      source: "California AG Office",
      riskScore: 65,
      effectiveDate: new Date('2025-12-10'),
      assignedTo: "Jennifer Lopez"
    },
    {
      id: 6,
      title: "Federal Trade Commission - Data Breach Notification",
      source: "FTC",
      riskScore: 72,
      effectiveDate: new Date('2025-12-20'),
      assignedTo: null
    }
  ];

  const tableData = timelineData?.map(item => ({
    id: item?.id,
    title: item?.title,
    source: item?.source,
    jurisdiction: item?.jurisdiction,
    effectiveDate: item?.effectiveDate,
    impactScore: item?.impactLevel === 'critical' ? 95 : item?.impactLevel === 'high' ? 75 : item?.impactLevel === 'medium' ? 55 : 35,
    status: item?.status
  }));

  const handleManualRefresh = () => {
    setLastRefresh(new Date());
  };

  const handleApplyFilters = (filters) => {
    console.log('Applied filters:', filters);
  };

  const handleExport = () => {
    console.log('Exporting data...');
  };

  const formatLastRefresh = () => {
    const now = new Date();
    const diff = Math.floor((now - lastRefresh) / 1000);
    
    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    return lastRefresh?.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <Helmet>
        <title>Regulatory Change Monitor | Sentinel Compliance</title>
        <meta name="description" content="Track and analyze regulatory updates across all monitored sectors with real-time change detection and impact assessment." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <GlobalFilterBar />

        <main className="pt-32 pb-8 px-6">
          <div className="max-w-[1600px] mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <Icon name="Activity" size={32} strokeWidth={2} className="text-primary" />
                Regulatory Change Monitor
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <StatusIndicator />
                <AlertNotificationCenter />
                <Button
                  variant="outline"
                  iconName="RefreshCw"
                  iconPosition="left"
                  onClick={handleManualRefresh}
                >
                  Refresh
                </Button>
                <Button
                  variant="default"
                  iconName="Download"
                  iconPosition="left"
                  onClick={handleExport}
                >
                  Export
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6 px-4 py-2 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Last updated: {formatLastRefresh()}
              </p>
              <p className="text-sm text-muted-foreground">
                Auto-refresh in 5 minutes
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {metricsData?.map((metric, index) => (
                <MetricsCard key={index} {...metric} />
              ))}
            </div>

            <div className="mb-6">
              <AdvancedFilters onApplyFilters={handleApplyFilters} />
            </div>

            <div className="lg:hidden mb-6">
              <div className="flex gap-2 border-b border-border">
                <button
                  onClick={() => setActiveTab('timeline')}
                  className={`
                    flex-1 px-4 py-3 text-sm font-medium transition-colors
                    ${activeTab === 'timeline' ?'text-primary border-b-2 border-primary' :'text-muted-foreground hover:text-foreground'
                    }
                  `}
                >
                  <Icon name="Clock" size={16} className="inline mr-2" />
                  Timeline
                </button>
                <button
                  onClick={() => setActiveTab('queue')}
                  className={`
                    flex-1 px-4 py-3 text-sm font-medium transition-colors
                    ${activeTab === 'queue' ?'text-primary border-b-2 border-primary' :'text-muted-foreground hover:text-foreground'
                    }
                  `}
                >
                  <Icon name="ListOrdered" size={16} className="inline mr-2" />
                  Priority Queue
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
              <div className={`lg:col-span-8 ${activeTab === 'timeline' ? 'block' : 'hidden lg:block'}`}>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                      <Icon name="Clock" size={20} strokeWidth={2} />
                      Regulatory Change Timeline
                    </h2>
                    <Button variant="ghost" size="sm" iconName="Filter">
                      Filter
                    </Button>
                  </div>
                  <div className="space-y-0">
                    {timelineData?.map((change, index) => (
                      <TimelineItem
                        key={change?.id}
                        change={change}
                        isLast={index === timelineData?.length - 1}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-4 ${activeTab === 'queue' ? 'block' : 'hidden lg:block'}`}>
                <div className="bg-card border border-border rounded-lg p-6 sticky top-32">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Icon name="ListOrdered" size={18} strokeWidth={2} />
                      Priority Queue
                    </h2>
                    <span className="px-2 py-1 bg-error/10 text-error text-xs font-semibold rounded">
                      {priorityQueueData?.filter(item => item?.riskScore >= 80)?.length} Critical
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Automated risk scoring and prioritization
                  </p>
                  <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                    {priorityQueueData?.map((item) => (
                      <PriorityQueueCard key={item?.id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Icon name="Table" size={20} strokeWidth={2} />
                  Detailed Change Records
                </h2>
                <Button variant="outline" size="sm" iconName="Search">
                  Advanced Search
                </Button>
              </div>
              <ChangeDataTable data={tableData} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default RegulatoryChangeMonitor;