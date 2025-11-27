export type Balance = {
  balance: number;
  expenses: number;
  income: number;
  savings: number
}

export type Transaction = {
  id: string;
  timestamp: number;
  amount: number;
  beneficiary: {
    name: string;
    accountNumber: string;
    bank: string;
  }
}