import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const setItemSelected = (item) => {
    setSelectedItem(item);
  };

  return (
    <ShopContext.Provider value={{ selectedItem, setItemSelected }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  return useContext(ShopContext);
};