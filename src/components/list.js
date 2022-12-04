import { useState } from "react";

let houselist = [
  {
    id: 1,
    name: "House 1",
    address: "Midnapore",
  },
];

function Add({ add }) {
  return (
    <>
      <input id="houseId" placeholder="House ID"></input>
      <input id="houseName" placeholder="House Name"></input>
      <input id="address" placeholder="House Address"></input>
      <button onClick={add}>Add!</button>
    </>
  );
}

export function List() {
  const [houses, addHouses] = useState(houselist);
  function add() {
    addHouses([
      ...houses,
      {
        id: document.getElementById("houseId").value,
        name: document.getElementById("houseName").value,
        address: document.getElementById("address").value,
      },
    ]);
  }
  return (
    <>
      <Add add={add} />
      <h3>House list!</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {houses.map(({ id, name, address }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
