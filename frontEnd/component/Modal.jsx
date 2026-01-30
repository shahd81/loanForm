import PropTypes from "prop-types"
import React from 'react' ;
export default function Modal({ isVisable ,errorMassage=null}) {
      if (!isVisable) return null;
     if(isVisable){
  return(
    <div className="modal">
        <div className="modal-content">
            <h1 style={{color :errorMassage?"red" :"green"}}> {errorMassage ? errorMassage : "The Form Has Been Submitted succesfully"}</h1>
        </div>
    </div>
  )
}else
    return <></>

}
Modal.propTypes = {
  isVisable: PropTypes.bool.isRequired,
  errorMassage: PropTypes.string
};
