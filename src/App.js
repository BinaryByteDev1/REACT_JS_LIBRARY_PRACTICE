import Navigation from "./Components/Nvaigation/Navigation";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services";
import Team from "./Components/Pages/Team";
import Collabaration from "./Components/Pages/Collabaration";
import { BrowserRouter, Routes , Route } from 'react-router-dom';

import Reactjs from "./Components/Pages/Home__Components/Reactjs";
import ReactRouting from "./Components/Pages/Home__Components/ReactRouting";
import ReactRedux from "./Components/Pages/Home__Components/ReactRedux";
import ReactHooks from "./Components/Pages/Home__Components/ReactHooks";
import ReactNative from "./Components/Pages/Home__Components/ReactNative";

function App() {
  return (
    <div className="App pb-10">

        <Navigation />
          <Routes>
              <Route path="/" element={<Home />}>
                <Route path="/" element={<Reactjs />}></Route>
                <Route path="/ReactRouting" element={<ReactRouting/>}></Route>
                <Route path="/ReactRedux" element={<ReactRedux />}></Route>
                <Route path="/ReactHooks" element={<ReactHooks />}></Route>
                <Route path="/ReactNative" element={<ReactNative />}></Route>
              </Route>
              <Route path="About" element={<About />}/>
              <Route path="Services" element={<Services />}/>
              <Route path="Team" element={<Team />}></Route>
              <Route path="Collabaration" element={<Collabaration />}/>

          </Routes>

    </div>
  );
}

export default App;
