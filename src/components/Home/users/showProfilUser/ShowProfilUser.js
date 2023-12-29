import styles from "./ShowProfilUser.module.scss";
import { accountService } from "../../../../_services/accountService";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { usePreviousPageId } from "../../components/IdContext";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import img from "../../../../assets/images/users/homme.png";

const ShowProfilUser = () => {
  const { id } = useParams();
  const { previousPageId } = usePreviousPageId();
  let navigate = useNavigate();
  console.log(previousPageId);

  const [userEmail, setUserEmail] = useState("");
  const [routeAvatar, setRouteAvatar] = useState(null);
  const [avatar, setAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userRoles, setUserRoles] = useState([]);
  const [validateAccount, setValidateAccount] = useState(false);

  const linkCheck = {
    profilChecked: true,
    accueilChecked: false,
    gestionChecked: false,
    messageChecked: false,
  };

  try {
    useEffect(() => {
      accountService
        .showProfileUser(id, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          setUserName(res.data.user.name);
          setUserEmail(res.data.user.email);
          setUserId(res.data.user.id);
          setAvatar(res.data.user.avatar);
          setUserRoles(res.data.user.role);
          setValidateAccount(res.data.user.validate_account);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [id]);
  } catch (error) {
    console.log(error);
  }
  const handleOnclick = () => {
    navigate(`/FormUpdateProfilUser/${previousPageId ? previousPageId : id}`);
  };

  return (
    <div
      className={`d-flex flex-column justify-content-between align-items-center  ${styles.CustomerHomePage}`}
    >
      <Header linkCheck={linkCheck} />
      <main className={`${styles.profilContainer} `}>
        <div
          className={`${styles.profilTitle} mr-10 d-flex flex-row justify-content-star align-items-center mt-20 `}
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
        <div className={` d-flex flex-row mt-20`}>
          <div
            className={`d-flex flex-column justify-content-around align-items-start  ${styles.formContainer} `}
          >
            <div className={`d-flex flex-row ${styles.CustomerAvatarBox} `}>
              <div className={`mb-10 ${styles.avatarContainer}`}>
                <div className={styles.avatarBoxImage}>
                  <img
                    className={styles.avatarImage}
                    src={routeAvatar ? routeAvatar : avatar ? avatar : img}
                    alt="photo_de_profil"
                  />
                </div>

                <label
                  htmlFor="avatar"
                  className={`fz-12  mb-10  ${styles.label_avatar} d-flex justify-content-center align-items-center `}
                >
                  <img
                    src="/images/professionnel/photo.png"
                    alt="photo_de_photo"
                  />
                </label>
              </div>
            </div>
            <form
              className={` d-flex flex-column justify-content-between ${styles.form}`}
            >
              <div className="d-flex flex-column justify-content-around align-items-start  ">
                <label htmlFor="Id_user" className="fz-12  mb-10">
                  Id_user
                </label>
                <input
                  type="text"
                  id="Id_user"
                  className={`fz-12 mb-10 p-5 ${styles.inputName}`}
                  value={userId}
                />
                <label htmlFor="userName" className="fz-12  mb-10">
                  Name
                </label>
                <input
                  type="text"
                  id="userName"
                  className={`fz-12 mb-10 p-5 ${styles.inputName}`}
                  value={userName.toUpperCase()}
                />
                <label htmlFor="Email" className="fz-12  mb-10">
                  Email
                </label>
                <input
                  type="text"
                  id="userEmail"
                  className={`fz-12 mb-10 p-5 ${styles.inputName}`}
                  name={"userEmail"}
                  value={userEmail}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <label htmlFor="validateAccount" className="fz-12  mb-10">
                    validate_account
                  </label>
                  <input
                    type="checkbox"
                    id="validateAccount"
                    className={`fz-12 mb-10 p-5 ${styles.permis}`}
                    checked={validateAccount}
                  />
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-end  mt-20  ">
                <button
                  className="d-flex flex-row justify-content-between align-items-center btn-co btn-reverse-primary fz-12"
                  type="submit"
                >
                  <span onClick={handleOnclick}>Modifier</span>
                  <i className=" fa-solid fa-arrow-right-long fz-20 "></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShowProfilUser;
