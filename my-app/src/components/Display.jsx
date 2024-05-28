import Card from "./Team"
import { useEffect, useState } from "react";

function Display(){
    const [data,setData] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:8000/getData").then((res)=>res.json())
    .then((res)=>setData(res));
  },[]);
    return (
        <>
        <h1>TEAM MEMBERS</h1>
      <div className="main">
        {data.map((item,ind)=>{
          return <Card key={ind} pos={item.position} name={item.name} desc={item.description} imagefile={item.image}/>
        })}
     </div>
     </>
    );
}

export default Display;