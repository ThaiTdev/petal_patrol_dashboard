import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./pageAccueilDashboard.module.scss";
import { Link, useParams } from "react-router-dom";
//images//
import plant from "../../../assets/images/monProfil/plante.png";
import botanist from "../../../assets/images/monProfil/jardinier.png";
import utilisateurs from "../../../assets/images/monProfil/utilisateurs.png";
import preference from "../../../assets/images/monProfil/preference.png";
import reglages from "../../../assets/images/monProfil/reglages.png";
import arrowfrom from "../../../assets/images/monProfil/Arrow.png";
import cloche from "../../../assets/images/monProfil/cloche.png";
import messageUser from "../../../assets/images/monProfil/email.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PageAccueilDashboard = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [counterMessage, setCounterMessage] = useState("1");
  const [counterBotanistWait, setCounterBotanistWait] = useState("5");
  const handleOnClick = () => {
    navigate(`/FormUpdateProfilUser/${id}`);
  };
  const handleOnClickGestionUser = () => {
    navigate(`/ShowAllUsers/${id}`);
  };
  const handleOnClickGestionBotanist = () => {
    navigate(`/ShowAllBotanists/${id}`);
  };
  const handleOnClickGestionPlant = () => {
    navigate(`/ShowAllPlants/${id}`);
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
                  <div
                    className={`d-flex flex-row justify-content-center align-items-center ${styles.definitionLink} mr-10`}
                  >
                    <img
                      src={reglages}
                      alt="reglages"
                      style={{ width: "30px" }}
                    />
                    <p onClick={handleOnClick}>Modifier mon profil</p>
                  </div>
                  <div className={`${styles.Arrow}`}>
                    <img src={arrowfrom} alt="profil" />
                  </div>
                </div>
                <div className={`${styles.ChangePage}`}>
                  <div
                    className={`d-flex flex-row justify-content-center align-items-center ${styles.definitionLink} mr-10`}
                  >
                    <img
                      src={utilisateurs}
                      alt="utilisateurs"
                      style={{ width: "30px" }}
                    />
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
                <div
                  className={`${
                    counterBotanistWait > 0
                      ? styles.ChangePageNotification
                      : styles.ChangePage
                  }   mr-10`}
                  counter={counterBotanistWait}
                >
                  {counterBotanistWait > 0 && (
                    <div className={`${styles.ChangePageCloche}`}>
                      <img src={cloche} alt="cloche" />
                    </div>
                  )}
                  <div
                    className={`d-flex flex-row justify-content-center align-items-center ${styles.definitionLink} mr-10`}
                  >
                    <img
                      src={botanist}
                      alt="botanist"
                      style={{ width: "30px" }}
                    />
                    <p onClick={handleOnClickGestionBotanist}>
                      Gérer les Botanists
                    </p>
                  </div>
                  <div className={`${styles.Arrow}`}>
                    <img src={arrowfrom} alt="profil" />
                  </div>
                </div>
                <div className={`${styles.ChangePage}`}>
                  <div
                    className={`d-flex flex-row justify-content-center align-items-center ${styles.definitionLink} mr-10`}
                  >
                    <img src={plant} alt="plant" style={{ width: "30px" }} />
                    <p onClick={handleOnClickGestionPlant}>Gérer les plants</p>
                  </div>
                  <div className={`${styles.Arrow}`}>
                    <img src={arrowfrom} alt="profil" />
                  </div>
                </div>
              </div>

              <div
                className={`d-flex flex-row justify-content-center align-items-center ${styles.menuChangePage}`}
              >
                <div
                  className={`${
                    counterMessage > 0
                      ? styles.ChangePageNotification
                      : styles.ChangePage
                  }   mr-10`}
                  counter={counterMessage}
                >
                  {counterMessage > 0 && (
                    <div className={`${styles.ChangePageCloche}`}>
                      <img src={cloche} alt="cloche" />
                    </div>
                  )}
                  <div
                    className={`d-flex flex-row justify-content-center align-items-center ${styles.definitionLink} mr-10`}
                  >
                    <img
                      src={messageUser}
                      alt="notifications"
                      style={{ width: "30px" }}
                    />
                    <p>Messages</p>
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
            <Link to={`/Singout`} style={{ textDecoration: "none" }} href="/">
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
