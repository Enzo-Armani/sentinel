import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ComplianceHeatMap = ({ data, onSectorClick }) => {
  const [hoveredSector, setHoveredSector] = useState(null);

  const getComplianceColor = (score) => {
    if (score >= 90) return 'bg-success text-success-foreground';
    if (score >= 75) return 'bg-primary text-primary-foreground';
    if (score >= 60) return 'bg-warning text-warning-foreground';
    return 'bg-error text-error-foreground';
  };

  const getComplianceLabel = (score) => {
    if (score >= 90) return 'Excellent';
    if (score >= 75) return 'Good';
    if (score >= 60) return 'Fair';
    return 'Critical';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Icon name="Grid3x3" size={20} strokeWidth={2} />
          <h2 className="text-lg font-semibold text-foreground">Sector Compliance Heat Map</h2>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-success" />
            <span className="text-muted-foreground">90-100%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-primary" />
            <span className="text-muted-foreground">75-89%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-warning" />
            <span className="text-muted-foreground">60-74%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-error" />
            <span className="text-muted-foreground">&lt;60%</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((sector) => (
          <div
            key={sector?.id}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredSector(sector?.id)}
            onMouseLeave={() => setHoveredSector(null)}
            onClick={() => onSectorClick(sector)}
          >
            <div className={`
              ${getComplianceColor(sector?.score)} 
              rounded-lg p-6 transition-all duration-200 
              hover:scale-105 hover:shadow-lg
            `}>
              <div className="flex items-start justify-between mb-3">
                <Icon name={sector?.icon} size={28} strokeWidth={2} />
                <span className="text-2xl font-bold">{sector?.score}%</span>
              </div>
              <h3 className="text-sm font-semibold mb-1">{sector?.name}</h3>
              <p className="text-xs opacity-90">{getComplianceLabel(sector?.score)}</p>
              
              <div className="mt-4 pt-4 border-t border-current/20 flex items-center justify-between text-xs">
                <span>{sector?.activeAlerts} alerts</span>
                <span>{sector?.lastUpdated}</span>
              </div>
            </div>

            {hoveredSector === sector?.id && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg p-4 shadow-modal z-10 animate-fade-in">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Regulations:</span>
                    <span className="font-semibold text-foreground">{sector?.totalRegulations}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Compliant:</span>
                    <span className="font-semibold text-success">{sector?.compliant}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Non-Compliant:</span>
                    <span className="font-semibold text-error">{sector?.nonCompliant}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pending Review:</span>
                    <span className="font-semibold text-warning">{sector?.pending}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplianceHeatMap;