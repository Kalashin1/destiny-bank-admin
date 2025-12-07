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
  where,
  type DocumentData,
} from "firebase/firestore";
import { db } from "../firebase-settings";
import type { Balance, Beneficiary, INotifcation, Transaction, User } from "../types";

export const getUsers = async () => {
  const q = query(
    collection(db, "users"), // or 'asc' for ascending
  );
  const docRefs = await getDocs(q);
  const users:User[] = []
  docRefs.docs.map((doc) => {
    if (doc.exists()) {
      const user = doc.data() as User;
      user.id = doc.id;
      users.push(user);
    }
  });
  return users;
}

export const getBalance = async (user_id: string) => {
  const docRef = await getDoc(doc(db, "balance", user_id));
  if (docRef.exists()) {
    const data = docRef.data() as Balance;
    return data;
  } else {
    return null;
  }
};

export const createBalance = async (user_id: string) => {
  await setDoc(doc(db, "balance", user_id), {
    balance: 0,
    income: 0,
    savings: 0,
    expenses: 0,
  });
};

export const updateBalance = async (
  {
    balance,
    income,
    savings,
    expenses,
  }: Pick<Balance, "balance" | "income" | "savings" | "expenses">,
  user_id: string
) => {
  const docRef = doc(db, "balance", user_id);
  await updateDoc(docRef, {
    balance,
    income,
    savings,
    expenses,
  });
};

export const createNotification = async (notification: Partial<INotifcation>) => {
  await addDoc(collection(db, "notifications"), notification);
}

export const getUserNotification = async (user_id: string) => {
  const q = query(
    collection(db, "notifications"),
    where("user_id", "==",user_id),
    where("isRead", "==", "false"),
    orderBy("createdAt", "desc")
  )
  const docRefs = await getDocs(q);
  const notifications: INotifcation[] = [];
  docRefs.docs.map((doc) => {
    if (doc.exists()) {
      const notification = doc.data() as INotifcation;
      notification.id = doc.id;
      notifications.push(notification);
    }
  });
  return notifications;
}

export const markNotificationAsRead = async (id: string) => {
  await updateDoc(doc(db, "notifications", id), {
    isRead: true
  })
}

export const markAllNotificationsAsRead = async (ids: string[]) => {
  return Promise.all(ids.map((id) => markNotificationAsRead(id)));
}

export const lockAccount = async (user_id: string) => {
  const docRef = doc(db, "balance", user_id);
  await updateDoc(docRef, {
    isLocked: true,
  });
  await createNotification({
    content: "Your account is under restriction",
    createdAt: new Date().getTime(),
    type: "Account restricted",
    isRead: false,
    user_id: user_id
  })
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

export const createUser = async (user_id: string, userParam: Partial<User>) => {
  await setDoc(doc(db, "users", user_id), {
    ...userParam,
  });
};

export const updateUser = async (user_id: string, userParam: Partial<User>) => {
  await updateDoc(doc(db, "users", user_id), {
    ...userParam,
  });
   await createNotification({
     content: "Your Profile has been updated successfully",
     createdAt: new Date().getTime(),
     type: "Profile updated",
     isRead: false,
     user_id: user_id,
   });
};

export const unLockAccount = async (user_id: string) => {
  const docRef = doc(db, "balance", user_id);
  await updateDoc(docRef, {
    isLocked: false,
  });
};

export const isLocked = async (user_id: string) => {
  const data = await getBalance(user_id);
  if (data) {
    return data.isLocked;
  } else return false;
};

export const GetTransactions = async (
  user_id: string,
  dataLimit = 5,
  lastVisibleDoc: QueryDocumentSnapshot<Transaction> | null = null
) => {
  let q: Query<DocumentData, DocumentData>;
  if (lastVisibleDoc) {
    q = query(
      collection(db, "transactions"),
      where("user_id", "==", user_id),
      orderBy("timestamp", "desc"),
      startAfter(lastVisibleDoc),
      limit(dataLimit)
    );
  } else
    q = query(
      collection(db, "transactions"),
      where("user_id", "==", user_id),
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
  user_id: string,
  dataLimit = 5,
  lastVisible: QueryDocumentSnapshot<Transaction> | null = null
) => {
  const transactions = await GetTransactions(user_id, dataLimit, lastVisible);
  const querySnapshot = await getDocs(
    query(
      collection(db, "transactions"),
      where("user_id", "==", user_id),
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
}: Partial<Transaction>, user_id: string) => {
  const docRef = await addDoc(collection(db, "transactions"), {
    timestamp: new Date().getTime(),
    amount,
    beneficiary,
    user_id,
  });
   await createNotification({
     content: `Transaction to ${beneficiary?.accountNumber} in progress`,
     createdAt: new Date().getTime(),
     type: "Transaction created",
     isRead: false,
     user_id: user_id,
   });
  return docRef.id;
};

export const AddBeneficiary = async (beneficiary: Beneficiary) => {
  const docRef = await addDoc(collection(db, "beneficiaries"), {...beneficiary});
   await createNotification({
     content: `Beneficiary ${beneficiary.name} added successfully`,
     createdAt: new Date().getTime(),
     isRead: false,
     type: "Beneficiary added",
     user_id: beneficiary.user_id,
   });
  return docRef.id;
};

export const GetBeneficiaries = async (user_id: string) => {
  const q = query(
    collection(db, "beneficiaries"),
    where("user_id", "==", user_id),
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
