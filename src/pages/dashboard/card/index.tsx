import Layout from "../layout";
import CardDetailForm from "./card-details-form";

const Card = () => {
  return (
    <Layout>
      <div className="col-span-12">
        <div className="flex items-center w-full">
          <CardDetailForm />
        </div>
      </div>
    </Layout>
  );
};

export default Card;
