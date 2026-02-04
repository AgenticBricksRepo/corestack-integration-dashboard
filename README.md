# CoreStack Compliance Dashboard

A responsive React dashboard for displaying cloud compliance data from CoreStack and Cloud Custodian policies.

## Tech Stack

- **Framework**: Vite + React 18
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Data**: Static JSON (exported from SQLite)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

### Compliance Dashboard Tab
- **KPI Cards**: 6 metrics showing total policies, compliance rate, violations, etc.
- **Charts**: Pie chart for overall compliance, bar charts by source and severity
- **Filters**: Filter by source, status, severity, and category
- **Findings Table**: Sortable table with expandable rows showing policy details and affected resources

### Executive Summary Tab
- **Benefits**: 4-card grid highlighting key value propositions
- **Data Flow**: Visual diagram showing integration architecture
- **Integrations**: Current capabilities and planned roadmap
- **Use Cases**: Accordion sections with detailed examples

## Folder Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── dashboard/       # KPICard, Charts, Table, Filters
│   ├── executive/       # Benefits, DataFlow, Integrations, UseCases
│   └── ui/              # Card, Badge, Tabs, Checkbox
├── data/                # Static JSON data files
├── hooks/               # useFilters custom hook
├── utils/               # Formatter functions
├── App.jsx              # Main application
├── main.jsx             # Entry point
└── index.css            # Tailwind imports
```

## Brand Colors

```js
const colors = {
  blue: '#0066cc',
  darkBlue: '#003d7a',
  success: '#48BB78',
  danger: '#F56565',
  warning: '#C05621',
}
```

## Data Sources

Data is exported from the SQLite database at:
`/aws-custodian-real-poc/corestack-integration-mock/corestack.db`

The JSON files contain:
- `policies.json`: Policy definitions
- `findings.json`: Policy evaluation results
- `resources.json`: Affected AWS resources
- `summary.json`: Pre-calculated statistics
