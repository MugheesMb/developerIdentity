import React from "react";
import { css } from "@emotion/core";

import CircleLoader
from "react-spinners/CircleLoader";
import './cofee.css';
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
margin: 0;
position: absolute;
top: 48%;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
`;
 
class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
      <React.Fragment>
      <div className="sweet-loading">
        <CircleLoader


          css={override}
          size={120}
          color={"Orange"}
         
          loading={this.state.loading}
          
        />
        
      </div>
      <div className=" cofee"  >
           <span  >Making Coffee......</span>
           </div>
      </React.Fragment>
    );
  }
}

export default Spinner;