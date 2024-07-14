import { Fragment } from "react";

function ListGroup() {
  let items = ["New york", "Delhi", "Chennai", "Coimbatore", "Trichy"];
  items = [];

  return (
    // <h1>List</h1> this line trows an error, because react does not allow returning multiple elements
    <Fragment>
      {items.length === 0 && <p>No items found</p>}
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
