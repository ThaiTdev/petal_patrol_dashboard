import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Tableau from "./Tableau";
import styles from "./ShowAllBotanists.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import loadingGif from "../../../../assets/images/logo/1Ktv.gif";
import { usePreviousPageId } from "../../components/IdContext";
import { accountService } from "../../../../_services/accountService";

function ShowAllBotanists() {
  const [dataUsers, setDataUsers] = useState([]);
  const { id } = useParams();
  const { setPreviousId } = usePreviousPageId();

  const linkCheck = {
    profilChecked: false,
    accueilChecked: false,
    gestionChecked: true,
    messageChecked: false,
  };

  try {
    useEffect(() => {
      accountService
        .showAllBotanists({
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          setDataUsers(res.data.botanist);
          setPreviousId(id);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [id, setPreviousId]);
  } catch (error) {
    console.log(error);
  }

  return (
    <main
      className={`${styles.mainContainer} d-flex flex-column flex-fill  align-items-start`}
    >
      <Header linkCheck={linkCheck} />
      <div
        className={`d-flex flex-column justify-content-center align-items-start  ${styles.profilContainer}`}
      >
        <div
          className={`d-flex flex-column  justify-content-center align-items-center mt-20  ${styles.container}`}
        >
          <div className={`${styles.boxTitle}`}>
            <h2>la liste des Botanists</h2>
          </div>

          <div
            className={`d-flex flex-column justify-content-center align-items-center  ${styles.containerUser}`}
          >
            {dataUsers.length ? (
              <div className={`d-flex flex-column ${styles.tableauUser} `}>
                <Tableau dataUsers={dataUsers} />
              </div>
            ) : (
              <div className={`${styles.tableauUserloading}`}>
                <img src={loadingGif} alt="cactus" />
              </div>
            )}
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
      <Footer />
    </main>
  );
}
export default ShowAllBotanists;
