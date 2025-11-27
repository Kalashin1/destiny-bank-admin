import { addDoc, collection, doc, getDoc, getDocs, limit, orderBy, query } from "firebase/firestore"
import { db } from "../firebase-settings"
import type { Balance, Transaction } from "../types";

export const getBalance= async () => {
  const docRef = await getDoc(doc(db, "balance", "qE6pFM6ppChqn6Gk3TqM"));
  if (docRef.exists()) {
    const data = docRef.data() as Balance;
    return data;
  } else {
    return null;
  }
}

export const getTransactions = async () => {
   const q = query(
     collection(db, "transactions"),
     orderBy("timestamp", "desc"), // or 'asc' for ascending
     limit(10)
   );

  const docRefs = await getDocs(q);
  const transactions: Transaction[] = []
  docRefs.docs.map((doc) => {
    if (doc.exists()) {
      const transaction = doc.data() as Transaction
      transaction.id = doc.id
      transactions.push(transaction);
    }
  })
  return transactions;
}

export const addTransaction = async ({
  amount,
  beneficiary,
}: Partial<Transaction>) => {
  const docRef = await addDoc(collection(db, 'transactions'), {
    timestamp: new Date().getTime(),
    amount,
    beneficiary
  })
  return docRef.id;
}