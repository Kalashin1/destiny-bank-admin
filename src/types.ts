export type Balance = {
  balance: number;
  expenses: number;
  income: number;
  savings: number;
  isLocked: boolean;
};

export type User = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  currency: string;
  province: string;
}

export const TRANSACTION_STATUS = ["PENDING", "COMPLETED", "REVERSED", "REJECTED"] as const

export type Transaction = {
  id: string;
  user_id: string;
  timestamp: number;
  status: typeof TRANSACTION_STATUS[number]
  amount: number;
  beneficiary: Beneficiary
};

export type Beneficiary = {
  name: string;
  accountNumber: string;
  bank: string;
};
