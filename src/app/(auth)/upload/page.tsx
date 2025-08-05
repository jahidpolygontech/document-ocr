"use client";

import { useState } from "react";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { LabelAndValue } from "@/types/Common";

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
  const [incomeProofDocFile, setIncomeProofDocFile] = useState<File | null>(null);
  const [incomeProofDocFileType, setIncomeProofDocFileType] = useState<string | null>(null);
  const [addressProofDocFile, setAddressProofDocFile] = useState<File | null>(null);
  const [addressProofDocFileType, setAddressProofDocFileType] = useState<string | null>(null);
  const [nidName, setNidName] = useState("");
  const [nidAddress, setNidAddress] = useState("");
  const [nidFatherName, setNidFatherName] = useState("");
  const [nidMotherName, setNidMotherName] = useState("");
  const [nidSpouseName, setNidSpouseName] = useState("");
  const [customerProvidedName, setCustomerProvidedName] = useState("");
  const [customerProvidedAddress, setCustomerProvidedAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    if (
      !incomeProofDocFile ||
      !incomeProofDocFileType ||
      !addressProofDocFile ||
      !addressProofDocFileType ||
      !nidName ||
      !nidAddress ||
      !nidFatherName ||
      !nidMotherName ||
      !nidSpouseName ||
      !customerProvidedName ||
      !customerProvidedAddress
    ) {
      toast.error("Please fill in all required fields and upload both files.");
      setLoading(false);
      return;
    }
  
    const referenceId = uuidv4();
    const formData = new FormData();
    formData.append("reference_id", referenceId);
    formData.append("income_proof_doc_file", incomeProofDocFile);
    formData.append("income_proof_doc_file_type", incomeProofDocFileType);
    formData.append("address_proof_doc_file", addressProofDocFile);
    formData.append("address_proof_doc_file_type", addressProofDocFileType);
    formData.append("nid_name", nidName);
    formData.append("nid_address", nidAddress);
    formData.append("nid_father_name", nidFatherName);
    formData.append("nid_mother_name", nidMotherName);
    formData.append("nid_spouse_name", nidSpouseName);
    formData.append("customer_provided_name", customerProvidedName);
    formData.append("customer_provided_address", customerProvidedAddress);
    
  
    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
      const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  
      // Debug logs for environment variables
      console.log("API_BASE_URL:", API_BASE_URL);
      console.log("API_KEY:", API_KEY);
  
      if (!API_BASE_URL || !API_KEY) {
        throw new Error("API_BASE_URL or API_KEY is not defined in environment variables.");
      }
  
      const response = await fetch(`${API_BASE_URL}/api/v1/verify-document`, {
        method: "POST",
        headers: {
          "X-API-KEY": API_KEY,
        },
        body: formData,
      });
  
      if (!response.ok) {
        console.error("Upload failed:", response.status, response.statusText);
        const errorData = await response.json();
        console.error("Server error data:", errorData);
        throw new Error(errorData.message || "Failed to upload document.");
      }
  
      toast.success(`Document uploaded successfully with Reference ID: ${referenceId}`);
  
      // Clear form fields
      setIncomeProofDocFile(null);
      setIncomeProofDocFileType("");
      setAddressProofDocFile(null);
      setAddressProofDocFileType("");
      setNidName("");
      setNidAddress("");
      setNidFatherName("");
      setNidMotherName("");
      setNidSpouseName("");
      setCustomerProvidedName("");
      setCustomerProvidedAddress("");
    } catch (error: any) {
      toast.error(error.message || "Failed to upload document.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Document</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="incomeProofDocFile"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Income Proof Document (PDF)
          </label>
          <input
            type="file"
            id="incomeProofDocFile"
            accept=".pdf"
            onChange={(e) =>
              setIncomeProofDocFile(e.target.files ? e.target.files[0] : null)
            }
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
            required
          />
        </div>
        <SelectField
          name="incomeProofDocFileType"
          label="Income Proof Document Type"
          id="incomeProofDocFileType"
          items={incomeProofDocFileTypes}
          value={incomeProofDocFileType}
          onChange={(value) => setIncomeProofDocFileType(value)}
          required
        />
        <div>
          <label
            htmlFor="addressProofDocFile"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Address Proof Document (Image)
          </label>
          <input
            type="file"
            id="addressProofDocFile"
            accept="image/*"
            onChange={(e) =>
              setAddressProofDocFile(e.target.files ? e.target.files[0] : null)
            }
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
            required
          />
        </div>
        <SelectField
          name="addressProofDocFileType"
          label="Address Proof Document Type"
          id="addressProofDocFileType"
          items={addressProofDocFileTypes}
          value={addressProofDocFileType}
          onChange={(value) => setAddressProofDocFileType(value)}
          required
        />
        <InputField
          name="nidName"
          label="NID Name"
          id="nidName"
          type="text"
          value={nidName}
          onChange={(e) => setNidName(e.target.value)}
          required
        />
        <InputField
          name="nidAddress"
          label="NID Address"
          id="nidAddress"
          type="text"
          value={nidAddress}
          onChange={(e) => setNidAddress(e.target.value)}
          required
        />
        <InputField
          name="nidFatherName"
          label="NID Father's Name"
          id="nidFatherName"
          type="text"
          value={nidFatherName}
          onChange={(e) => setNidFatherName(e.target.value)}
          required
        />
        <InputField
          name="nidMotherName"
          label="NID Mother's Name"
          id="nidMotherName"
          type="text"
          value={nidMotherName}
          onChange={(e) => setNidMotherName(e.target.value)}
          required
        />
        <InputField
          name="nidSpouseName"
          label="NID Spouse's Name"
          id="nidSpouseName"
          type="text"
          value={nidSpouseName}
          onChange={(e) => setNidSpouseName(e.target.value)}
          required
        />
        <InputField
          name="customerProvidedName"
          label="Customer Provided Name"
          id="customerProvidedName"
          type="text"
          value={customerProvidedName}
          onChange={(e) => setCustomerProvidedName(e.target.value)}
          required
        />
        <InputField
          name="customerProvidedAddress"
          label="Customer Provided Address"
          id="customerProvidedAddress"
          type="text"
          value={customerProvidedAddress}
          onChange={(e) => setCustomerProvidedAddress(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 rounded text-white font-semibold ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Uploading..." : "Upload Document"}
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
