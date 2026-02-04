import { Shield, Cloud } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-corestack-blue to-corestack-darkBlue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8" />
              <Cloud className="w-6 h-6 -ml-3 mt-2" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">CoreStack</h1>
              <p className="text-blue-100 text-sm">Cloud Governance Dashboard</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-sm text-blue-100">
            <span>Cloud Custodian Integration</span>
          </div>
        </div>
      </div>
    </header>
  );
};
