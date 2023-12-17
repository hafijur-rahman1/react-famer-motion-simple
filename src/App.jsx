import "./App.css";
import BackLabel from "./components/BackLabel";
import Upperlabel from "./components/Upperlabel";

function App() {
  return (
    <>
      <div className="relative w-full h-screen  bg-gray-800 ">
        <BackLabel />
        <Upperlabel />
      </div>
    </>
  );
}

export default App;
