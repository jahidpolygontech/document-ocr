export interface GovernmentServiceProps {
    governmentServiceData: GovernmentServiceData;
}
  
  export interface GovernmentServiceData {
    id: number;
    serviceCategoryName: string;
    serviceCategoryLogo: string | null;
    vdbServices: GovernmentService[];
  }
  
  export interface GovernmentService {
    id: number;
    serviceName: string;
    openType: 'new_tab' | 'iframe';
    serviceUrl: string;
    serviceImage: string | null;
    serviceVisibility: "0" | "1";
    serviceOpenType: "SIMPLE_MICROSITE" | "SSO_LOGIN" | "API_INTEGRATION";
  }
  