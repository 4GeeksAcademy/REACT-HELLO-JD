import React from 'react';
import Proptypes from 'prop-types';
import { text } from '@fortawesome/fontawesome-svg-core';

const Card = ({image, title, text ,buttonName}) => {
  return (

    
<div className="card my-3 text-center" style={{ width: "18rem", display: "inline-block", margin: "10px" }}>
      <img src={image} className="card-img-top" alt="..." style={{ height: "290px", objectFit: "cover" }}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <div className="div">
        <a href="#" className="btn btn-primary mt-auto align-self-center">{buttonName}</a>
        </div>
          </div>
        </div>

  )
};

Card.proptypes = {
image: Proptypes.string.isRequired,
title: Proptypes.string.isRequired,
text: Proptypes.string.isRequired,
buttonName: Proptypes.string.isRequired,
}

export default Card;