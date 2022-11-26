import { useEffect, useState}  from "react";
import http from "../../http";
import { useNavigate,useParams } from "react-router-dom";




function Edit(props){
const vavigate=useNavigate();
const [inputs,setInputs]=useState({});
const {id}=useParams();


useEffect(()=>{
  fetchUser();
},[]);

const fetchUser=()=>{
  http.get('/users/'+id+'/edit').then((res)=>{
    setInputs({
      fname:res.data.fname,
      lname:res.data.lname,
    });
  });
}

const handleChange=(event)=>{
    const name=event.target.name;
    const  value=event.target.value;
   
    setInputs(values=>({...values,[name]:value}))
}

 const submitForm=()=>{
  
 http.put('/users/'+id,inputs).then((res)=>{
  vavigate('/');
  
   })
 }
    return (
        <div>
          
                 <form  enctype="multipart/form-date">
                
                    <input type="text" name="fname" 
                    value={inputs.fname || ''  }
                    onChange={handleChange}
                   />
                    <input type="text" name="lname"
                       value={inputs.lname || ''  }
                       onChange={handleChange}
                    />
                    <button type="button" onClick={submitForm}>Update</button>
                  </form>
        </div>
    );
}

export default Edit;