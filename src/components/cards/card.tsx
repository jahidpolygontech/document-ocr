"use client";

import Image from "next/image";
import Link from "next/link";
import { getOpenType } from "@/utils/ServiceOpenUtils";
import { CardProps } from "@/types/CardData";
import { getIframeUrl } from "@/services/SSOService";
import { getLoggedUser } from "@/services/LoggedUserClient";
import { recordServiceClick } from "@/app/(auth)/actions/ServiceClickAction";

export default function Card({
  id,
  name,
  image,
  url,
  basePath,
  serviceOpenType,
  serviceVisibility,
  openType, 
  onCardClick,
}: CardProps) {
  if (serviceVisibility !== "1") return null;

  const actualOpenType = openType || getOpenType(serviceOpenType);
  const shouldOpenInNewTab = actualOpenType === "new_tab";
  const shouldOpenInIframe = actualOpenType === "iframe";


  const href = shouldOpenInNewTab ? url : `${basePath}/${id}`;
  const imageUrl = `https://images.weserv.nl/?url=${image}`;

  const handleClick = async () => {
    const loggedUser = getLoggedUser();
    if (loggedUser?.id) {
      await recordServiceClick(id, loggedUser.id);
    }

    if (serviceOpenType === "SSO_LOGIN" && id === 14) {
      onCardClick(id, getIframeUrl);
    } else if (shouldOpenInIframe) {
      // For iframe opens, navigate to the detail page
      onCardClick(id, () => Promise.resolve(url));
    }
  };

  const CardContent = (
    <div
      onClick={handleClick}
      className="relative group bg-white rounded-2xl p-4 shadow transition hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    >
      <div className="flex items-center justify-center rounded-md h-36 mb-4 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={120}
          height={100}
          className="object-contain max-h-[100px]"
          unoptimized
        />
      </div>
      <p className="text-center text-sm font-medium text-gray-800">{name}</p>
    </div>
  );

  return shouldOpenInNewTab ? (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
}
