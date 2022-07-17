// import
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

class ReactBook extends React.Component{
  render(){
    return(
      <dl style={
        {
          color: 'red',
          backgroundColor: 'yellow',
          fontSize: '24px',
          textAlign: 'center'
        }
      }>
        <dt>NAME</dt>
        <dd>{this.props.title}</dd>
        <dt>PRICE</dt>
        <dd>{this.props.price}</dd>
        <dt>ROOM</dt>
        <dd>{this.props.room}</dd>
    </dl>
    )
  }
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