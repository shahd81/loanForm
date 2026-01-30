import { useState } from "react";
export default function TextInput(){
  const [TextInput,setTextInput] = useState("");
    function handelInput (text) {
       setTextInput(text.target.value);
        // setTextInput(text.target.value);
    }
    return (
        <div>
         <label>Name</label>
         <input
         value = {TextInput }
          onChange={handelInput}
         />
        </div>
    );
       
        
    }
