import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./unit/Header";

export default function Helloworld2() {
  // const [products, setProduct] = useState([]);

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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get("https://dummyjson.com/products");
  //     setProduct(res.data.products);
  //     console.log(res);
  //   };
  //   fetchData();
  // }, []);

  const navigate = useNavigate();
  const chooseSubject = (itemsubjectName) => {
    navigate("/3", {
        state: {
          subjectName: itemsubjectName,
        },
    });
  }

  const renderSubject = () => {
    return (
      <div style={{display:"flex",justifyContent:"center"}}>
            {subject.map((item, index) => (
              <div key={index}>
                <button style={{background:"white",border:"none",width:300,height:300,margin:30}} onClick={() => chooseSubject(item.subjectName)}>
                  <div style={{margin:40,display:"flex",alignItems:"center",justifyContent:"center",background:"#F2E8B4",paddingTop:40,paddingBottom:40,borderRadius:30}}>
                      <img src={item.subjectImg} alt={item.subjectName} style={{width:50}} />
                  </div>
                  <h3 style={{width:250,fontSize:20,margin:20}}>{item.subjectName}</h3>
                </button>
              </div>
            ))}
            </div>
          );
        };

  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "green", height: 820}}>
        <div style={{ width: "100%", height: "100%", background:"white"}}>
          <Header />
          <div>
            <h1 style={{color:"green",textAlign:"center",paddingTop:100,paddingBottom:50}}>Choose a subject</h1>
          </div>
          {renderSubject()}
          </div>
        </div>
    </div>
      );
    }
