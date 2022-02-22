import ReactDOM from "react-dom";
import {Provider } from "react-redux";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from "./components/dashboard"
import Payment from "./components/payment"
import {mainStorage} from "./components/reducers"

function App(){
  console.log(mainStorage.getState());
  
  //provider needed to use reducers
  return (
    <Provider store={mainStorage}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/payment" element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
      
    </Provider>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));