export default function Helloworld2() {
  return (
    <div
      style={{ display: "flex", backgroundColor: "yellow", justifyContent: "space-around", height: 820}}
      
    >
      <div style={{ width: "100%", height: "100%", background:"white", display: "flex", justifyContent: "center"}}>
        <div style={{ position: "absolute", top: 20, left: 20 }}>
          <img src="images/logo.png" alt="Logo" style={{ width: 50, height: 50 }} />
        </div>
        <div style={{display:"flex", alignItems:"center", width:400, height:300,flexDirection:"column",marginTop:250}}>
          <div style={{ marginTop:20,marginBottom:40}}>
            <p style={{fontSize:30,fontWeight:"bold",color:"#227C70"}}>Sign in to JamWord</p>
          </div>
          <div style={{display:"flex",flexDirection:"column",justifyContent: "center",alignItems: "center"}}>
            <input style={{width: "130%", height: 20,border:"none",marginBottom:10,borderRadius:10,padding:10,background:"#F1F6F5"}} type="text" placeholder="Student ID"/>
            <input style={{width: "130%", height: 20,border:"none",marginBottom:10,borderRadius:10,padding:10,background:"#F1F6F5"}} type="text" placeholder="Password"/>
          </div>
          <div>
            <button style={{width:140, height: 40,border:"none",marginBottom:10,borderRadius:20,marginTop:40,fontSize:15,color:"#FEFCF3",background:"#439A97"}} type="submit">
              SIGN IN
            </button>
          </div>
        </div>

      </div> 
      <div
        style={{
          width: "60%",
          height: "100%",
          background:"#439A97",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          textAlign:"center"
        }}
      >
        <div >
          <p style={{fontSize:30,fontWeight:"bold",paddingBottom:30,color:"#FEFCF3"}}>Hello, Friend!</p>
        </div>
        <div style={{fontSize:25,fontWeight:"normal",width:"50%",paddingBottom:30,color:"#FEFCF3"}}>
          Enter your personal details and start journey with us
        </div>
        <div>
          <button style={{width:140, height: 40,border:"none",marginBottom:10,borderRadius:20,marginTop:20,fontSize:15,color:"#FEFCF3",background:"#439A97",border:"1px solid #FEFCF3"}} type="submit">
            SIGN UP
          </button>
        </div>
      </div>
			
    </div>
  );
}

{/* <div
        style={{background:"yellow",width:720,height:820}}>
            <div
                style={{background:"green",width:300,height:100}}>
            </div>

</div> */}