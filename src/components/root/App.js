import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" exact element={<Dashboard />}/>
        <Route path="/product" exact element={<Dashboard />}/>
        <Route path="/cart" exact element={<CartDetail />}/>
      </Routes>
    </Container>

  );
}
export default App;
