import { NavLink } from "react-router-dom";
import { PLANTS } from "../../assets/img/plant";
import Sidebar from "../sidebar";
import Item from "../plant/item";

const Home = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row">
      <Sidebar />
      <div className="w-full px-3 md:5/6">
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {PLANTS.map((item) => (
            <NavLink
              to={`/plants/detail/${item.name}`}
              key={Math.random() * (1000 - 1) + 1}
            >
              <Item
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                types={item.types}
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
