import { useState}  from "react";
import http from "../../http";
import { useNavigate} from "react-router-dom";
function Create(){
const [inputs,setInputs]=useState({});
const vavigate=useNavigate();
const handleChange=(event)=>{

    const name=event.target.name;
    const  value=event.target.value;
    setInputs(values=>({...values,[name]:value}))
}

 const submitForm=()=>{
  
 http.post('/users',inputs).then((res)=>{
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
                    <button type="button" onClick={submitForm}>Save</button>
                  </form>
        </div>
    );
}

export default Create;