import React from "react";

interface DocumentInputProps {
  id: string;
  label: string;
  accept: string;
  onChange: (file: File | null) => void;
  required?: boolean;
}

const DocumentInput: React.FC<DocumentInputProps> = ({
  id,
  label,
  accept,
  onChange,
  required = false,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="file"
        id={id}
        accept={accept}
        onChange={(e) => onChange(e.target.files ? e.target.files[0] : null)}
        className="mt-1 block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
        required={required}
      />
    </div>
  );
};

export default DocumentInput;
