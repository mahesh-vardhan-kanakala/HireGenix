import React from 'react';

interface FilterCheckboxProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export function FilterCheckbox({ label, value, checked, onChange }: FilterCheckboxProps) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(value)}
        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <span className="text-sm text-gray-600">{label}</span>
    </label>
  );
}