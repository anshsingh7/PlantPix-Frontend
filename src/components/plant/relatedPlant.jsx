// import { NavLink, useParams } from "react-router-dom";
// import { PLANTS } from "../../assets/img/plant";
// import Item from "./item";

const RelatedPlant = () => {
//   const { type } = useParams();

  return (
    <section className="bg-gray-300 px-8 sm:rounded-xl sm:mx-5">
      <div className="max_padd_container">
        <h3 className="h3 text-2xl text-center font-semibold">
          Related Plants
        </h3>
        <hr className="h-1 md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16" />
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* {PLANTS.filter((plant) => {
            return plant.types?.includes(type) === true && plant.name !== type;
          }).map((item) => {
            console.log(item);
            return (
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
            );
          })} */}
        </div>
      </div>
    </section>
  );
};

export default RelatedPlant;