import { useState, useEffect } from "react";
import { type Balance, type Beneficiary, type Transaction } from "../../types";
import { getBalance, GetBeneficiaries, GetTransactions } from "../helper";
import AccountSummary from "./components/accont-summary";
import BeneficiaryTable from "./components/beneficiary-table";
import DashboardCard from "./components/dashboard-card";
import SendMoney from "./components/send-money";
import TransactionCard from "./components/transaction-card";
import Layout from "./layout";
import Modal from "./components/modal";
import AddBeneficiary from "./components/add-beneficiary-modal";
import { auth } from "../../firebase-settings";
import { useNavigate } from "react-router-dom";
import SCREENS from "../../navigation/constants";

const Dashboard = () => {
  const [balances, setBalance] = useState<Balance | null>(null);
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const currentUser = auth.currentUser;

  const fetchBeneficiary = async () => {
    const data = await GetBeneficiaries();
    setBeneficiaries(data);
  };

  const fetchTransactions = async () => {
    if (!currentUser) navigate(SCREENS.DASHBOARD);
    else {
      const data = await GetTransactions(currentUser.uid);
      setTransactions(data);
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    const set_up = async () => {
      if (!currentUser) navigate(SCREENS.LOGIN);
      const result = await GetBeneficiaries();
      setBeneficiaries(result);
    };

    set_up();
  }, [currentUser, navigate]);

  useEffect(() => {
    const set_up = async () => {
      if (!currentUser) navigate(SCREENS.LOGIN);
      else {
        const data = await getBalance(currentUser.uid!);

        if (data) {
          setBalance(data);
        }
      }
    };

    set_up();
  }, [currentUser, navigate]);

  useEffect(() => {
    const set_up = async () => {
      if (!currentUser) navigate(SCREENS.LOGIN);
      else {
        const data = await GetTransactions(currentUser.uid);
        setTransactions(data);
      }
    };

    set_up();
  }, [currentUser, navigate]);

  const [showModal, updateShowModal] = useState(false);

  const closeModal = () => {
    updateShowModal(false);
    fetchBeneficiary();
    fetchTransactions();
  };

  const showAddBeneficiaryModal = () => {
    updateShowModal(true);
  };

  return (
    <Layout>
      <div className="col-span-12 lg:order-last lg:col-span-4">
        {balances && <DashboardCard balance={balances?.balance} />}
        <SendMoney beneficiaries={beneficiaries} />
      </div>
      <div className="col-span-12 lg:order-first lg:col-span-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:gap-6">
          {balances && <AccountSummary balances={balances} />}
          <TransactionCard transactions={transactions} />
          {
            <BeneficiaryTable
              showAddBeneficiaryModal={showAddBeneficiaryModal}
              beneficiaries={beneficiaries}
            />
          }
        </div>
      </div>
      {showModal && (
        <Modal closeModal={closeModal}>
          <AddBeneficiary closeModal={closeModal} />
        </Modal>
      )}
    </Layout>
  );
};

export default Dashboard;
