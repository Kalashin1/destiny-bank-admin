import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase-settings"
import type { Balance } from "../types";

export const getBalance= async () => {
  const docRef = await getDoc(doc(db, "balance", "qE6pFM6ppChqn6Gk3TqM"));
  if (docRef.exists()) {
    const data = docRef.data() as Balance;
    return data;
  } else {
    return null;
  }
}