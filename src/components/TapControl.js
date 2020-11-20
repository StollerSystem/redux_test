import React from 'react';



class TapControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTapList: [],
      formVisibleOnPage: false,
      selectedProduct: null
    }
  }
}

export default TapControl;
