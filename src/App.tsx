
import { Routes, Route } from "react-router-dom";
import Header from "./components/Atoms/Header"
import TickerList from "./components/Pages/Ticker/TickerList/TickerList"
import TickerDetail from "./components/Pages/Ticker/TickerDetail/TickerDetail"


function App(): JSX.Element {
  return (
    <div className="bg-beige">
      <Header/>
      <Routes>
        <Route path="/" element={<TickerList />} />
        <Route path="/detail/:tickerId" element={<TickerDetail />} />
      </Routes>
    </div>
  );
}

export default App;
