import "./App.css";
import "./index.css";
import {Outlet} from 'react-router-dom';
import NavBar from "./Components/shared/NavBar";
import ResponseModal from "./Components/shared/ResponseModal";

function App() {
  return (
    <div className="App">
      <ResponseModal />
       <NavBar />
        <Outlet />
    </div>
  );
}

export default App;
