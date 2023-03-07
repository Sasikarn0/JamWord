import React from 'react'

export default function Helloworld() {
  return (
    <div
      style={{ display: "flex", backgroundColor: "yellow", justifyContent: "space-around", height: 920, }}
    >
      <div style={{ width: "100%", height: "100%", backgroundColor: "wheat", display: "flex", justifyContent: "center" }}>

	<div style={{display:"flex", alignItems:"center", width:400, height:300,flexDirection:"column",marginTop:250}}>
		<div style={{ marginTop:20,marginBottom:20}}>
			<p style={{fontSize:25,fontWeight:"bold"}}>Sign in to JamWord</p>
		</div>
		<div style={{display:"flex",flexDirection:"column" }}>
			<input style={{width: "100%", height: 25,border:"none",marginBottom:10,borderRadius:10,padding:10}} type="text" placeholder="Student ID"/>
			<input style={{width: "100%", height: 25,border:"none",marginBottom:10,borderRadius:10,padding:10}} type="text" placeholder="Password"/>
		</div>
		<div>
			<button style={{width:100, height: 25,border:"none",marginBottom:10,borderRadius:10,marginTop:20}} type="submit">
				SIGN IN
			</button>
		</div>
	</div>

      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "whitesmoke",
        }}
      >
        Hello Friend
      </div>
    </div>
  );
}
