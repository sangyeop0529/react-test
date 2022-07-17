// import
import React from "react";
import ReactDOM from "react-dom/client";



function ReactBook({title,price,room}){
  return(
    <dl>
      <dt>NAME</dt>
      <dd>{title}</dd>
      <dt>PRICE</dt>
      <dd>{price}</dd>
      <dt>ROOM</dt>
      <dd>{room}</dd>
    </dl>
  )
}

// export
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
    <ReactBook 
      title="react"
      price="30,000원"
      room="A 강의실"
    />
  </React.StrictMode>
)