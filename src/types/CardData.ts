import { ServiceOpenType } from "./ServiceOpenType";

export type CardProps = {
  id: number;
  name: string;
  image: string;
  url: string;
  basePath: string;
  openType: string;
  serviceOpenType: ServiceOpenType;
  serviceVisibility: string;
  onCardClick: (cardId: number, getIframeUrl: () => Promise<string | null>) => void;
};