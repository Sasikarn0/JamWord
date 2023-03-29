import React,{useState,useRef} from 'react';

function Header(){
    const [toggle, setToggle] = useState(false);
    const Space = useRef(false)

    return (
        <div ref = {Space} onClick={() =>{}} style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: 10, left: 10,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img src="images/logo-white.jpg" alt="Logo"style={{width: 70, height: 70,backgroundColor:"pink"}} />
            <h2 style={{paddingLeft:5,fontSize:17,fontWeight:"bold",color:"blue"}}>JamWord</h2>
          </div>
            <div
              onMouseEnter={() => setToggle(true)}
            style={{ position: "absolute", top: -3, right: 20,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img src="images/student.png" alt="Logo"style={{width: 40, height: 40}} />
            <p style={{paddingLeft:5,fontSize:17,fontWeight:"bold",color:"blue",paddingTop:20}}>Hi, Pattie</p>
          </div >
          {toggle ? (
              <div onMouseLeave={() => setToggle(false)} style={{ position: "absolute", right: 30, top: 50,backgroundColor:"#FECC81",marginTop:10,borderRadius:50,padding:10,display:"flex",justifyContent:"center",alignItems:"center",color:"#C98723",fontWeight:"bold" }}>
                <h3>Logout</h3>
              </div>
            ) : null}
            
        </div>
      );
    }
    
    export default Header;
    