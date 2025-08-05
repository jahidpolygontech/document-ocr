"use client";

import Card from "@/components/cards/card";
import { BankCardsProps } from "@/types/BankDatatTypes";
import { useRouter } from "next/navigation";

const BankCards = ({ banksData: { vdbServices } }: BankCardsProps) => {
  const router = useRouter();

  const handleCardClick = (cardId: number, url: string) => {
    sessionStorage.setItem(`iframeUrl_${cardId}`,url);
    router.push(`/banks/service/${cardId}`);
  };

  if (!vdbServices?.length) {
    return <p>No services available for this bank.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {vdbServices.map((service) => (
        <Card
          key={service.id}
          id={service.id}
          name={service.serviceName}
          image={service.serviceImage || ""}
          url={service.serviceUrl}
          openType={service.openType}
          serviceOpenType={service.serviceOpenType}
          serviceVisibility={service.serviceVisibility}
          basePath="/banks"
          onCardClick={() => handleCardClick(service.id, service.serviceUrl)}
        />
      ))}
    </div>
  );
};

export default BankCards;
