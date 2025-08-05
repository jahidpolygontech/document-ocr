
"use client";
import { useEffect, useState } from "react";

const ClientIframeWrapper = ({id,fallbackUrl}: {id: string;fallbackUrl: string | null;}) => {
  const [iframeUrl, setIframeUrl] = useState<string | null>(fallbackUrl);

  useEffect(() => {
    if (id) {
      const storedUrl = sessionStorage.getItem(`iframeUrl_${id}`);
      if (storedUrl) {
        setIframeUrl(storedUrl);
      }
    }
  }, [id]);

  if (!iframeUrl) {
    return (
      <div className="flex justify-center py-12">
        <p className="text-lg text-gray-500">No service found.</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full h-screen bg-white rounded-2xl shadow-lg">
        <iframe
          src={iframeUrl}
          className="w-full h-full border-none"
          title={`Service ${id}`}
        />
      </div>
    </div>
  );
};

export default ClientIframeWrapper;