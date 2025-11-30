import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TimelineItem = ({ change, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getImpactConfig = (level) => {
    switch (level) {
      case 'critical':
        return {
          color: 'bg-error',
          textColor: 'text-error',
          bgColor: 'bg-error/10',
          borderColor: 'border-error/20',
          label: 'Critical Impact'
        };
      case 'high':
        return {
          color: 'bg-warning',
          textColor: 'text-warning',
          bgColor: 'bg-warning/10',
          borderColor: 'border-warning/20',
          label: 'High Impact'
        };
      case 'medium':
        return {
          color: 'bg-primary',
          textColor: 'text-primary',
          bgColor: 'bg-primary/10',
          borderColor: 'border-primary/20',
          label: 'Medium Impact'
        };
      case 'low':
        return {
          color: 'bg-success',
          textColor: 'text-success',
          bgColor: 'bg-success/10',
          borderColor: 'border-success/20',
          label: 'Low Impact'
        };
      default:
        return {
          color: 'bg-muted',
          textColor: 'text-muted-foreground',
          bgColor: 'bg-muted',
          borderColor: 'border-border',
          label: 'Unknown Impact'
        };
    }
  };

  const getStatusConfig = (status) => {
    switch (status) {
      case 'pending':
        return { icon: 'Clock', color: 'text-warning', label: 'Pending Review' };
      case 'in-progress':
        return { icon: 'RefreshCw', color: 'text-primary', label: 'In Progress' };
      case 'completed':
        return { icon: 'CheckCircle2', color: 'text-success', label: 'Completed' };
      default:
        return { icon: 'Circle', color: 'text-muted-foreground', label: 'Unknown' };
    }
  };

  const impactConfig = getImpactConfig(change?.impactLevel);
  const statusConfig = getStatusConfig(change?.status);

  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="relative flex gap-4 pb-8">
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full ${impactConfig?.color} flex items-center justify-center z-10`}>
          <Icon name="FileText" size={20} color="white" strokeWidth={2} />
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-border mt-2" />
        )}
      </div>
      <div className="flex-1 pb-4">
        <div className={`bg-card border ${impactConfig?.borderColor} rounded-lg p-4 hover:shadow-md transition-all duration-200`}>
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-2">
                {change?.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Icon name="Building2" size={14} strokeWidth={2} />
                  {change?.source}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="Calendar" size={14} strokeWidth={2} />
                  Effective: {formatDate(change?.effectiveDate)}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="MapPin" size={14} strokeWidth={2} />
                  {change?.jurisdiction}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${impactConfig?.bgColor} ${impactConfig?.textColor}`}>
                {impactConfig?.label}
              </span>
              <span className={`flex items-center gap-1 text-xs font-medium ${statusConfig?.color}`}>
                <Icon name={statusConfig?.icon} size={14} strokeWidth={2} />
                {statusConfig?.label}
              </span>
            </div>
          </div>

          <p className={`text-sm text-muted-foreground mb-3 ${isExpanded ? '' : 'line-clamp-2'}`}>
            {change?.description}
          </p>

          {isExpanded && (
            <div className="space-y-3 mb-3 pt-3 border-t border-border">
              <div>
                <h4 className="text-xs font-semibold text-foreground mb-2">Key Changes:</h4>
                <ul className="space-y-1">
                  {change?.keyChanges?.map((item, index) => (
                    <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                      <Icon name="ChevronRight" size={14} strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-foreground mb-2">Affected Areas:</h4>
                <div className="flex flex-wrap gap-2">
                  {change?.affectedAreas?.map((area, index) => (
                    <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              {change?.assignedTo && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon name="User" size={14} strokeWidth={2} />
                  <span>Assigned to: {change?.assignedTo}</span>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              iconName={isExpanded ? 'ChevronUp' : 'ChevronDown'}
              iconPosition="right"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </Button>
            <Button variant="outline" size="sm" iconName="ExternalLink" iconPosition="right">
              View Source
            </Button>
            {change?.status === 'pending' && (
              <Button variant="default" size="sm" iconName="Play" iconPosition="left">
                Start Review
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;