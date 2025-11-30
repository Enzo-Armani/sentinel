import React from 'react';

import Button from '../../../components/ui/Button';

const PriorityQueueCard = ({ item }) => {
  const getRiskScoreConfig = (score) => {
    if (score >= 80) return { color: 'text-error', bgColor: 'bg-error/10', label: 'Critical' };
    if (score >= 60) return { color: 'text-warning', bgColor: 'bg-warning/10', label: 'High' };
    if (score >= 40) return { color: 'text-primary', bgColor: 'bg-primary/10', label: 'Medium' };
    return { color: 'text-success', bgColor: 'bg-success/10', label: 'Low' };
  };

  const riskConfig = getRiskScoreConfig(item?.riskScore);

  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-foreground mb-1 line-clamp-2">
            {item?.title}
          </h4>
          <p className="text-xs text-muted-foreground line-clamp-1">
            {item?.source}
          </p>
        </div>
        <div className={`px-2 py-1 rounded ${riskConfig?.bgColor} ${riskConfig?.color} text-xs font-semibold whitespace-nowrap`}>
          {item?.riskScore}
        </div>
      </div>
      <div className="space-y-2 mb-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Risk Level:</span>
          <span className={`font-medium ${riskConfig?.color}`}>{riskConfig?.label}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Effective Date:</span>
          <span className="font-medium text-foreground">{formatDate(item?.effectiveDate)}</span>
        </div>
        {item?.assignedTo && (
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Assigned:</span>
            <span className="font-medium text-foreground">{item?.assignedTo}</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Button variant="default" size="xs" fullWidth iconName="Eye">
          Review
        </Button>
        <Button variant="outline" size="xs" iconName="MoreVertical" />
      </div>
    </div>
  );
};

export default PriorityQueueCard;