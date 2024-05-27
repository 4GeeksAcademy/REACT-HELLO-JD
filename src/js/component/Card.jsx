import React from 'react';
import Proptypes from 'prop-types';
import { text } from '@fortawesome/fontawesome-svg-core';

const Card = ({image, title, text ,buttonName}) => {
  return (

    
      <div className="card my-3 " style={{width: "20 rem"}}>
         {/* <img src={image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a href="#" className="btn btn-primary">{buttonName}</a>
          </div> */}
        </div>

  )
};

Card.proptypes = {
image: Proptypes.string.isRequired,
title: Proptypes.string.isRequired,
text: Proptypes.string.isRequired,

}

export default Card;