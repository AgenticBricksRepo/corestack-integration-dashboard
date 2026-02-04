import { useState } from 'react';
import { ChevronDown, ChevronRight, ClipboardCheck, ShieldAlert, Code2 } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

const useCases = [
  {
    icon: ClipboardCheck,
    title: 'Compliance Audits',
    details: [
      'Generate audit-ready reports',
      'Provide evidence for SOC2, HIPAA, PCI-DSS',
      'Track compliance trends over time',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Security Operations',
    details: [
      'Monitor security posture in real-time',
      'Prioritize remediation by severity',
      'Integrate with SIEM/SOAR platforms',
    ],
  },
  {
    icon: Code2,
    title: 'DevSecOps',
    details: [
      'Shift-left security in CI/CD',
      'Automate policy checks in pipelines',
      'Provide developer-friendly feedback',
    ],
  },
];

export const UseCases = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Use Cases</h2>
      <Card>
        <CardContent className="p-4">
          <div className="space-y-2">
            {useCases.map((useCase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="w-full p-4 flex items-center gap-3 text-left hover:bg-gray-50 transition-colors rounded-lg"
                >
                  {expanded === index ? (
                    <ChevronDown className="w-4 h-4 text-corestack-darkBlue" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-corestack-darkBlue" />
                  )}
                  <span className="font-medium text-gray-900">{useCase.title}</span>
                </button>
                {expanded === index && (
                  <div className="px-4 pb-4 pl-11">
                    <ul className="space-y-1 text-sm text-gray-600">
                      {useCase.details.map((detail, i) => (
                        <li key={i}>• {detail}</li>
                      ))}
                    </ul>
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
