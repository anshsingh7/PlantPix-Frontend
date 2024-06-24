import { NavLink } from "react-router-dom";
import { PLANTS } from "../../assets/img/plant";
import Card from "./card.jsx";

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Gallery = () => {
  // const sortedPlants = [...PLANTS].sort((a, b) => a.name.localeCompare(b.name));
  const shuffledPlants = shuffleArray([...PLANTS]);

  return (
    <div className="min-h-screen bg-primary px-6">
      <div className="max_padd_container py-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Gallery</h1>
          <img
            width="75"
            height="33"
            src="https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2019/07/logo-leaf-new-1.png?fit=75%2C33&amp;ssl=1"
            className="justify-center attachment-large size-large wp-image-2518 h-[33px] md:w-1/8 mx-auto mb-2"
            alt="Leaflet"
          />
          <p className="mb-8 text-center">
            Explore our gallery to discover a variety of plants; click on any
            image for detailed descriptions and care instructions.
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row">
          <div className="w-full px-3 md:5/6">
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* {sortedPlants.map((card) => (
                  <NavLink to={`/plants/detail/${card.name}`} key={card.id}> */}
              {shuffledPlants.map((card) => (
                <NavLink to={`/plants/detail/${card.name}`} key={card.id}>
                  <Card
                    id={card.id}
                    image={card.image}
                    name={card.name}
                    botanicalName={card.botanicalName}
                    description={card.description}
                    types={card.types}
                  />
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;