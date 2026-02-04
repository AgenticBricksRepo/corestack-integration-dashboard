import { Cloud, Database, ArrowRight, ArrowDown, Shield, BarChart3, Layers } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

export const DataFlow = () => {
  const steps = [
    { icon: Cloud, label: 'AWS Cloud', sublabel: 'Cloud Resources', color: 'bg-orange-500' },
    { icon: Shield, label: 'Cloud Custodian', sublabel: 'Policy Engine', color: 'bg-purple-500' },
    { icon: Layers, label: 'Ingestion Layer', sublabel: 'CoreStack Policies', color: 'bg-corestack-blue' },
    { icon: Database, label: 'CoreStack DB', sublabel: 'Findings Store', color: 'bg-corestack-darkBlue' },
    { icon: BarChart3, label: 'Dashboard', sublabel: 'Recommendations', color: 'bg-green-600' },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Flow Architecture</h2>
      <Card>
        <CardContent className="p-6 overflow-x-auto">
          {/* Desktop: Horizontal flow */}
          <div className="hidden md:flex items-center justify-center gap-2">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center min-w-[100px]">
                  <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full ${step.color} flex items-center justify-center text-white shadow-lg`}>
                    <step.icon className="w-7 h-7 lg:w-8 lg:h-8" />
                  </div>
                  <div className="mt-2 text-center">
                    <p className="font-semibold text-gray-900 text-xs lg:text-sm">{step.label}</p>
                    <p className="text-xs text-gray-500">{step.sublabel}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex items-center mx-1 lg:mx-2">
                    <div className="w-8 lg:w-12 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400"></div>
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-corestack-blue -ml-1" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: Vertical flow */}
          <div className="flex md:hidden flex-col items-center gap-2">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center text-white shadow-lg`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div className="text-left min-w-[140px]">
                    <p className="font-semibold text-gray-900 text-sm">{step.label}</p>
                    <p className="text-xs text-gray-500">{step.sublabel}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex flex-col items-center my-1">
                    <div className="w-0.5 h-4 bg-gradient-to-b from-gray-300 to-gray-400"></div>
                    <ArrowDown className="w-5 h-5 text-corestack-blue -mt-1" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
