"use client";
import { WalletCardsProps } from "@/types/WalletsDataTypes";
import { useState } from "react";
import Loading from "@/components/loader/Loader";
import NoData from "@/components/nodata/NoDataMesage";
import Card from "@/components/cards/card";
import { useRouter } from "next/navigation";


const WalletCards = ({ walletsData:{vdbServices} }: WalletCardsProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleCardClick = async (cardId: number,getIframeUrl: () => Promise<string | null>) => {
      setIsLoading(true);
      const url = await getIframeUrl();
      if (url) {
        sessionStorage.setItem(`iframeUrl_${cardId}`, url);
        router.push(`/wallets/${cardId}`);
      } else {
        setIsLoading(false);
      }
    };
    
  
    if (isLoading) return <Loading message="Loading service..." />;
  
    if (!vdbServices?.length)
      return <NoData message="No Wallet services available at the moment." />;

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
                   serviceOpenType={serviceOpenType}
                   serviceVisibility={serviceVisibility}
                   openType={openType} 
                   basePath="/wallets"
                   onCardClick={handleCardClick}
                 />
               </div>
             );
           })}
         </div>
       </div>
  );
};

export default WalletCards;
