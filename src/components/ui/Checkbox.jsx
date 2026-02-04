export const Checkbox = ({ label, checked, onChange, className = '' }) => {
  return (
    <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 text-corestack-blue border-gray-300 rounded focus:ring-corestack-blue focus:ring-2"
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
};
