import React from "react";

const Col = props => {
  const coin = props.coin.slice(" ").map(coin => "col-" + coin).join(" ");
  return <div className={coin} {...props} />;
};

export default Col;