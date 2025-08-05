export interface TransactionProps {
    transactionData: TransactionData;
}
  
  export interface TransactionData {
    id: number;
    serviceCategoryName: string;
    serviceCategoryLogo: string | null;
    vdbServices: TransactionService[];
  }
  
  export interface TransactionService {
    id: number;
    serviceName: string;
    openType: 'new_tab' | 'iframe';
    serviceUrl: string;
    serviceImage: string | null;
  }
  