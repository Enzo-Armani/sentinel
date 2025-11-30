import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Select from './ui/Select';
import Icon from './AppIcon';

const GlobalFilterBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const sectorOptions = [
    { value: 'all', label: 'All Sectors' },
    { value: 'adi', label: 'Authorised Deposit-Taking Institutions (ADIs)' },
    { value: 'afs', label: 'AFS Licensees' }
  ];

  const timeRangeOptions = [
    { value: '24h', label: 'Last 24 Hours' },
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '90d', label: 'Last 90 Days' },
    { value: 'ytd', label: 'Year to Date' },
    { value: 'custom', label: 'Custom Range' }
  ];

  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sector = params?.get('sector') || 'all';
    const timeRange = params?.get('timeRange') || '30d';
    
    setSelectedSector(sector);
    setSelectedTimeRange(timeRange);
  }, [location?.search]);

  const updateUrlParams = (sector, timeRange) => {
    const params = new URLSearchParams(location.search);
    params?.set('sector', sector);
    params?.set('timeRange', timeRange);
    navigate(`${location?.pathname}?${params?.toString()}`, { replace: true });
  };

  const handleSectorChange = (value) => {
    setSelectedSector(value);
    updateUrlParams(value, selectedTimeRange);
  };

  const handleTimeRangeChange = (value) => {
    setSelectedTimeRange(value);
    updateUrlParams(selectedSector, value);
  };

  const handleReset = () => {
    setSelectedSector('all');
    setSelectedTimeRange('30d');
    updateUrlParams('all', '30d');
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="sticky top-16 left-0 right-0 bg-card border-b border-border z-[900] shadow-card">
      <div className="px-6 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Icon name="Filter" size={18} color="var(--color-muted-foreground)" strokeWidth={2} />
            <h2 className="text-sm font-semibold text-foreground">Global Filters</h2>
          </div>
          <button
            onClick={toggleExpanded}
            className="lg:hidden p-1 rounded hover:bg-muted transition-colors duration-200"
            aria-label={isExpanded ? 'Collapse filters' : 'Expand filters'}
            aria-expanded={isExpanded}
          >
            <Icon 
              name={isExpanded ? 'ChevronUp' : 'ChevronDown'} 
              size={20} 
              strokeWidth={2} 
            />
          </button>
        </div>

        <div className={`
          grid gap-4 transition-all duration-300 ease-out
          ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 lg:grid-rows-[1fr] lg:opacity-100'}
        `}>
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Select
                label="Sector"
                options={sectorOptions}
                value={selectedSector}
                onChange={handleSectorChange}
                searchable
              />

              <Select
                label="Time Range"
                options={timeRangeOptions}
                value={selectedTimeRange}
                onChange={handleTimeRangeChange}
              />

              <div className="flex items-end">
                <button
                  onClick={handleReset}
                  className="
                    w-full px-4 py-2 rounded-md text-sm font-medium
                    bg-muted text-muted-foreground
                    hover:bg-muted/80 hover:text-foreground
                    transition-all duration-200
                    flex items-center justify-center gap-2
                  "
                >
                  <Icon name="RotateCcw" size={16} strokeWidth={2} />
                  <span>Reset Filters</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFilterBar;