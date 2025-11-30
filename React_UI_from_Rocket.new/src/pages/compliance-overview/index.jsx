import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import GlobalFilterBar from '../../components/GlobalFilterBar';
import StatusIndicator from '../../components/StatusIndicator';
import AlertNotificationCenter from '../../components/AlertNotificationCenter';
import ComplianceKPICard from './components/ComplianceKPICard';
import ComplianceHeatMap from './components/ComplianceHeatMap';
import LiveAlertFeed from './components/LiveAlertFeed';
import ComplianceTimeline from './components/ComplianceTimeline';
import QuickActionsPanel from './components/QuickActionsPanel';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ComplianceOverview = () => {
  const navigate = useNavigate();
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [lastRefreshTime, setLastRefreshTime] = useState(new Date());

  const kpiData = [
    {
      title: "Overall Compliance Score",
      value: "87.5%",
      trend: "up",
      trendValue: "+2.3%",
      status: "good",
      icon: "Shield",
      sparklineData: [78, 82, 85, 83, 86, 87, 88, 87]
    },
    {
      title: "Active Alerts",
      value: "23",
      trend: "down",
      trendValue: "-5",
      status: "warning",
      icon: "AlertTriangle",
      sparklineData: [35, 32, 28, 30, 26, 25, 24, 23]
    },
    {
      title: "Regulatory Changes",
      value: "12",
      trend: "up",
      trendValue: "+4",
      status: "critical",
      icon: "FileText",
      sparklineData: [5, 7, 6, 8, 9, 10, 11, 12]
    },
    {
      title: "System Uptime",
      value: "99.8%",
      trend: "up",
      trendValue: "+0.1%",
      status: "excellent",
      icon: "Activity",
      sparklineData: [99.5, 99.6, 99.7, 99.6, 99.8, 99.8, 99.9, 99.8]
    }
  ];

  const heatMapData = [
    {
      id: 1,
      name: "Financial Services",
      score: 92,
      icon: "DollarSign",
      activeAlerts: 3,
      lastUpdated: "2 min ago",
      totalRegulations: 156,
      compliant: 143,
      nonCompliant: 8,
      pending: 5
    },
    {
      id: 2,
      name: "Healthcare",
      score: 88,
      icon: "Heart",
      activeAlerts: 5,
      lastUpdated: "5 min ago",
      totalRegulations: 203,
      compliant: 179,
      nonCompliant: 15,
      pending: 9
    },
    {
      id: 3,
      name: "Technology",
      score: 85,
      icon: "Cpu",
      activeAlerts: 7,
      lastUpdated: "8 min ago",
      totalRegulations: 134,
      compliant: 114,
      nonCompliant: 12,
      pending: 8
    },
    {
      id: 4,
      name: "Energy & Utilities",
      score: 78,
      icon: "Zap",
      activeAlerts: 12,
      lastUpdated: "3 min ago",
      totalRegulations: 187,
      compliant: 146,
      nonCompliant: 28,
      pending: 13
    },
    {
      id: 5,
      name: "Manufacturing",
      score: 82,
      icon: "Factory",
      activeAlerts: 9,
      lastUpdated: "6 min ago",
      totalRegulations: 165,
      compliant: 135,
      nonCompliant: 18,
      pending: 12
    },
    {
      id: 6,
      name: "Retail & Commerce",
      score: 90,
      icon: "ShoppingCart",
      activeAlerts: 4,
      lastUpdated: "4 min ago",
      totalRegulations: 142,
      compliant: 128,
      nonCompliant: 9,
      pending: 5
    }
  ];

  const alertsData = [
    {
      id: 1,
      severity: "critical",
      title: "GDPR Data Retention Violation",
      description: "EU region data retention policy breach detected in customer database. Immediate action required to avoid penalties.",
      timestamp: new Date(Date.now() - 300000)
    },
    {
      id: 2,
      severity: "high",
      title: "SEC Filing Deadline Approaching",
      description: "Q4 2025 SEC filing requirements updated. Submission deadline in 5 business days.",
      timestamp: new Date(Date.now() - 1800000)
    },
    {
      id: 3,
      severity: "high",
      title: "HIPAA Compliance Gap Identified",
      description: "Patient data encryption standards not meeting updated HIPAA requirements in healthcare module.",
      timestamp: new Date(Date.now() - 2700000)
    },
    {
      id: 4,
      severity: "medium",
      title: "Environmental Reporting Update",
      description: "New EPA environmental impact reporting requirements effective January 2026.",
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: 5,
      severity: "medium",
      title: "Pending Document Reviews",
      description: "15 compliance documents awaiting approval from legal team. Average review time: 3 days.",
      timestamp: new Date(Date.now() - 5400000)
    },
    {
      id: 6,
      severity: "low",
      title: "Scheduled System Maintenance",
      description: "Compliance monitoring system maintenance scheduled for November 30, 2025 at 2:00 AM EST. Expected downtime: 2 hours.",
      timestamp: new Date(Date.now() - 7200000)
    },
    {
      id: 7,
      severity: "low",
      title: "Training Module Completion",
      description: "Annual compliance training completion rate at 87%. Target: 95% by December 15, 2025.",
      timestamp: new Date(Date.now() - 9000000)
    }
  ];

  const timelineData = [
    { date: "Nov 22", complianceScore: 85, regulatoryChanges: 3, activeAlerts: 28 },
    { date: "Nov 23", complianceScore: 86, regulatoryChanges: 2, activeAlerts: 26 },
    { date: "Nov 24", complianceScore: 84, regulatoryChanges: 5, activeAlerts: 31 },
    { date: "Nov 25", complianceScore: 87, regulatoryChanges: 1, activeAlerts: 25 },
    { date: "Nov 26", complianceScore: 86, regulatoryChanges: 4, activeAlerts: 27 },
    { date: "Nov 27", complianceScore: 88, regulatoryChanges: 2, activeAlerts: 24 },
    { date: "Nov 28", complianceScore: 87, regulatoryChanges: 3, activeAlerts: 23 },
    { date: "Nov 29", complianceScore: 88, regulatoryChanges: 4, activeAlerts: 23 }
  ];

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => {
        setLastRefreshTime(new Date());
      }, 30000);

      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const handleSectorClick = (sector) => {
    console.log('Sector clicked:', sector);
  };

  const handleAlertAction = (alertId, action) => {
    console.log(`Alert ${alertId} - Action: ${action}`);
  };

  const handleQuickAction = (actionId) => {
    console.log('Quick action:', actionId);
  };

  const handleManualRefresh = () => {
    setLastRefreshTime(new Date());
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <GlobalFilterBar />
      <main className="pt-32 pb-8 px-6">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Compliance Overview Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                Real-time regulatory monitoring and compliance status visibility
              </p>
            </div>
            <div className="flex items-center gap-4">
              <StatusIndicator />
              <AlertNotificationCenter />
              <div className="flex items-center gap-2 bg-card border border-border rounded-md px-4 py-2">
                <Icon 
                  name={autoRefresh ? "RefreshCw" : "Pause"} 
                  size={16} 
                  className={autoRefresh ? "animate-spin" : ""} 
                  strokeWidth={2} 
                />
                <span className="text-xs text-muted-foreground">
                  {autoRefresh ? "Auto-refresh: 30s" : "Auto-refresh paused"}
                </span>
                <button
                  onClick={() => setAutoRefresh(!autoRefresh)}
                  className="ml-2 text-xs text-primary hover:text-primary/80 font-medium"
                >
                  {autoRefresh ? "Pause" : "Resume"}
                </button>
              </div>
              <Button
                variant="outline"
                size="sm"
                iconName="RefreshCw"
                iconPosition="left"
                onClick={handleManualRefresh}
              >
                Refresh
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {kpiData?.map((kpi, index) => (
              <ComplianceKPICard key={index} {...kpi} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <ComplianceHeatMap data={heatMapData} onSectorClick={handleSectorClick} />
            </div>
            <div className="lg:col-span-1">
              <LiveAlertFeed alerts={alertsData} onAlertAction={handleAlertAction} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ComplianceTimeline data={timelineData} timeRange="7d" />
            </div>
            <div className="lg:col-span-1">
              <QuickActionsPanel onActionClick={handleQuickAction} />
            </div>
          </div>

          <div className="mt-6 bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Last updated: {lastRefreshTime?.toLocaleTimeString()}</span>
              <span>Data source: Sentinel Compliance Monitoring System v2.1</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComplianceOverview;