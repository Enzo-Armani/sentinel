import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ChangeDataTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: 'effectiveDate', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev?.key === key && prev?.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const sortedData = [...data]?.sort((a, b) => {
    const aValue = a?.[sortConfig?.key];
    const bValue = b?.[sortConfig?.key];
    
    if (sortConfig?.key === 'effectiveDate') {
      return sortConfig?.direction === 'asc' 
        ? new Date(aValue) - new Date(bValue)
        : new Date(bValue) - new Date(aValue);
    }
    
    if (sortConfig?.key === 'impactScore') {
      return sortConfig?.direction === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return sortConfig?.direction === 'asc'
      ? String(aValue)?.localeCompare(String(bValue))
      : String(bValue)?.localeCompare(String(aValue));
  });

  const totalPages = Math.ceil(sortedData?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData?.slice(startIndex, startIndex + itemsPerPage);

  const getStatusBadge = (status) => {
    const configs = {
      pending: { color: 'bg-warning/10 text-warning', label: 'Pending' },
      'in-progress': { color: 'bg-primary/10 text-primary', label: 'In Progress' },
      completed: { color: 'bg-success/10 text-success', label: 'Completed' }
    };
    const config = configs?.[status] || configs?.pending;
    return (
      <span className={`px-2 py-1 rounded text-xs font-medium ${config?.color}`}>
        {config?.label}
      </span>
    );
  };

  const getImpactBadge = (score) => {
    if (score >= 80) return <span className="px-2 py-1 rounded text-xs font-medium bg-error/10 text-error">Critical</span>;
    if (score >= 60) return <span className="px-2 py-1 rounded text-xs font-medium bg-warning/10 text-warning">High</span>;
    if (score >= 40) return <span className="px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary">Medium</span>;
    return <span className="px-2 py-1 rounded text-xs font-medium bg-success/10 text-success">Low</span>;
  };

  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const SortIcon = ({ columnKey }) => {
    if (sortConfig?.key !== columnKey) {
      return <Icon name="ChevronsUpDown" size={14} strokeWidth={2} className="opacity-40" />;
    }
    return sortConfig?.direction === 'asc' 
      ? <Icon name="ChevronUp" size={14} strokeWidth={2} />
      : <Icon name="ChevronDown" size={14} strokeWidth={2} />;
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted border-b border-border">
            <tr>
              <th 
                className="px-4 py-3 text-left text-xs font-semibold text-foreground cursor-pointer hover:bg-muted/80 transition-colors"
                onClick={() => handleSort('title')}
              >
                <div className="flex items-center gap-2">
                  <span>Regulation Title</span>
                  <SortIcon columnKey="title" />
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left text-xs font-semibold text-foreground cursor-pointer hover:bg-muted/80 transition-colors"
                onClick={() => handleSort('source')}
              >
                <div className="flex items-center gap-2">
                  <span>Source Agency</span>
                  <SortIcon columnKey="source" />
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left text-xs font-semibold text-foreground cursor-pointer hover:bg-muted/80 transition-colors"
                onClick={() => handleSort('effectiveDate')}
              >
                <div className="flex items-center gap-2">
                  <span>Effective Date</span>
                  <SortIcon columnKey="effectiveDate" />
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left text-xs font-semibold text-foreground cursor-pointer hover:bg-muted/80 transition-colors"
                onClick={() => handleSort('impactScore')}
              >
                <div className="flex items-center gap-2">
                  <span>Impact Score</span>
                  <SortIcon columnKey="impactScore" />
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left text-xs font-semibold text-foreground cursor-pointer hover:bg-muted/80 transition-colors"
                onClick={() => handleSort('status')}
              >
                <div className="flex items-center gap-2">
                  <span>Status</span>
                  <SortIcon columnKey="status" />
                </div>
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {paginatedData?.map((item) => (
              <tr key={item?.id} className="hover:bg-muted/50 transition-colors">
                <td className="px-4 py-3">
                  <div className="max-w-xs">
                    <p className="text-sm font-medium text-foreground line-clamp-2">{item?.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item?.jurisdiction}</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm text-foreground">{item?.source}</p>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm text-foreground">{formatDate(item?.effectiveDate)}</p>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">{item?.impactScore}</span>
                    {getImpactBadge(item?.impactScore)}
                  </div>
                </td>
                <td className="px-4 py-3">
                  {getStatusBadge(item?.status)}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="xs" iconName="Eye">
                      View
                    </Button>
                    <Button variant="ghost" size="xs" iconName="Edit">
                      Edit
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-3 border-t border-border flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, sortedData?.length)} of {sortedData?.length} entries
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            iconName="ChevronLeft"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          >
            Previous
          </Button>
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`
                    w-8 h-8 rounded text-sm font-medium transition-colors
                    ${currentPage === pageNum
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }
                  `}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
          <Button
            variant="outline"
            size="sm"
            iconName="ChevronRight"
            iconPosition="right"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChangeDataTable;