import { v4 as uuidv4 } from "uuid";

interface UploadDocumentData {
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

export const uploadDocument = async (data: UploadDocumentData): Promise<string> => {
  const referenceId = uuidv4();
  const formPayload = new FormData();
  formPayload.append("reference_id", referenceId);
  formPayload.append("income_proof_doc_file", data.incomeProofDocFile as File);
  formPayload.append("income_proof_doc_file_type", data.incomeProofDocFileType);
  formPayload.append("address_proof_doc_file", data.addressProofDocFile as File);
  formPayload.append("address_proof_doc_file_type", data.addressProofDocFileType);
  formPayload.append("nid_name", data.nidName);
  formPayload.append("nid_address", data.nidAddress);
  formPayload.append("nid_father_name", data.nidFatherName);
  formPayload.append("nid_mother_name", data.nidMotherName);
  formPayload.append("nid_spouse_name", data.nidSpouseName);
  formPayload.append("customer_provided_name", data.customerProvidedName);
  formPayload.append("customer_provided_address", data.customerProvidedAddress);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  if (!API_BASE_URL || !API_KEY) {
    throw new Error("API_BASE_URL or API_KEY is not defined in environment variables.");
  }

  const response = await fetch(`${API_BASE_URL}/api/v1/verify-document`, {
    method: "POST",
    headers: {
      "X-API-KEY": API_KEY,
    },
    body: formPayload,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to upload document.");
  }

  return referenceId;
};
