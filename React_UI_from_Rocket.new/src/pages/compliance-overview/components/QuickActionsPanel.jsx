import React from 'react';
import Icon from '../../../components/AppIcon';


const QuickActionsPanel = ({ onActionClick }) => {
  const actions = [
    {
      id: 'export-report',
      label: 'Export Report',
      icon: 'Download',
      description: 'Generate PDF/Excel report',
      variant: 'default'
    },
    {
      id: 'schedule-audit',
      label: 'Schedule Audit',
      icon: 'Calendar',
      description: 'Plan compliance review',
      variant: 'outline'
    },
    {
      id: 'view-regulations',
      label: 'View Regulations',
      icon: 'FileText',
      description: 'Browse regulatory database',
      variant: 'outline'
    },
    {
      id: 'configure-alerts',
      label: 'Configure Alerts',
      icon: 'Settings',
      description: 'Manage notification settings',
      variant: 'outline'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon name="Zap" size={20} strokeWidth={2} />
        <h2 className="text-lg font-semibold text-foreground">Quick Actions</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {actions?.map((action) => (
          <button
            key={action?.id}
            onClick={() => onActionClick(action?.id)}
            className="
              bg-background border border-border rounded-lg p-4
              hover:shadow-md hover:border-primary/50
              transition-all duration-200
              text-left group
            "
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                <Icon name={action?.icon} size={20} className="text-primary" strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                  {action?.label}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-1">
                  {action?.description}
                </p>
              </div>
              <Icon 
                name="ChevronRight" 
                size={16} 
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" 
                strokeWidth={2} 
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActionsPanel;