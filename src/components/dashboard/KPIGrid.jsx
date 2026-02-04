import { useMemo } from 'react';
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  FileText,
  Cloud,
  Building2
} from 'lucide-react';
import { KPICard } from './KPICard';
import { formatPercentage } from '../../utils/formatters';

export const KPIGrid = ({ findings }) => {
  const stats = useMemo(() => {
    const total = findings.length;
    const compliant = findings.filter(f => f.status === 'PASS').length;
    const nonCompliant = findings.filter(f => f.status === 'FAIL').length;
    const violations = findings.reduce((sum, f) => sum + f.violations_count, 0);
    const cloudCustodian = findings.filter(f => f.source === 'cloudcustodian').length;
    const corestack = findings.filter(f => f.source === 'corestack').length;
    const complianceRate = total > 0 ? (compliant / total) * 100 : 0;

    return {
      total,
      compliant,
      nonCompliant,
      violations,
      cloudCustodian,
      corestack,
      complianceRate,
    };
  }, [findings]);

  const kpis = [
    {
      title: 'Total Policies',
      value: stats.total,
      subtitle: 'Active governance rules',
      icon: FileText,
      color: 'blue',
    },
    {
      title: 'Cloud Custodian',
      value: stats.cloudCustodian,
      subtitle: 'Custodian policies',
      icon: Cloud,
      color: 'blue',
    },
    {
      title: 'CoreStack',
      value: stats.corestack,
      subtitle: 'Native policies',
      icon: Building2,
      color: 'blue',
    },
    {
      title: 'Compliant',
      value: stats.compliant,
      subtitle: 'Policies passing',
      icon: CheckCircle,
      color: 'green',
    },
    {
      title: 'Non-Compliant',
      value: stats.nonCompliant,
      subtitle: 'Policies failing',
      icon: XCircle,
      color: 'red',
    },
    {
      title: 'Compliance Rate',
      value: formatPercentage(stats.complianceRate),
      subtitle: `${stats.compliant} of ${stats.total} passing`,
      icon: Shield,
      color: stats.complianceRate >= 80 ? 'green' : stats.complianceRate >= 50 ? 'yellow' : 'red',
    },
    {
      title: 'Total Violations',
      value: stats.violations,
      subtitle: 'Resources in violation',
      icon: AlertTriangle,
      color: stats.violations > 0 ? 'yellow' : 'green',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
      {kpis.map((kpi, index) => (
        <KPICard key={index} {...kpi} />
      ))}
    </div>
  );
};
