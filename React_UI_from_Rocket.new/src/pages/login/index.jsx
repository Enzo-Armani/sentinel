import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const Login = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSendMagicLink = async (e) => {
    e?.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setEmailSent(true);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Login | Sentinel Authentication Portal</title>
        <meta name="description" content="Access your compliance dashboard through our secure authentication portal" />
      </Helmet>
      
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo/Branding Section */}
          <div className="flex items-center justify-between mb-8">
            {/* Left side - Logo and Sentinel */}
            <div className="flex items-center gap-3">
              <Icon name="Shield" size={48} strokeWidth={2} className="text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Sentinel</h1>
            </div>
            
            {/* Right side - Authentication Portal and Date */}
            <div className="text-right">
              <p className="text-muted-foreground text-sm">Authentication Portal</p>
              <p className="text-muted-foreground text-xs mt-1">29 November 2025</p>
            </div>
          </div>

          {/* Login Card */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-foreground mb-2">Welcome Back</h2>
              <p className="text-muted-foreground text-sm">
                Enter your email to access your compliance dashboard.
              </p>
            </div>

            <form onSubmit={handleSendMagicLink} className="space-y-6">
              <Input
                type="email"
                label="EMAIL ADDRESS"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
                required
                disabled={emailSent}
              />

              <Button
                type="submit"
                fullWidth
                size="lg"
                iconName="Mail"
                iconPosition="left"
                loading={loading}
                disabled={emailSent || !email}
              >
                Send Magic Link
              </Button>

              {emailSent && (
                <div className="flex items-start gap-3 p-4 bg-success/10 border border-success/20 rounded-md">
                  <Icon name="CheckCircle2" size={20} className="text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-success-foreground">
                      Check your email for the magic link!
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      We've sent a secure login link to {email}
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Footer Link */}
          <div className="text-center mt-6">
            <Link 
              to="/" 
              className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
            >
              <Icon name="ArrowLeft" size={16} />
              Return to Project Vision
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;