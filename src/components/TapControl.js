import React from 'react';
import TapList from "./TapList.js"


class TapControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTapList: [],
      formVisibleOnPage: false,
      selectedProduct: null
    }
  }

  render() {
    let currentVisibleState = null;
    // let buttonText = null;


    currentVisibleState = <TapList/>

    return (
      <React.Fragment>
        <div className="container">

          {currentVisibleState}

        </div>
      </React.Fragment>

    );
    


  }



}

export default TapControl;
