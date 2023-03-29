import React from 'react'
import { useLocation,useNavigate } from "react-router-dom";

export default function Flashcard() {
    const location = useLocation();
    const {choiceName} =location.state
    console.log({choiceName})

    const comThink = [{vocab: "Float type", meaning: "one of the built-in data types provided by Python, which represents one of the two values."},
    {vocab: "compile", meaning: "The compile method computes the Python code from a source object and returns it"},
    {vocab: "IDLE", meaning: "an integrated development environment (IDE) for Python. The Python installer for Windows contains the IDLE module by default."},
    {vocab: "Floor division", meaning: "a normal division operation except that it returns the largest possible integer. This integer is either less than or equal to the normal division result."},
    {vocab: "Exceptions error", meaning: "this type of error occurs whenever syntactically correct Python code results in an error."}]

    const navigate = useNavigate();
    const Flashcard = (itemvocab) => {
        navigate("/5", {
        state: {
          vocab: itemvocab,
        },
    });
  }
  const close = (itemsubjectName) =>{
    navigate("/3", {
      state: {
        subjectName: itemsubjectName,
      },
  });
}
  const renderFlashcard = () => {
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
              {comThink.map((item, index) => (
                <div key={index}>
                  <button style={{background:"white",border:"none",width:300,height:300,margin:30}} onClick={() => Flashcard(item.vocab)}>
                    <div style={{margin:40,display:"flex",alignItems:"center",justifyContent:"center",background:"#F2E8B4",paddingTop:40,paddingBottom:40,borderRadius:30}}>
                    </div>
                    <h3 style={{width:250,fontSize:20,margin:20}}>{item.vocab}</h3>
                  </button>
                </div>
              ))}
              </div>
            );
          };
          return(
            <div>
          <div style={{ display: "flex", backgroundColor: "green", height: 820}}>
            <div style={{ width: "100%", height: "100%", background:"white"}}>
              <div>
              <div onClick={() => close()}style={{ position: "absolute", top: 40, left: 40,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img src="images/cross.png" alt="back"style={{width: 40, height: 40}} />
              </div>
                <h2 style={{textAlign:"center",marginTop:50}}>1/5</h2>
                <h1 style={{color:"green",textAlign:"center",paddingTop:100,paddingBottom:50}}>{choiceName}</h1>
              </div>
              {renderFlashcard()}
              </div>
            </div>
        </div>
          ); 
        }