import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import CustomComponent from "./components/customComponent/CustomComponent";


//export const contexto = createContext([{id:1, name : "hola"}, {id:2, name : "chau"}])


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <CustomComponent>
        <Header />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/productos/:id" element={<ItemDetailContainer />} />
          <Route path="/categoria/:id" element={<ItemDetailContainer />} />
        </Routes>
        </CustomComponent>
      </BrowserRouter>

    </div>
  );
}


export default App;