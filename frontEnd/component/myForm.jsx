import { useState } from "react";
import '../form.css'
import Modal from "./Modal";
export default function MyForm() {
  const [errorMass,setErrorMass]=useState(null)
  const [ShowModal,setShowModel]=useState(false)
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    isStudent: false,
    city : "",
    type:""
  });
  function handelSubmit(event){
   event.preventDefault();
   setErrorMass(null)
   if(formInputs.phone.length <12){
    setErrorMass("Error : the phone Number is not Allowed")
   }
   setShowModel(true)
  }
  function handelCheckBox(event) {
    setFormInputs({ ...formInputs, isStudent: event.target.checked });
  }
  const btnDisabled =formInputs.name==""||formInputs.age<22||formInputs.email==""||formInputs.isStudent==false;
  return (
    <div className="flex "
    onClick={()=>{
      if(ShowModal)
      setShowModel(false)
    }}
     style={{flexDirection:"column"}}>
    <form
    className="flex"
    id="loanForm"
    style={{flexDirection:"column"}}
      onSubmit={(event) => {
        event.preventDefault();
        console.log(formInputs);
      }}
    >
         <h1 >Requesting a Loan</h1>
            <hr>
            </hr>
      <label> Name: </label>
      <input 
        value={formInputs.name}
        onChange={(e) => {
          setFormInputs({ ...formInputs, name: e.target.value });
        }}
      ></input>
      <hr className="hr"></hr>
      <label> Email: </label>
      <input
        value={formInputs.email}
        onChange={(e) => {
          setFormInputs({ ...formInputs, email: e.target.value });
        }}
      ></input>
      <hr></hr>
      <label> Age: </label>
      <input
        value={formInputs.age}
        onChange={(e) => {
          setFormInputs({ ...formInputs, age: e.target.value });
        }}
      ></input>
      <hr></hr>
      <label> Phone Number: </label>
      <input
        value={formInputs.phone}
        onChange={(e) => {
          setFormInputs({ ...formInputs, phone: e.target.value });
        }}
      ></input>
      <hr></hr>
      <label>Are You employee ?</label>
      <input
        type="checkbox"
        checked={formInputs.isStudent}
        onChange={handelCheckBox}
      />
      <hr></hr>
      <label>Salary</label>
      <select
      value={formInputs.city}
      onChange={(e)=>{setFormInputs({...formInputs,city:e.target.value})}}>
        <option>Less Than 2000</option>
        <option>between 2000 and 5000</option>
        <option>more than 5000</option>
      </select>
     <hr />
      <button 
      className={btnDisabled ? "disabled" : ""}
      onClick={handelSubmit}
      disabled={ btnDisabled }
      >Submit</button>
    </form>
    <Modal errorMassage={errorMass} isVisable={ShowModal} />
    </div>
  );
}
