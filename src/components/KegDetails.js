import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  // const { keg, onClickingDelete} = props;
  const { keg } = props;
  
  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>Name: {keg.name}</h3>
      <p>Brand: {keg.brand}</p>
      <p>Price: ${keg.price}</p>
      <p>Alcohol Content: {keg.alcoholContent} %ABU</p>
      <p>Quantity: {keg.quantity}</p>
      
      {/* <button className="btn btn-outline-danger btn-block" onClick={() => onClickingDelete(product.id) }>Delete This Part</button> */}
      <button className="btn btn-outline-light btn-block" onClick={ props.onClickingEdit }>Edit This Part</button>

      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func
  // onClickingDelete: PropTypes.func,
}

export default KegDetail;
