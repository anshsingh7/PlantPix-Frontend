// import {Link} from 'react-router-dom'
// import {FaSearch} from "react-icons/fa"

const Item = ({ id, name, image, description, botanicalName, types }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div className="relative flexCenter group overflow-hidden transition-all duration-100">
        <img
          src={image ? image : ""}
          alt="plantImage"
          className="w-full block object-cover group-hover:scale-110 transition-all duration-1000"
        />
      </div>
      <div className="p-4 overflow-hidden">
        <h4 className="my-[6px] medium-16 line-clamp-2 text-main">
          {name ? name : ""}
        </h4>
        <h4 className="my-[6px] text-right medium-16 line-clamp-2">
          {botanicalName ? botanicalName : ""}
        </h4>
        
{/* <div className="flex gap-5">
          <div className="bold-16">{description ? description : ""}</div>
        </div> */}
      </div>
    </div>
  );
};

export default Item;

