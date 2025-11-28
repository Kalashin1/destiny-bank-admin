import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase-settings";
import type { Balance, Beneficiary, Transaction } from "../types";

export const getBalance = async () => {
  const docRef = await getDoc(doc(db, "balance", "qE6pFM6ppChqn6Gk3TqM"));
  if (docRef.exists()) {
    const data = docRef.data() as Balance;
    return data;
  } else {
    return null;
  }
};

export const updateBalance = async ({
  balance,
  income,
  savings
}: Pick<Balance, 'balance' | 'income' | 'savings'>) => {
  const docRef = doc(db, "balance", "qE6pFM6ppChqn6Gk3TqM");
  await updateDoc(docRef, {
    balance,
    income,
    savings,
  });
}

export const GetTransactions = async () => {
  const q = query(
    collection(db, "transactions"),
    orderBy("timestamp", "desc"), // or 'asc' for ascending
    limit(5)
  );

  const docRefs = await getDocs(q);
  const transactions: Transaction[] = [];
  docRefs.docs.map((doc) => {
    if (doc.exists()) {
      const transaction = doc.data() as Transaction;
      transaction.id = doc.id;
      transactions.push(transaction);
    }
  });
  return transactions;
};

export const AddTransaction = async ({
  amount,
  beneficiary,
}: Partial<Transaction>) => {
  const docRef = await addDoc(collection(db, "transactions"), {
    timestamp: new Date().getTime(),
    amount,
    beneficiary,
  });
  return docRef.id;
};

export const AddBeneficiary = async (beneficiary: Beneficiary) => {
  const docRef = await addDoc(collection(db, "beneficiaries"), beneficiary);
  return docRef.id;
};

export const GetBeneficiaries = async () => {
  const q = query(
    collection(db, "beneficiaries"),
    orderBy("name", "desc"), // or 'asc' for ascending
    limit(10)
  );

  const docRefs = await getDocs(q);
  const beneficiaries: Beneficiary[] = [];
  docRefs.docs.map((doc) => {
    if (doc.exists()) {
      const beneficiary = doc.data() as Beneficiary;
      beneficiaries.push(beneficiary);
    }
  });
  return beneficiaries;
};
