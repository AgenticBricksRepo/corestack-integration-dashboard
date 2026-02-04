import { useMemo } from 'react';
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  FileText,
  Cloud,
  Building2,
  AlertOctagon
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
    const highSeverity = findings.filter(f => f.severity === 'high' && f.status === 'FAIL').length;
    const complianceRate = total > 0 ? (compliant / total) * 100 : 0;

    return {
      total,
      compliant,
      nonCompliant,
      violations,
      cloudCustodian,
      corestack,
      highSeverity,
      complianceRate,
    };
  }, [findings]);

  // Arranged for meaningful mobile pairs (2 cols):
  // Pair 1: Total Policies | High Severity (overview)
  // Pair 2: Cloud Custodian | CoreStack (sources)
  // Pair 3: Compliant | Non-Compliant (status)
  // Pair 4: Compliance Rate | Violations (metrics)
  const kpis = [
    {
      title: 'Total Policies',
      value: stats.total,
      subtitle: 'Governance rules',
      icon: FileText,
      color: 'blue',
    },
    {
      title: 'High Severity',
      value: stats.highSeverity,
      subtitle: 'Critical failures',
      icon: AlertOctagon,
      color: stats.highSeverity > 0 ? 'red' : 'green',
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
      subtitle: 'Passing',
      icon: CheckCircle,
      color: 'green',
    },
    {
      title: 'Non-Compliant',
      value: stats.nonCompliant,
      subtitle: 'Failing',
      icon: XCircle,
      color: 'red',
    },
    {
      title: 'Compliance Rate',
      value: formatPercentage(stats.complianceRate),
      subtitle: `${stats.compliant}/${stats.total}`,
      icon: Shield,
      color: stats.complianceRate >= 80 ? 'green' : stats.complianceRate >= 50 ? 'yellow' : 'red',
    },
    {
      title: 'Violations',
      value: stats.violations,
      subtitle: 'Resources affected',
      icon: AlertTriangle,
      color: stats.violations > 0 ? 'yellow' : 'green',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {kpis.map((kpi, index) => (
        <KPICard key={index} {...kpi} />
      ))}
    </div>
  );
};
