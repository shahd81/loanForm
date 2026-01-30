
import './App.css'
import { useState } from 'react';
  let nextId=5;
function App() {

  const [deviceInputValue,setDeviceInputValue]=useState("")

  const [devices ,setDevices]=useState([
    {id:1 ,name:'mac'},{id:2,name:"windoes"},{id:3,name:"iphone"},{id:4,name:"samsung"} ])
 const devicesList= devices.map((device)=>{
   return (
    <li key={device.id} >{device.name}
    <button onClick={()=>{handelDeleteClick(device.id)}}>Delete</button>
    <button onClick={()=>{handelEditClick(device.id)}}>Edit</button>
    </li>
   )
 });
 function AddDevice (){
  // const NewArr=[...devices];
  // NewArr.push(deviceInputValue);
  // setDevices(NewArr)
  setDevices([...devices,{id:nextId,name:deviceInputValue}])
  nextId++;
 }
 function handelDeleteClick(id){
  const newDevices = devices.filter((device)=>{
    return device.id !=id
  })
  setDevices(newDevices)
 }
 function handelEditClick(id){
  const newDevices = devices.map((device)=>{
   if(device.id==id){
    let newDevice= {...devices,name:device.name+"6"}
    return newDevice
   }else
    return device
  });
  setDevices(newDevices)
 }
  return (
  <div>
    {devicesList}
    <input value={deviceInputValue}
    onChange={(e)=>setDeviceInputValue(e.target.value)
      
    }/>
    <button onClick={AddDevice}>Add</button>
  </div>
   
  );
}

export default App
