import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <header
      className={`d-flex flex-column justify-content-around align-items-center  ${styles.footerContainer}`}
    >
      <div
        className={`d-flex flex-row justify-content-centeralign-items-center `}
      >
        <div>Assistance</div>
        <div>Gestion</div>
      </div>
      <div
        className={`d-flex flex-row justify-content-center align-items-center `}
      >
        <div>2023 PetalPatrol, inc.</div>
        <div>Condition générales</div>
        <div>Plan du site</div>
        <div>Confidentialité</div>
      </div>
    </header>
  );
};

export default Footer;
