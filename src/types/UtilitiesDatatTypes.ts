export interface UtilitiesProps {
    utilitiesData: UtilitiesData;
}
  
  export interface UtilitiesData {
    id: number;
    serviceCategoryName: string;
    serviceCategoryLogo: string | null;
    vdbServices: UtilitiesService[];
  }
  
  export interface UtilitiesService {
    id: number;
    serviceName: string;
    openType: 'new_tab' | 'iframe';
    serviceUrl: string;
    serviceImage: string | null;
    serviceVisibility:'0'| '1';
    serviceOpenType:'SIMPLE_MICROSITE' | 'SSO_LOGIN' | 'API_INTEGRATION';
  }
  