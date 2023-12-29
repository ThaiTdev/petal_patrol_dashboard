import Form from "./components/form";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./FormUpdateProfilUser.module.scss";
import { Link, useParams } from "react-router-dom";
import { usePreviousPageId } from "../../components/IdContext";

const FormUpdateProfilCustomer = () => {
  const { id } = useParams();
  const { previousPageId } = usePreviousPageId();

  const linkCheck = {
    profilChecked: true,
    accueilChecked: false,
    gestionChecked: false,
    messageChecked: false,
    id: id,
  };
  return (
    <div
      className={`d-flex flex-column justify-content-between align-items-center ${styles.CustomerHomePage}`}
    >
      <Header linkCheck={linkCheck} />
      <main className={`${styles.profilContainer} `}>
        <div
          className={`${styles.profilTitle}  d-flex flex-row justify-content-star align-items-center mb-20 mr-10 `}
        >
          <Link
            to={`/ShowAllUsers/${previousPageId ? previousPageId : id}`}
            style={{ textDecoration: "none" }}
          >
            <i
              className={`fa-solid fa-arrow-left fz-20  ${styles.ProArrow}`}
            ></i>
          </Link>
          <p className="fz-20 ml-10">Retour au tableau d'utlisateurs</p>
        </div>
        <div className={` d-flex flex-row ${styles.boxProfilText}`}>
          <Form />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FormUpdateProfilCustomer;
