import { useState, useEffect } from "react";
import type { Balance } from "../../../types";
import { getBalance } from "../../helper";
import AccountSummary from "../components/accont-summary";
import Layout from "../layout";
import ProfileCard from "./components/profile-card";
import { auth } from "../../../firebase-settings";
import { useNavigate } from "react-router-dom";
import SCREENS from "../../../navigation/constants";
// import SubMenu from "./components/sub-menu";

const Profile = () => {
  const [balances, setBalance] = useState<Balance | null>(null);

  const currentUser = auth.currentUser;

  const navigate = useNavigate()

  useEffect(() => {
    const set_up = async () => {
      if (currentUser) {
        const data = await getBalance(currentUser.uid);
  
        if (data) {
          setBalance(data);
        }

      } else {
        navigate(SCREENS.LOGIN);
      }
    };

    set_up();
  }, [currentUser, navigate]);

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
