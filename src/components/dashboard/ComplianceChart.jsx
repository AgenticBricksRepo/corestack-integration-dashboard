import { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

const COLORS = {
  compliant: '#48BB78',
  nonCompliant: '#F56565',
};

export const ComplianceChart = ({ findings }) => {
  const { overallData, bySourceData, bySeverityData } = useMemo(() => {
    const compliant = findings.filter(f => f.status === 'PASS').length;
    const nonCompliant = findings.filter(f => f.status === 'FAIL').length;

    // By source
    const sourceMap = {};
    findings.forEach(f => {
      const src = f.source === 'corestack' ? 'CoreStack' : 'Cloud Custodian';
      if (!sourceMap[src]) sourceMap[src] = { compliant: 0, nonCompliant: 0 };
      if (f.status === 'PASS') sourceMap[src].compliant++;
      else sourceMap[src].nonCompliant++;
    });
    const bySourceData = Object.entries(sourceMap).map(([name, data]) => ({
      name,
      Compliant: data.compliant,
      'Non-Compliant': data.nonCompliant,
    }));

    // By severity
    const severityMap = {};
    findings.forEach(f => {
      const sev = f.severity.charAt(0).toUpperCase() + f.severity.slice(1);
      if (!severityMap[sev]) severityMap[sev] = { compliant: 0, nonCompliant: 0 };
      if (f.status === 'PASS') severityMap[sev].compliant++;
      else severityMap[sev].nonCompliant++;
    });
    const severityOrder = ['High', 'Medium', 'Low'];
    const bySeverityData = severityOrder
      .filter(sev => severityMap[sev])
      .map(sev => ({
        name: sev,
        Compliant: severityMap[sev].compliant,
        'Non-Compliant': severityMap[sev].nonCompliant,
      }));

    const overallData = [
      { name: 'Compliant', value: compliant, color: COLORS.compliant },
      { name: 'Non-Compliant', value: nonCompliant, color: COLORS.nonCompliant },
    ];

    return { overallData, bySourceData, bySeverityData };
  }, [findings]);

  if (findings.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-gray-500">
          No data matches the current filters.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Overall Compliance Pie Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Overall Compliance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={overallData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {overallData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* By Source Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle>By Source</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bySourceData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Compliant" fill={COLORS.compliant} stackId="a" />
                <Bar dataKey="Non-Compliant" fill={COLORS.nonCompliant} stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* By Severity Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle>By Severity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bySeverityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Compliant" fill={COLORS.compliant} />
                <Bar dataKey="Non-Compliant" fill={COLORS.nonCompliant} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
