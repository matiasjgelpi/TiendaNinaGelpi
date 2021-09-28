import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "../itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "../itemdetailcontainer/ItemDetailContainer";
import NavBar from "../navbar/NavBar";


export default function Rutas() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={ItemListContainer} />
          <Route path="/category/:cat" exact component={ItemListContainer} />
          <Route path="/item/:id" exact component={ItemDetailContainer} />
        </Switch>
      </Router>
    </div>
  );
}
