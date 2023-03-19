import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Helloworld2() {
  const [products, setProduct] = useState([]);

  const subject = [
    {
      subjectName: "Introduction to Computational Thinking",
      subjectImg: "images/settings.png",
    },
    {
      subjectName: "Python",
      subjectImg: "images/file.png",
    },
    {
      subjectName: "Data Structures",
      subjectImg: "images/analysis.png",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      setProduct(res.data.products);
      console.log(res);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  const chooseSubject = () => {
    navigate("/3");
  }

  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "green", height: 820}}>
        <div style={{ width: "100%", height: "100%", background:"white"}}>
          <div style={{ position: "absolute", top: 10, left: 10,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img src="images/logo-white.jpg" alt="Logo"style={{width: 70, height: 70,backgroundColor:"pink"}} />
            <h2 style={{paddingLeft:5,fontSize:17,fontWeight:"bold",color:"blue"}}>JamWord</h2>
          </div>
          <div style={{ position: "absolute", top: -3, right: 20,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img src="images/student.png" alt="Logo"style={{width: 40, height: 40}} />
            <p style={{paddingLeft:5,fontSize:17,fontWeight:"bold",color:"blue",paddingTop:20}}>Hi, Pattie</p>
          </div>
          <div>
            <h1 style={{color:"green",textAlign:"center",paddingTop:100,paddingBottom:50}}>Choose a subject</h1>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
            {subject.map((item, index) => (
              <div key={index}>
                    <button style={{background:"white",border:"none",width:300,height:300,margin:30}} onClick={chooseSubject}>
                        <div style={{margin:40,display:"flex",alignItems:"center",justifyContent:"center",background:"#F2E8B4",paddingTop:40,paddingBottom:40,borderRadius:30}}>
                            <img src={item.subjectImg} alt={item.subjectName} style={{width:50}} />
                        </div>
                        <h3 style={{width:250,fontSize:20,margin:20}}>{item.subjectName}</h3>
                    </button>
                {/* <button style={{border:"none",borderRadius:15,background:"#F2E8B4",width:200,marginLeft:100,marginRight:100,marginBottom:30}} onClick={chooseSubject}>
                  <div style={{margin:40,display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <img src={item.subjectImg} alt={item.subjectName} style={{width:50}} />
                  </div>
                  <h3 style={{width:250,fontSize:20}}>{item.subjectName}</h3>
                </button> */}
                {/* <div>
                  <button style={{border:"none",background:"white",marginLeft:80,marginRight:100}} onClick={chooseSubject}>
                    <h3 style={{width:250,fontSize:20}}>{item.subjectName}</h3>
                  </button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
