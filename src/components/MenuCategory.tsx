import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

const MenuCategory = () => {
  const value = useContext(AppContext);
  return (
    <div>
      <h1>Menu Category Component</h1>
    </div>
  );
};

export default MenuCategory;
