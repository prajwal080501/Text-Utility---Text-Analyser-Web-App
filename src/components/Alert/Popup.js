import { Alert } from "bootstrap";
import React from "react";
import "./Popup.css";
function Popup({ alert }) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div className="box">
       {alert &&
    <div className={`alert alert-${alert.type} alert-dismissible fade show `} role="alert">
      <strong>Success</strong>: <strong>{alert.msg}</strong>
      
    </div>}
      </div>
     
  );
}

export default Popup;
