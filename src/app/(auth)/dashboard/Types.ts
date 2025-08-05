export interface Stat {
  customerCount: number,
    bookPuchaseCount: number,
    bookPuchaseAmount: number,
    customerTicketWallet: number, 
    customerCoinWallet: number


}

export interface AcqisitionOnDate {
  date: string;
  users: number;
}

export interface Acqisition {
  data: AcqisitionOnDate[];
}

export interface AccountVolume {
  name: string;
  volume: number;
}

export type TopAccounts = AccountVolume[];

export interface TransactionOnDate {
  date: string;
  count: number;
  volume: number;
}

export interface TransactionResponse {
  data: TransactionOnDate[];
}


export interface RevenueOnDate {
  date: string;
  income: number;
  expense: number;
}

export interface RevenueResponse {
  incomeExpenseData: RevenueOnDate[];
}


export interface TransactionTypeVolume {
  name: string;
  value: number;
}


export interface CustomerTransactionResponse {
  transactionvolume: TransactionTypeVolume[];
}


export interface MerchantTransactionResponse {
  transactionvolume: TransactionTypeVolume[];
}
