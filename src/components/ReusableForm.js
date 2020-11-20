import React from 'react';
import PropTypes from "prop-types";

function NewProductForm(props) {
  
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div className="form-group">
        <input
        className="form-control"
          type='text'
          name='name'
          placeholder='Name' /><br/>
        <input
        className="form-control"
          type='text'
          name='brand'
          placeholder='Brand' /><br/>
        <input
        className="form-control"
          type="number"
          name='price'
          placeholder='Price' /><br/>
        <input
        className="form-control"
          type="number"
          name='alcoholContent'
          placeholder='Alcohol Content' /><br/>
          
        

        <button className="btn btn-outline-danger btn-block" type='submit'>{props.buttonText}</button>
        </div>
      </form>

    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewProductForm;