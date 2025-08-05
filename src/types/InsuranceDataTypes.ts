export interface InsuranceProps {
    insuranceData: InsuranceData;
}
  
  export interface InsuranceData {
    id: number;
    serviceCategoryName: string;
    serviceCategoryLogo: string | null;
    vdbServices: InsuranceService[];
  }
  
  export interface InsuranceService {
    id: number;
    serviceName: string;
    openType: 'new_tab' | 'iframe';
    serviceUrl: string;
    serviceImage: string | null;
    serviceOpenType: "SIMPLE_MICROSITE" | "SSO_LOGIN" | "API_INTEGRATION";
    serviceVisibility: "0" | "1";
  }
  