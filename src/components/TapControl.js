import React from 'react';
import TapList from "./TapList.js"


class TapControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTapList: [{name: "Pilsner", brand: "Breakside", price: 4, alcoholContent: 4.5 }],
      formVisibleOnPage: false,
      selectedProduct: null
    }
  }

  render() {
    let currentVisibleState = null;
    // let buttonText = null;


    currentVisibleState = <TapList 
      availableKegs={this.state.masterTapList}/>

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
