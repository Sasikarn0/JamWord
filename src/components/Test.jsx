import React from 'react'

export default function test() {
  return (
    <div 
    style={{background:"pink",width:"100%",height:"100%",display:"flex"}}>
        <div
        style={{background:"red",width:720,height:820,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <div style={{color:"white",fontSize:20}}>
                <h1>Sign in to JamWord</h1>
            </div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <input style={{width:"70%",height:30,fontSize:20,marginBottom:20,borderRadius:10,border:"none",padding:5,marginTop:30}} type="text" placeholder='Student ID'/>
                    <input style={{width:"70%",height:30,fontSize:20,borderRadius:10,border:"none",padding:5}} type="text" placeholder='Password'/>
                </div>
                <div>
                    <button style={{width:120,height:40,fontSize:20,marginTop:50,borderRadius:15,border:"none"}}>SIGN IN</button>
                </div>
        </div>

        <div
        style={{background:"blue",width:720,height:820,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <div >
                <p style={{fontSize:30,fontWeight:"bold",paddingBottom:30,color:"#FEFCF3"}}>Hello, Friend!</p>
            </div>
            <div style={{fontSize:25,fontWeight:"normal",width:"50%",paddingBottom:30,color:"#FEFCF3",textAlign:"center"}}>
                Enter your personal details and start journey with us
            </div>
            <div>
                <button style={{width:140, height: 40,border:"none",marginBottom:10,borderRadius:20,marginTop:20,fontSize:15,color:"#FEFCF3",background:"#439A97",border:"1px solid #FEFCF3"}} type="submit">
                    SIGN UP
                </button>
            </div>
        </div>
        <div>
        </div>
        </div>
    
  )
}
