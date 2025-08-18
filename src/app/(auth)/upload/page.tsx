"use client";

import SelectField from "@/components/forms/SelectField";
import { LabelAndValue } from "@/types/Common";
import { useUploadForm } from "@/hooks/useUploadForm";
import DocumentInput from "@/components/DocumentInput";
import FormFields from "@/components/FormFields";

const incomeProofDocFileTypes: LabelAndValue<string>[] = [
  { label: "Salary Certificate", value: "salary_certificate" },
  { label: "Pay Slip", value: "pay_slip" },
  { label: "ID Card", value: "id_card" },
  { label: "Letter of Introduction", value: "letter_of_introduction" },
  { label: "Bank Statement", value: "bank_statement" },
  { label: "Rental Deed", value: "rental_deed" },
  { label: "Trade License", value: "trade_license" },
];

const addressProofDocFileTypes: LabelAndValue<string>[] = [
  { label: "Utility Bill", value: "utility_bill" },
];

const UploadPage = () => {
  const { formData, loading, handleChange, handleSubmit } = useUploadForm();

  return (
    <div className="container mx-auto p-4 border mt-4 rounded-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <DocumentInput
          id="incomeProofDocFile"
          label="Upload Income Proof Document (PDF)"
          accept=".pdf"
          onChange={(file) => handleChange("incomeProofDocFile", file)}
          required
        />
        <SelectField
          name="incomeProofDocFileType"
          label="Income Proof Document Type"
          id="incomeProofDocFileType"
          items={incomeProofDocFileTypes}
          value={formData.incomeProofDocFileType}
          onChange={(value) => handleChange("incomeProofDocFileType", value)}
          required
        />
        <DocumentInput
          id="addressProofDocFile"
          label="Upload Address Proof Document (Image)"
          accept="image/*"
          onChange={(file) => handleChange("addressProofDocFile", file)}
          required
        />
        <SelectField
          name="addressProofDocFileType"
          label="Address Proof Document Type"
          id="addressProofDocFileType"
          items={addressProofDocFileTypes}
          value={formData.addressProofDocFileType}
          onChange={(value) => handleChange("addressProofDocFileType", value)}
          required
        />

        <FormFields formData={formData} handleChange={handleChange} />

        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 rounded text-white font-semibold ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-cyan-600 hover:bg-cyan-700"
          }`}
        >
          {loading ? "Uploading..." : "Upload Document"}
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
