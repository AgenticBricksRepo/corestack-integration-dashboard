export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            <span className="font-semibold text-corestack-blue">CoreStack</span>
            {' '}| Multi-Cloud Governance Platform
          </div>
          <div className="text-sm text-gray-400">
            Cloud Custodian Integration POC
          </div>
        </div>
      </div>
    </footer>
  );
};
