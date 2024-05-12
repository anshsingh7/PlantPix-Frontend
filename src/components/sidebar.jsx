import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-full h-16 flex flex-row items-center text-xl overflow-x-auto sm:h-full sm:flex-col sm:text-2xl md:text-3xl md:w-1/6 ">
        <span className="category-item sm-ms-0 mx-3 sm:mx-1 sm:my-1">
          <NavLink className="category-link" to="/plants/all">
            <label>all</label>
          </NavLink>
        </span>
        <span className="category-item mx-3 sm:mx-1 sm:my-1">
          <NavLink className="category-link" to="/plants/native">
            <label>native</label>
          </NavLink>
        </span>
        <span className="category-item mx-3 sm:mx-1 sm:my-1">
          <NavLink className="category-link" to="/plants/herb">
            <label>herb</label>
          </NavLink>
        </span>
        <span className="category-item mx-3 sm:mx-1 sm:my-1">
          <NavLink className="category-link" to="/plants/flowers">
            <label>flowers</label>
          </NavLink>
        </span>
        <span className="category-item mx-3 sm:mx-1 sm:my-1">
          <NavLink className="category-link" to="/plants/tree">
            <label>tree</label>
          </NavLink>
        </span>
        <span className="category-item mx-3 sm:mx-1 sm:my-1">
          <NavLink className="category-link" to="/plants/foliage">
            <label>Foliage</label>
          </NavLink>
        </span>
        <span className="category-item mx-3 sm:mx-1 sm:my-1">
          <NavLink className="category-link" to="/plants/fruits">
            <label>Fruits</label>
          </NavLink>
        </span>
      </div>
  )
}

export default Sidebar;