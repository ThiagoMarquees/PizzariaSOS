import React, { createContext, useState } from "react";

// Criação do Contexto
export const MenuContext = createContext();

// Provedor do Contexto
function MenuProvider({ children }) {
  const [visible, setVisible] = useState(true);

  return <MenuContext.Provider value={{ visible, setVisible }}>{children}</MenuContext.Provider>;
}

export default MenuProvider;
