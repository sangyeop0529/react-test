// import
import React from "react";
import ReactDOM from "react-dom/client";



function ReactBook(props){
  console.log(props)
  return(
    <dl>
      <dt>NAME</dt>
      <dd>{props.title}</dd>
      <dt>PRICE</dt>
      <dd>{props.price}</dd>
      <dt>ROOM</dt>
      <dd>{props.room}</dd>
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