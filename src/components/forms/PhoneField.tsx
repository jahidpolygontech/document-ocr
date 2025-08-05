"use client";

import React from "react";

interface Props {
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  readOnly?: boolean;
}

const PhoneField: React.FC<Props> = ({
  placeholder,
  id,
  name,
  value,
  onChange,
  required = false,
  readOnly = false,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-label-text poppins">
        Phone Number
      </label>
      <input
        id={id}
        name={name}
        type="tel"
        value={value}
        onChange={(e) => {
          const rawInput = e.target.value.replace(/\D/g, "").slice(0, 11);
          onChange({
            target: {
              name: e.target.name,
              value: rawInput,
            },
          } as React.ChangeEvent<HTMLInputElement>);
        }}
        placeholder={placeholder}
        className="border border-solid border-border-primary px-3 py-[5.5px] rounded-md poppins focus:border-border-primary focus:outline-none"
        required={required}
        readOnly={readOnly}
      />
    </div>
  );
};

export default PhoneField;
