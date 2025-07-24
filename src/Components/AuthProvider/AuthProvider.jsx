import React, { createContext } from "react";
import { useContext } from "react";

const AuthContext = createContext(); // creation phase

export function AuthProvider({ children }) {
  const userName = "Hi Shiva changed new value";

  const name = "Prabhas";

  const obj = {
    name: "shiva",
    location: "huderabad",
  };

  const arr = ["sdfss", 2342342342];
  return (
    <>
      <AuthContext.Provider value={{ userName, name, obj, arr }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export const useAuth = () => useContext(AuthContext);



// Global Data or global JS data 


// 100% mana daily life use cheyaru 


// communication 


// Redux or Redux-toolkit