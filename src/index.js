import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200?grayscale";

ReactDOM.render(
  <div>
    <h1 className="heading">My favourite random grayscale image</h1>
    <div>
      <img src={img} alt="random" />
    </div>
  </div>,
  document.getElementById("root")
);
