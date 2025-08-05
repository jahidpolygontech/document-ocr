"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TravelServiceProps } from "@/types/TravelDataTypes";
import Card from "@/components/cards/card";
import NoData from "@/components/nodata/NoDataMesage";
import Loading from "@/components/loader/Loader";
import { LandProps } from "@/types/LandTypes";

const Landservicecards = ({ landData: { vdbServices } }: LandProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
  
    const handleCardClick = async (cardId: number,getIframeUrl: () => Promise<string | null>) => {
      setIsLoading(true);
      const url = await getIframeUrl();
      if (url) {
        sessionStorage.setItem(`iframeUrl_${cardId}`, url);
        router.push(`/land-services/${cardId}`);
      } else {
        setIsLoading(false);
      }
    };


  if (isLoading) return <Loading message="Loading service..." />;

  if (!vdbServices?.length)
    return <NoData message="No Land services available at the moment." />;

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
                  basePath="/travel-services"
                  onCardClick={handleCardClick}
                />
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default Landservicecards;
