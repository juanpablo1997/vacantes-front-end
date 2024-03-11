import css from "../createOffer/CreateOffer.module.css";

import PostOfferForm from "../../components/integrated/postOfferForm/PostOfferForm";

const Createoffer = () => {
  return (
    <div className={css.container}>
      <PostOfferForm />
    </div>
  );
};

export default Createoffer;
