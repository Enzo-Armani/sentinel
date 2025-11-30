import React, { useState } from 'react';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const AdvancedFilters = ({ onApplyFilters }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState({
    sector: 'all',
    jurisdiction: 'all',
    regulationType: 'all',
    impactLevel: [],
    dateRange: 'last-30-days',
    customStartDate: '',
    customEndDate: '',
    searchQuery: ''
  });

  const sectorOptions = [
    { value: 'all', label: 'All Sectors' },
    { value: 'adi', label: 'Authorised Deposit-Taking Institutions (ADIs)' },
    { value: 'afs', label: 'AFS Licensees' }
  ];

  const jurisdictionOptions = [
    { value: 'all', label: 'All Jurisdictions' },
    { value: 'federal', label: 'Federal' },
    { value: 'state', label: 'State' },
    { value: 'eu', label: 'European Union' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'apac', label: 'Asia Pacific' }
  ];

  const regulationTypeOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'data-privacy', label: 'Data Privacy' },
    { value: 'financial', label: 'Financial Regulations' },
    { value: 'environmental', label: 'Environmental' },
    { value: 'labor', label: 'Labor & Employment' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'cybersecurity', label: 'Cybersecurity' }
  ];

  const dateRangeOptions = [
    { value: 'last-24-hours', label: 'Last 24 Hours' },
    { value: 'last-7-days', label: 'Last 7 Days' },
    { value: 'last-30-days', label: 'Last 30 Days' },
    { value: 'last-90-days', label: 'Last 90 Days' },
    { value: 'year-to-date', label: 'Year to Date' },
    { value: 'custom', label: 'Custom Range' }
  ];

  const impactLevels = [
    { value: 'critical', label: 'Critical' },
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' }
  ];

  const handleImpactLevelChange = (level, checked) => {
    setFilters(prev => ({
      ...prev,
      impactLevel: checked
        ? [...prev?.impactLevel, level]
        : prev?.impactLevel?.filter(l => l !== level)
    }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
    setIsExpanded(false);
  };

  const handleReset = () => {
    const resetFilters = {
      sector: 'all',
      jurisdiction: 'all',
      regulationType: 'all',
      impactLevel: [],
      dateRange: 'last-30-days',
      customStartDate: '',
      customEndDate: '',
      searchQuery: ''
    };
    setFilters(resetFilters);
    onApplyFilters(resetFilters);
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div 
        className="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <Icon name="SlidersHorizontal" size={18} strokeWidth={2} />
          <h3 className="text-sm font-semibold text-foreground">Advanced Filters</h3>
        </div>
        <Icon 
          name={isExpanded ? 'ChevronUp' : 'ChevronDown'} 
          size={20} 
          strokeWidth={2} 
        />
      </div>
      {isExpanded && (
        <div className="px-4 py-4 border-t border-border space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Select
              label="Sector"
              options={sectorOptions}
              value={filters?.sector}
              onChange={(value) => setFilters(prev => ({ ...prev, sector: value }))}
              searchable
            />

            <Select
              label="Jurisdiction"
              options={jurisdictionOptions}
              value={filters?.jurisdiction}
              onChange={(value) => setFilters(prev => ({ ...prev, jurisdiction: value }))}
            />

            <Select
              label="Regulation Type"
              options={regulationTypeOptions}
              value={filters?.regulationType}
              onChange={(value) => setFilters(prev => ({ ...prev, regulationType: value }))}
              searchable
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Select
              label="Date Range"
              options={dateRangeOptions}
              value={filters?.dateRange}
              onChange={(value) => setFilters(prev => ({ ...prev, dateRange: value }))}
            />
          </div>

          {filters?.dateRange === 'custom' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="date"
                label="Start Date"
                value={filters?.customStartDate}
                onChange={(e) => setFilters(prev => ({ ...prev, customStartDate: e?.target?.value }))}
              />
              <Input
                type="date"
                label="End Date"
                value={filters?.customEndDate}
                onChange={(e) => setFilters(prev => ({ ...prev, customEndDate: e?.target?.value }))}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Impact Level
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {impactLevels?.map((level) => (
                <Checkbox
                  key={level?.value}
                  label={level?.label}
                  checked={filters?.impactLevel?.includes(level?.value)}
                  onChange={(e) => handleImpactLevelChange(level?.value, e?.target?.checked)}
                />
              ))}
            </div>
          </div>

          <Input
            type="search"
            label="Search Regulatory Text"
            placeholder="Search by keywords, regulation number, or content..."
            value={filters?.searchQuery}
            onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e?.target?.value }))}
          />

          <div className="flex items-center gap-3 pt-2">
            <Button
              variant="default"
              iconName="Check"
              iconPosition="left"
              onClick={handleApply}
            >
              Apply Filters
            </Button>
            <Button
              variant="outline"
              iconName="RotateCcw"
              iconPosition="left"
              onClick={handleReset}
            >
              Reset
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedFilters;