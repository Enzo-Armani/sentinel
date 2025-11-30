import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricsCard = ({ icon, title, value, change, changeType, color }) => {
  const getChangeColor = () => {
    if (changeType === 'positive') return 'text-success';
    if (changeType === 'negative') return 'text-error';
    return 'text-muted-foreground';
  };

  const getChangeIcon = () => {
    if (changeType === 'positive') return 'TrendingUp';
    if (changeType === 'negative') return 'TrendingDown';
    return 'Minus';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center`}>
          <Icon name={icon} size={24} color="white" strokeWidth={2} />
        </div>
        {change && (
          <div className={`flex items-center gap-1 ${getChangeColor()}`}>
            <Icon name={getChangeIcon()} size={16} strokeWidth={2} />
            <span className="text-sm font-semibold">{change}</span>
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-1">{value}</h3>
      <p className="text-sm text-muted-foreground">{title}</p>
    </div>
  );
};

export default MetricsCard;