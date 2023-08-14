import React, { useState } from "react";
import "./subscribe.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Subscribe = () => {
  const [input, setInput] = useState(false)
  const handleClick = () => {
    if(!input){
      toast.error("Enter Your Email");
    }
    else{
      toast.success("Subscribed!")
    }
  };
  return (
    <div id="contact" className="subscribe">
      <div className="subscribeRow">
        <h2 className="subscribeTitle">Save time, save money!</h2>
        <p className="subscribeDesc">
          Sign up and we'll send the best deals to you.
        </p>
        <div className="subscribeInput">
          <input onChange={()=>setInput(true)} type="email" placeholder="Your E-mail" />
          <button onClick={handleClick}>Subscribe</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Subscribe;
