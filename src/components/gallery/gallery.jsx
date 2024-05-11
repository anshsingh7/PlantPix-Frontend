import React from 'react'
import Menu from './MenuApi'
import MenuCard from './MenuCard'

const Gallery = () => {
    const [menuData, setMenuData] = React.useState(Menu);

    const filterItem = (category) => {
        const updatedList = Menu.filter((currElem) =>{
            return currElem.category === category;
        })

        setMenuData(updatedList);
    };

  return (
    <>
    <div className='flex-container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <span style={{padding: "8px"}}><button 
                        className="btn btn-light btn-lg"
                        onClick={()=>filterItem("Breakfast")}>
                        Breakfast
                    </button></span>
                    <span style={{padding: "8px"}}><button 
                        className="btn btn-light btn-lg"
                        onClick={()=>filterItem("Lunch")}>
                        Lunch
                    </button></span>
                    <span style={{padding: "8px"}}><button 
                        className="btn btn-light btn-lg"
                        onClick={()=>filterItem("Dinner")}>
                        Dinner
                    </button></span>
                    <span style={{padding: "8px"}}><button 
                        className="btn btn-light btn-lg"
                        onClick={()=>setMenuData(Menu)}>
                        All
                    </button></span>
                </div>
            </div>
        </nav>
    </div>
    <MenuCard menuData={menuData}/>
    </>
  )
}

export default Gallery