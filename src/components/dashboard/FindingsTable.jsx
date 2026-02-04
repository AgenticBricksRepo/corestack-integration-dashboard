import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { PolicyDetails } from './PolicyDetails';
import {
  formatDate,
  getSourceLabel,
  getSeverityBgColor,
  getStatusBgColor,
} from '../../utils/formatters';

export const FindingsTable = ({ findings }) => {
  const [sortField, setSortField] = useState('status');
  const [sortDirection, setSortDirection] = useState('asc');
  const [expandedRow, setExpandedRow] = useState(null);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedFindings = [...findings].sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];

    if (sortField === 'severity') {
      const order = { high: 0, medium: 1, low: 2 };
      aVal = order[aVal];
      bVal = order[bVal];
    }

    if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const SortIcon = ({ field }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? (
      <ChevronUp className="w-4 h-4 inline" />
    ) : (
      <ChevronDown className="w-4 h-4 inline" />
    );
  };

  const columns = [
    { key: 'policy_name', label: 'Policy' },
    { key: 'source', label: 'Source' },
    { key: 'status', label: 'Status' },
    { key: 'severity', label: 'Severity' },
    { key: 'category', label: 'Category' },
    { key: 'violations_count', label: 'Violations' },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Policy Findings</CardTitle>
        <span className="text-sm text-gray-500">
          {findings.length} {findings.length === 1 ? 'result' : 'results'}
        </span>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="w-8 px-4 py-3"></th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    onClick={() => handleSort(col.key)}
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  >
                    {col.label} <SortIcon field={col.key} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sortedFindings.map((finding) => (
                <>
                  <tr
                    key={finding.finding_id}
                    onClick={() =>
                      setExpandedRow(
                        expandedRow === finding.finding_id
                          ? null
                          : finding.finding_id
                      )
                    }
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-4 py-3">
                      {expandedRow === finding.finding_id ? (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronUp className="w-4 h-4 text-gray-400 rotate-90" />
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm font-medium text-gray-900">
                        {finding.policy_name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {formatDate(finding.last_evaluated)}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant="info">{getSourceLabel(finding.source)}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant={finding.status === 'PASS' ? 'success' : 'danger'}
                      >
                        {finding.status === 'PASS' ? 'Compliant' : 'Non-Compliant'}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        className={getSeverityBgColor(finding.severity)}
                        variant="default"
                      >
                        {finding.severity.charAt(0).toUpperCase() +
                          finding.severity.slice(1)}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-gray-600 capitalize">
                        {finding.category}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-sm font-medium ${
                          finding.violations_count > 0
                            ? 'text-danger'
                            : 'text-gray-500'
                        }`}
                      >
                        {finding.violations_count}
                      </span>
                    </td>
                  </tr>
                  {expandedRow === finding.finding_id && (
                    <tr>
                      <td colSpan={7} className="bg-gray-50 px-4 py-4">
                        <PolicyDetails policyId={finding.policy_id} />
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
