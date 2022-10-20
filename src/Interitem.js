import { useState } from "react";

function Interitem({anyItem}) {
    const [showText, setShowText] = useState(false);
    const sck = (item) => {
        item.showMore = !item.showMore;
        setShowText(!showText)
    }
  
    return (
        <div className="products">
            {anyItem.map(item => {
            const {id, name, description, image, showMore} = item;
            return (
                <div key = {id} className="product-card">
                    <img src={image} width="400px" height="300px" alt="interior"/>
                    <h2>{name}</h2>
                    <p className="descr">{showMore ? description : description.substring(0, 100) + "....."}
                    <button className="showButton" onClick={() => sck(item)}>{showMore ? "Show less" : "Show more"}</button>
                    </p>
                </div>
                
            )
            })} 
        </div>
    )
}
export default Interitem;
