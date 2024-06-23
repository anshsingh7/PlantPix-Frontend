import { NavLink } from 'react-router-dom'

const Slidebar = () => {
  return (
    <div className="flex flex-row overflow-x-auto items-center text-xl sm:text-2xl space-x-4 p-4 m-2">
        <span className="px-4 py-2 bg-lime-100 rounded-lg shadow-lg hover:bg-lime-200 transition-colors cursor-pointer">
          <NavLink className="category-link" to="/plants/all">
            <label>all</label>
          </NavLink>
        </span>
        <span className="px-4 py-2 bg-lime-100 rounded-lg shadow-lg hover:bg-lime-200 transition-colors cursor-pointer">
          <NavLink className="category-link" to="/plants/flower">
            <label>flower</label>
          </NavLink>
        </span>
        <span className="px-4 py-2 bg-lime-100 rounded-lg shadow-lg hover:bg-lime-200 transition-colors cursor-pointer">
          <NavLink className="category-link" to="/plants/foliage">
            <label>foliage</label>
          </NavLink>
        </span>
        <span className="px-4 py-2 bg-lime-100 rounded-lg shadow-lg hover:bg-lime-200 transition-colors cursor-pointer">
          <NavLink className="category-link" to="/plants/fragrant">
            <label>fragrant</label>
          </NavLink>
        </span>
        <span className="px-4 py-2 bg-lime-100 rounded-lg shadow-lg hover:bg-lime-200 transition-colors cursor-pointer">
          <NavLink className="category-link" to="/plants/fruit">
            <label>fruit</label>
          </NavLink>
        </span>
        <span className="px-4 py-2 bg-lime-100 rounded-lg shadow-lg hover:bg-lime-200 transition-colors cursor-pointer">
          <NavLink className="category-link" to="/plants/herb">
            <label>herb</label>
          </NavLink>
        </span>
        <span className="px-4 py-2 bg-lime-100 rounded-lg shadow-lg hover:bg-lime-200 transition-colors cursor-pointer">
          <NavLink className="category-link" to="/plants/hibiscus">
            <label>hibiscus</label>
          </NavLink>
        </span>
        <span className="px-4 py-2 bg-lime-100 rounded-lg shadow-lg hover:bg-lime-200 transition-colors cursor-pointer">
          <NavLink className="category-link" to="/plants/native">
            <label>native</label>
          </NavLink>
        </span>
        <span className="px-4 py-2 bg-lime-100 rounded-lg shadow-lg hover:bg-lime-200 transition-colors cursor-pointer">
          <NavLink className="category-link" to="/plants/tree">
            <label>tree</label>
          </NavLink>
        </span>
      </div>
  )
}

export default Slidebar;

// src/components/Sidebar.jsx








// import React from 'react';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className="h-full p-4 bg-lime-100">
//       <ul>
//         <li className="mb-2">
//           <Link to="/" className="text-green-700 hover:text-green-900">All</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/native" className="text-green-700 hover:text-green-900">Native</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/foliage" className="text-green-700 hover:text-green-900">Foliage</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/flowers" className="text-green-700 hover:text-green-900">Flowers</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/herbs" className="text-green-700 hover:text-green-900">Herbs</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/exotic" className="text-green-700 hover:text-green-900">Exotic</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/edible" className="text-green-700 hover:text-green-900">Edible</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


// src/components/Slidebar.jsx







// import React from 'react';

// const categories = [
//   'All', 'Native', 'Foliage', 'Flowers', 'Herbs', 'Exotic', 'Edible', 'Fruit'];

// const Sidebar = () => {
//   return (
//     <div className="flex overflow-x-auto space-x-4 p-4 bg-lime-50">
//       {categories.map((category) => (
//         <div
//           key={category}
//           className="px-4 py-2 bg-lime-100 rounded-lg shadow-lg hover:bg-lime-200 transition-colors cursor-pointer"
//         >
//           {category}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sidebar;







// import React from 'react';

// const categories = [
//   'All', 'Native', 'Foliage', 'Flowers', 'Herbs', 'Exotic', 'Edibles'
// ];

// const Sidebar = () => {
//   return (
//     <div className="h-screen w-full sm:w-1/4 bg-gray-100 p-4">
//       <ul className="flex flex-col space-y-4">
//         {categories.map(category => (
//           <li key={category} className="text-gray-700 hover:text-green-500 cursor-pointer transition duration-200">
//             {category}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;
