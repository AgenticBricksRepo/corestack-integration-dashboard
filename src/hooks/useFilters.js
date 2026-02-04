import { useState, useMemo } from 'react';

export const useFilters = (findings) => {
  const [filters, setFilters] = useState({
    sources: [],
    statuses: [],
    severities: [],
    categories: [],
  });

  const filterOptions = useMemo(() => ({
    sources: [...new Set(findings.map(f => f.source))],
    statuses: [...new Set(findings.map(f => f.status))],
    severities: [...new Set(findings.map(f => f.severity))],
    categories: [...new Set(findings.map(f => f.category))],
  }), [findings]);

  const toggleFilter = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value],
    }));
  };

  const clearFilters = () => {
    setFilters({
      sources: [],
      statuses: [],
      severities: [],
      categories: [],
    });
  };

  const filteredFindings = useMemo(() => {
    return findings.filter(finding => {
      if (filters.sources.length && !filters.sources.includes(finding.source)) {
        return false;
      }
      if (filters.statuses.length && !filters.statuses.includes(finding.status)) {
        return false;
      }
      if (filters.severities.length && !filters.severities.includes(finding.severity)) {
        return false;
      }
      if (filters.categories.length && !filters.categories.includes(finding.category)) {
        return false;
      }
      return true;
    });
  }, [findings, filters]);

  const hasActiveFilters = Object.values(filters).some(arr => arr.length > 0);

  return {
    filters,
    filterOptions,
    toggleFilter,
    clearFilters,
    filteredFindings,
    hasActiveFilters,
  };
};
