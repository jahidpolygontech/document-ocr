export interface MedicalProps {
    medicalData: MedicalData;
}
  
  export interface MedicalData {
    id: number;
    serviceCategoryName: string;
    serviceCategoryLogo: string | null;
    vdbServices: MedicalService[];
  }
  
  export interface MedicalService {
    id: number;
    serviceName: string;
    openType: 'new_tab' | 'iframe';
    serviceUrl: string;
    serviceImage: string | null;
    serviceVisibility: "0" | "1";
    serviceOpenType: "SIMPLE_MICROSITE" | "SSO_LOGIN" | "API_INTEGRATION";
  }
  