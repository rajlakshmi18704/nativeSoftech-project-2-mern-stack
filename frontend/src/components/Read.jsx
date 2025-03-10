import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
const Read = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  async function handleDelete(id) {
    const response = await fetch(`https://nativesoftech-project-2-mern-stack.onrender.com/api/v1/users/${id}`, {
      method: "DELETE",
    });
    const result1 = await response.json();
    if (!response.ok) {
      setError(result1.error);
    }
    if (response.ok) {
      console.log("deleted", response.ok);
      setError("Deleted Successfully");
      setTimeout(() => {
        setError("");
        getData();
      }, 1000);
    }
  }
  async function getData() {
    const response = await fetch("https://nativesoftech-project-2-mern-stack.onrender.com/api/v1/users");
    const result = await response.json();
    console.log("result..", result);
    if (!response.ok) {
      setError(result.error);
    }

    if (response.ok) {
      console.log(response.ok);
      setData(result);
      setError("");
    }
  }


  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger"> {error} </div>}
      <div className="row">
        {data?.map((ele) => (
          <div key={ele._id} className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <p className="card-text">{ele.age}</p>
                <Link to={`/edit/${ele._id}`} className="card-link">Edit</Link>
                <Link  onClick={() => handleDelete(ele._id)}>
                  Delete
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
