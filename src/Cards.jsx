import React from 'react';

export const Cards = (props) => {
    return (
        <> 
        <div className="col-md-4 gy-4">
                <img src={props.img} alt="" className="image-fluid"/>
                <div className="info">
                  <span className="category">{props.category}</span>
                  <h3 className="movie_name">{props.name}</h3>
                  <a href="#">
                    <button>Watch Now</button>
                  </a>
                </div>
              </div>
         
        </>
    )
}
export default Cards;
