"use client";

import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

interface TableProps {
  title: string;
  data: Record<string, any>;
}

const InfoTable: React.FC<TableProps> = ({ title, data }) => {
  if (!data) return null;

  // Exclude nested objects that will have their own tables
  const excludedFields = ["income_proof_doc_file_response", "address_proof_doc_file_response"];

  return (
    <div className="mt-6 overflow-x-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
      <table className="min-w-full border border-gray-300 rounded-lg shadow-sm divide-y divide-gray-200 text-sm">
        <tbody>
          {Object.entries(data)
            .filter(([key]) => !excludedFields.includes(key))
            .map(([key, value], index) => (
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
                    : Array.isArray(value)
                    ? value.join(", ")
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
    <div className="w-12 h-12 border-4 border-cyan-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

const DocumentFetcher = () => {
  const searchParams = useSearchParams();
  const refId = searchParams.get("refId");
  const [documentId, setDocumentId] = useState(refId || "");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDocument = async (id: string) => {
    if (!id) return;

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/documents/${id}`,
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

  useEffect(() => {
    if (refId) {
      fetchDocument(refId);
    }
  }, [refId]);

  return (
    <div className="container mx-auto p-6 border rounded-2xl shadow-lg mt-6 bg-white font-sans">
      <input
        type="text"
        value={documentId}
        onChange={(e) => setDocumentId(e.target.value)}
        placeholder="Enter Document ID"
        className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
        required
        disabled={!!refId}
      />

      {loading && <Loader />}

      {error && <p className="text-red-500 mt-4 font-medium">{error}</p>}

      {data && (
        // inof
        <div className="mt-8">
          <InfoTable title="Document Information" data={data} />
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

const DocumentPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <DocumentFetcher />
  </Suspense>
);

export default DocumentPage;
