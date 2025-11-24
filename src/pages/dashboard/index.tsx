import DashboardCard from "./components/dashboard-card";
import TransactionTable from "./components/transaction-table";
import Layout from "./layout";

const Dashboard = () => {
  return (
    <Layout>
      <DashboardCard />
      <TransactionTable />
    </Layout>
  );
};

export default Dashboard;
