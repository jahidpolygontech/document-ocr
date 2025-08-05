export interface WalletCardsProps {
    walletsData: WalletData;
}
  
  export interface WalletData {
    id: number;
    serviceCategoryName: string;
    serviceCategoryLogo: string | null;
    vdbServices: WalletService[];
  }
  
  export interface WalletService {
    id: number;
    serviceName: string;
    openType: 'new_tab' | 'iframe';
    serviceUrl: string;
    serviceImage: string | null;
    serviceOpenType: "SIMPLE_MICROSITE" | "SSO_LOGIN" | "API_INTEGRATION";
    serviceVisibility: "0" | "1";
  }
  