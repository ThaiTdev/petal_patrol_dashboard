import { useInputControlerFormProfilUser } from "../../../../Hooks/HookUser/useInputControlerFormProfilUser";
import { accountService } from "../../../../../_services/accountService";
import { useParams } from "react-router-dom";
import styles from "./Form.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePreviousPageId } from "../../../components/IdContext";
import { RandomAvatar } from "react-random-avatars";

function Form() {
  const [userEmail, setUserEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userRoles, setUserRoles] = useState([]);
  const [validateAccount, setValidateAccount] = useState(false);
  const [register, handleSubmit, setValue, errors] =
    useInputControlerFormProfilUser({
      name: userName.toUpperCase(),
      email: userEmail,
      validate_account: validateAccount,
    });

  const { id } = useParams();
  let navigate = useNavigate();
  const { previousPageId } = usePreviousPageId();

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

  // const handleCheckboxChange = (e) => {
  //   setValidateAccount(e.target.checked);
  // };

  // cette function enregistre le profil dans la bdd
  const showData = async (data) => {
    let value = {
      name: data.userName,
      id: id,
    };
    try {
      accountService
        .UpdateProfilUser(value, id, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          navigate(`/ShowAllUsers/${previousPageId ? previousPageId : id}`);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`d-flex flex-column justify-content-around align-items-start  ${styles.formContainer} `}
    >
      <div className={`d-flex flex-row ${styles.CustomerAvatarBox} `}>
        <div className={`mb-10 ${styles.avatarContainer}`}>
          {avatar ? (
            <div className={styles.avatarBoxImage}>
              <img
                className={styles.avatarImage}
                src={avatar}
                alt="photo_de_profil"
              />
            </div>
          ) : (
            userName && ( // Vérifiez si userName est disponible
              <div>
                <RandomAvatar name={userName} size={100} />
              </div>
            )
          )}

          <label
            htmlFor="avatar"
            className={`fz-12  mb-10  ${styles.label_avatar} d-flex justify-content-center align-items-center `}
          >
            <img src="/images/professionnel/photo.png" alt="photo_de_photo" />
          </label>
        </div>
      </div>
      <form
        className={` d-flex flex-column justify-content-between ${styles.form}`}
        onSubmit={handleSubmit(showData)}
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
            name={"userName"}
            defaultValue={userName.toUpperCase()}
            {...register("userName")}
            required
          />
          <label htmlFor="userEmail" className="fz-12  mb-10">
            Email
          </label>
          <input
            type="text"
            id="userEmail"
            className={`fz-12 mb-10 p-5 ${styles.inputName}`}
            name={"userEmail"}
            value={userEmail}
            {...register("userEmail")}
            required
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <label htmlFor="validateAccount" className="fz-12  mb-10">
              validate_account
            </label>
            <input
              type="checkbox"
              id="validate"
              name={"validate"}
              className={`fz-12 mb-10 p-5 ${styles.permis}`}
              {...register("validateAccount")}
              checked={validateAccount}
              // onChange={handleCheckboxChange}
            />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-end  mt-20  ">
          <button
            className="d-flex flex-row justify-content-between align-items-center btn-co btn-reverse-primary fz-12"
            type="submit"
          >
            <span>Valider</span>
            <i className=" fa-solid fa-arrow-right-long fz-20 "></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
