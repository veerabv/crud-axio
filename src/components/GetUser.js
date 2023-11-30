import React , {useEffect, useState}from 'react';
import '../App.css';
import { useParams , useNavigate} from 'react-router-dom';
import axios from 'axios';


function GetUser() {
    useEffect(() => {
        axios
        .get(`https://6556185884b36e3a431f048b.mockapi.io/users/${id}`)
        .then((res) => getUser(res.data));
      },[]);
    const navigate =useNavigate();
    const {id} = useParams();
    const [user,getUser] = useState({});
   
  return (
    <div  className="user-List">
    <img className="avatar" src={user.avatar} alt={user.name} />
    <div className="user-Detail">
      <span>
        Name: <b>{user.name}</b>
      </span>
      <p>
        ID: <b>{user.id}</b>
      </p>
      <button className="btn-style" onClick={() => navigate("/")}>Back</button>

     
    </div>
  </div>
  
  )
}

export default GetUser

 