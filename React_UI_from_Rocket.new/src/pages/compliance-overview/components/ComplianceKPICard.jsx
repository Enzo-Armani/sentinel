import React from 'react';
import Icon from '../../../components/AppIcon';

const ComplianceKPICard = ({ title, value, trend, trendValue, status, icon, sparklineData }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'excellent':
        return {
          bg: 'bg-success/10',
          text: 'text-success',
          border: 'border-success/20'
        };
      case 'good':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20'
        };
      case 'warning':
        return {
          bg: 'bg-warning/10',
          text: 'text-warning',
          border: 'border-warning/20'
        };
      case 'critical':
        return {
          bg: 'bg-error/10',
          text: 'text-error',
          border: 'border-error/20'
        };
      default:
        return {
          bg: 'bg-muted',
          text: 'text-muted-foreground',
          border: 'border-border'
        };
    }
  };

  const colors = getStatusColor();

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${colors?.bg} border ${colors?.border} flex items-center justify-center`}>
          <Icon name={icon} size={24} className={colors?.text} strokeWidth={2} />
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-md ${trend === 'up' ? 'bg-success/10' : 'bg-error/10'}`}>
          <Icon 
            name={trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
            size={14} 
            className={trend === 'up' ? 'text-success' : 'text-error'} 
            strokeWidth={2} 
          />
          <span className={`text-xs font-semibold ${trend === 'up' ? 'text-success' : 'text-error'}`}>
            {trendValue}
          </span>
        </div>
      </div>
      <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
      <p className={`text-3xl font-bold ${colors?.text} mb-3`}>{value}</p>
      {sparklineData && sparklineData?.length > 0 && (
        <div className="h-12 flex items-end gap-1">
          {sparklineData?.map((point, index) => (
            <div
              key={index}
              className={`flex-1 ${colors?.bg} rounded-t transition-all duration-200 hover:opacity-80`}
              style={{ height: `${(point / Math.max(...sparklineData)) * 100}%` }}
              title={`Value: ${point}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ComplianceKPICard;