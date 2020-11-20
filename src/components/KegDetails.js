import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete} = props;
  // const { keg } = props;
  
  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <hr/>
      <h3>Name: {keg.name}</h3>
      <p>Brand: {keg.brand}</p>
      <p>Price: ${keg.price}</p>
      <p>Alcohol Content: {keg.alcoholContent} %ABU</p>
      <p>Quantity: {keg.quantity}</p>
      
      <button className="btn btn-outline-info btn-block" onClick={() => onClickingDelete(keg.id) }>Delete This Keg</button>
      <button className="btn btn-outline-info btn-block" onClick={ props.onClickingEdit }>Edit This Keg</button>

      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default KegDetail;
