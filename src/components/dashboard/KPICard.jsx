import { Card } from '../ui/Card';

export const KPICard = ({ title, value, subtitle, icon: Icon, color = 'blue', trend }) => {
  const colorClasses = {
    blue: 'text-corestack-blue bg-blue-50',
    green: 'text-success bg-green-50',
    red: 'text-danger bg-red-50',
    yellow: 'text-warning bg-yellow-50',
    gray: 'text-gray-600 bg-gray-50',
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <div className="p-3 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide truncate">
              {title}
            </p>
            <p className="mt-1 text-2xl sm:text-3xl font-bold text-gray-900">{value}</p>
            {subtitle && (
              <p className="mt-1 text-xs text-gray-500 hidden sm:block">{subtitle}</p>
            )}
            {trend && (
              <p className={`mt-1 text-xs ${trend.positive ? 'text-success' : 'text-danger'}`}>
                {trend.positive ? '+' : ''}{trend.value}
              </p>
            )}
          </div>
          {Icon && (
            <div className={`p-2 sm:p-3 rounded-lg ${colorClasses[color]} flex-shrink-0`}>
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
