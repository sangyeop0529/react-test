import React from 'react'
import ReactDOM from 'react-dom/client'

// component
function App(){
  return(
    <h1>
      {/* JSX안에서의 주석 */}
      welcome
    </h1>
  )
}

// 자바스크립트 주석
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)