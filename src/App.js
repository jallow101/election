import logo from "./logo.svg";
import "./App.css";
import Standing from "./Pages/Standing";
import Warning from "./Components/Warning"
import Header from "./Pages/Header";
import Polls from "./Pages/Polls";

function App() {
  
  return (
    <>
      <Header />
      <Polls/>
      
      {/* <div className="w-100 bg-gray-100">
        <div className="p-6 mb-5  max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
          </div>
          <div>
            <div className="text-xl font-medium text-black">
              2021 Presidential Election
            </div>
            <p className="text-gray-500">The Gambia </p>
          </div>
        </div>

        <Warning/>

        <div className="container  mx-auto px-4">
          <Standing />
        </div>

        <Warning/>


      </div> */}
    </>
  );
}

export default App;
