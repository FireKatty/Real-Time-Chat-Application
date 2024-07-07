// import "./App.css";
// import "./index.css";
// import myImage from "./image/bg.png"
// import Login from "./pages/login/login";



// function App() {
//   const sty = {
//     background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "100vh",
//     width: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }
  

//   return (
//     <div>
//     <img style={sty} src={myImage} alt="My Image" />
//     <Login/>
//   </div>
//   );
// }

// export default App;


import { Navigate, Route, Routes } from 'react-router-dom'
import "./App.css";
import myImage from "./image/bg.png";
import Home from "./pages/home/home";
import SignUp from "./pages/signup/signup"
import Login from "./pages/login/login"
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {
  const {authUser} = useAuthContext();



  const sty = {
    background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${myImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Full viewport height
    width: "100vw", // Full viewport width
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={sty}>
      <Routes>
        <Route path='/'  element={authUser ? <Home/> : <Navigate to="/login" />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> :<SignUp/>} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login/> } />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;

