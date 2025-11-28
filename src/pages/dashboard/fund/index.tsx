import Layout from "../layout";
import AddBalanceForm from "./components/add-balance-form";

const FundPage = () => {
  return (
    <Layout>
      <div className="col-span-12 w-full">
        <AddBalanceForm />
      </div>
    </Layout>
  );
}

export default FundPage;