import { ReactNode, createContext, useState } from "react";

interface BaseType {
  id: number;
  name: string;
}
interface Menu extends BaseType {
  price: number;
}
interface MenuCategory extends BaseType {
  isRequired: boolean;
}
export interface AppData {
  menus: Menu[];
  menuCategories: MenuCategory[];
}

export interface AppContextType {
  data: AppData;
  setData: (data: AppData) => void;
  replaceMenu: (menu: Menu) => void;
}
export const defaultAppData: AppData = {
  menus: [],
  menuCategories: [],
};
export const defaultAppContextData: AppContextType = {
  data: defaultAppData,
  setData: (data: AppData) => {},
  replaceMenu: (menu: Menu) => {},
};
export const AppContext = createContext<AppContextType>(defaultAppContextData);

interface Props {
  children: ReactNode;
}
const AppContextProvider = ({ children }: Props) => {
  const [data, setData] = useState<AppData>(defaultAppData);
  const replaceMenu = (menu: Menu) => {
    const menus = data.menus.map((item) => (item.id === menu.id ? menu : item));
    setData({ ...data, menus });
  };
  return (
    <AppContext.Provider value={{ data, setData, replaceMenu }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
