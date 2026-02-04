export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatPercentage = (value) => {
  return `${Math.round(value)}%`;
};

export const getSeverityColor = (severity) => {
  const colors = {
    high: 'text-danger',
    medium: 'text-warning',
    low: 'text-gray-500',
  };
  return colors[severity] || 'text-gray-500';
};

export const getSeverityBgColor = (severity) => {
  const colors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-gray-100 text-gray-800',
  };
  return colors[severity] || 'bg-gray-100 text-gray-800';
};

export const getStatusColor = (status) => {
  return status === 'PASS' ? 'text-success' : 'text-danger';
};

export const getStatusBgColor = (status) => {
  return status === 'PASS'
    ? 'bg-green-100 text-green-800'
    : 'bg-red-100 text-red-800';
};

export const getSourceLabel = (source) => {
  const labels = {
    corestack: 'CoreStack',
    cloudcustodian: 'Cloud Custodian',
  };
  return labels[source] || source;
};

export const getCategoryIcon = (category) => {
  const icons = {
    security: 'Shield',
    cost: 'DollarSign',
    governance: 'FileText',
  };
  return icons[category] || 'File';
};
