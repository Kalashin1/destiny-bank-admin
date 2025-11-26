import Layout from "../layout";
import ProfileCard from "./components/profile-card";
import SubMenu from "./components/sub-menu";

const Profile = () => {
  return (
    <Layout>
      <div className="col-span-12 lg:col-span-4">
        <SubMenu />
      </div>
      <div className="col-span-12 lg:col-span-8">
        <ProfileCard />
      </div>
    </Layout>
  )
}

export default Profile;