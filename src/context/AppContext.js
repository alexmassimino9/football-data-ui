import React, { useEffect, useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
