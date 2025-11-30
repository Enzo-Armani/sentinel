import React, { useState, useEffect } from 'react';
import Icon from './AppIcon';

const StatusIndicator = () => {
  const [connectionStatus, setConnectionStatus] = useState('connected');
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [reconnectAttempts, setReconnectAttempts] = useState(0);

  useEffect(() => {
    const checkConnection = () => {
      if (navigator.onLine) {
        setConnectionStatus('connected');
        setReconnectAttempts(0);
        setLastUpdate(new Date());
      } else {
        setConnectionStatus('disconnected');
      }
    };

    const handleOnline = () => {
      setConnectionStatus('connected');
      setReconnectAttempts(0);
      setLastUpdate(new Date());
    };

    const handleOffline = () => {
      setConnectionStatus('disconnected');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const connectionInterval = setInterval(checkConnection, 30000);
    checkConnection();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(connectionInterval);
    };
  }, []);

  useEffect(() => {
    if (connectionStatus === 'disconnected' && reconnectAttempts < 3) {
      const reconnectTimer = setTimeout(() => {
        setConnectionStatus('reconnecting');
        setReconnectAttempts(prev => prev + 1);
        
        setTimeout(() => {
          if (navigator.onLine) {
            setConnectionStatus('connected');
            setReconnectAttempts(0);
            setLastUpdate(new Date());
          } else {
            setConnectionStatus('disconnected');
          }
        }, 2000);
      }, 5000);

      return () => clearTimeout(reconnectTimer);
    }
  }, [connectionStatus, reconnectAttempts]);

  const getStatusConfig = () => {
    switch (connectionStatus) {
      case 'connected':
        return {
          icon: 'Wifi',
          color: 'var(--color-success)',
          bgColor: 'bg-success/10',
          text: 'Connected',
          pulse: false
        };
      case 'reconnecting':
        return {
          icon: 'RefreshCw',
          color: 'var(--color-warning)',
          bgColor: 'bg-warning/10',
          text: 'Reconnecting...',
          pulse: true
        };
      case 'disconnected':
        return {
          icon: 'WifiOff',
          color: 'var(--color-error)',
          bgColor: 'bg-error/10',
          text: 'Disconnected',
          pulse: false
        };
      default:
        return {
          icon: 'Wifi',
          color: 'var(--color-muted-foreground)',
          bgColor: 'bg-muted',
          text: 'Unknown',
          pulse: false
        };
    }
  };

  const formatLastUpdate = () => {
    const now = new Date();
    const diff = Math.floor((now - lastUpdate) / 1000);
    
    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return lastUpdate?.toLocaleTimeString();
  };

  const config = getStatusConfig();

  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-md bg-card border border-border">
      <div className="relative">
        <div className={`
          w-8 h-8 rounded-full ${config?.bgColor} 
          flex items-center justify-center
          transition-all duration-200
        `}>
          <Icon 
            name={config?.icon} 
            size={16} 
            color={config?.color} 
            strokeWidth={2}
            className={config?.pulse ? 'animate-spin' : ''}
          />
        </div>
        {connectionStatus === 'connected' && (
          <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-success rounded-full animate-pulse" />
        )}
      </div>
      <div className="hidden sm:flex flex-col">
        <span className="text-xs font-medium text-foreground">{config?.text}</span>
        {connectionStatus === 'connected' && (
          <span className="text-[10px] text-muted-foreground">
            Updated {formatLastUpdate()}
          </span>
        )}
        {connectionStatus === 'reconnecting' && (
          <span className="text-[10px] text-muted-foreground">
            Attempt {reconnectAttempts}/3
          </span>
        )}
      </div>
    </div>
  );
};

export default StatusIndicator;