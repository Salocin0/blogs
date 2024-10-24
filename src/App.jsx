import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header isLogged={true}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/*/blogs*/}
        {/*/my-blogs*/}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
