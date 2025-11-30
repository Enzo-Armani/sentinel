import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LiveAlertFeed = ({ alerts, onAlertAction }) => {
  const [filter, setFilter] = useState('all');

  const getSeverityConfig = (severity) => {
    switch (severity) {
      case 'critical':
        return {
          icon: 'AlertCircle',
          color: 'text-error',
          bg: 'bg-error/10',
          border: 'border-error/20'
        };
      case 'high':
        return {
          icon: 'AlertTriangle',
          color: 'text-warning',
          bg: 'bg-warning/10',
          border: 'border-warning/20'
        };
      case 'medium':
        return {
          icon: 'Info',
          color: 'text-primary',
          bg: 'bg-primary/10',
          border: 'border-primary/20'
        };
      case 'low':
        return {
          icon: 'Bell',
          color: 'text-muted-foreground',
          bg: 'bg-muted',
          border: 'border-border'
        };
      default:
        return {
          icon: 'Bell',
          color: 'text-muted-foreground',
          bg: 'bg-muted',
          border: 'border-border'
        };
    }
  };

  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const alertTime = new Date(timestamp);
    const diff = Math.floor((now - alertTime) / 1000);
    
    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return alertTime?.toLocaleDateString();
  };

  const filteredAlerts = filter === 'all' 
    ? alerts 
    : alerts?.filter(alert => alert?.severity === filter);

  return (
    <div className="bg-card border border-border rounded-lg p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Icon name="Activity" size={20} strokeWidth={2} />
          <h2 className="text-lg font-semibold text-foreground">Live Alert Feed</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span className="text-xs text-muted-foreground">Live</span>
        </div>
      </div>
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {['all', 'critical', 'high', 'medium', 'low']?.map((severity) => (
          <button
            key={severity}
            onClick={() => setFilter(severity)}
            className={`
              px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap
              transition-all duration-200
              ${filter === severity
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }
            `}
          >
            {severity?.charAt(0)?.toUpperCase() + severity?.slice(1)}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {filteredAlerts?.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-3">
              <Icon name="Bell" size={32} color="var(--color-muted-foreground)" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-muted-foreground">No alerts to display</p>
          </div>
        ) : (
          filteredAlerts?.map((alert) => {
            const config = getSeverityConfig(alert?.severity);
            return (
              <div
                key={alert?.id}
                className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-all duration-200"
              >
                <div className="flex gap-3">
                  <div className={`
                    w-10 h-10 rounded-lg ${config?.bg} border ${config?.border}
                    flex items-center justify-center flex-shrink-0
                  `}>
                    <Icon name={config?.icon} size={18} className={config?.color} strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-sm font-semibold text-foreground line-clamp-2">
                        {alert?.title}
                      </h4>
                      <span className={`
                        px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap
                        ${config?.bg} ${config?.color}
                      `}>
                        {alert?.severity?.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                      {alert?.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {formatTimestamp(alert?.timestamp)}
                      </span>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="xs"
                          onClick={() => onAlertAction(alert?.id, 'view')}
                        >
                          View
                        </Button>
                        <Button
                          variant="ghost"
                          size="xs"
                          onClick={() => onAlertAction(alert?.id, 'dismiss')}
                        >
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default LiveAlertFeed;