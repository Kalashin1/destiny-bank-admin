import { useEffect, useState } from "react";
import type { Balance } from "../../../types";
import TransactionTable from "../components/transaction-table";
import Layout from "../layout";
import { getBalance } from "../../helper";
import AccountSummary from "../components/accont-summary";

const TransactionPage = () => {
  const [balances, setBalance] = useState<Balance | null>(null);
  useEffect(() => {
    const set_up = async () => {
      const data = await getBalance();

      if (data) {
        setBalance(data);
      }
    };

    set_up();
  }, []);
  return (
    <Layout>
      <div className="col-span-12 w-full">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:gap-6 my-4">
          {balances && <AccountSummary balances={balances} />}
        </div>
        <div className="my-4">
          <TransactionTable />
        </div>
      </div>
    </Layout>
  );
};

export default TransactionPage;
