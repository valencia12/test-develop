import React from "react"; 
import Card from "./Card";


const Cards = ({cards, button}) => {
  return <div style={{
    display: 'flex', flexWrap: "wrap", width: '100%',
    justifyContent: "space-evenly"
  }} >
    {cards.map((card) => {
      return <Card card={card} button={button}/>
    })}
  </div>  
}

export default Cards; 