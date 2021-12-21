import { Alert } from "bootstrap";
import React from "react";

function Popup({ alert }) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
      alert &&
    <div class={`alert alert-${alert.type} alert-dismissible fade show `} role="alert">
      <strong>Success</strong>: <strong>{alert.msg}</strong>
      
    </div>
  );
}

export default Popup;
