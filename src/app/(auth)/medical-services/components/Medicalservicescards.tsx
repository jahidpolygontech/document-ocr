"use client";
import { MedicalProps } from "@/types/MedicalDataTypes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "@/components/loader/Loader";
import NoData from "@/components/nodata/NoDataMesage";
import Card from "@/components/cards/card";

const Medicalservicescards = ({ medicalData : { vdbServices }}: MedicalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCardClick = async (cardId: number,getIframeUrl: () => Promise<string | null>) => {
    setIsLoading(true);
    const url = await getIframeUrl();
    if (url) {
      sessionStorage.setItem(`iframeUrl_${cardId}`, url);
      router.push(`/medical-services/${cardId}`);
    } else {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Loading message="Loading service..." />;

  if (!vdbServices?.length)
    return <NoData message="No Medical services available at the moment." />;

  return (
     <div className="py-12 px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {vdbServices.map((card) => {
            const {
              id,
              serviceName,
              serviceImage,
              serviceUrl,
              openType,
              serviceOpenType,
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
                  basePath="/medical-services"
                  onCardClick={handleCardClick}
                />
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default Medicalservicescards;
