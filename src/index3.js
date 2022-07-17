//Com이라는 컴포넌트 생성
// h1, h2 생성
// h1 -> id="main"
// h2 -> class="sub" name ="5"


// import
import React from "react";
import ReactDOM from "react-dom/client";


// component
function Com(){
  return(
    <>
      <h1 id="main">welcome</h1>
      <h2 className="sub" name={5}>welcome2</h2>
    </>
  )
}

// export
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
    <Com />
  </React.StrictMode>
)