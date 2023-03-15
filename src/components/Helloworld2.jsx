import React , { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Helloworld() {
    const [products, setProduct] = useState([]);

    subject = [
        {
          "name": "Introduction to Computational Thinking",
          "img": "My first blog post"
        },
        {
          "name": 2,
          "img": "My second blog post"
        }
      ]

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("https://dummyjson.com/products")
            setProduct(res.data.products);
            console.log(res);
        };
        fetchData()
    },[]);

    return(
        <div>Hi</div>
        // <div style={{}}>
        //     <div style={{display:"flex", width:2000, flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
        //     {products ? 
        //         products.map((item,index) =>{
        //             console.log(item)
        //             return (
        //                 <div key={index} style={{borderWidth:1, width:200, height: 100, margin:20, padding:10, backgroundColor:"yellow",borderRadius:10}}>
        //                     <div>
        //                         <img src={item.images[0]} alt={item.brand} style={{width:50,height:50}} />
        //                     </div>
        //                     <div>
        //                         <p>{item.brand}</p>
        //                     </div>
        //                 </div>
        //             )
        //         })
        //     : null}
        //     </div>
        // </div>
    )
}