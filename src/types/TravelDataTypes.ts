export interface TravelServiceProps {
  travelData: TravelServiceData;
}

export interface TravelServiceData {
  id: number;
  serviceCategoryName: string;
  serviceCategoryLogo: string | null;
  vdbServices: TravelService[];
}

export interface TravelService {
  id: number;
  serviceName: string;
  openType: "new_tab" | "iframe";
  serviceUrl: string;
  serviceImage: string | null;
  serviceVisibility: "0" | "1";
  serviceOpenType: "SIMPLE_MICROSITE" | "SSO_LOGIN" | "API_INTEGRATION";
  master_email?: string;
  master_password?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  gender?: string;
  address?: string;
  type?: string;
  commission_type?: string;
  payment_term?: string;
  commission_amount?: number;
}
