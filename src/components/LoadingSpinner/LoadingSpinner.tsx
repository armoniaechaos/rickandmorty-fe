import React from "react";
import { LoadingSpinnerEl } from "./LoadingSpinner.styled";

export default function LoadingSpinner() {
  return (
    <LoadingSpinnerEl>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </LoadingSpinnerEl>
  );
}
