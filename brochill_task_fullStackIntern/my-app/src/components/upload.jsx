import { useEffect, useState } from "react";
import axios from 'axios'
import './../App.css';
function Upload(){
    const [details,setDetails] = useState({});
  
    const handleChange = (evt)=>{
      setDetails(prevDetails=>({...prevDetails,[evt.target.name]:evt.target.value}))
    }
    const handleSubmit = (evt)=>{
      evt.preventDefault();
      axios.post("http://localhost:8000/upload",{details}).then((res)=>console.log(res));
    }
    return (
        <>
         <h1>Enter team member details</h1>
         <div className="form">
          <form action="http://localhost:8000/upload" method="post" encType="multipart/form-data">
            <div className="innerFrom">
             <div>
            <input type="text" name="name" placeholder="Enter Your Name..." onChange={(evt)=>{handleChange(evt)}}></input>
            </div>
            <div>
            <input type="text" name="position" placeholder="Enter Your Role..." onChange={(evt)=>{handleChange(evt)}}></input>
            </div>
            <div>
            <input type="text" name="description" placeholder="Enter Your Experience..." onChange={(evt)=>{handleChange(evt)}}></input>
            </div>
            <div>
            <div className="innerFormText">
            <div className="innerText">Profile picture </div>
            <input type="file" name="image" onChange={(evt)=>{handleChange(evt)}}></input>
            </div>
            </div>
            <button>Submit</button>
            </div>
          </form>
          </div>
        </>
    )
}

export default Upload;