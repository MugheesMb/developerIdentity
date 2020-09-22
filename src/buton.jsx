import React from "react";
import {createButton} from "react-social-login-buttons";
import mn from "./mn.svg";
import {createSvgIcon} from "react-social-login-buttons";
 
const config = {
  text: "GitHub",
  icon: createSvgIcon(mn),
 
  style: { background: "#3b5998" },
  activeStyle: { background: "#293e69" }
};
/** My Facebook login button. */
const Github = createButton(config);
 
export default Github;