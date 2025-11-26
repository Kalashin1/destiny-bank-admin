import AccountSummary from "./components/accont-summary";
import BeneficiaryTable from "./components/beneficiary-table";
import DashboardCard from "./components/dashboard-card";
import SendMoney from "./components/send-money";
import TransactionCard from "./components/transaction-card";
// import TransactionTable from "./components/transaction-table";
import Layout from "./layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="col-span-12 lg:order-last lg:col-span-4">
        <DashboardCard />
        <SendMoney />
      </div>
      <div className="col-span-12 lg:order-first lg:col-span-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:gap-6">
          <AccountSummary />
          <TransactionCard />
          <BeneficiaryTable />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
