import { useState, useEffect } from "react";
import type { Balance } from "../../../types";
import { getBalance } from "../../helper";
import AccountSummary from "../components/accont-summary";
import Layout from "../layout";
import ProfileCard from "./components/profile-card";
// import SubMenu from "./components/sub-menu";

const Profile = () => {
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
      <div className="col-span-12">
        <div className="grid grid-cols-2 gap-4 my-4 sm:grid-cols-4 sm:gap-5 lg:gap-6">
          {balances && <AccountSummary balances={balances} />}
        </div>
        <ProfileCard />
      </div>
    </Layout>
  );
};

export default Profile;
