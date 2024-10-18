import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../page";
import { TelephoneList } from "../page/TelephoneList";
import { Edit } from "../page/editar";


const Rotas = () => {
    return(
    <Router>
        <Routes>
            <Route path="/"     element={<Home />}/>
            <Route path="/list" element={<TelephoneList />}/>
            <Route path="/edit/:id" element={<Edit />}/>
        </Routes>
    </Router>
)
}

export default Rotas;