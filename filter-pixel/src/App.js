import './App.css';
import Signin from './Screens.js/Signin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from './Screens.js/MainScreen';
import Signup from './Screens.js/Signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}>
        <Route path="/main" exact element={<MainScreen />}></Route>
        <Route path="/signin" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
