import { createContext, useContext, useState, useEffect } from "react";

const PreviousPageIdContext = createContext();

export const PreviousPageIdProvider = ({ children }) => {
  const [previousPageId, setPreviousPageId] = useState(null);

  // Charger l'ID de la page précédente depuis le localStorage lors de l'initialisation
  useEffect(() => {
    const storedPreviousPageId = localStorage.getItem("previousPageId");
    if (storedPreviousPageId) {
      setPreviousPageId(storedPreviousPageId);
    }
  }, []);

  const setPreviousId = (id) => {
    setPreviousPageId(id);
    // Stocker l'ID de la page précédente dans le localStorage
    localStorage.setItem("previousPageId", id);
  };

  return (
    <PreviousPageIdContext.Provider value={{ previousPageId, setPreviousId }}>
      {children}
    </PreviousPageIdContext.Provider>
  );
};

export const usePreviousPageId = () => {
  return useContext(PreviousPageIdContext);
};
