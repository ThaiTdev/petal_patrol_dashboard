import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./pageAccueilDashboard.module.scss";
import { Link, useParams } from "react-router-dom";
//images//
import card from "../../../assets/images/monProfil/credit-card.png";
import facture from "../../../assets/images/monProfil/facture.png";
import identifications from "../../../assets/images/monProfil/identification.png";
import preference from "../../../assets/images/monProfil/preference.png";
import profil from "../../../assets/images/monProfil/profil.png";
import notif from "../../../assets/images/monProfil/notifications.png";
import arrowfrom from "../../../assets/images/monProfil/Arrow.png";
import { useNavigate } from "react-router-dom";

const PageAccueilDashboard = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const handleOnClick = () => {
    navigate(`/FormUpdateProfilUser/${id}`);
  };
  const handleOnClickGestionUser = () => {
    navigate(`/ShowAllUsers/${id}`);
  };
  const handleOnClickGestionBotanist = () => {
    navigate(`/ShowAllBotanists/${id}`);
  };

  const linkCheck = {
    profilChecked: false,
    accueilChecked: true,
    gestionChecked: false,
    messageChecked: false,
  };

  return (
    <div
      className={`d-flex flex-column justify-content-between ${styles.mainPage}`}
    >
      <Header linkCheck={linkCheck} />
      <main className={`d-flex flex-column ${styles.mainContainer}`}>
        <div
          className={`d-flex flex-column justify-content-center align-items-center  ${styles.profilContainer}`}
        >
          <div className={`${styles.title} mb-20`}>
            <h1>Accueil Dashboard</h1>
          </div>
          <div
            className={`d-flex flex-row justify-content-center align-items-center   ${styles.menu} `}
          >
            <div
              className={`d-flex flex-column justify-content-center align-items-center  ${styles.menuOption} `}
            >
              <div
                className={`d-flex flex-row justify-content-center align-items-center ${styles.menuChangePage}`}
              >
                <div className={`${styles.ChangePage} mr-10`}>
                  <div className={`${styles.definitionLink} mr-10`}>
                    <img src={profil} alt="profil" />
                    <p onClick={handleOnClick}>Modifier mon profil</p>
                  </div>
                  <div className={`${styles.Arrow}`}>
                    <img src={arrowfrom} alt="profil" />
                  </div>
                </div>
                <div className={`${styles.ChangePage}`}>
                  <div className={`${styles.definitionLink} mr-10`}>
                    <img src={identifications} alt="identifications" />
                    <p onClick={handleOnClickGestionUser}>
                      Gérer les Utilisateurs
                    </p>
                  </div>
                  <div className={`${styles.Arrow}`}>
                    <img src={arrowfrom} alt="profil" />
                  </div>
                </div>
              </div>
              <div
                className={`d-flex flex-row justify-content-center align-items-center ${styles.menuChangePage}`}
              >
                <div className={`${styles.ChangePage} mr-10`}>
                  <div className={`${styles.definitionLink} mr-10`}>
                    <img src={facture} alt="facture" />
                    <p onClick={handleOnClickGestionBotanist}>
                      Gérer les Botanists
                    </p>
                  </div>
                  <div className={`${styles.Arrow}`}>
                    <img src={arrowfrom} alt="profil" />
                  </div>
                </div>
                <div className={`${styles.ChangePage}`}>
                  <div className={`${styles.definitionLink} mr-10`}>
                    <img src={card} alt="carte-de-credit" />
                    <p>Accéder aux Annonces</p>
                  </div>
                  <div className={`${styles.Arrow}`}>
                    <img src={arrowfrom} alt="profil" />
                  </div>
                </div>
              </div>
              <div
                className={`d-flex flex-row justify-content-center align-items-center ${styles.menuChangePage}`}
              >
                <div className={`${styles.ChangePage} mr-10`}>
                  <div className={`${styles.definitionLink} mr-10`}>
                    <img src={notif} alt="notifications" />
                    <p>Réglages des notifications</p>
                  </div>
                  <div className={`${styles.Arrow}`}>
                    <img src={arrowfrom} alt="profil" />
                  </div>
                </div>
                <div className={`${styles.ChangePage}`}>
                  <div className={`${styles.definitionLink} mr-10`}>
                    <img src={preference} alt="preference" />
                    <p>préférences</p>
                  </div>
                  <div className={`${styles.Arrow}`}>
                    <img src={arrowfrom} alt="profil" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.title}`}>
            <Link
              to={`/Singout/${id}`}
              style={{ textDecoration: "none" }}
              href="/"
            >
              <p>Me déconnecter</p>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageAccueilDashboard;
