import styles from "./Header.module.scss";
import picto from "../../../assets/images/logoFlex/grainou_la_graine.png";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { usePreviousPageId } from "../components/IdContext";

const Header = ({ linkCheck }) => {
  let navigate = useNavigate();
  const { id } = useParams();
  const { previousPageId } = usePreviousPageId();

  const handleOnClickAccueil = () => {
    navigate(`/pageAccueilDashboard/${previousPageId ? previousPageId : id}`);
  };
  const handleOnClickGestion = () => {
    navigate(`/ShowAllUsers/${previousPageId ? previousPageId : id}`);
  };

  return (
    <header
      className={`d-flex flex-row justify-content-between align-items-center  ${styles.headerContainer}`}
    >
      <div className="d-flex flex-row justify-content-center align-items-center ">
        <div className={`${styles.ContainerLogo}`}>
          <img src={picto} alt="picto" />
        </div>
        <div>
          <h2>PetalPatrol</h2>
        </div>
      </div>
      <nav className="d-flex flex-row justify-content-center align-items-center ">
        <div className={` ${styles.boxLink}  `}>
          <p
            className={`link ${
              linkCheck.accueilChecked ? styles.linkCheked : styles.link
            }`}
            href="/"
            onClick={handleOnClickAccueil}
          >
            Accueil
          </p>
        </div>
        <div className={` ${styles.boxLink}  `}>
          <p
            className={`link ${
              linkCheck.gestionChecked ? styles.linkCheked : styles.link
            }`}
            href="/"
            onClick={handleOnClickGestion}
          >
            Gestion
          </p>
        </div>
        <div className={` ${styles.boxLink}  `}>
          <p
            className={`link ${
              linkCheck.messageChecked ? styles.linkCheked : styles.link
            }`}
            href="/"
          >
            Messages
          </p>
        </div>
        <Link
          to={`/ShowProfilUser/${previousPageId ? previousPageId : id}`}
          style={{ textDecoration: "none" }}
          href="/"
        >
          <div className={` ${styles.boxLink}  `}>
            <p
              className={`link ${
                linkCheck.profilChecked ? styles.linkCheked : styles.link
              }`}
              href="/"
            >
              Profil
            </p>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
