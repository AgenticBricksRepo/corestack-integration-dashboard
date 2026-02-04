import { useState } from 'react';
import { LayoutDashboard, Briefcase } from 'lucide-react';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Tabs } from './components/ui/Tabs';

import { KPIGrid } from './components/dashboard/KPIGrid';
import { Filters } from './components/dashboard/Filters';
import { ComplianceChart } from './components/dashboard/ComplianceChart';
import { FindingsTable } from './components/dashboard/FindingsTable';

import { Summary } from './components/executive/Summary';
import { Benefits } from './components/executive/Benefits';
import { OutputOptions } from './components/executive/OutputOptions';
import { SolutionOverview } from './components/executive/SolutionOverview';
import { DataFlow } from './components/executive/DataFlow';
import { Integrations } from './components/executive/Integrations';
import { UseCases } from './components/executive/UseCases';

import { useFilters } from './hooks/useFilters';
import findings from './data/findings.json';

const tabs = [
  { id: 'executive', label: 'Executive Summary', icon: Briefcase },
  { id: 'dashboard', label: 'Compliance Dashboard', icon: LayoutDashboard },
];

function App() {
  const [activeTab, setActiveTab] = useState('executive');
  const {
    filters,
    filterOptions,
    toggleFilter,
    clearFilters,
    filteredFindings,
    hasActiveFilters,
  } = useFilters(findings);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Tabs */}
          <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Filters */}
                <Filters
                  filters={filters}
                  filterOptions={filterOptions}
                  toggleFilter={toggleFilter}
                  clearFilters={clearFilters}
                  hasActiveFilters={hasActiveFilters}
                />

                {/* KPI Cards */}
                <KPIGrid findings={filteredFindings} />

                {/* Charts */}
                <ComplianceChart findings={filteredFindings} />

                {/* Findings Table */}
                <FindingsTable findings={filteredFindings} />
              </div>
            )}

            {activeTab === 'executive' && (
              <div className="space-y-8">
                <Summary />
                <Benefits />
                <SolutionOverview />
                <OutputOptions />
                <DataFlow />
                <Integrations />
                <UseCases />
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
