import React from "react";
import PropTypes from "prop-types";


function Keg(props){
  return (    
      <div className="keg">
        <div onClick = {() => props.onKegSelection(props.id)}>
          <h4>{props.name}</h4>
          <p>{props.brand}</p>
          <p>${props.price}</p>
          <p>Alcohol content: {props.alcoholContent}%</p>
          <p>Quantity: {props.quantity}</p>
        </div>
        <button className="btn btn-outline-info btn-sm" onClick = {() => props.onPourPint(props.id)}>Pour a pint!</button>
      </div>

    
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
  onKegSelection: PropTypes.func,
  onPourPint: PropTypes.func
}

export default Keg;