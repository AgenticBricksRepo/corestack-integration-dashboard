import { Filter, X } from 'lucide-react';
import { getSourceLabel } from '../../utils/formatters';

const FilterChip = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`
      px-3 py-1.5 rounded-full text-sm font-medium transition-all
      ${active
        ? 'bg-corestack-blue text-white'
        : 'bg-white text-gray-600 border border-gray-300 hover:border-corestack-blue hover:text-corestack-blue'
      }
    `}
  >
    {label}
  </button>
);

const FilterGroup = ({ label, children }) => (
  <div className="flex flex-wrap items-center gap-2">
    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-fit">
      {label}:
    </span>
    {children}
  </div>
);

export const Filters = ({ filters, filterOptions, toggleFilter, clearFilters, hasActiveFilters }) => {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
          <Filter className="w-4 h-4" />
          Filters
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-danger transition-colors"
          >
            <X className="w-3 h-3" />
            Clear all
          </button>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {/* Source */}
        <FilterGroup label="Source">
          {filterOptions.sources.map((source) => (
            <FilterChip
              key={source}
              label={getSourceLabel(source)}
              active={filters.sources.includes(source)}
              onClick={() => toggleFilter('sources', source)}
            />
          ))}
        </FilterGroup>

        {/* Status */}
        <FilterGroup label="Status">
          {filterOptions.statuses.map((status) => (
            <FilterChip
              key={status}
              label={status === 'PASS' ? 'Compliant' : 'Non-Compliant'}
              active={filters.statuses.includes(status)}
              onClick={() => toggleFilter('statuses', status)}
            />
          ))}
        </FilterGroup>

        {/* Severity */}
        <FilterGroup label="Severity">
          {filterOptions.severities.map((severity) => (
            <FilterChip
              key={severity}
              label={severity.charAt(0).toUpperCase() + severity.slice(1)}
              active={filters.severities.includes(severity)}
              onClick={() => toggleFilter('severities', severity)}
            />
          ))}
        </FilterGroup>

        {/* Category */}
        <FilterGroup label="Category">
          {filterOptions.categories.map((category) => (
            <FilterChip
              key={category}
              label={category.charAt(0).toUpperCase() + category.slice(1)}
              active={filters.categories.includes(category)}
              onClick={() => toggleFilter('categories', category)}
            />
          ))}
        </FilterGroup>
      </div>
    </div>
  );
};
