import { useState, useEffect } from "react";

export default function MvTimer(){
  let [t,setT]=useState(null);
  
  useEffect(()=>{
    const timer =setInterval(()=>{
      setT(new Date().toLocaleTimeString());
    },1000) ;

    return ()=>{clearInterval(timer)};
  },[]);



  // let [btnActive, setBtnActive] = useState("");

  // const hide = (e) => {
  //   setBtnActive((prev) => {
  //     return e.target.value;
  //   });
  // };

return(
  <span className="clock">{t}</span>
);

}