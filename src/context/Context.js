import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  let type = "";
  let user = null;
  // 1. Obtener el valor del userType del localStorage
  const valueStorage = localStorage.getItem("userType");
  const valueUser = JSON.parse(localStorage.getItem("user"));

  // 2. Verificar si el valor es null
  if (valueStorage === null && valueUser === null) {
    type = "default";
    user = null;
  } else {
    type = valueStorage;
    user = valueUser;
  }

  // 3. Asigna valor a userTipe
  const [userType, setUserType] = useState(type);
  const [existingUser, setExistingUser] = useState(user);
  const [closeSesion, setCloseSesion] = useState(false);
  const [modal, setModal] = useState(false);
  const [offer, setOffer] = useState({});
  const [selectOffer, setSelectOffer] = useState({});

  return (
    <MyContext.Provider
      value={{
        userType,
        setUserType,
        existingUser,
        setExistingUser,
        closeSesion,
        setCloseSesion,
        modal,
        setModal,
        offer,
        setOffer,
        selectOffer, 
        setSelectOffer,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
