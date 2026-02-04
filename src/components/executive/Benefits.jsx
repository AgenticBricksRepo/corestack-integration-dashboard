import { Zap, Eye, ShieldCheck, PiggyBank } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

const benefits = [
  {
    icon: Zap,
    title: '80% Faster',
    description: 'Reduce compliance reporting time',
    color: 'bg-orange-500',
  },
  {
    icon: Eye,
    title: '100% Visibility',
    description: 'Complete view across engines',
    color: 'bg-blue-500',
  },
  {
    icon: ShieldCheck,
    title: 'Reduced Risk',
    description: 'Catch violations early',
    color: 'bg-purple-500',
  },
  {
    icon: PiggyBank,
    title: 'Cost Savings',
    description: 'Eliminate manual work',
    color: 'bg-green-500',
  },
];

export const Benefits = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((benefit, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow text-center">
            <CardContent className="p-6">
              <div className={`${benefit.color} w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center text-white`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-500">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
