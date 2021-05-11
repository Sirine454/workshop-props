import React from "react";
import Item from './Items';
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const ItemList = ({ itemArray }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>View</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {itemArray.map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ItemList;
