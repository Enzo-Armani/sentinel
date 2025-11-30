import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './AppIcon';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      label: 'Regulatory Changes',
      path: '/regulatory-change-monitor',
      icon: 'FileText'
    }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-card border-b border-border z-[1000] shadow-card">
      <div className="h-full flex items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link to="/compliance-overview" className="flex items-center gap-3 no-underline">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-primary/20">
              <Icon name="Shield" size={24} color="var(--color-primary)" strokeWidth={2} />
            </div>
            <span className="text-lg font-semibold text-foreground">Sentinel Compliance</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
                  transition-all duration-200 no-underline
                  ${isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }
                `}
                aria-current={isActivePath(item?.path) ? 'page' : undefined}
              >
                <Icon name={item?.icon} size={18} strokeWidth={2} />
                <span>{item?.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors duration-200"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} strokeWidth={2} />
        </button>
      </div>
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[1050] lg:hidden"
            onClick={toggleMobileMenu}
            aria-hidden="true"
          />
          <nav className="fixed top-16 left-0 right-0 bg-card border-b border-border shadow-modal z-[1100] lg:hidden animate-slide-in-from-top">
            <div className="px-6 py-4 space-y-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={toggleMobileMenu}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium
                    transition-all duration-200 no-underline
                    ${isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }
                  `}
                  aria-current={isActivePath(item?.path) ? 'page' : undefined}
                >
                  <Icon name={item?.icon} size={20} strokeWidth={2} />
                  <span>{item?.label}</span>
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;