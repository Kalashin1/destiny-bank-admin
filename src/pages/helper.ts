import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  Query,
  query,
  QueryDocumentSnapshot,
  setDoc,
  startAfter,
  updateDoc,
  type DocumentData,
} from "firebase/firestore";
import { db } from "../firebase-settings";
import type { Balance, Beneficiary, Transaction, User } from "../types";

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
  savings,
  expenses,
}: Pick<Balance, "balance" | "income" | "savings" | "expenses">) => {
  const docRef = doc(db, "balance", "qE6pFM6ppChqn6Gk3TqM");
  await updateDoc(docRef, {
    balance,
    income,
    savings,
    expenses,
  });
};

export const lockAccount = async () => {
  const docRef = doc(db, "balance", "qE6pFM6ppChqn6Gk3TqM");
  await updateDoc(docRef, {
    isLocked: true,
  });
};

export const getUserById = async (user_id: string) => {
  const ref = doc(db, "users", user_id);
  const docRef = await getDoc(ref);
  if (docRef.exists()) {
    const user = docRef.data() as User;
    user.id = docRef.id;
    return user;
  } else {
    return null;
  }
};

export const createUser = async (
  user_id: string,
  userParam: Partial<User>
) => {
  await setDoc(doc(db, "users", user_id), {
    ...userParam,
  });
};

export const updateUser = async (
  user_id: string,
  userParam: Partial<User>
) => {
  await updateDoc(doc(db, "users", user_id), {
    ...userParam
  })
}

export const unLockAccount = async () => {
  const docRef = doc(db, "balance", "qE6pFM6ppChqn6Gk3TqM");
  await updateDoc(docRef, {
    isLocked: false,
  });
};

export const isLocked = async () => {
  const data = await getBalance();
  if (data) {
    return data.isLocked;
  } else return false;
};

export const GetTransactions = async (
  dataLimit = 5,
  lastVisibleDoc: QueryDocumentSnapshot<Transaction> | null = null
) => {
  let q: Query<DocumentData, DocumentData>;
  if (lastVisibleDoc) {
    q = query(
      collection(db, "transactions"),
      orderBy("timestamp", "desc"),
      startAfter(lastVisibleDoc),
      limit(dataLimit)
    );
  } else
    q = query(
      collection(db, "transactions"),
      orderBy("timestamp", "desc"), // or 'asc' for ascending
      limit(dataLimit)
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

export const GetTransactionsWithPagination = async (
  dataLimit = 5,
  lastVisible: QueryDocumentSnapshot<Transaction> | null = null
) => {
  const transactions = await GetTransactions(dataLimit, lastVisible);
  const querySnapshot = await getDocs(
    query(
      collection(db, "transactions"),
      orderBy("timestamp", "desc"),
      limit(1)
    )
  );

  return {
    transactions,
    lastVisible: querySnapshot.docs[querySnapshot.docs.length - 1] || null,
  };
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
