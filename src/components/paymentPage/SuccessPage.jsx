import React from "react";
import { useContext } from "react";
import { CreatedContext } from "../../utils/Context";

const SuccessPage = () => {
  const { cartItems } = useContext(CreatedContext);
  return (
    <div>
      <h1 style={{}}>SuccessPage</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h1>{item.attributes.title}</h1>
          console.log(item);
        </div>
      ))}
    </div>
  );
};

export default SuccessPage;
