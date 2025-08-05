"use client";
import { UtilitiesProps } from "@/types/UtilitiesDatatTypes";
import Card from "@/components/cards/card";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/loader/Loader";
import NoData from "@/components/nodata/NoDataMesage";

const Utilitiescards = ({ utilitiesData: { vdbServices } }: UtilitiesProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCardClick = async (cardId: number,getIframeUrl: () => Promise<string | null>) => {
    setIsLoading(true);
    const url = await getIframeUrl();
    if (url) {
      sessionStorage.setItem(`iframeUrl_${cardId}`, url);
      router.push(`/utilities/${cardId}`);
    } else {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Loading message="Loading service..." />;

  if (!vdbServices?.length)
    return <NoData message="No Utilities services available at the moment." />;

  return (
    <div className="py-12 px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {vdbServices.map((card) => {
          const {
            id,
            serviceName,
            serviceImage,
            serviceUrl,
            serviceOpenType,
            openType,
            serviceVisibility,
          } = card;

          return (
            <div key={id}>
              <Card
                key={id}
                id={id}
                name={serviceName}
                image={serviceImage as string}
                url={serviceUrl}
                openType={openType}
                serviceOpenType={serviceOpenType}
                serviceVisibility={serviceVisibility}
                basePath="/utilities"
                onCardClick={handleCardClick}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Utilitiescards;
