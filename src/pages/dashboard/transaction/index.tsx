/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import type { Balance, Transaction } from "../../../types";
import TransactionTable from "./components/transaction-table";
import Layout from "../layout";
import {
  getBalance,
  GetTransactions,
  GetTransactionsWithPagination,
} from "../../helper";
import AccountSummary from "../components/accont-summary";
import type { DocumentData, DocumentSnapshot } from "firebase/firestore";
import { auth } from "../../../firebase-settings";
import { useNavigate } from "react-router-dom";
import SCREENS from "../../../navigation/constants";

const TransactionPage = () => {
  const [balances, setBalance] = useState<Balance | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const currentUser = auth.currentUser;
  const navigate = useNavigate()

  const [lastVisible, setLastVisible] =
    useState<DocumentSnapshot<DocumentData> | null>(null);

  useEffect(() => {
    const set_up = async () => {
      if (currentUser) {
        const data = await getBalance(currentUser.uid);
  
        if (data) {
          setBalance(data);
        }
      } else navigate(SCREENS.LOGIN)
    };

    set_up();
  }, [currentUser, navigate]);

  const handlePageClick = async (pageNum: number) => {
    try {
      if (pageNum === 1) {
        // First page - no lastVisible needed
        if (currentUser) {
          const result = await GetTransactionsWithPagination(currentUser.uid, 5, null);
          setTransactions(result.transactions);
          setLastVisible(result.lastVisible);
        } else navigate(SCREENS.LOGIN)
      } else {
        if (currentUser) {
          const result = await GetTransactionsWithPagination(
            currentUser.uid, 
            5, 
            // @ts-ignore
            lastVisible
          );
          setTransactions(result.transactions);
          setLastVisible(result.lastVisible);
        }
      }
    } catch (error) {
      console.error("Error loading page:", error);
    }
  };

  useEffect(() => {
    const set_up = async () => {
      if (!currentUser) navigate(SCREENS.LOGIN);
      else {
        const trxs = await GetTransactions(
          currentUser.uid, 
          20, 
          // @ts-ignore
          lastVisible
        );
        setTransactions(trxs);
      }
    };

    set_up();
  }, [currentUser, lastVisible, navigate]);

  return (
    <Layout>
      <div className="col-span-12 w-full">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:gap-6 my-4">
          {balances && <AccountSummary balances={balances} />}
        </div>
        <div className="my-4">
          <TransactionTable
            transactions={transactions}
            handlePageClick={handlePageClick}
          />
        </div>
      </div>
    </Layout>
  );
};

export default TransactionPage;
