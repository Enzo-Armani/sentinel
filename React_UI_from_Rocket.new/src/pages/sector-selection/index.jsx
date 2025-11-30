import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const SectorSelection = () => {
  const navigate = useNavigate();
  const [selectedSector, setSelectedSector] = useState(null);

  const sectors = [
    {
      id: 'adi',
      name: 'Authorised Deposit-Taking Institutions (ADIs)',
      description: 'Banks, building societies, and credit unions authorized to take deposits from the public under Australian banking regulations.',
      icon: 'Building2',
      regulations: 342,
      compliance: 94,
      activeAlerts: 8,
      features: [
        'APRA prudential standards monitoring',
        'Capital adequacy requirements tracking',
        'Liquidity coverage ratio compliance',
        'Basel III implementation oversight'
      ]
    },
    {
      id: 'afs',
      name: 'AFS Licensees',
      description: 'Australian Financial Services licensees providing financial services, advice, and dealing in financial products.',
      icon: 'FileCheck',
      regulations: 287,
      compliance: 91,
      activeAlerts: 12,
      features: [
        'ASIC regulatory requirement tracking',
        'Financial services compliance monitoring',
        'Client money handling oversight',
        'Disclosure and reporting obligations'
      ]
    }
  ];

  const handleSectorSelect = (sectorId) => {
    setSelectedSector(sectorId);
  };

  const handleContinue = () => {
    if (selectedSector) {
      navigate(`/regulatory-change-monitor?sector=${selectedSector}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Australian Financial Institutions Compliance
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Select your financial institution sector to access tailored regulatory monitoring, compliance tracking, and real-time alerts specific to your regulatory framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {sectors?.map((sector) => (
              <div
                key={sector?.id}
                onClick={() => handleSectorSelect(sector?.id)}
                className={`
                  relative bg-card border-2 rounded-xl p-8 cursor-pointer transition-all duration-300
                  hover:shadow-xl hover:scale-[1.02]
                  ${selectedSector === sector?.id 
                    ? 'border-primary shadow-lg scale-[1.02]' 
                    : 'border-border hover:border-primary/50'
                  }
                `}
              >
                {selectedSector === sector?.id && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary text-primary-foreground rounded-full p-2">
                      <Icon name="Check" size={20} strokeWidth={3} />
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-6">
                  <div className={`
                    p-4 rounded-lg transition-colors
                    ${selectedSector === sector?.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                    }
                  `}>
                    <Icon name={sector?.icon} size={32} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {sector?.name}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {sector?.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {sector?.regulations}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Regulations
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {sector?.compliance}%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Compliance
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600 mb-1">
                      {sector?.activeAlerts}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Active Alerts
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-semibold text-foreground mb-2">
                    Key Features:
                  </div>
                  {sector?.features?.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1">
                        <Icon 
                          name="CheckCircle2" 
                          size={16} 
                          className="text-primary" 
                          strokeWidth={2} 
                        />
                      </div>
                      <span className="text-sm text-muted-foreground flex-1">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              disabled={!selectedSector}
              onClick={handleContinue}
              iconName="ArrowRight"
              iconPosition="right"
              className="px-8"
            >
              Continue to Compliance Dashboard
            </Button>
          </div>

          <div className="mt-12 bg-muted/50 border border-border rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Icon name="Info" size={24} strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  About Australian Financial Compliance
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This platform provides comprehensive regulatory monitoring and compliance tracking specifically designed for Australian financial institutions. 
                  Our system continuously monitors changes from APRA (Australian Prudential Regulation Authority) and ASIC (Australian Securities and Investments Commission), 
                  ensuring your institution stays ahead of regulatory requirements and maintains optimal compliance standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SectorSelection;