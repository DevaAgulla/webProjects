import Card from "./Team"
import { useEffect, useState } from "react";
import './../App.css';
function Search(){
    const [element,setElement] = useState("");
    const [orgData,setOrgData] = useState([]);
    const [data,setData] = useState([]);
  useEffect(()=>{
    var url = "http://localhost:8000/getData";
    if(element!==""){
        url = "http://localhost:8000/Search/"+element;
    }
    //console.log(element)
    fetch(url).then((res)=>res.json())
    .then((res)=>{
        setData(res);
        console.log(res);
    });
  },[element]);
    const handleButton = (evt)=>{
        evt.preventDefault();
        setData(orgData.filter((item)=>{
            return item.position.toLowerCase().search(element.toLowerCase())!==-1 || 
            item.name.toLowerCase().search(element.toLowerCase())!==-1 || 
            item.description.toLowerCase().search(element.toLowerCase())!==-1;
        }))

    }
    const handleInput = (evt)=>{
        setElement(evt.target.value);
        console.log(element)
    }
    return (
        <>
        <div className="Search">
            <input type="text" placeholder="Type here..." onChange={(evt)=>{handleInput(evt)}}></input>
            <button onClick={(evt)=>{handleButton(evt)}} >Search</button>
        </div>
        <h1>TEAM MEMBERS</h1>
      <div className="main">
        {data.map((item,ind)=>{
          return <Card key={ind} pos={item.position} name={item.name} desc={item.description} imagefile={item.image}/>
        })}
     </div>
     </>
    );
}

export default Search;