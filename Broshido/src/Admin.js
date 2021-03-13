import { NavLink } from "react-router-dom";
import "./Styles/AdminStyles.css";
import useGlobal from "./Store";
import React, { useState, useEffect } from "react";

function Admin() {
  const [globalState, globalActions] = useGlobal();
  const [data, setData] = useState({ types: [], samurai: [] });
  useEffect(() => {
    fetch("https://broshido.fawa.space/samurai.php")
      .then(response => response.json())
      .then(json => {
        const samuraiSet = new Set();
        json.forEach(item => samuraiSet.add(item.type));
        setData({ types: [...samuraiSet], samurai: json });
      });
  }, []);

  return (
    <>
      {globalState.orders.map(order => {
        return (
          <div className="admin_wrapper">
            <div>
              <h4>Order Id:</h4>#{order.orderId}
            </div>
            <div>
              <h4>Status: </h4>
              {order.status}
            </div>
            <button onClick={() => globalActions.cancelOrder(order.orderId)}>
              Cancel Order
            </button>
          </div>
        );
      })}
      {data.types.map(item => (
        <div className="all_samurai_admin">
          <div className="section_header">
            <h1>{item}</h1>
          </div>
          <div className="samurai_admin_grid">
            <span className="header">ID</span>
            <span className="header">Name</span>
            <span className="header">Image</span>
            <span className="header">Type</span>
            <span className="header">Price</span>
            <span className="header">Edit</span>
            {data.samurai.map(samurai => {
              return samurai.type == item ? (
                <AdminSamuraiRow
                  samurai={samurai}
                  types={data.types}
                  typeId={
                    data.types.findIndex(type => type === samurai.type) + 1
                  }
                />
              ) : null;
            })}
          </div>
        </div>
      ))}
    </>
  );
}
function AdminSamuraiRow(props) {
  const [samuraiInfo, setSamuraiInfo] = useState({
    id: props.samurai.id,
    name: props.samurai.name,
    image: props.samurai.image,
    type: props.typeId,
    price: props.samurai.price
  });
  return (
    <>
      <span>{props.samurai.id}</span>
      <span>
        <input
          onChange={e =>
            setSamuraiInfo({ ...samuraiInfo, name: e.target.value })
          }
          defaultValue={props.samurai.name}
        />
      </span>
      <span>
        <input
          onChange={e =>
            setSamuraiInfo({ ...samuraiInfo, image: e.target.value })
          }
          defaultValue={props.samurai.image}
        />
      </span>
      <span>
        <select
          onChange={e =>
            setSamuraiInfo({ ...samuraiInfo, type: e.target.selectedIndex + 1 })
          }
          defaultValue={props.samurai.type}
        >
          {props.types.map((type, idx) => (
            <option value={type} data-id={idx}>
              {type}
            </option>
          ))}
        </select>
      </span>
      <span>
        <input
          onChange={e =>
            setSamuraiInfo({ ...samuraiInfo, price: e.target.value })
          }
          defaultValue={props.samurai.price}
        />
      </span>
      <span>
        <button onClick={() => editSamurai(samuraiInfo)}>Apply</button>
        <button onClick={() => deleteSamurai(samuraiInfo.id)}>Delete</button>
      </span>
    </>
  );
}
function editSamurai(info) {
  let formData = new FormData();
  for (const [key, value] of Object.entries(info)) {
    formData.append(key, value);
  }
  fetch("https://broshido.fawa.space/edit.php", {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(function(response) {
      console.log(response);
    });
}
function deleteSamurai(info) {
  let formData = new FormData();
  formData.append("id", info);

  fetch("https://broshido.fawa.space/delete.php", {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(function(response) {
      console.log(response);
    });
}

export default Admin;
