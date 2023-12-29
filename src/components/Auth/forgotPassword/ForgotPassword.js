import styles from "./ForgotPassword.module.scss";
import { Link } from "react-router-dom";
import { useInputControlforgot } from "../../Hooks/HookAuth/useInputControlforgot";
import { accountService } from "../../../_services/accountService";
import { useState } from "react";

function ForgotPassword() {
  const [register, handleSubmit, errors] = useInputControlforgot();
  const [message, setMessage] = useState("");
  const [messageErreur, setMessageErreur] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    try {
      accountService
        .forgotPassword(data, {
          header: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          setMessage(
            "Si votre adresse est correcte, vous recevrez un e-mail pour réinitialiser votre mot de passe."
          );
          setMessageErreur("");
        })
        .catch((error) => {
          // Gestion des erreur
          if (error.response.data.message) {
            setMessageErreur(error.response.data.message);
            setMessage("");
          } else {
            setMessage(
              "Si votre adresse est correcte, vous recevrez un e-mail pour réinitialiser votre mot de passe."
            );
          }
        });
    } catch (error) {}
  };

  return (
    <div
      className={`d-flex flex-column justify-content-between p-20 ${styles.forgotPage}`}
    >
      <div
        className={` d-flex flex-column justify-content-center ${styles.box_head}`}
      >
        <div
          className={`d-flex flex-column justify-content-center ${styles.title}`}
        >
          <Link to="/AuthForm" style={{ textDecoration: "none" }}>
            <i className="fa-solid fa-arrow-left fz-20 "></i>
          </Link>
          <h4 className={styles.title}>Forgot Password</h4>
        </div>
        <p>
          Please enter your email address. You will receive a link to create a
          new password via email.
        </p>
      </div>

      <form
        className={`d-flex flex-column justify-content-between align-items-center  ${styles.box_form}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={`d-flex flex-column ${styles.box_input} `}>
          {messageErreur && <p className="valideYup">{messageErreur}</p>}
          {message ? <p className="valideYup">{message}</p> : <p></p>}
          <label htmlFor="emailForgot" className="fz-12 mb-10">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="fz-12 mb-10 "
            {...register("email")}
          />
          {errors.email && <p className="errorsYup">{errors.email.message}</p>}
          {/* {messageErreur && <p className="errorsYup">{messageErreur}</p>} */}
          {messageErreur ? (
            <p className="errorsYup">{messageErreur}</p>
          ) : (
            <p></p>
          )}
        </div>
        <button className="btn-next btn-primary fz-12 mb-20 " type="submit">
          <span>SUIVANT</span>
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
