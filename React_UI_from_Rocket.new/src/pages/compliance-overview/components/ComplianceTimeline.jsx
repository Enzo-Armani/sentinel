import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Icon from '../../../components/AppIcon';

const ComplianceTimeline = ({ data, timeRange }) => {
  const [chartType, setChartType] = useState('line');

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-modal">
          <p className="text-sm font-semibold text-foreground mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <div key={index} className="flex items-center justify-between gap-4 text-xs">
              <span className="text-muted-foreground">{entry?.name}:</span>
              <span className="font-semibold" style={{ color: entry?.color }}>
                {entry?.value}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Icon name="TrendingUp" size={20} strokeWidth={2} />
          <h2 className="text-lg font-semibold text-foreground">Compliance Trends</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setChartType('line')}
            className={`
              p-2 rounded-md transition-all duration-200
              ${chartType === 'line' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground hover:bg-muted/80'
              }
            `}
            aria-label="Line chart view"
          >
            <Icon name="LineChart" size={18} strokeWidth={2} />
          </button>
          <button
            onClick={() => setChartType('bar')}
            className={`
              p-2 rounded-md transition-all duration-200
              ${chartType === 'bar' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground hover:bg-muted/80'
              }
            `}
            aria-label="Bar chart view"
          >
            <Icon name="BarChart3" size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
      <div className="h-80" aria-label="Compliance trends chart">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'line' ? (
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="date" 
                stroke="var(--color-muted-foreground)"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                style={{ fontSize: '12px' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ fontSize: '12px' }}
                iconType="circle"
              />
              <Line 
                type="monotone" 
                dataKey="complianceScore" 
                stroke="var(--color-primary)" 
                strokeWidth={2}
                dot={{ fill: 'var(--color-primary)', r: 4 }}
                activeDot={{ r: 6 }}
                name="Compliance Score"
              />
              <Line 
                type="monotone" 
                dataKey="regulatoryChanges" 
                stroke="var(--color-warning)" 
                strokeWidth={2}
                dot={{ fill: 'var(--color-warning)', r: 4 }}
                activeDot={{ r: 6 }}
                name="Regulatory Changes"
              />
              <Line 
                type="monotone" 
                dataKey="activeAlerts" 
                stroke="var(--color-error)" 
                strokeWidth={2}
                dot={{ fill: 'var(--color-error)', r: 4 }}
                activeDot={{ r: 6 }}
                name="Active Alerts"
              />
            </LineChart>
          ) : (
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="date" 
                stroke="var(--color-muted-foreground)"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                style={{ fontSize: '12px' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ fontSize: '12px' }}
                iconType="circle"
              />
              <Bar 
                dataKey="complianceScore" 
                fill="var(--color-primary)" 
                radius={[4, 4, 0, 0]}
                name="Compliance Score"
              />
              <Bar 
                dataKey="regulatoryChanges" 
                fill="var(--color-warning)" 
                radius={[4, 4, 0, 0]}
                name="Regulatory Changes"
              />
              <Bar 
                dataKey="activeAlerts" 
                fill="var(--color-error)" 
                radius={[4, 4, 0, 0]}
                name="Active Alerts"
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-background rounded-lg p-4 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-xs font-medium text-muted-foreground">Avg Compliance</span>
          </div>
          <p className="text-2xl font-bold text-foreground">
            {(data?.reduce((acc, curr) => acc + curr?.complianceScore, 0) / data?.length)?.toFixed(1)}%
          </p>
        </div>
        <div className="bg-background rounded-lg p-4 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-warning" />
            <span className="text-xs font-medium text-muted-foreground">Total Changes</span>
          </div>
          <p className="text-2xl font-bold text-foreground">
            {data?.reduce((acc, curr) => acc + curr?.regulatoryChanges, 0)}
          </p>
        </div>
        <div className="bg-background rounded-lg p-4 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-error" />
            <span className="text-xs font-medium text-muted-foreground">Total Alerts</span>
          </div>
          <p className="text-2xl font-bold text-foreground">
            {data?.reduce((acc, curr) => acc + curr?.activeAlerts, 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplianceTimeline;