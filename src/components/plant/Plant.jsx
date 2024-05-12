import { useEffect, useState } from "react";
import { PLANTS } from "../../assets/img/plant.js";
import Item from "./item.jsx";
import { NavLink, useLocation } from "react-router-dom";

const Plant = () => {
  const location = useLocation();
  const { pathname } = location;
  const [category, setCategory] = useState("");

  useEffect(() => {
    setCategory(pathname.split("/").reverse()[0].split(".")[0]);
  }, [pathname]);

  return (
    <section className="bg-primary px-8">
      <div className="max_padd_container py-12 xl:py-28">
        <h3 className="h3 text-2xl text-center font-semibold">All Plants</h3>
        {/* <img width="75" height="33" src="https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2019/07/logo-leaf-new-1.png?fit=75%2C33&amp;ssl=1" className="justify-center attachment-large size-large wp-image-2518" alt="Leaflet" sizes="(max-width: 360px) 147px"></img> */}
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16" />
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {PLANTS.filter((plant) => {
            return plant.types?.includes(category) === true;
          }).map((item) => (
            <NavLink to={`/plants/detail/${item.name}`} key={Math.random()*(1000-1)+1}>
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
    </section>
  );
};

export default Plant;
