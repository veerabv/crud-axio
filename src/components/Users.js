import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate =useNavigate();
const deleteUser = (id) => {
// console.log(id);
axios
      .delete(`https://6556185884b36e3a431f048b.mockapi.io/users/${id}`)
      .then((res)=> getMovies());

}

const getMovies = () => {
  axios
  .get("https://6556185884b36e3a431f048b.mockapi.io/users")
  .then((res) => setUsers(res.data));
}

  useEffect(() => {
    getMovies()
  }, []);
  const userList = users.map((user) => (
    <div key={user.id} className="user-List">
      <img className="avatar" src={user.avatar} alt={user.name} />
      <div className="user-Detail">
        <span>
          Name: <b>{user.name}</b>
        </span>
        <p>
          ID: <b>{user.id}</b>
        </p>.
        <button className="btn-style" onClick={() => navigate(`/user-detail/${user.id}`)}>Get User</button>
        <button className="btn-style" onClick={()=>deleteUser(user.id)}>Delete</button>
        <button className="btn-style">Edit</button>
      </div>
    </div>
  ));
  return userList;
}

export default Users;
