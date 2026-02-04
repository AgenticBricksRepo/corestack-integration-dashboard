import { Shield, Cloud } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

export const Summary = () => {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-corestack-blue to-corestack-darkBlue rounded-xl p-6 sm:p-8 text-white">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <Shield className="w-12 h-12 opacity-90" />
            <Cloud className="w-8 h-8 -ml-4 mt-4 opacity-80" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">
              CoreStack - Unified Policy Compliance
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed max-w-3xl">
              Real-time cloud governance - Cloud Custodian + CoreStack Native
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed">
            This POC demonstrates <strong>CoreStack's unified cloud governance platform</strong> that aggregates
            compliance findings from multiple policy engines into a single dashboard. The solution ingests real
            Cloud Custodian scan results from live AWS resources and presents them alongside CoreStack-native policies.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
