import { NavLink } from "react-router-dom";
import "./Styles/AdminStyles.css";
import useGlobal from "./Store";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function InsertModal(props) {
  const [globalState, globalActions] = useGlobal();
  const [samuraiInfo, setSamuraiInfo] = useState({
    name: "",
    image: "",
    type: 1,
    price: ""
  });
  function handleInsert(info) {
    addSamurai(info);
    props.onHide();
  }
  function addSamurai(info) {
    let formData = new FormData();
    for (const [key, value] of Object.entries(info)) {
      formData.append(key, value);
    }
    fetch("https://broshido.fawa.space/insert.php", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(function(response) {
        handleResponse(response[0]);
        info.type = props.types[samuraiInfo.type - 1];
        globalActions.setSamuraiList([
          ...globalState.samurai,
          { id: response[1], ...info }
        ]);
        info.type = 1;
      });
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Samurai
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <h4>Name:</h4>
          <input
            type="text"
            onChange={e =>
              setSamuraiInfo({ ...samuraiInfo, name: e.target.value })
            }
          />
        </div>
        <div>
          <h4>Type:</h4>
          <select
            onChange={e =>
              setSamuraiInfo({
                ...samuraiInfo,
                type: e.target.selectedIndex + 1
              })
            }
            defaultValue={0}
          >
            {props.types.map((type, idx) => (
              <option value={type} data-id={idx}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h4>Price:</h4>
          <input
            type="text"
            onChange={e =>
              setSamuraiInfo({ ...samuraiInfo, price: e.target.value })
            }
          />
        </div>
        <div>
          <h4>Image:</h4>
          <input
            type="text"
            onChange={e =>
              setSamuraiInfo({ ...samuraiInfo, image: e.target.value })
            }
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={() => handleInsert(samuraiInfo)}>Add</button>
      </Modal.Footer>
    </Modal>
  );
}

function Admin() {
  const [globalState, globalActions] = useGlobal();
  const [data, setData] = useState({ types: [], samurai: [] });
  const [modalInfo, setModalShow] = useState(false);

  useEffect(() => {
    fetch("https://broshido.fawa.space/samurai.php")
      .then(response => response.json())
      .then(json => {
        const samuraiSet = new Set();
        json.forEach(item => samuraiSet.add(item.type));
        globalActions.setSamuraiList(json);
        setData({ types: [...samuraiSet], samurai: json });
      });
  }, []);

  return (
    <>
      <InsertModal
        show={modalInfo}
        onHide={() => setModalShow(false)}
        types={data.types}
      />
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
            <FontAwesomeIcon
              icon={["fas", "plus-square"]}
              size="2x"
              onClick={() => setModalShow(true)}
            />
          </div>
          <div className="samurai_admin_grid">
            <span className="header">ID</span>
            <span className="header">Name</span>
            <span className="header">Image</span>
            <span className="header">Type</span>
            <span className="header">Price</span>
            <span className="header">Edit</span>
            {globalState.samurai.map(samurai => {
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
  const [globalState, globalActions] = useGlobal();
  const [samuraiInfo, setSamuraiInfo] = useState({
    id: props.samurai.id,
    name: props.samurai.name,
    image: props.samurai.image,
    type: props.typeId,
    price: props.samurai.price
  });

  function deleteSamurai(info) {
    let formData = new FormData();
    formData.append("id", info);

    fetch("https://broshido.fawa.space/delete.php", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(function(response) {
        handleResponse(response);
        globalActions.setSamuraiList(
          globalState.samurai.filter(samurai => samurai.id !== info)
        );
      });
  }
  return (
    <>
      <span className="mobile_header">ID:</span>
      <span className="id_number">{props.samurai.id}</span>
      <span className="mobile_header">Name:</span>
      <span>
        <input
          onChange={e =>
            setSamuraiInfo({ ...samuraiInfo, name: e.target.value })
          }
          defaultValue={props.samurai.name}
        />
      </span>
      <span className="mobile_header">Image:</span>
      <span>
        <input
          onChange={e =>
            setSamuraiInfo({ ...samuraiInfo, image: e.target.value })
          }
          defaultValue={props.samurai.image}
        />
      </span>
      <span className="mobile_header">Type:</span>
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
      <span className="mobile_header">Price:</span>
      <span>
        <input
          onChange={e =>
            setSamuraiInfo({ ...samuraiInfo, price: e.target.value })
          }
          defaultValue={props.samurai.price}
        />
      </span>
      <span className="mobile_header">Edit:</span>
      <span>
        <button onClick={() => editSamurai(samuraiInfo)}>Apply</button>
        <button onClick={() => deleteSamurai(samuraiInfo.id)}>Delete</button>
      </span>
    </>
  );
}
function handleResponse(response) {
  response === "success"
    ? toast.success("Success")
    : toast.error("Unsuccessful");
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
    .then(response => handleResponse(response));
}

export default Admin;
