import { useState } from "react";
//j'import mon hook 'useInputControlAuthForm' que j'ai créé ou j'implémente mon 'useForm'
import { useInputControlAuthForm } from "../../Hooks/HookAuth/useInputControlAuthForm";
//j'import la méthode 'Link' pour mes liens
import { Link } from "react-router-dom";
import styles from "./AuthForm.module.scss";
//j'importe le useNavigate pour mes route vers d'autre pages
import { useNavigate } from "react-router-dom";
import { accountService } from "../../../_services/accountService";
import picto from "../../../assets/images/logo/grainou_la_graine.png";

function AuthForm() {
  const [checkpassWord, setCheckPassWord] = useState(true);
  //je recupère mes valeurs retourné par le fichier useInputControlAuthForm
  const [register, handleSubmit, errors] = useInputControlAuthForm();
  const [message, setMessage] = useState("");
  const [messageMini, setMessageMini] = useState("");

  //je créer une instance de useNavigate
  let navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    console.log("start hello");
    try {
      accountService
        .signin(data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          if (
            res.data.user.validate_account === true &&
            res.data.user.roles.includes("ADMIN")
          ) {
            navigate(`/pageAccueilDashboard/${res.data.user.id}`);
            console.log(res.data.message);
          } else {
            setMessage(
              "Bonjour " +
                res.data.user.name +
                " désolé, vous n'avez pas les droits pour vous connecter"
            );
          }
        })
        .catch((error) => {
          // Gestion des erreurs
          console.error("Status Code:", error.response.status);
          setMessage(error.response.data.message);
        });
    } catch (error) {}
  };

  //cette methode permet de visionner le password
  function handleShowPassWord() {
    setCheckPassWord(false);
    const value = document.getElementById("password");
    if (value.type === "password") {
      value.type = "text";
    } else if (value.type === "text") {
      setCheckPassWord(true);
      value.type = "password";
    }
  }

  return (
    <div
      className={`d-flex flex-column justify-content-around align-items-center ${styles.AuthPage}`}
    >
      <div className={`${styles.box_title}`}>
        <h1 className={styles.title}> PetalPatrol Dashboard</h1>
        <img src="./images/tache3.png" alt="tâche Violet" />
      </div>

      <form
        className={` d-flex flex-column justify-content-between  ${styles.box_form}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={` d-flex flex-column ${styles.box_input} `}>
          {message && (
            <>
              <p className="noValideYup">
                {message}
                <i className="fa-sharp fa-solid fa-face-grin-beam-sweat smilleIcone"></i>
              </p>
              <p className="errorsYup">{messageMini}</p>
            </>
          )}
          <label htmlFor="email" className="fz-12 mb-10">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="fz-12 mb-10 "
            name="email"
            {...register("email")}
            required
          />
          {errors.email && <p className="errorsYup">{errors.email.message}</p>}
          <label htmlFor="password" className="fz-12  mb-10">
            Mot de passe
          </label>
          <div className={styles.box_password}>
            <input
              type="password"
              id="password"
              className="fz-12 mb-10"
              name="password"
              {...register("password")}
              required
            />
            {errors.password && (
              <p className="errorsYup">{errors.password.message}</p>
            )}
            <div>
              {checkpassWord ? (
                <i
                  onClick={handleShowPassWord}
                  className="fa-regular fa-eye-slash"
                ></i>
              ) : (
                <i
                  onClick={handleShowPassWord}
                  className="fa-regular fa-eye"
                ></i>
              )}
            </div>
          </div>
          <Link
            to="/ForgotPassword"
            style={{ textDecoration: "none" }}
            className={`fz-12 ${styles.mot2pass} `}
            href="/"
          >
            mot de passe oublié ?
          </Link>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-end mt-20 ">
          <button
            type="submit"
            className="d-flex flex-row justify-content-between align-items-center btn-co btn-primary fz-12 mb-20 "
          >
            <span>Se connecter</span>
            <i className=" fa-solid fa-arrow-right-long fz-20 "></i>
          </button>
        </div>
      </form>

      <div className={`${styles.ContainerLogo}`}>
        <img src={picto} alt="picto" />
      </div>
    </div>
  );
}

export default AuthForm;
