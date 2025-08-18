import { useState } from "react";
import { toast } from "sonner";
import { uploadDocument } from "@/services/uploadService";
import { useRouter } from "next/navigation";

export interface FormState {
  incomeProofDocFile: File | null;
  incomeProofDocFileType: string;
  addressProofDocFile: File | null;
  addressProofDocFileType: string;
  nidName: string;
  nidAddress: string;
  nidFatherName: string;
  nidMotherName: string;
  nidSpouseName: string;
  customerProvidedName: string;
  customerProvidedAddress: string;
}

const initialFormState: FormState = {
  incomeProofDocFile: null,
  incomeProofDocFileType: "",
  addressProofDocFile: null,
  addressProofDocFileType: "",
  nidName: "",
  nidAddress: "",
  nidFatherName: "",
  nidMotherName: "",
  nidSpouseName: "",
  customerProvidedName: "",
  customerProvidedAddress: "",
};

export const useUploadForm = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (field: keyof FormState, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = (data: FormState): boolean => {
    const requiredFields: Array<keyof FormState> = [
      "incomeProofDocFile",
      "incomeProofDocFileType",
      "addressProofDocFile",
      "addressProofDocFileType",
      "nidName",
      "nidAddress",
      "nidFatherName",
      "nidMotherName",
      "nidSpouseName",
      "customerProvidedName",
      "customerProvidedAddress",
    ];

    for (const field of requiredFields) {
      if (!data[field]) {
        toast.error("Please fill in all required fields and upload both files.");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm(formData)) {
      setLoading(false);
      return;
    }

    try {
      const referenceId = await uploadDocument(formData);
      toast.success(`Document uploaded successfully with Reference ID: ${referenceId}`);
      setFormData(initialFormState); // Clear form fields
      router.push(`/document?refId=${referenceId}`);
    } catch (error: any) {
      toast.error(error.message || "Failed to upload document.");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    handleChange,
    handleSubmit,
  };
};
