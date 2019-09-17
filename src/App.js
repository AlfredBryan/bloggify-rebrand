import React from "react";
import Home from "./components/Home/Home";
import { Switch, Route} from "react-router-dom"
import SinglePost from "./components/SinglePost/SinglePost";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/view_post/:id" component={SinglePost} />
      </Switch>
    </div>
  );
}

export default App;
