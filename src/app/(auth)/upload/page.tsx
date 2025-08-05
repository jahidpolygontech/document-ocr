'use client';

import { useState } from 'react';
import PrimaryBtn from '@/components/buttons/PrimaryBtn';
import InputField from '@/components/forms/InputField';

const UploadPage = () => {
  const [documentName, setDocumentName] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!documentName || !documentNumber || !pdfFile || !imageFile) {
      // Toaster.error('Please fill in all fields and upload both files.');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('documentName', documentName);
    formData.append('documentNumber', documentNumber);
    formData.append('pdfFile', pdfFile);
    formData.append('imageFile', imageFile);

    try {
      const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3001'; // Fallback for development
      const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

      const response = await fetch(`${API_BASE_URL}/api/v1/verify-document`, {
        method: 'POST',
        headers: {
          'X-API-KEY': API_KEY,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to upload document.');
      }

      // Toaster.success('Document uploaded successfully!');
      // Clear form
      setDocumentName('');
      setDocumentNumber('');
      setPdfFile(null);
      setImageFile(null);
    } catch (error: any) {
      // Toaster.error(error.message || 'Failed to upload document.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Document</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* <InputField
          label="Document Name"
          id="documentName"
          type="text"
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
          required
        />
        <InputField
          label="Document Number"
          id="documentNumber"
          type="text"
          value={documentNumber}
          onChange={(e) => setDocumentNumber(e.target.value)}
          required
        /> */}
        <div>
          <label htmlFor="pdfFile" className="block text-sm font-medium text-gray-700">
            Upload PDF
          </label>
          <input
            type="file"
            id="pdfFile"
            accept=".pdf"
            onChange={(e) => setPdfFile(e.target.files ? e.target.files[0] : null)}
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
            required
          />
        </div>
        <div>
          <label htmlFor="imageFile" className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            id="imageFile"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)}
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
            required
          />
        </div>
        {/* <PrimaryBtn type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload Document'}
        </PrimaryBtn> */}
      </form>
    </div>
  );
};

export default UploadPage;