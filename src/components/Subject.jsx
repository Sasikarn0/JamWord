import React from "react";
import { useLocation,useNavigate } from "react-router-dom";
import Header from "./unit/Header";

export default function Subject(){
    const location = useLocation();
    const {subjectName} =location.state
    console.log(location)

    const choice = [
        {
          choiceName: "Flashcards",
          subjectImg: "images/flash-card.png",
        },
        {
            choiceName: "Games",
          subjectImg: "images/video-game.png",
        },
      ];

    const navigate = useNavigate();
    const chooseSubject = (itemsubjectName) => {
      navigate("/4", {
          state: {
            choiceName: itemsubjectName,
          },
      });
    }
    
    const renderSubjectFlashorGame = () => {
        return (
            <div style={{display:"flex",justifyContent:"center"}}>
                  {choice.map((item, index) => (
                    <div key={index}>
                      <button style={{background:"white",border:"none",width:300,height:300,margin:30}} onClick={() => chooseSubject(item.choiceName)}>
                        <div style={{margin:40,display:"flex",alignItems:"center",justifyContent:"center",background:"#F2E8B4",paddingTop:40,paddingBottom:40,borderRadius:30}}>
                            <img src={item.subjectImg} alt={item.choiceName} style={{width:50}} />
                        </div>
                        <h3 style={{width:250,fontSize:20,margin:20}}>{item.choiceName}</h3>
                      </button>
                    </div>
                  ))}
                  </div>
                );
              };

    const back = () => {
        navigate("/2")
    }

    return(
        <div>
      <div style={{ display: "flex", backgroundColor: "green", height: 820}}>
        <div style={{ width: "100%", height: "100%", background:"white"}}>
          <Header />
          <div>
          <div onClick={()=> back()} style={{ position: "absolute", top: 90, left: 80,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img src="images/back.png" alt="back"style={{width: 60, height: 60}} />
          </div>
            <h1 style={{color:"green",textAlign:"center",paddingTop:100,paddingBottom:50}}>{subjectName}</h1>
          </div>
          {renderSubjectFlashorGame()}
          </div>
        </div>
    </div>
      );
    }
        // <div>{subjectName}</div>
