import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

export const Integrations = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Supported Integrations</h2>
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Policy Engines</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Cloud Custodian</li>
                <li>• AWS Config Rules</li>
                <li>• Azure Policy</li>
                <li>• Open Policy Agent</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Cloud Providers</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Amazon Web Services</li>
                <li>• Microsoft Azure</li>
                <li>• Google Cloud Platform</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
