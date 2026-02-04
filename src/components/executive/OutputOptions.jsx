import { Code, Link, LayoutDashboard } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

const outputs = [
  {
    icon: Code,
    title: 'API',
    description: 'RESTful API access for programmatic integration',
    items: ['CI/CD pipelines', 'SIEM systems', 'Custom applications'],
  },
  {
    icon: Link,
    title: 'Embeddable Link',
    description: 'Shareable dashboard URL for easy access',
    items: ['Internal portals', 'Confluence/Wiki', 'Slack/Teams'],
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard',
    description: 'Interactive web interface with full features',
    items: ['KPI cards & metrics', 'Filterable reports', 'Evidence viewer'],
  },
];

export const OutputOptions = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Output Options</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {outputs.map((output, index) => (
          <Card key={index}>
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <output.icon className="w-5 h-5 text-corestack-blue" />
                <h3 className="font-semibold text-corestack-darkBlue">{output.title}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">{output.description}</p>
              <ul className="text-sm text-gray-700 space-y-1">
                {output.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
