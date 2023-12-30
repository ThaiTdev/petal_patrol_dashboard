import DataTable from "react-data-table-component";
import React, { useState } from "react";
import UpdateImage from "../../../../assets/images/users/update_user/crayon.png";
import loadingGif from "../../../../assets/images/logo/1Ktv.gif";
import { useNavigate } from "react-router-dom";
import { RandomAvatar } from "react-random-avatars";

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
    avatar: !dataName.avatar ? (
      <div>
        <RandomAvatar name={dataName.name} size={40} />
      </div>
    ) : (
      dataName.avatar
    ),
    email: dataName.email,
    validate_account: dataName.validate_account ? "true" : "false",
    siret: !dataName.siret ? "null" : dataName.siret,
    Deleted: !dataName.deleted ? "null" : dataName.deleted,
    createdAt: dataName.createdAt,
    updatedAt: dataName.updatedAt,
    roles: dataName.roles.map((role) => role + "/"),
    updateAction: dataName,
  }));
  console.log(dataNames[0].name);

  //j'extrait les champs updateAction et deleteAction de mes données pour les traiter
  const records = data.map(({ updateAction, deleteAction, ...rest }) => rest);
  const [recordsState, setRecordsState] = useState(records);

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

  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-end `}
    >
      <div className={`d-flex justify-content-end align-items-start `}>
        <div className={`d-flex justify-content-center align-items-start `}>
          {!recordsState.length && (
            <div style={{ width: "300px" }}>
              <img src={loadingGif} alt="cactus" />
            </div>
          )}
          <div className="text-end m-20">
            <input
              type="text"
              placeholder="Recherche User"
              onChange={handleFilter}
            />
          </div>
        </div>
      </div>
      <div>
        <DataTable
          columns={columns}
          data={recordsState}
          fixedHeader
          pagination
        ></DataTable>
      </div>
    </div>
  );
}

export default Tableau;
