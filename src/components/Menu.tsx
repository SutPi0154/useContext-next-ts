import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

const Menu = () => {
  const { data, setData } = useContext(AppContext);
  console.log(data);
  return (
    <div>
      <h1>Menu Component </h1>
      <button
        onClick={() => {
          setData({
            menus: [{ id: 1, name: "moe hin gar", price: 1000 }],
            menuCategories: [{ id: 1, name: "Most Popular", isRequired: true }],
          });
        }}
      >
        click
      </button>
    </div>
  );
};

export default Menu;
