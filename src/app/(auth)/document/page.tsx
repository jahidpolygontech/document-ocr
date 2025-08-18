"use client";

import { useState } from "react";
import axios from "axios";

interface TableProps {
  title: string;
  data: Record<string, any>;
}

const InfoTable: React.FC<TableProps> = ({ title, data }) => {
  if (!data) return null;

  return (
    <div className="mt-6 overflow-x-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
      <table className="min-w-full border border-gray-300 rounded-lg shadow-sm divide-y divide-gray-200 text-sm">
        <tbody>
          {Object.entries(data).map(([key, value], index) => (
            <tr
              key={key}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100 transition-colors`}
            >
              <td className="border px-4 py-3 font-medium w-1/3 text-gray-700">
                {key
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </td>
              <td className="border px-4 py-3 whitespace-pre-wrap break-words text-gray-800">
                {typeof value === "boolean"
                  ? value
                    ? "Yes"
                    : "No"
                  : value || "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Loader = () => (
  <div className="flex justify-center items-center mt-6">
    <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

const DocumentPage = () => {
  const [documentId, setDocumentId] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!documentId) return;

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/documents/${documentId}`,
        { headers: { "X-API-KEY": "PolygonAI12" } }
      );
      setData(response.data.data);
    } catch (err) {
      setError("No document found for this ID. Please check and try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 border rounded-2xl shadow-lg mt-6 bg-white font-sans">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
        <input
          type="text"
          value={documentId}
          onChange={(e) => setDocumentId(e.target.value)}
          placeholder="Enter Document ID"
          className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400 "
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-4 rounded-md text-white font-semibold text-sm transition-all ${
            loading
              ? "bg-gray-400 cursor-not-allowed w-52"
              : "bg-cyan-600 hover:bg-cyan-700 w-52"
          }`}
        >
          {loading ? "Fetching..." : "Fetch Document"}
        </button>
      </form>

      {loading && <Loader />}

      {error && <p className="text-red-500 mt-4 font-medium">{error}</p>}

      {data && (
        <div className="mt-8">
          <InfoTable
            title="Document Information"
            data={{
              ID: data.id,
              "Reference ID": data.reference_id,
              "NID Name": data.nid_name,
              "NID Address": data.nid_address,
              "Father's Name": data.nid_father_name,
              "Mother's Name": data.nid_mother_name,
              "Spouse Name": data.nid_spouse_name,
              "Income Proof Type": data.income_proof_doc_file_type,
              "Address Proof Type": data.address_proof_doc_file_type,
              Status: `Income Proof: ${data.income_proof_doc_verification_status}, Address Proof: ${data.address_proof_doc_verification_status}, CPV: ${data.cpv_status}`,
              "Processing Time": data.processing_time
                ? `${data.processing_time} sec`
                : "N/A",
              Comments: data.comments || "N/A",
            }}
          />

          <InfoTable
            title="Income Proof Details"
            data={data.income_proof_doc_file_response}
          />

          <InfoTable
            title="Address Proof Details"
            data={data.address_proof_doc_file_response}
          />
        </div>
      )}
    </div>
  );
};

export default DocumentPage;
