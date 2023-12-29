import { createContext, useContext, useState } from "react";

const PreviousPageIdContext = createContext();

export const PreviousPageIdProvider = ({ children }) => {
  const [previousPageId, setPreviousPageId] = useState(null);

  const setPreviousId = (id) => {
    setPreviousPageId(id);
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
