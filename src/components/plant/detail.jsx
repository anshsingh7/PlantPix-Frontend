import { useParams } from "react-router-dom";
import { PLANTS } from "../../assets/img/plant";
import RelatedPlant from "./relatedPlant";

const Detail = () => {
  const { type } = useParams();
  return (
    <div className="w-full h-100">
      {PLANTS.filter((plant) => {
        return plant.name === type;
      }).map((plant) => (
        <div
          key={Math.random() * (1000 - 1) + 1}
          className="flex flex-col sm:flex-row"
        >
          <div className="w-full h-full sm:w-2/6 sm:h-2/6 sm:my-5 sm:mx-5">
            <img src={plant.image} alt={plant.name} className="drop-shadow-xl sm:rounded-xl" />
          </div>

          <div className="w-full h-100 flex flex-col p-5 sm:my-5 sm:mx-5 sm:bg-gray-600 sm:text-white/80 sm:rounded-xl">
            <div>Name : {plant.name}</div>
            <div>Description : {plant.description}</div>
            <div className="flex gap-3">
              Types :{" "}
              {plant.types.map((type) => (
                <div key={Math.random() * (1000 - 1) + 1}>{type}, </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <hr className="w-11/12 h-1 mx-auto my-1 bg-gray-400 border-0 rounded dark:bg-gray-700 sm:my-5"></hr>
      {/* <div className="font-bold ms-5 text-lg sm:ms-10 sm:text-3xl">Related Plants :-</div> */}
        <RelatedPlant/>
    </div>
  );
};

export default Detail;
