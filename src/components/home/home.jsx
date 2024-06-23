import { NavLink } from "react-router-dom";
import { PLANTS } from "../../assets/img/plant";
import Slidebar from "../slidebar";
import Item from "../plant/item";

const HomePage = () => {
  const sortedPlants = [...PLANTS].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="p-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              Welcome to the PlantPix
            </h1>
            <p className="mt-4">
              Select a category from the sidebar to explore more about different types of plants.
            </p>
          </div>
          <Slidebar />
          <div className="w-full flex flex-col sm:flex-row">
            <div className="w-full px-3 md:5/6">
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedPlants.map((item) => (
                  <NavLink to={`/plants/detail/${item.name}`} key={item.id}>
                    <Item
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      botanicalName={item.botanicalName}
                      description={item.description}
                      types={item.types}
                    />
                  </NavLink>
                
                
                // {PLANTS.map((item) => (
                //   <NavLink
                //     to={`/plants/detail/${item.name}`}
                //     key={Math.random() * (1000 - 1) + 1}
                //   >
                //     <Item
                //       id={item.id}
                //       image={item.image}
                //       name={item.name}
                //       description={item.description}
                //       types={item.types}
                //     />
                //   </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;