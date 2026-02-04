import { Card, CardContent } from '../ui/Card';

export const SolutionOverview = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Solution Overview</h2>
      <Card>
        <CardContent className="p-6">
          <p className="text-gray-700 mb-4">
            <strong>CoreStack Unified Governance</strong> provides:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-corestack-blue font-bold">•</span>
              <span><strong>Single Pane of Glass</strong>: Aggregate findings from Cloud Custodian, AWS Config, Azure Policy</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-corestack-blue font-bold">•</span>
              <span><strong>Normalized Data Model</strong>: Consistent schema across all policy engines</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-corestack-blue font-bold">•</span>
              <span><strong>Real-Time Visibility</strong>: Continuous compliance monitoring</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-corestack-blue font-bold">•</span>
              <span><strong>Evidence Collection</strong>: Automated capture of violation details</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
