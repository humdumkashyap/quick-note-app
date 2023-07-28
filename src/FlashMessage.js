import React from "react";

function FlashMessage({ showFlasMessage, message }) {
  return (
    <>
      <div className={"flashmesage " + (showFlasMessage ? "active" : "")}>
        {message}
      </div>
    </>
  );
}

export default FlashMessage;
