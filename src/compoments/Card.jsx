/*import './card.css'
function Card() {
    return (
        <div className="card bg-dark ">
            <h3>item 1</h3>
            <div>           
                 <img src="./src/assets/card.png" alt="cardimg" />
                 <span></span>
                 <span></span>
                 <div className="card-text">
                    <div>
                        <span>Current bid</span>
                        <span><img src="/NUZ_logo_3Dcoin_pose01.svg" alt="" /> 5.3 $NUZ</span>
                    </div>
                    <button>

                    </button>

                 </div>

</div>
        </div>
    )
}export default Card

*/

import "./Card.css"; 

const Card = ({ 
  image, 
  badgeIcon,
  title, 
  pic,
  // eslint-disable-next-line react/prop-types
  price, 
  badgeText, 
  buttonText ,
  iconimg,
  rareIcon,
}) => {
  return (
    <div className="one m-2"> 
    <div className="card ">
           <h3 className="card-title">{title}</h3>
<div>      

      <img src={image} alt={title} className="card-image" />
      <div >
       <div className="iconimg">  <img src={iconimg} alt="incoming"/></div>

       <div className="card-badge text-whit e">
             <div className="text-white">{badgeIcon}
             
               <img className="fire" src="./Vector (Stroke).svg"></img>{badgeText }</div></div> 

      </div></div>
      <div className="card-text ">
        <div  className="">  
      <span className="card-price text-white">Current bid: </span>
      <div className="card-amount">
      <img src={pic} alt={title} className="card-pic " />
        {price}</div></div>
        <div>   
             <button className="card-button text-white">{buttonText}</button>
</div>
    
    </div>
    </div></div>
  );
};

Card.defaultProps = {
  image: "/card.png", 
  title: "item 1", 
  pic:"/NUZ_logo_3Dcoin_pose01.svg",
  price:"5.3 $NUZ", // 
  badgeText: "Rare",
  buttonText: "BUY", // 
  iconimg:'/icon-park-outline_ad-product.svg',

};



export default Card;
