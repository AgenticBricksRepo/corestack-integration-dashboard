import { Server, Tag, MapPin, Hash } from 'lucide-react';
import policies from '../../data/policies.json';
import resources from '../../data/resources.json';

export const PolicyDetails = ({ policyId }) => {
  const policy = policies.find((p) => p.policy_id === policyId);
  const relatedResources = resources.filter((r) => r.policy_id === policyId);

  if (!policy) {
    return <div className="text-sm text-gray-500">Policy details not found.</div>;
  }

  return (
    <div className="space-y-4">
      {/* Policy Description */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-1">Description</h4>
        <p className="text-sm text-gray-600">{policy.description}</p>
      </div>

      {/* Policy Metadata */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
        <div>
          <span className="text-gray-500">Policy ID:</span>
          <p className="font-mono text-xs text-gray-700 break-all">{policy.policy_id}</p>
        </div>
        <div>
          <span className="text-gray-500">Resource Type:</span>
          <p className="text-gray-700">{policy.resource_types}</p>
        </div>
        <div>
          <span className="text-gray-500">Category:</span>
          <p className="text-gray-700 capitalize">{policy.category}</p>
        </div>
        <div>
          <span className="text-gray-500">Severity:</span>
          <p className="text-gray-700 capitalize">{policy.severity}</p>
        </div>
      </div>

      {/* Related Resources */}
      {relatedResources.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Affected Resources ({relatedResources.length})
          </h4>
          <div className="space-y-2">
            {relatedResources.map((resource) => (
              <div
                key={resource.resource_key}
                className="bg-white rounded border border-gray-200 p-3"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Server className="w-4 h-4" />
                    <span className="font-mono">{resource.raw_id}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Hash className="w-3 h-3" />
                    <span>{resource.type}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MapPin className="w-3 h-3" />
                    <span>{resource.region}</span>
                  </div>
                </div>
                {Object.keys(resource.tags).length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {Object.entries(resource.tags).map(([key, value]) => (
                      <span
                        key={key}
                        className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-xs"
                      >
                        <Tag className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">{key}:</span>
                        <span className="text-gray-800">{value}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {relatedResources.length === 0 && (
        <div className="text-sm text-gray-500 italic">
          No specific resources associated with this finding.
        </div>
      )}
    </div>
  );
};
