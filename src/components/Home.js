import { useState,useEffect }  from "react";
import http  from "../http";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";



function Home(){

  const [users,setUsers]=useState([]);
     useEffect(()=>{
        fetchAllUser();
      },[]);

      const fetchAllUser=()=>{
        http.get('/users').then(res=>{
            setUsers(res.data);
        })
      }
    return(
   <div>
    <h2>Hello Home Screen</h2>
    <table>
       <thead>
        <tr>
            <th>Fname</th> 
            <th>Lname</th>
        </tr>
       </thead>
       <tbody>
        {users.map((user,index)=>
        
        <tr key={user.id}>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>
              <Link to={{pathname:"/edit/"+user.id}}>Edit</Link>
            </td>
        </tr>
        
        )}
        
       </tbody>
    </table>
   </div>
    );
}

export default Home;