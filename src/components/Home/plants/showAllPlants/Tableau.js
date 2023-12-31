import DataTable from "react-data-table-component";
import React, { useState, useRef, useEffect } from "react";
import UpdateImage from "../../../../assets/images/users/update_user/crayon.png";
import loadingGif from "../../../../assets/images/logo/1Ktv.gif";
import { useNavigate } from "react-router-dom";
import styles from "./Tableau.module.scss";
import loupe from "../../../../assets/images/users/loupe.png";

function Tableau({ dataUsers }) {
  let navigate = useNavigate();
  // Récupérer dynamiquement les noms de propriétés de dataUsers
  const columnNames = dataUsers.length > 0 ? Object.keys(dataUsers[0]) : [];
  // Récupérer dynamiquement les propriétés  de dataUsers
  const dataNames = dataUsers.length > 0 ? Object.values(dataUsers) : [];

  // Créer les colonnes en utilisant les noms de propriétés
  const columns = columnNames.map((columnName) => ({
    name: columnName.charAt(0).toUpperCase() + columnName.slice(1), // Mettre en majuscule la première lettre du nom de la colonne
    selector: columnName,
    sortable: true,
  }));
  // Ajouter dynamiquement la colonne "Update" pour chaque ligne
  columns.push({
    name: "Update",
    selector: "updateAction",
    sortable: true,
    cell: (row) => (
      <button onClick={() => handleUpdate(row)}>
        <img src={UpdateImage} alt="update" style={{ width: "20px" }} />
      </button>
    ),
  });

  // Ajouter les propriétés de chaque colonnes
  const data = dataNames.map((dataName) => ({
    id: dataName.id,
    name:
      dataName.name.charAt(0).toUpperCase() +
      dataName.name.slice(1).toLowerCase(),
    type: dataName.type ? "null" : dataName.type,
    image: dataName.image ? "null" : dataName.image,
    createdAt: dataName.createdAt,
    updatedAt: dataName.updatedAt,
    user_id: dataName.userId,
    updateAction: dataName,
  }));

  //j'extrait les champs updateAction et deleteAction de mes données pour les traiter
  const records = data.map(({ updateAction, deleteAction, ...rest }) => rest);
  const [recordsState, setRecordsState] = useState(records);
  const [checkSearch, setCheckSearch] = useState(false);

  //Cette methode permet de modifier l'user
  const handleUpdate = (row) => {
    navigate(`/FormUpdateProfilUser/${row.id}`);
    console.log("Update action for row:", row);
  };

  //Cette methode implémente la barre de recherche
  function handleFilter(even) {
    const newData = records.filter((row) => {
      return row.name.toLowerCase().includes(even.target.value.toLowerCase());
    });
    setRecordsState(newData);
  }

  //barre de recherche///////////////////////////////////////////////
  const inputRef = useRef();
  //si ma variable checkSearch est à true je la passe à false et réciproquement
  function handleOnClick() {
    checkSearch ? setCheckSearch(false) : setCheckSearch(true);
  }
  useEffect(() => {
    if (checkSearch) {
      // Appliquer le focus lorsque ckeckSearch est vrai
      inputRef.current.focus();
    }
  }, [checkSearch]); // Effectuer cette vérification lorsque ckeckSearch change
  //////////////////////////////////////////////////////////////////
  return (
    <div
      className={`  ${
        recordsState.length
          ? styles.tableauContainer
          : styles.tableauContainerFalse
      }`}
    >
      <div
        className={`d-flex justify-content-end align-items-start  ${
          !recordsState.length && styles.tableauSubContainer
        } `}
      >
        <div className={`d-flex justify-content-around  align-items-start  `}>
          {!recordsState.length && (
            <div style={{ width: "300px" }}>
              <img src={loadingGif} alt="cactus" />
            </div>
          )}

          <div className=" d-flex justify-content-center  text-end ml-20 ">
            <input
              className={`text-end ml-20 ${
                checkSearch ? styles.classInputOpen : styles.classInputClose
              }`}
              type="text"
              placeholder="Recherche User"
              onChange={handleFilter}
              ref={inputRef}
            />

            <img
              src={loupe}
              alt="loupe"
              style={{ width: "37px", cursor: "pointer" }}
              onClick={handleOnClick}
            />
          </div>
        </div>
      </div>
      <div className={`  ${styles.tableauUser}`}>
        <DataTable
          columns={columns}
          data={recordsState}
          fixedHeader
          pagination
          paginationPerPage={5} // Set the number of items per page
          paginationRowsPerPageOptions={[5, 10, 15, 20]} // Specify the available options for items per page
        ></DataTable>
      </div>
    </div>
  );
}

export default Tableau;
