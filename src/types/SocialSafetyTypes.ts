export interface SocialProps {
    socialData: SocialData;
}
  
  export interface SocialData {
    id: number;
    serviceCategoryName: string;
    serviceCategoryLogo: string | null;
    vdbServices: SocialSafetyService[];
  }
  
  export interface SocialSafetyService {
    id: number;
    serviceName: string;
    openType: 'new_tab' | 'iframe';
    serviceUrl: string;
    serviceImage: string | null;
    serviceVisibility: "0" | "1";
     serviceOpenType: "SIMPLE_MICROSITE" | "SSO_LOGIN" | "API_INTEGRATION";
  }
  