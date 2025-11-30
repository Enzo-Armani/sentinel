import React, { useState, useEffect } from 'react';
import Icon from './AppIcon';

const AlertNotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      severity: 'critical',
      title: 'Critical Compliance Violation',
      message: 'GDPR data retention policy breach detected in EU region',
      timestamp: new Date(Date.now() - 300000),
      read: false,
      category: 'violation'
    },
    {
      id: 2,
      severity: 'high',
      title: 'New Regulatory Update',
      message: 'SEC filing requirements updated for Q4 2025',
      timestamp: new Date(Date.now() - 1800000),
      read: false,
      category: 'regulatory'
    },
    {
      id: 3,
      severity: 'medium',
      title: 'Pending Review Required',
      message: '15 compliance documents awaiting approval',
      timestamp: new Date(Date.now() - 3600000),
      read: true,
      category: 'review'
    },
    {
      id: 4,
      severity: 'low',
      title: 'System Maintenance',
      message: 'Scheduled maintenance on Nov 30, 2025 at 2:00 AM',
      timestamp: new Date(Date.now() - 7200000),
      read: true,
      category: 'system'
    }
  ]);

  const unreadCount = notifications?.filter(n => !n?.read)?.length;

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev?.map(notif =>
        notif?.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev?.map(notif => ({ ...notif, read: true }))
    );
  };

  const clearNotification = (id) => {
    setNotifications(prev => prev?.filter(notif => notif?.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
    setIsOpen(false);
  };

  const getSeverityConfig = (severity) => {
    switch (severity) {
      case 'critical':
        return {
          icon: 'AlertCircle',
          color: 'var(--color-error)',
          bgColor: 'bg-error/10',
          borderColor: 'border-error/20'
        };
      case 'high':
        return {
          icon: 'AlertTriangle',
          color: 'var(--color-warning)',
          bgColor: 'bg-warning/10',
          borderColor: 'border-warning/20'
        };
      case 'medium':
        return {
          icon: 'Info',
          color: 'var(--color-primary)',
          bgColor: 'bg-primary/10',
          borderColor: 'border-primary/20'
        };
      case 'low':
        return {
          icon: 'Bell',
          color: 'var(--color-muted-foreground)',
          bgColor: 'bg-muted',
          borderColor: 'border-border'
        };
      default:
        return {
          icon: 'Bell',
          color: 'var(--color-muted-foreground)',
          bgColor: 'bg-muted',
          borderColor: 'border-border'
        };
    }
  };

  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const diff = Math.floor((now - timestamp) / 1000);
    
    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return timestamp?.toLocaleDateString();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event?.target?.closest('.notification-panel') && !event?.target?.closest('.notification-trigger')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={togglePanel}
        className="notification-trigger relative p-2 rounded-md hover:bg-muted transition-colors duration-200"
        aria-label="Open notifications"
        aria-expanded={isOpen}
      >
        <Icon name="Bell" size={20} strokeWidth={2} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-error text-error-foreground text-xs font-semibold rounded-full flex items-center justify-center animate-pulse">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-[1050] lg:hidden"
            onClick={togglePanel}
            aria-hidden="true"
          />
          <div className="notification-panel fixed lg:absolute top-16 lg:top-full right-0 lg:right-0 w-full lg:w-96 max-h-[calc(100vh-4rem)] lg:max-h-[600px] bg-card border border-border rounded-none lg:rounded-lg shadow-modal z-[1200] lg:mt-2 overflow-hidden animate-slide-in-from-top lg:animate-fade-in">
            <div className="sticky top-0 bg-card border-b border-border px-4 py-3 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Icon name="Bell" size={18} strokeWidth={2} />
                <h3 className="text-sm font-semibold text-foreground">Notifications</h3>
                {unreadCount > 0 && (
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {unreadCount} new
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-xs text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                  >
                    Mark all read
                  </button>
                )}
                <button
                  onClick={togglePanel}
                  className="p-1 rounded hover:bg-muted transition-colors duration-200 lg:hidden"
                  aria-label="Close notifications"
                >
                  <Icon name="X" size={18} strokeWidth={2} />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(100vh-8rem)] lg:max-h-[500px]">
              {notifications?.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 px-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-3">
                    <Icon name="Bell" size={32} color="var(--color-muted-foreground)" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm text-muted-foreground text-center">No notifications</p>
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {notifications?.map((notification) => {
                    const config = getSeverityConfig(notification?.severity);
                    return (
                      <div
                        key={notification?.id}
                        className={`
                          px-4 py-3 hover:bg-muted/50 transition-colors duration-200 cursor-pointer
                          ${!notification?.read ? 'bg-primary/5' : ''}
                        `}
                        onClick={() => markAsRead(notification?.id)}
                      >
                        <div className="flex gap-3">
                          <div className={`
                            w-10 h-10 rounded-lg ${config?.bgColor} border ${config?.borderColor}
                            flex items-center justify-center flex-shrink-0
                          `}>
                            <Icon name={config?.icon} size={18} color={config?.color} strokeWidth={2} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h4 className="text-sm font-medium text-foreground line-clamp-1">
                                {notification?.title}
                              </h4>
                              <button
                                onClick={(e) => {
                                  e?.stopPropagation();
                                  clearNotification(notification?.id);
                                }}
                                className="p-1 rounded hover:bg-muted transition-colors duration-200 flex-shrink-0"
                                aria-label="Clear notification"
                              >
                                <Icon name="X" size={14} strokeWidth={2} />
                              </button>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                              {notification?.message}
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground">
                                {formatTimestamp(notification?.timestamp)}
                              </span>
                              {!notification?.read && (
                                <span className="w-2 h-2 bg-primary rounded-full" />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {notifications?.length > 0 && (
              <div className="sticky bottom-0 bg-card border-t border-border px-4 py-3">
                <button
                  onClick={clearAll}
                  className="w-full px-4 py-2 text-sm font-medium text-error hover:text-error/80 transition-colors duration-200"
                >
                  Clear all notifications
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AlertNotificationCenter;