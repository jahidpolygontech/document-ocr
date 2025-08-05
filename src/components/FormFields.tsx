import React from "react";
import InputField from "@/components/forms/InputField";
import { FormState } from "@/hooks/useUploadForm";

interface FormFieldsProps {
  formData: FormState;
  handleChange: (field: keyof FormState, value: any) => void;
}

const FormFields: React.FC<FormFieldsProps> = ({
  formData,
  handleChange,
}) => {
  const inputFields = [
    { name: "nidName", label: "NID Name", type: "text", value: formData.nidName },
    { name: "nidAddress", label: "NID Address", type: "text", value: formData.nidAddress },
    { name: "nidFatherName", label: "NID Father's Name", type: "text", value: formData.nidFatherName },
    { name: "nidMotherName", label: "NID Mother's Name", type: "text", value: formData.nidMotherName },
    { name: "nidSpouseName", label: "NID Spouse's Name", type: "text", value: formData.nidSpouseName },
    { name: "customerProvidedName", label: "Customer Provided Name", type: "text", value: formData.customerProvidedName },
    { name: "customerProvidedAddress", label: "Customer Provided Address", type: "text", value: formData.customerProvidedAddress },
  ];

  return (
    <>
      {inputFields.map((field) => (
        <InputField
          key={field.name}
          name={field.name}
          label={field.label}
          id={field.name}
          type={field.type}
          value={field.value}
          onChange={(e) => handleChange(field.name as keyof FormState, e.target.value)}
          required
        />
      ))}
    </>
  );
};

export default FormFields;
