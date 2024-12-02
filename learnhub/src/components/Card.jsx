import { useEffect, useState } from "react";
import React from "react";
import "../../src/assets/css/card.css"
import axios from "axios";
function Card(props) {
  console.log(props.data);
  
  return (
    <>
      {props.data.map((item, index) => {
        let n = item.name.charAt(0).toUpperCase() + item.name.slice(1);
        console.log(n);
        return (
          <div className="card-1" key={index + 1}>
            <div className="flexc-2">
              <div className="img-4">{n.charAt(0)}</div>
              <p>{item.name}</p>
            </div>
            <p>
              <b>Role:</b>
              {item.role}
            </p>
            <p>
              <b>Email:</b>
              {item.email}
            </p>
            <p>
              <b>Phone Number:</b>
              {item.ph}
            </p>
            <p>
              <b>Course:</b>
              {item.course}
            </p>
            <p>
              <b>Status:</b>
              {item.status}
            </p>
            <button className="bt-9" onClick={() => props.func(item.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default Card;
