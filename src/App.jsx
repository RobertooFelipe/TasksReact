

import Sidebar from "./components/Sidebar/Sidebar";
import Tasks from "./components/Tasks/Tasks";

import './App.scss'

const App = () => {


  return (
    <>
      <div className="app-container">
        <Sidebar />
        <Tasks />
      </div>
    </>
  );
}

export default App;
