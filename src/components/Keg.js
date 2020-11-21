import React from "react";
import PropTypes from "prop-types";


function Keg(props){

  let alert = null
  if (props.quantity <= 0) {
    alert = <span className="redAlert">Out of stock</span>
  } else if (props.quantity <= 10) {
    alert = <span className="redAlert">Almost Empty</span>
  }

  return (    
    <div className="keg">          
      <h4>{props.brand} - {props.name} - {props.alcoholContent}%ALC - <span className="green">${props.price}/Pint</span>  {alert}</h4>          
      <p>Quantity (approx pint Pours left): <span className="redAlert">{props.quantity}</span></p>        
      <button className="btn btn-outline-info btn-sm" onClick = {() => props.onPourPint(props.id)}>Pour a pint!</button>
      <button className="btn btn-outline-info btn-sm" onClick = {() => props.onKegSelection(props.id)}>Details</button>
    </div>    
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  quantity: PropTypes.string,
  id: PropTypes.string,
  onKegSelection: PropTypes.func,
  onPourPint: PropTypes.func
}

export default Keg;