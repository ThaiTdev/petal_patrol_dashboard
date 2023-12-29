import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./ActivationAccount.module.scss";

function ActivationAccount() {
  const { activationCode } = useParams();
  const navigate = useNavigate();

  function handleClick() {
    try {
      axios
        .post(`http://localhost:5000/api/emailConfirm/${activationCode}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data.message);
          console.log(res.data.data.isActive);
          console.log(res);
          if (res.data.data.isActive) {
            navigate("/AuthForm");
          }
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div
      className={`d-flex flex-column justify-content-around align-items-center  ${styles.validationPage}`}
    >
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <img src="../../../images/Finish_line.gif" alt="Finish_line" />
      </div>
      <h1>Felicitation !</h1>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <button className="btn  btn-co btn-primary" onClick={handleClick}>
          Allons-y!
        </button>
      </div>
    </div>
  );
}

export default ActivationAccount;
