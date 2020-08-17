import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Students from "./pages/Students";

import Classes from "./pages/Classes"

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/alunos" component={Students} />
            <Route path="/turmas" component={Classes} />
        </BrowserRouter>
    )
}

export default Routes;