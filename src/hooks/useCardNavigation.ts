"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const useCardNavigation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCardClick = async (
    cardId: number,
    getIframeUrl: () => Promise<string | null>,
    basePath = "/travel-services"
  ) => {
    setIsLoading(true);
    try {
      const url = await getIframeUrl();
      if (url) {
        sessionStorage.setItem(`iframeUrl_${cardId}`, url);
        router.push(`${basePath}/${cardId}`);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return { isLoading, handleCardClick };
};

export default useCardNavigation;
