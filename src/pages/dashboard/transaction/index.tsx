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

const TransactionPage = () => {
  const [balances, setBalance] = useState<Balance | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [lastVisible, setLastVisible] =
    useState<DocumentSnapshot<DocumentData> | null>(null);

  useEffect(() => {
    const set_up = async () => {
      const data = await getBalance();

      if (data) {
        setBalance(data);
      }
    };

    set_up();
  }, []);

  const handlePageClick = async (pageNum: number) => {
    try {
      if (pageNum === 1) {
        // First page - no lastVisible needed
        const result = await GetTransactionsWithPagination(5, null);
        setTransactions(result.transactions);
        setLastVisible(result.lastVisible);
      } else {
        // @ts-ignore
        const result = await GetTransactionsWithPagination(5, lastVisible);
        setTransactions(result.transactions);
        setLastVisible(result.lastVisible);
      }
    } catch (error) {
      console.error("Error loading page:", error);
    }
  };

  useEffect(() => {
    const set_up = async () => {
      // @ts-ignore
      const trxs = await GetTransactions(20, lastVisible);
      setTransactions(trxs);
    };

    set_up();
  }, [lastVisible]);

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
