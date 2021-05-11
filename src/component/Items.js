import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Items = ({ item }) => {
  const handleClick = () => {
    alert(
      `item name: ${item.name}
    item price: ${item.price}`
    );
  };

  return (
    <tr>
      <th scope="row">
        <Button variant="primary" onClick={handleClick}>
          Product Details
        </Button>
      </th>
      <td>
        <img src={item.imgSrc} alt={item.name} style={{ width: "200px" }} />
      </td>
      <td>{item.name}</td>
      <td>{item.price}</td>
    </tr>
  );
};

export default Items;
