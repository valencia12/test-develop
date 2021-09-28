
import React from 'react'; 
export default function Card({card, button}) {
    
    return (
      <div className="card" style={{ margin: "2rem", width: '30rem', backgroundColor: "#9F9F9F"}}>
        <img
          src={card.ally.mini_logo_full_path}
          className="card-img-top logos"
          alt={card.name}
        />
        <img
          src={card.vector_full_path}
          className="card-img-top logos"
          alt={card.title}
        />
        <div className="card-body">
          <h6 className="card-title">{card.title}</h6>
          <p className="card-text">{card.description}</p>
        </div>
        {button && (
          <a href="#" class="btn btn-primary">
            lo Quiero!
          </a>
        )}
      </div>
    );
    
}
